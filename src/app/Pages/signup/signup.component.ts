import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/Services/users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  defaultProfileImageURL = 'https://res.cloudinary.com/dxrn8ww6t/image/upload/v1670737965/MongoDB/1630688249876_mzmn3p.jpg';
  public user = {
    username:'',
    password:'',
    nombuser:'',
    apelliuser:'',
    emailuser:'',
    telefuser:'',
    perfiluser: '',
    img: '',
  }
  hide = true;
  constructor(private usersService:UsersService, private snack:MatSnackBar,private router: Router) { }
  ngOnInit(): void {
  }

  formSubmit(){
    console.log (this.user);

    if (!this.user.img) {
      this.user.img = this.defaultProfileImageURL;
    }

    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre del usuario es requerido','Aceptar',{
        duration: 3000,
        horizontalPosition:'right',
        verticalPosition: 'bottom'
      });
      return;
    }
    if(this.user.password == '' || this.user.password == null){
      this.snack.open('Ingrese una contraseña','Aceptar',{
        duration: 3000,
        horizontalPosition:'right',
        verticalPosition: 'bottom'
      });
      return;
    }
    if(this.user.nombuser == '' || this.user.nombuser == null){
      this.snack.open('Ingrese su nombre','Aceptar',{
        duration: 3000,
        horizontalPosition:'right',
        verticalPosition: 'bottom'
      });
      return;
    }

    this.usersService.insertarusuario(this.user).subscribe(
      (data) =>{
        console.log(data);
        Swal.fire('Usuario Registrado','Usuario Guardado Correctamente','success');
        duration: 5000
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        this.snack.open('Error al registrar , vuelva a intentar !!','Aceptar',{
          duration:3000
        })
      }
      )
  }
  exit(){
    this.router.navigate(['/login']);
  }


}
