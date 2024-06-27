import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }
  apiUrl='https://backendapp.reddesert-0ae85da2.centralindia.azurecontainerapps.io/student'; 
    

login(data:any){

  return this.httpClient.post(this.apiUrl,data,{
    headers: new HttpHeaders().set('Content-Type',"application/json")
  })
}

}
