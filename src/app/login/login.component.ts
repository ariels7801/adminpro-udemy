import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UsuarioService} from '../services/service.index';
import {Usuario} from '../models/usuario.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recordar: boolean = false;

  constructor(private _usuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit() {
    init_plugins();

    this.email = localStorage.getItem('email') || '';

    if (this.email.length >= 1) {
      this.recordar = true;
    }
  }

  ingresar(forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login(usuario, forma.value.recordar)
      .subscribe(correcto => this.router.navigate(['/dashboard']));
  }

}
