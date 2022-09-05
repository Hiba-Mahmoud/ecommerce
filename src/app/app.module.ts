// import { FormGroup } from '@angular/forms';
// import { countPipe } from './pips/count';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProCardsComponent } from './pro-cards/pro-cards.component';
import { CardComponent } from './card/card.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { AmountPipe } from './pips/amount.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProCardsComponent,
    CardComponent,
    RegisterationComponent,
    LoginComponent,
    NotFoundComponent,
    CardDetailsComponent,
    AmountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
