import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploads-files',
  templateUrl: './uploads-files.component.html',
  styleUrls: ['./uploads-files.component.scss']
})
export class UploadsFilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  fileFolderData: any[] = []
  filesPicked(files: any) {
    this.fileFolderData = files
    console.log("qqqqqqqqqqqqqqq", files)
  }

  formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    let sizeformet = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    return sizeformet;
  }
}
