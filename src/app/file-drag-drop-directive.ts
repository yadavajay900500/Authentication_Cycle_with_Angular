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

  @HostListener('drop', ['$event']) public onDrop(evt: any) {
    console.log("!!!!!!!!! DROP!", evt)
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
    

    let items = evt.dataTransfer.items;
    
      for (let i=0; i<items.length; i++) {
        
        let item = items[i].webkitGetAsEntry();
        if (item) {
          traverseFileTree(item,"");
        }
      } 

    let files:Array<any>=[]
    
    async function traverseFileTree(item:any, path:any) {
      path = path || "";
      console.log("line no 1234",item)
      if (item.isFile) {
       
        
       var res = await item.file(function(file:any) {
                    return file
          
        });
        console.log(res)
      } else if (item.isDirectory) {
        
        var dirReader = item.createReader();
        dirReader.readEntries(function(entries:any) {
          entries.forEach((ele:any) => traverseFileTree(ele, "") )

          
        });
      }
    }
    
    
    
      
   
    let valid_files: Array<File> = files;
    this.filesChangeEmiter.emit(valid_files);
    
  }
}