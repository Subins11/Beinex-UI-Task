import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeDetailsPageComponent } from './components/be-details-page/be-details-page.component';
import { BeContactUsComponent } from './components/be-contact-us/be-contact-us.component';
import { BeHeaderComponent } from './shared/be-header/be-header.component';
import { BeFooterComponent } from './shared/be-footer/be-footer.component';
import { BeBadgesComponent } from './widgets/atom/be-badges/be-badges.component';
import { BeButtonComponent } from './widgets/atom/be-button/be-button.component';
import { BeInputComponent } from './widgets/atom/be-input/be-input.component';
import { BeLineComponent } from './widgets/atom/be-line/be-line.component';
import { BeTextAreaComponent } from './widgets/atom/be-text-area/be-text-area.component';
import { BeFormComponent } from './widgets/molecule/be-form/be-form.component';
import { BeGlobalCardsComponent } from './widgets/molecule/be-global-cards/be-global-cards.component';
import { BeOfferingCardsComponent } from './widgets/molecule/be-offering-cards/be-offering-cards.component';
import { BeSubscribeComponent } from './widgets/molecule/be-subscribe/be-subscribe.component';
import { BeCopyrightComponent } from './widgets/organism/be-copyright/be-copyright.component';
import { BeGlobalComponent } from './widgets/organism/be-global/be-global.component';
import { BeHeaderTopComponent } from './widgets/organism/be-header-top/be-header-top.component';
import { BeLetsConnectComponent } from './widgets/organism/be-lets-connect/be-lets-connect.component';
import { BeNavbarComponent } from './widgets/organism/be-navbar/be-navbar.component';
import { BeOfferingsComponent } from './widgets/organism/be-offerings/be-offerings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeDetailsPageComponent,
    BeContactUsComponent,
    BeHeaderComponent,
    BeFooterComponent,
    BeBadgesComponent,
    BeButtonComponent,
    BeInputComponent,
    BeLineComponent,
    BeTextAreaComponent,
    BeFormComponent,
    BeGlobalCardsComponent,
    BeOfferingCardsComponent,
    BeSubscribeComponent,
    BeCopyrightComponent,
    BeGlobalComponent,
    BeHeaderTopComponent,
    BeLetsConnectComponent,
    BeNavbarComponent,
    BeOfferingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
