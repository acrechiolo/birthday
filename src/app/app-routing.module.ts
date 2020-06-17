import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayPageComponent } from './birthday-page/birthday-page.component';


const routes: Routes = [
  { path: "birthday-page", component: BirthdayPageComponent },
  { path: "", redirectTo: "/birthday-page", pathMatch: "full" },
  { path: "**", redirectTo: "/birthday-page", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
