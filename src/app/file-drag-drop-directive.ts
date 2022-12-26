import { Directive, HostListener, HostBinding, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[fileDragDrop]'
})

export class FileDragNDropDirective {
  //@Input() private allowed_extensions : Array<string> = ['png', 'jpg', 'bmp'];
  @Output() private filesChangeEmiter : EventEmitter<File[]> = new EventEmitter();
  //@Output() private filesInvalidEmiter : EventEmitter<File[]> = new EventEmitter();
  @HostBinding('style.background') private background = '#eee';
  @HostBinding('style.border') private borderStyle = '2px dashed';
  @HostBinding('style.border-color') private borderColor = '#696D7D';
  @HostBinding('style.border-radius') private borderRadius = '5px';

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt:any){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'lightgray';
    this.borderColor = 'cadetblue';
    this.borderStyle = '3px solid';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt:any){
    const items = evt.dataTransfer.items;
    console.log("DrapLeav!!!!!!!!!!!!!!!!!!!!!!________",evt.dataTransfer.items)
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind === 'file') {
          const entry = item.webkitGetAsEntry();
          if (entry.isFile) {
               const res= new Promise((resolve, reject) => {
                  entry.file( 
                      (file:any) => {
                          resolve(file);
                      },
                      (err:any) => {
                          reject(err);
                      }
                  );
              });
              console.log("SSSSSDrapLeav!!!!SSSSSSS",res)

          } else if (entry.isDirectory) {
              const directoryReader = entry.createReader();
              const ss= new Promise((resolve, reject) => {
                  directoryReader.readEntries(
                      (entries:any) => {

                          resolve(entries);
                      },
                      (err:any) => {
                          reject(err);
                      }
                  );
              });
              console.log("isDirectrpLeav!!!!SSSSSSS",ss)

          }
      }
  }
// ***************************

    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
  }

  @HostListener('drop', ['$event']) public onDrop(evt:any){

    const items = evt.dataTransfer.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind === 'file') {
          const entry = item.webkitGetAsEntry();
          if (entry.isFile) {
               const res= new Promise((resolve, reject) => {
                  entry.file( 
                      (file:any) => {
                        console.log("SSSSSSSSSSSS",file)
                          resolve(file);
                      },
                      (err:any) => {
                          reject(err);
                      }
                  );
              });
          } else if (entry.isDirectory) {
              const directoryReader = entry.createReader();
              const ss= new Promise((resolve, reject) => {
                  directoryReader.readEntries(
                      (entries:any) => {
                          resolve(entries);
                      },
                      (err:any) => {
                          reject(err);
                      }
                  );
              });
          }
      }
  }
// ***************************
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
    // debugger;
    let files = evt.dataTransfer.files;
    console.log("Drap______________________",files)

    let valid_files : Array<File> = files;
    this.filesChangeEmiter.emit(valid_files);
  }
}