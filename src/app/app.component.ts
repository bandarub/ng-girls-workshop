import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  template: `
  <h1>
    {{title}}
  </h1>

  <todo-input (submit)="addItem($event)"></todo-input>

<ul>
  <li *ngFor="let item of todoList">
    <todo-item [todoItem]="item"></todo-item>

  </li>
  <todo-list-manager> </todo-list-manager>
</ul>
`,
  styleUrls: ['./app.component.css']
})


export class AppComponent {

}
