import { CardDetailsComponent } from './card-details/card-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { ProCardsComponent } from './pro-cards/pro-cards.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {  Route } from '@angular/router';
// import { ProCardsComponent } from './pro-cards/pro-cards.component';

const routes: Routes = [
  {path:'', component:ProCardsComponent},
  {path:'login', component:LoginComponent},
  {path:'registeration', component:RegisterationComponent},
  {path:'itemdetails/:id', component:CardDetailsComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
