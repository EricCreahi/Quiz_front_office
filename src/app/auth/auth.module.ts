import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ComponentsModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
