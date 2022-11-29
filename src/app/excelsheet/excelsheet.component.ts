import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excelsheet',
  templateUrl: './excelsheet.component.html',
  styleUrls: ['./excelsheet.component.css']
})
export class ExcelsheetComponent {

  data?: [][];
  public onFileChange(e: any) {
    const target: DataTransfer = <DataTransfer>(e.target);

    if (target.files.length !== 1)
      throw new Error('نمیتوان بیشتر از یک فایل وارد کنید.')

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      //return value inam target hast
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      console.log(ws, 'data to sheet');
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data, 'araye araye');

    };
    reader.readAsBinaryString(target.files[0])
    //khat bala a jens blob mikhad, target.file hatman az hamon jense
    // vaghti khandan file tamam beshe yek event onload trigger mikone
    //method reader as binary string vaghti khandanesh tamom beshe javabesh e.target.result hast

  }
}
