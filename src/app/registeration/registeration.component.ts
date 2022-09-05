import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  // registeration = new FormGroup({
  //   name :new FormControl(),
  //   email: new FormControl(),
  //   userName : new FormControl(),
  //   passwd : new FormControl(),
  //   confPassWd : new FormControl()
  // })
  registeration: FormGroup;

  constructor(private fg: FormBuilder) {
    this.registeration = this.fg.group({
      name: ["", [Validators.required, Validators.minLength(3)]],




      email: ["",[
        Validators.required, 
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],


      userName: ['', 
      [Validators.required, 
      Validators.pattern("^[a-zA-Z0-9!@#*()+{}[\\];:,|\/\\\\_\S-]+$")]],



      passwd: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
        ]],
      confPassWd: [
        '',
        [
          Validators.required,

        ],
      ]

    })

  }
  get username() {
    return this.registeration.get('name');
  }

  get primEmail() {
    return this.registeration.get('email');
  }
  get userName() {
    return this.registeration.get('userName');
  }
  get passwd() {
    return this.registeration.get('passwd');
  }
  get confPassWd() {
    return this.registeration.get('confPassWd');
  }

  ngOnInit(): void {
  }

  onsubmit() {
    // console.log(this.registeration.confPassWd.value)
  }
}


