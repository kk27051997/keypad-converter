import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
//value storage
  constructor() { }
  storedetails : string[]= [];
  values={
  0:'A',
  1:'B',
  2:'C',
  3:'D',
  4:'E',
  5:'F',
  6:'G',
  7:'H',
  8:'I',
  9:'J',
  10:'K',
  11:'L',
  12:'M',
  13:'N',
  14:'O',
  15:'P',
  16:'Q',
  17:'R',
  18:'S',
  19:'T',
  20:'U',
  21:'V',
  22:'W',
  23:'X',
  24:'Y',
  25:'Z'
  };
//get inputs from keyboard

  getdetails(inputValue:string){
    try{//Exception block to handle unknown exception
    this.storedetails=[];
    var match = inputValue.split('#');
    let convert_number = parseInt(inputValue, 10);
     if(isNaN(convert_number)){
    
       return '0';
    }
    else{ 

   for(let i=0;i<match.length;i++){
   let  calculated_value = parseInt(match[i], 10)%26;//get remainder to convert them to exact value in storage
   if(isNaN(calculated_value)){
     return '0';
   }
   else{
   let calculated_string = calculated_value.toString(); 
   match[i]=calculated_string;
     if(match[i]=='0'){
      match[i]=this.values[0];
     }
     else if(match[i]=='1'){
      match[i]=this.values[1];
     }
     else if(match[i]=='2'){
      match[i]=this.values[2];
     }
     else if(match[i]=='3'){
      match[i]=this.values[3];
     }
     else if(match[i]=='4'){
      match[i]=this.values[4];
     }
     else if(match[i]=='5'){
      match[i]=this.values[5];
     }
     else if(match[i]=='6'){
      match[i]=this.values[6];
     }
     else if(match[i]=='7'){
      match[i]=this.values[7];
     }
     else if(match[i]=='8'){
      match[i]=this.values[8];
     }
     else if(match[i]=='9'){
      match[i]=this.values[9];
     }
     else if(match[i]=='10'){
      match[i]=this.values[10];
     }
     else if(match[i]=='11'){
      match[i]=this.values[11];
     }
     else if(match[i]=='12'){
      match[i]=this.values[12];
     }
     else if(match[i]=='13'){
      match[i]=this.values[13];
     }
     else if(match[i]=='14'){
      match[i]=this.values[14];
     }
     else if(match[i]=='15'){
      match[i]=this.values[15];
     }
     else if(match[i]=='16'){
      match[i]=this.values[16];
     }
     else if(match[i]=='17'){
      match[i]=this.values[17];
     }
     else if(match[i]=='18'){
      match[i]=this.values[18];
     }
     else if(match[i]=='19'){
      match[i]=this.values[19];
     }
     else if(match[i]=='20'){
      match[i]=this.values[20];
     }
     else if(match[i]=='21'){
      match[i]=this.values[21];
     }
     else if(match[i]=='22'){
      match[i]=this.values[22];
     }
     else if(match[i]=='23'){
      match[i]=this.values[23];
     }
     else if(match[i]=='24'){
      match[i]=this.values[24];
     }
     else if(match[i]=='25'){
      match[i]=this.values[25];
     }
     else if(match[i]=='26'){
      match[i]=this.values[26];
     }
    this.storedetails.push(match[i]);
   }
  }
     //return the converted string back to ts
  return this.storedetails.toString(); 
  }
    }
    catch ( error ) {
      alert("Unknown Error has  occured in service" );
   }

  }









}
