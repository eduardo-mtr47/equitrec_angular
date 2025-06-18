import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

onSubmit() {
  // Pour l’instant, on ne gère pas l’auth
  // this.router.navigate(['/home']);
}

}
