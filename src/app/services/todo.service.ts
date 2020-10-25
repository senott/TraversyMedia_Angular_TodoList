import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'First Todo',
        completed: false,
      },
      {
        id: 2,
        title: 'Second Todo',
        completed: true,
      },
      {
        id: 3,
        title: 'Third Todo',
        completed: false,
      }
    ];
  }
}
