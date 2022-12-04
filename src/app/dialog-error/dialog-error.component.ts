import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.css']
})
export class DialogErrorComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.error, ' az dialog');
    
  }

  @Input() error: boolean = false;

  constructor(public dialog: MatDialog){}
  
  openDialog(){
    this.dialog.open(DialogErrorComponent);
  }

  
}
