import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChoiceBoxComponent } from './components/choice-box/choice-box.component';



@NgModule({
  declarations: [AppComponent, HeaderComponent, SideBarComponent, CardBoxComponent, ChoiceBoxComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
