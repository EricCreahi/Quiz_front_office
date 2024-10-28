import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    OverlayModule,
  ],
})
export class AuthModule {}
