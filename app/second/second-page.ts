import { EventData, Frame, Label, NavigatedData, Page, TextField } from '@nativescript/core'
import { MyData } from '~/MyData';

var page:Page;
var myData : MyData;
var txtNumber : TextField;
var lblTitel : Label;

export function onNavigatingTo(args:NavigatedData){
   page=<Page>args.object;
    myData=page.navigationContext.data;
 lblTitel= page.getViewById("lblTitel");
 lblTitel.text= myData.msgNumber;
}

export function getNumber(args:EventData){
 // if(myData.msgNumber === 'First'){
 txtNumber=page.getViewById("txtNumber");
 myData.numberEnter=parseInt(txtNumber.text);
// page.frame.goBack();
// }
 // if(myData.msgNumber === 'Second'){
//   txtNumber=page.getViewById("txtNumber");
 //  myData.numberEnter=parseInt(txtNumber.text);
 page.frame.goBack();
//  }


}

