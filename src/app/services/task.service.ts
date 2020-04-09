import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private URL = 'http://localhost:3000/task';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>('http://localhost:3000/task');
  }

    // POST
  setTask(body: any){
    return this.http.post<any>('http://localhost:3000/task', body);
  }
  // DELETE
    erase(id: number){
      return this.http.delete(`http://localhost:3000/task/${id}`);
    }


}
