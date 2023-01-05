import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';


@Injectable({
  providedIn: 'root'
})
export class UploadsFileService {
  BASEURL: any;
  rootService: any;
  constructor(private http: HttpClient) {
    this.rootService = AppService
    this.BASEURL = this.rootService.BASEURL
  }



  getPresignedUrl(logNamespace: string | number | boolean, fileType: string | number | boolean) {
    const getHeaders = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('fileName', logNamespace).set('fileType', fileType)
    return this.http.get<any>(`${this.BASEURL}generatepresignedurl`, { params: params, headers: getHeaders })
  }

  
  // uploadfileAWSS3(fileuploadurl: string, contenttype: any, file: any) { 
  //   const headers = new HttpHeaders({ 'Content-Type': contenttype });
  //   const req = new HttpRequest(
  //     'PUT',
  //     fileuploadurl,
  //     file,
  //     {
  //       headers: headers, 
  //     });
  //   return this.http.request(req);
  // }

}
