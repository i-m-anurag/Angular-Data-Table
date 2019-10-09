import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:Http) {
    console.log("empolyee service take place...");
   }
   getEmployee()
   {
     return this.http.get('http://localhost:5000/api/employee')
     .pipe(
       map(res => res.json())
     );
   }

  addFilter(newfilter) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/api/employee', JSON.stringify(newfilter), { headers: headers })
      .pipe(
        map(res => res.json())
      );

  }
}
