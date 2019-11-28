import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  select()
  {
    return this.http.get("http://localhost:9898/emps");
  }

  selectByNo(No)
  {
    return this.http.get("http://localhost:9898/emps/"+No);
  }

  update(empObj)
  {
    return this.http.put("http://localhost:9898/emps/"+empObj.No,empObj);
  }

  insert(emp)
  {
    return this.http.post("http://localhost:9898/emps",emp);
  }

  delete(No)
  {
    return this.http.delete("http://localhost:9898/emps/"+No);
  }
}


