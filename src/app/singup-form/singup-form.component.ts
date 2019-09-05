import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { UsernameValidators } from "../common/validators/username.validators";
@Component({
  selector: "app-singup-form",
  templateUrl: "./singup-form.component.html",
  styleUrls: ["./singup-form.component.css"]
})
export class SingupFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl("", Validators.required)
  });
  constructor() {}

  ngOnInit() {}

  onSubmit() {}

  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }
}
