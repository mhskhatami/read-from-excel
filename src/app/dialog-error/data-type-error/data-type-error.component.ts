import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-data-type-error',
  templateUrl: './data-type-error.component.html',
  styleUrls: ['./data-type-error.component.css']
})
export class DataTypeErrorComponent implements OnInit {
  
  rowsHaveError: number[]= [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private madDialogRef: MatDialogRef<DataTypeErrorComponent>){}
  ngOnInit(): void {
    this.rowsHaveError = this.data.ids;
    console.log(this.rowsHaveError , 'from ddialog');
    
  }

}
