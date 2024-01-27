import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  email!: string;
  mobileNumber!: string;
  name!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {  }


  register() {
    this.authService.register({ email: this.email, mobileNumber: this.mobileNumber, name: this.name, password: this.password })
    .subscribe({
      next: (res: any) => {
        this.router.navigate(['/Home']);
      },
      error: (err) => {
        alert(err.error.errorMessages)
      }
    })
  }

}
