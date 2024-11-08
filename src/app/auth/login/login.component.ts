import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import JSConfetti from 'js-confetti';
import { ToastrService } from 'ngx-toastr';
import { CguComponent } from '../../components/cgu/cgu.component';
import { ModalService } from '../../components/modal/modal.service';
import { LoginReq, Response, Utilisateur } from '../../shared/models';
import { AuthService } from '../../shared/service/auth.service';
import { LocalStorageService } from '../../shared/service/localstorage.service';
import { createObserver } from '../../shared/utils/observer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  canvas: HTMLCanvasElement = document.getElementById(
    'login_confetti'
  ) as HTMLCanvasElement;
  jsConfetti = new JSConfetti({ canvas: this.canvas });
  interval!: ReturnType<typeof setInterval>;

  // Variables du formulaire de connexion
  loginForm: FormGroup;
  portal = new ComponentPortal(CguComponent);
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modalService: ModalService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      matricule: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const user: Utilisateur = LocalStorageService.getItem('auth');
    const readCgu: boolean = LocalStorageService.getItem('cgu');

    // On vérifie si l'utilisateur est déjà connecté
    if (user != undefined) {
      this.navigateToRoute('/quiz');
    }

    // Afficher les confettis
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

    // Ouvrir le modal CGU
    if (readCgu == undefined || readCgu == false) {
      this.modalService.open(this.portal);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.jsConfetti.clearCanvas();
  }

  logInUser() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // console.log('Formulaire soumis', this.loginForm.value);
      // Connexion au backend pour vérification
      const observer = createObserver<Response<Utilisateur>>(
        (res) => {
          this.isLoading = false;
          if (res.status === 'succes') {
            LocalStorageService.setItem('auth', res.oneData);

            this.navigateToRoute('/quiz');
          } else {
            this.toastr.error(String(res.message), 'Erreur de connexion!');
          }
        },
        (error) => {
          console.log(error.message);
          this.toastr.error(error.message, 'Une erreur est survenue!');
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        }
      );

      const userData: LoginReq = {
        usermatricule: this.loginForm.value.matricule,
        userPassword: this.loginForm.value.password,
      };

      this.authService.login(userData).subscribe(observer);
    } else {
      // console.log('Formulaire invalide', this.loginForm.getError);
      this.loginForm.markAllAsTouched();
    }
  }

  navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }

  // Méthode pour vérifier si un contrôle est invalide
  get isControlInvalid() {
    return (controlName: string) => {
      const control = this.loginForm.get(controlName);
      // console.log(control);

      return control?.invalid && control?.touched;
    };
  }
}
