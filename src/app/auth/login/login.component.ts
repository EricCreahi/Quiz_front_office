import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import JSConfetti from 'js-confetti';
import { loginAction } from '../../shared/store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  canvas: HTMLCanvasElement = document.getElementById(
    'login_confetti'
  ) as HTMLCanvasElement;
  jsConfetti = new JSConfetti({ canvas: this.canvas });
  interval!: ReturnType<typeof setInterval>;

  // Variables du formulaire de connexion
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private store: Store,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.jsConfetti.addConfetti({
      confettiColors: ['#FFFFFF', '#3ba002', '#a04602'],
      confettiRadius: 6,
      confettiNumber: 500,
    });
    this.interval = setInterval(() => {
      this.jsConfetti.addConfetti({
        confettiColors: ['#FFFFFF', '#3ba002', '#a04602'],
        confettiRadius: 6,
        confettiNumber: 500,
      });
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.jsConfetti.clearCanvas();
  }

  logInUser() {
    if (this.loginForm.valid) {
      console.log('Formulaire soumis', this.loginForm.value);
      // Connexion au backend pour vérification
      this.store.dispatch(
        loginAction({
          email: this.loginForm.value.email,
          nom: 'Yoro',
          prenoms: 'Wilfried',
        })
      );
      this.navigateToRoute('/quiz');
    } else {
      console.log('Formulaire invalide', this.loginForm.errors);
      this.loginForm.markAllAsTouched(); // Marquer tous les champs comme touchés pour afficher les erreurs
    }
  }

  navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }

  // Méthode pour vérifier si un contrôle est invalide
  get isControlInvalid() {
    return (controlName: string) => {
      const control = this.loginForm.get(controlName);
      return control?.invalid && control?.touched;
    };
  }
}
