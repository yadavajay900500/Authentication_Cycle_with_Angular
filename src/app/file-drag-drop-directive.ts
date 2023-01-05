import { Directive, HostListener, HostBinding, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[fileDragDrop]'
})

export class FileDragNDropDirective {
  @Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
  @HostBinding('style.background') private background = '#eee';
  @HostBinding('style.border') private borderStyle = '2px dashed';
  @HostBinding('style.border-color') private borderColor = '#696D7D';
  @HostBinding('style.border-radius') private borderRadius = '5px';

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'lightgray';
    this.borderColor = 'cadetblue';
    this.borderStyle = '3px solid';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
  }

  @HostListener('drop', ['$event']) public async onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';

    let items = evt.dataTransfer.items;
    for (let i = 0; i < items.length; i++) {
      let item = items[i].webkitGetAsEntry();
      if (item) {
        await FileDragNDropDirective.traverseFileTree(item);
      }
    }
     setTimeout(()=>{
      let valid_files: Array<File> = FileDragNDropDirective.files;
       this.filesChangeEmiter.emit(valid_files);

     },1000)
  }

  static files: Array<File> = [];
  static async traverseFileTree(item: any, path?: any) {
    path = path || ''
    if (item.isFile) {
      item.file(function (fileItem: any) {
         FileDragNDropDirective.files.push(fileItem)
      });

    } else if (item.isDirectory) {
      let dirReader = item.createReader();
      dirReader.readEntries(function (entries: any) {
        for (let i = 0; i < entries.length; i++) {
          FileDragNDropDirective.traverseFileTree(entries[i], path + item.name + "/");
        }
      });
    }
  }


  // *******************************************************

  // @HostListener('drop', ['$event']) public async onDrop(evt: any) {
  //   evt.preventDefault();
  //   evt.stopPropagation();
  //   this.background = '#eee';
  //   this.borderColor = '#696D7D';
  //   this.borderStyle = '2px dashed';


  //   let files: Array<File> = [];
  //   let file: Array<File> = [];

  //   let items = evt.dataTransfer.items;
  //   for (let i = 0; i < items.length; i++) {
  //     let item = items[i].webkitGetAsEntry();
  //     if (item) {
  //       let fileDetails: any = await traverseFileTree(item);
  //      let s= this.getFile(fileDetails)

  //       console.log(">>>>>>>>>>>>>>", s)
  //       //  this.emitData(fileDetails)
  //       // file = fileDetails
  //     }



  //   }
  //   let ff: Array<File> = [];

  //   async function traverseFileTree(item: any, path?: any) {
  //     path = path || ''
  //     if (item.isFile) {

  //       try {
  //         return await new Promise((resolve, reject) =>
  //         item.file(resolve, reject)
  //         );
  //       } catch (err) {
  //         console.log(err);
  //       }
  //       // item.file(function (fileItem: any) {
  //       //   files.push(fileItem)
  //       // });
  //        ff=item.file()
  //     } else if (item.isDirectory) {
  //       let dirReader = item.createReader();
  //       dirReader.readEntries(function (entries: any) {
  //         for (let i = 0; i < entries.length; i++) {
  //           traverseFileTree(entries[i], path + item.name + "/");
  //         }
  //       });
  //     }
  //     return ff;
  //   }
  // }


  //  async getFile(fileEntry: any) {
  //   // console.log("????????????????????",fileEntry)
  //   try {
  //     return await new Promise((resolve, reject) =>
  //       fileEntry.file(resolve, reject)
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  async emitData( file: any) {
    let valid_files: Array<File> = file;
    await this.filesChangeEmiter.emit(valid_files);
  }



}
