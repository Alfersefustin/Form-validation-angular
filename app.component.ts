import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('',[Validators.required,     Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  
}