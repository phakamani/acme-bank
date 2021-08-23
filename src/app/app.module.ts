import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { WithdrawDialogComponent } from './withdraw-dialog/withdraw-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    DialogComponent,
    WithdrawDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [
    HttpClient
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
