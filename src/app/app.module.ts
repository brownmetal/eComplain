import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { SigninComponent } from "./unprotected/signin.component";
import { SignupComponent } from "./unprotected/signup.component";
import { ProtectedComponent } from "./protected/protected.component";
import { AuthGuard } from "./shared/auth.guard";
import { AuthService } from "./shared/auth.service";
import { routing } from "./app.routing";
import { complaintService } from './shared/complaint.service';
import { NewComplaint } from './new-complaint/new-complaint.component';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        ProtectedComponent,
        NewComplaint
    ],
    imports: [BrowserModule, HttpModule, routing, ReactiveFormsModule],
    providers: [
        AuthGuard,
        AuthService,
        complaintService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}