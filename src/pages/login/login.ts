import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LogInPage {
 
  myForm: FormGroup;
  
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.myForm = this.createMyForm();
  }
  
  saveData(){
    console.log(this.myForm.value);
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      nameplayer: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
      }),
      gender: ['', Validators.required],
    });
  }
}