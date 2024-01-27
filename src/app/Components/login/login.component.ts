import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(private authService: AuthService,private router:Router) {  }


  ngOnInit(): void {

  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res: any) => {
        localStorage.setItem("token",res.result.token);
        localStorage.setItem("role", res.result.role);
        this.router.navigate(['/Home']);
      },
      error: (err) => {
        alert(err.error.errorMessages)
      }
    })
  }

}
