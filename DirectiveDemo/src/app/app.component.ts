import { Component } from '@angular/core';

export class Employee {
  empName : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveDemo';
  employee : Employee = new Employee();
  constructor(){
    this.employee.empName = "keyur";
  }

}
