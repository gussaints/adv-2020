import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

// import swal from "sweetalert";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    email: [ '', [ Validators.required, Validators.minLength(3) ] ],
    password: [ '', [ Validators.required, Validators.minLength(3) ] ],
    passwordCheck: [ '', [ Validators.required, Validators.minLength(3) ] ],
    terminos: [ false, [ Validators.required ] ]
  }, {
    validators: this.passwordsIguales('password', 'passwordCheck')
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  register() {
    console.log( 'registrando' );
    this.formSubmitted = true;
    console.log( this.registerForm.value );

    if ( this.registerForm.valid ) {
      console.log( 'posteando form' );
    } else {
      console.log('formulario incorrecto');
    }
  }

  campoNoValido( campo: string ): boolean {
    if ( this.registerForm.get(campo).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

  passwordsIguales(pass1: string, pass2: string) {
    return ( formGroup: FormGroup ) => {
      const pass1c = formGroup.get(pass1);
      const pass2c = formGroup.get(pass2);

      if ( pass1c.value === pass2c.value ) {
        pass2c.setErrors(null);
      } else {
        pass2c.setErrors({ noEsIgual: true });
      }
    }
  }

}
