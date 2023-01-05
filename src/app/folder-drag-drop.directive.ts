

import {
  Directive,
  EventEmitter,
  Output,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appFolderDragDrop]'
})
export class FolderDragDropDirective {


  // @Output() fileDropped = new EventEmitter<any>();
  // @HostBinding('style.background-color') private background = '#ffffff';
  // // Dragover Event
  // @HostListener('dragover', ['$event']) dragOver(event: any) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.background = '#e2eefd';
  //   console.log("dddddddddddddddddddddddddddddddddd")
  // }
  // // Dragleave Event
  // @HostListener('dragleave', ['$event']) public dragLeave(event: any) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.background = '#ffffff';
  //   console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
  // }

  // @HostListener('drop', ['$event']) public drop(event: any) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.background = '#ffffff';
  //   const files = event.dataTransfer.files;
  //   if (files.length > 0) {
  //     console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",files)
  //     this.fileDropped.emit(files);
  //   }
  // }

  @Output() dropped = new EventEmitter<File[]>();
  @Output() hovered = new EventEmitter<boolean>();

  // hostlistener to intercept drop event in the DOM
  @HostListener('drop', ['$event'])
  async onDrop($event: DragEvent) {
    $event.preventDefault();
    this.dropped.emit(await this.getAllFileEntries($event));
    this.hovered.emit(false);
  }
  @HostListener('dragover', ['$event'])
  onDragOver($event: { preventDefault: () => void; }) {
    $event.preventDefault();
    this.hovered.emit(true);
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave($event: { preventDefault: () => void; }) {
    $event.preventDefault();
    this.hovered.emit(false);
  }


  // Drop handler function to get all files
  private async getAllFileEntries(event: any): Promise<File[]> {
    let fileEntry = []
    let items = event.dataTransfer.items
    for (let i = 0; i < items.length; i++) {
      let item = items[i].webkitGetAsEntry();
      if (item) {
        fileEntry.push(item);
      }
    }
    let fileEntries = [];
    while (fileEntry.length > 0) {
      let entry = fileEntry.shift() as any;
      if (entry.isFile) {
        fileEntries.push(entry);
      } else if (entry.isDirectory) {
        fileEntry.push(
          ...(await this.readAllDirectoryEntries(entry.createReader()))
        );
      }
    }
    let files: any = [];
    for (let i = 0; i < fileEntries.length; i++) {
      const fEntry = fileEntries[i];
      files.push(await this.getFile(fEntry));
    }
    return files;
  }

  // Get all the entries (files or sub-directories) in a directory
  // by calling readEntries until it returns empty array
  private async readAllDirectoryEntries(directoryReader: any) {
    console.log("1111111111111111111",directoryReader)
    let entries = [];
    let readEntries: any = await this.readEntriesPromise(directoryReader);
    console.log("2222222222222",readEntries)
    while (readEntries.length > 0) {
      entries.push(...readEntries);
      readEntries = await this.readEntriesPromise(directoryReader);
      console.log("3333333333333333",readEntries)
    }
    return entries;
  }

  // Wrap readEntries in a promise to make working with readEntries easier
  // readEntries will return only some of the entries in a directory
  // e.g. Chrome returns at most 100 entries at a time
  private async readEntriesPromise(directoryReader: { readEntries:any }) {
    try {
      return await new Promise((resolve, reject) => {
        directoryReader.readEntries(resolve, reject);
      });
    } catch (err) {
      console.log(err);
    }
  }
  private async getFile(fileEntry: any) {
    try {
      return await new Promise((resolve, reject) =>
        fileEntry.file(resolve, reject)
      );
    } catch (err) {
      console.log(err);
    }
  }

}
