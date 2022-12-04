import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from 'src/app/material/material/material.module';

import { AppComponent } from './app.component';
import { ExcelsheetComponent } from './excelsheet/excelsheet.component';
import { FinalComponent } from './final/final.component';
import { FileStorageService } from './services/file-storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogErrorComponent } from './dialog-error/dialog-error.component';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
// import { NzMessageService } from 'ng-zorro-antd/message/message.service';

 import { NzMessageService } from 'ng-zorro-antd/message';
import { DataTypeErrorComponent } from './dialog-error/data-type-error/data-type-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelsheetComponent,
    FinalComponent,
    DialogErrorComponent,
    DataTypeErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NzTableModule,
    NzPopconfirmModule,
    NzPaginationModule,
    // NzMessageService,
  ],
  providers: [
    FileStorageService,
    NzMessageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
