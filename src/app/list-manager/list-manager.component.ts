import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  template: `
    <p>
      list-manager works!
    </p>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent {

  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
  addItem(title: string): void {

    this.todoList.push({ title: title});
  }


}
