import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
   //connect frontend to backend
   apiUrl = "https://backendapp.reddesert-0ae85da2.centralindia.azurecontainerapps.io/student"
   apiUrl1='https://backendapp.reddesert-0ae85da2.centralindia.azurecontainerapps.io/department'
   apiUrl2='https://backendapp.reddesert-0ae85da2.centralindia.azurecontainerapps.io/mark'
   apiUrl3='https://backendapp.reddesert-0ae85da2.centralindia.azurecontainerapps.io/subject'
   apiUrl4='https://backendapp.reddesert-0ae85da2.centralindia.azurecontainerapps.io/marksubmit' 
   apiUrl5='https://backendapp.reddesert-0ae85da2.centralindia.azurecontainerapps.io/idcreation' 
   // apiUrl=`${this.baseURL}student`;
   
 staffiddata(data:any):Observable<any>{
  console.log('createapi=>',data)
  return this._http.post(`${this.apiUrl5}`,data)
 }   

//get subject name data
SubjectData():Observable<any>
{
  return this._http.get(`${this.apiUrl3}`);
}

//get all data

      getAllData():Observable<any>

       {
         return this._http.get(`${this.apiUrl}`);
       }
//get department data
     getdepartmentdata():Observable<any>
     {
       return this._http.get(`${this.apiUrl1}`)
     }  

//create MarkData
     creatmarkdata(data:any):Observable<any>
     {
       console.log(data,'createmarkapi=>')
       return this._http.post(`${this.apiUrl4}`,data)
     }

//create data
     createData(data:any):Observable<any>
    {
        console.log(data,'createapi=>')
        return this._http.post(`${this.apiUrl}`,data);
    }
           
//Deletedata
      deleteData(id:any):Observable<any>
     {
        let ids =id ;
        return this._http.delete(`${this.apiUrl}/${ids}`);
     }
     
//update data
      updateData(data:any,id:any):Observable<any>
      {
        let ids = id;
        return this._http.put(`${this.apiUrl}/${ids}`,data);
      }
//getsingledata// 
       getSingleData(id:any):Observable<any>
      {
        let ids =id;
        return this._http.get(`${this.apiUrl}/${ids}`);
      }
//Post Single Student Details
       postSingleData(data:any):Observable<any>
      {
        return this._http.post(`${this.apiUrl}`,data);
      }
      
  //Get Login by Student RollNumber and Date_of_birth 
       getOne(data:any,id:any)
      {
      
        return this._http.get('https://backendapp.reddesert-0ae85da2.centralindia.azurecontainerapps.io/studentLoginspecific?id=' + data.roll_number + "&dob=" + data.date_of_birth)
      }
  
//Get Login by Satff Email_id and Password 
      staffone(data:any,)
      {
         return this._http.get('https://backendapp.reddesert-0ae85da2.centralindia.azurecontainerapps.io/staff?id=' + data.email_id + "&dob=" + data.password)
      }  
     
       getsingle(id:any):Observable<any>
      {
        let ids = id;
        return this._http.get('https://backendapp.reddesert-0ae85da2.centralindia.azurecontainerapps.io/student/'+ ids)
      } 

//Get Mark Details
       markone(id:any):Observable<any>
      {
        let ids =id;
        return this._http.get(`${this.apiUrl2}/${ids}`);
      }
      

  }
