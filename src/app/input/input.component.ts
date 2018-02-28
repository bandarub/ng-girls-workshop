import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input [value]="title"
       (keyup.enter)="changeTitle($event.target.value)"
       #inputElement>

<button (click)="changeTitle(inputElement.value)">
<button class="btn btn-red" (click)="removeItem()">
  Save
</button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();
  title: string = 'Enter ToDo lists';
constructor() {
    this.changeTitle('Angular JS')
  }

  changeTitle(newTitle:string): void {

    this.submit.emit(newTitle);
  }
  ngOnInit() {}

}
