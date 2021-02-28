import { Component } from '@angular/core';
import { ProjectServiceService } from './project-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(public logicservice:ProjectServiceService){ }
  setvalue:string='Integer';
  converter:String='Text'; 


  //controls of buttons
  setdata(data:string){
  var inputValue = (<HTMLInputElement>document.getElementById('integer')).value;
  this.setvalue=inputValue.concat(data)
  console.log("You typed " + data); 
  let x:string = this.logicservice.getdetails(this.setvalue)
  let converter_values:string=x.replace(/,/g, '');
  if(x!=='0'){
      this.converter=converter_values;
}
    } 
//code for backspace
    deletedate(){
    var inputValue = (<HTMLInputElement>document.getElementById('integer')).value;
    var updatedstring = inputValue.slice(0, -1);
    this.setvalue=updatedstring;
    console.log(updatedstring);
    if(!updatedstring){
      this.converter='';
      
    }
    else{
    let x:string = this.logicservice.getdetails(this.setvalue)
    let converter_values:string=x.replace(/,/g, '');
    if(x!=='0'){
      this.converter=converter_values;
}
}
    }
  //control of keyboard keys ends

 


  }

  

