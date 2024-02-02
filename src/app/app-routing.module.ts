import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeContactUsComponent } from './components/be-contact-us/be-contact-us.component';
import { BeDetailsPageComponent } from './components/be-details-page/be-details-page.component';

const routes: Routes = [

  {
    path: "contact",
    component: BeContactUsComponent
  },
  {
    path: '',
    component: BeContactUsComponent
  },
  {
    path: "detail",
    component: BeDetailsPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
