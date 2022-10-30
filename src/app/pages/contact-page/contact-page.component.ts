import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  public userRegisterForm! : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userRegisterForm=this.formBuilder.group({
      name:["", Validators.required],
      role:["Designer"],
      age:[28, Validators.min(18)]
    })
    this.userRegisterForm.valueChanges.subscribe(change=>{
      console.log(change)
  })
  this.userRegisterForm.statusChanges.subscribe(status=>{
    console.log(status)
})
}

   submit(){
    console.log(this.userRegisterForm),
    console.log(this.userRegisterForm.value)
   }
}
