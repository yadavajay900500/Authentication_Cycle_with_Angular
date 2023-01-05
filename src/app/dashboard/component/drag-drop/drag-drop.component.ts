import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadsFileService } from '../../_servicesAdminDashboard/uploads-file.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  // fileObj: File | undefined;
  fileUrl: string | undefined;
  errorMsg: boolean
  folderOrFile: boolean = true
  constructor(private _snackBar: MatSnackBar, private uploadFileService: UploadsFileService) {

    this.errorMsg = false
  }

  ngOnInit(): void {
  }


  fileFolderData: any[] = []
  filesPicked(files: any) {
    this.fileFolderData = files
    
    console.log("qqqqqqqqqqqqqqq", files)
  }

  fileExtension(fileName:any){
    return fileName.split('.').pop()
  }
  onFileUpload() {
    if (!this.fileFolderData) {
      this.errorMsg = true
      return
    }
    for (let i = 0; i < this.fileFolderData.length; i++) {
      this.uploadFileService.getPresignedUrl(this.fileFolderData[i].name, this.fileFolderData[i].type).subscribe(res => {
        if (res.success) {
          const fileuploadurl = res.urls[0];
          const imageForm = new FormData();
          imageForm.append('file', this.fileFolderData[i]);
          // this.uploadFileService.uploadfileAWSS3(fileuploadurl, this.fileFolderData[i].type, this.fileFolderData[i]).subscribe((event) => {

          // });
        }
      })
    }
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

