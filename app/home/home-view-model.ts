import { EventData, Observable } from '@nativescript/core'

export class HomeViewModel extends Observable {
  constructor() {
    super()
  }


  private _firstNumber : number;
  public get firstNumber() : number {
    return this._firstNumber;
  }
  public set firstNumber(v : number) {
    this._firstNumber = v;
    this.notifyPropertyChange("firstNumber" , v);
  }



 private _secondNumber : number;
 public get secondNumber() : number {
   return this._secondNumber;
 }
 public set secondNumber(v : number) {
   this._secondNumber = v;
   this.notifyPropertyChange("secondNumber" , v);
 }


 private _result : number;
 public get result() : number {
   return this._result;
 }
 public set result(v : number) {
   this._result = v;
   this.notifyPropertyChange("result" , v);

 }


 private _isEnterFirstNumber : boolean;
 public get isEnterFirstNumber() : boolean {
 return this._isEnterFirstNumber;
 }
 public set isEnterFirstNumber(v : boolean) {
 this._isEnterFirstNumber = v;
 this.notifyPropertyChange("isEnterFirstNumber" , v);
 }



 private _isEnterSecondNumber : boolean;
 public get isEnterSecondNumber() : boolean {
 return this._isEnterSecondNumber;
 }
 public set isEnterSecondNumber(v : boolean) {
 this._isEnterSecondNumber = v;
 this.notifyPropertyChange("isEnterSecondNumber" , v);
 }



 public getFirstNumber(args:EventData){
 //console.log('hi')
  this.isEnterFirstNumber= true;
  this.isEnterSecondNumber=false;

 }

 public getSecondNumber(args:EventData){
  this.isEnterSecondNumber=true;
  this.isEnterFirstNumber=false;

 }
 public Add(args:EventData){
   this.result=this.firstNumber+this.secondNumber;
  console.log("Add",this.result)
  }

  public Sub(args:EventData){
   this.result=this.firstNumber-this.secondNumber;
  console.log("Sub",this.result)
  }

  public Mul(args:EventData){
   this.result=this.firstNumber*this.secondNumber;
   console.log("Mul",this.result)
  }

  public Div(args:EventData){
   this.result=this.firstNumber/this.secondNumber;
   console.log("Div",this.result)
  }



}
