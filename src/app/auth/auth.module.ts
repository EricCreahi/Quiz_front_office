import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LottieComponent } from 'ngx-lottie';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    OverlayModule,
    LottieComponent,
  ],
})
export class AuthModule {}
