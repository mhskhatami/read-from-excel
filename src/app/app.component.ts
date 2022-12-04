import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExcelReader';
@ViewChild('name') nameInput?: ElementRef;

  functionName(e:any){
console.log(e);
console.log(this.nameInput?.nativeElement.value);


  }
}
