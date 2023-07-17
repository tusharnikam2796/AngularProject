import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommanApiCallService } from '../student/comman-api-call.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form!: FormGroup;
  materialForm!: FormGroup;
  adminData: any;
  date = new Date;
  searchBoxValue: any;
  myName = 'tushar tanaji nikam';
  tabelHeading: any[] = ['Name', 'Surname', 'MobNo'];
  val: any;

  showPass: boolean = false;
  showConfpass: boolean = false;
  passField: any;
  confPassField: any;
  passMatch!: boolean;
  confPassMatch!:boolean;

  constructor(private fb: FormBuilder, private commanApiCallService: CommanApiCallService) { }
  ngOnInit() {
    console.log('....');
    this.myForm();
    this.myMaterialForm();
    this.getData();


  }
  myForm() {
    this.form = this.fb.group({
      name: [''],
      surname: [''],
      mobno: ['']
    })
  }
  myMaterialForm() {
    this.materialForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*$'), Validators.minLength(2)]],
      middleName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*$')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*$')]],
      password: ['',],
      confPassword: ['']
    })
  }
  save() {
    console.log(this.form.value);
    let request = {
      Name: this.form.value.name,
      SurName: this.form.value.surname,
      MobNo: this.form.value.mobno,
    };
    let urlendpoint = 'form'
    this.commanApiCallService.postApiCall(urlendpoint, request).subscribe(res => {
      console.log(res);

    })

  }
  getData() {
    let endpoint = "form";
    this.commanApiCallService.getApiCall(endpoint).subscribe(data => {
      console.log(data);
      this.adminData = data;

    })


  }
  inputVal(inpValue: any) {
    console.log('value', inpValue.target.value);
    this.val = inpValue.target.value;


  }
  search() {
    console.log();
    this.searchBoxValue = this.val;

  }
  visiblepass() {
    this.showPass = !this.showPass;
    console.log(this.materialForm.value.password);
    

    
  }
  visibleConfPass() {
    this.showConfpass = !this.showConfpass;
    console.log(this.materialForm.value.confPassword);
   
    
  }
  passvalue(){
    this.passField=this.materialForm.value.password;
    if (this.passField==this.confPassField) {
      this.passMatch=true
      
    } else {
      this.passMatch=false
      
    }


  }
  confPassvalue(){
    this.confPassField=this.materialForm.value.confPassword;
    if (this.passField==this.confPassField) {
      this.confPassMatch=true
      
    } else {
      this.confPassMatch=false
      
    }

  }


}
