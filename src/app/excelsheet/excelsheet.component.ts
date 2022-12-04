import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excelsheet',
  templateUrl: './excelsheet.component.html',
  styleUrls: ['./excelsheet.component.css']
})
export class ExcelsheetComponent {

    editId: number = 0;
 
  public stopEdit(){
    this.editId = 0;
  }













// ==========================

  data?: [][];
  header: number = 2;

  public onFileChange(e: any) {
    const target: DataTransfer = <DataTransfer>(e.target);

    if (target.files.length !== 1)
      throw new Error('نمیتوان بیشتر از یک فایل وارد کنید.')

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      //return value inam target hast
      const bstr: string = e.target.result;
      // console.log(bstr);

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      // console.log(ws, 'data to sheet');
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data, 'araye araye khat 31');
      console.log(typeof(this.data), 'araye araye khat 31');
      // console.log(this.data.length, 'Lenght araye araye');
      // console.log(this.data[0], 'header araye araye');
      if(this.data[0].length == this.header){
        console.log(true);
        
      }else
      console.log(false);
      
      for(let i =1; i<this.data.length; i++){
        // console.log(this.data[i],'araye D and i is:'+[i]);
        // console.log(typeof(this.data[i]), 'type array ' + [i])   
        for(let j =0; j<this.data[i].length;j++){
          console.log(typeof(this.data[i][j]),'jjjjjj');
          
        }     
      }
      


    };
    //==============================================
    reader.readAsBinaryString(target.files[0]);
    // reader.readAsText(target.files[0]);
    //khat bala a jens blob mikhad, target.file hatman az hamon jense
    // vaghti khandan file tamam beshe yek event onload trigger mikone
    //method ReadAsBinaryString vaghti khandanesh tamom beshe javabesh e.target.result hast

  }

  public convertExelFileToJSON(file: string): string {


    return "";
  }
}



//https://stackoverflow.com/questions/57476553/how-to-upload-excel-file-and-verify-about-that-columns-are-valid

// valid booodan tedad columns