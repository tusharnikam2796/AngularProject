import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommanApiCallService } from '../student/comman-api-call.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form!:FormGroup;
  adminData:any;
  date= new Date;
  searchBoxValue:any;
  myName='tushar tanaji nikam';
  tabelHeading:any[]=['Name','Surname','MobNo'];
  val: any;
  constructor (private fb:FormBuilder,private commanApiCallService:CommanApiCallService){}
  ngOnInit(){
    console.log('....');
    this.myForm();
    this.getData();

    
  }
  myForm(){
    this.form=this.fb.group({
      name:[''],
      surname:[''],
      mobno:['']
    })
  }
  save(){
    console.log(this.form.value);
   let request={
    Name:this.form.value.name,
    SurName:this.form.value.surname,
    MobNo:this.form.value.mobno,
   };
    let urlendpoint='form'
    this.commanApiCallService.postApiCall(urlendpoint,request).subscribe(res=>{
      console.log(res);
      
    })
    
  }
  getData(){
    let endpoint="form";
    this.commanApiCallService.getApiCall(endpoint).subscribe(data=>{
      console.log(data);
      this.adminData=data;
      
    })


  }
  inputVal(inpValue:any){
    console.log('value',inpValue.target.value);
    this.val=inpValue.target.value;

    
  }
  search(){
    console.log();
    this.searchBoxValue=this.val;
    
  }


}
