import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileStorageService } from '../services/file-storage.service';
import * as XLSX from 'xlsx';
import { MatDialog } from '@angular/material/dialog';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';
import { ItemData } from 'src/app/interfaces/user-inteface';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject } from 'rxjs';
import { DataTypeErrorComponent } from '../dialog-error/data-type-error/data-type-error.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  excelData?: ItemData[] = [];
  excelData1?: [][];
  // obj?: ItemData[] = [];
  headerColumns: number = 4;
  columnsNumberError: boolean = false;
  dataTypeError: number[] = [];
  readExcelDataPromise?: Promise<[][]>;

  constructor(private nzMessageService: NzMessageService, private fileStorage: FileStorageService, public dialog: MatDialog) { }

  public onFileInputChanged(e: any) {
    const file = e.target.files[0] as File;
    const target: DataTransfer = <DataTransfer>(e.target);
    this.handleFile(target, file);
  }

  onDragOver(e: any) {
    console.log('drag');

    e.preventDefault();
  }

  onDrop(e: any) {
    console.log('drop');

    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const file = files[0] as File;
    this.handleFile(null, file);
  }

  handleFile(target: DataTransfer | null, file: File | null) {

    const fileExtension = file ? file.name.split(".").pop() : "xlsx";
    if (fileExtension === "csv") {
      // this.delimiterDialog.open();
    }
    else {
      this.readExcelData(target);
    }
  }

  cell: any;
  j0: string = '';
  j1: string = '';
  j2: string = '';
  j3: string = '';

  readExcelData(target: DataTransfer | null) {
    if (target?.files.length !== 1)
      throw new Error('نمیتوان بیشتر از یک فایل وارد کنید.')

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.excelData = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.excelData1 = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

      let header = this.excelData.length;
      this.checkTotalColumns(header);

      for (let i = 1; i < this.excelData.length; i++) {
        for (let j = 0; j < this.headerColumns; j++) {
          let cell = this.excelData1[i][j];
          // items[i - 1] = Object.assign({}, { [this.excelData1[0][j]]: cell });

          if (j == 0) {
            if (this.checkDataType(this.j0, cell))
              this.j0 = cell;
            else {
              this.dataTypeError.push(i);
              // return;
              break;
            }
          } else if (j == 1) {
            if (this.checkDataType(this.j1, cell))
              this.j1 = cell;
            else {
              this.dataTypeError.push(i);
              // return;
              break;

            }
          } else if (j == 2) {
            if (this.checkDataType(this.j2, cell))
              this.j2 = cell;
            else {
              this.dataTypeError.push(i);
              // return;
              break;

            }

          } else if (j == 3) {
            console.log(typeof (cell));

            if (this.checkDataType(this.j0, cell))
              this.j3 = cell;
            else {
              this.dataTypeError.push(i);
              //  return;
              break;

            }
            // console.log('not same data type');
          }
        }

        let o: ItemData = {
          id: this.j0,
          name: this.j1,
          age: this.j2,
          address: this.j3,
        }
        if (!this.dataTypeError.includes(i))
          this.listOfData.push(o);

        if (this.dataTypeError != null)
          this.openDataTypeErrorDialog()
      }
      console.log(this.dataTypeError, 'tedad row ha daray error');

    };
    reader.readAsBinaryString(target.files[0]);
  }

  public checkDataType(targetType: any, cellType: any): boolean {
    if (typeof (targetType) == typeof (cellType))
      return true;

    return false
  }

  public checkTotalColumns(len: number) {
    if (len !== this.headerColumns) {
      this.openDialog();
    }
  }

  openDialog() {
    this.dialog.open(DialogErrorComponent);
  }

  openDataTypeErrorDialog() {
    this.dialog.open(DataTypeErrorComponent,{
      panelClass: 'custom-container',
      data:{
        ids: this.dataTypeError
      }
    });
  }

  i = 0;
  editId: string | null = null;
  listOfData: ItemData[] = [];
  items: any;
  // items: ItemData[] = [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Mahsa Khatami ${this.i}`,
        age: '35',
        address: `London, Park Lane no. ${this.i}`
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    // console.log(id);

    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  onPageIndexChange($event:any) {
    //do something here to go to next page
    }

}
