import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
projectForm :FormGroup;
fobiddenName='Test';
statusValue=['Stable','Critical','Finished'];
  constructor() { }

  ngOnInit() {
//create reactive form
    this.projectForm = new FormGroup({
      // 'projectname': new FormControl(null,[Validators.required,this.onCustomValid.bind(this)]),
  'projectname': new FormControl(null,Validators.required,this.onAsyncValid),

      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'projectstatus' : new FormControl(null,Validators.required)
    });
  }

  onSubmit(){
    console.log(this.projectForm);
  }

  onCustomValid(control:FormControl):{[key:string]:boolean}{
    if(this.fobiddenName.indexOf(control.value)!==-1){
      return {'forbiddenProjectname':true}
    }else{
      return null;
    }
  }

  //custom async validator
  onAsyncValid(control:FormControl):Promise<any>|Observable<any>{
    const promis = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==='Test1'){
          resolve ({'forbiddenProjasync':true});
        }
        else{
          resolve (null);
        }
      },1000)
    });
    return promis
  }
}
