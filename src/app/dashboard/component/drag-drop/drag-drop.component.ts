import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  folderOrFile: boolean = true
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  fileName: any[] = [];
  dataSource: any;
  
  fileFolderData: any[] = []
  filesPicked(files: any) {
    // const items = event.eventPhase
    // const entry = files.webkitGetAsEntry();
    this.fileFolderData = files
    console.log("QWWWWWWWWWWWWWWWWWWWWWWWWW", this.fileFolderData)

    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];
    //   // const path = file.webkitRelativePath.split('/');
    //   const path = file.webkitRelativePath;
    //   // console.log("QQQQQQQQQQ", path)
    //   this.fileName.push(path)

    // }


  }

  deleteFile(index: any) {
   
    this._snackBar.open("Successfully delete!", 'Close', {
      duration: 2000,
    });
  }



  formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

}
