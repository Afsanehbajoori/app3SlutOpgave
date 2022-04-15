import { Frame, NavigatedData, Observable, Page, PropertyChangeData } from '@nativescript/core'
import { MyData } from '~/MyData';
import { HomeViewModel } from './home-view-model'

var page: Page;
var myData: MyData;
var vm:HomeViewModel;
export function onNavigatingTo(args: NavigatedData) {
   page = <Page>args.object

   

   if(!args.isBackNavigation){

 vm = new HomeViewModel();
 page.bindingContext= vm;
 myData = new MyData()

   }else{

   if(myData.msgNumber === "First"){
    vm.firstNumber=myData.numberEnter;
    console.log("first:",vm.firstNumber)
   }else{
    vm.secondNumber=myData.numberEnter;
    console.log("second",vm.secondNumber);
   }
   }

   vm.on(Observable.propertyChangeEvent , (propertyChange : PropertyChangeData) =>
   {
    if(propertyChange.propertyName === "isEnterFirstNumber")
    {
    if(propertyChange.value === true){
   myData.msgNumber ="First";
    var navigationOptions =
    {
    moduleName:"second/second-page",
    context:
    {
    data: myData,
    param1 : "Hej"
    }
    }
    Frame.topmost().navigate(navigationOptions);
    }
   }

    if(propertyChange.propertyName === "isEnterSecondNumber")
    {
    //console.log("Name:",propertyChange.propertyName)
    if(propertyChange.value === true){
    myData.msgNumber ="Second";
   var navigationOptions =
   {
   moduleName:"second/second-page",
   context:
   {
   data: myData,
   param1 : "Hej"
   }
   }
   Frame.topmost().navigate(navigationOptions);
  }
    }
   })

}
