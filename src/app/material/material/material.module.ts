import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';


const componentMaterial = [
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    componentMaterial
  ],
  exports: [
    componentMaterial
  ]
})
export class MaterialModule { }
