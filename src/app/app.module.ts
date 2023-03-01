import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { OrderinteractionComponent } from './components/orderinteraction/orderinteraction.component';
import { AdminHoverCardComponent } from './components/admin-hover-card/admin-hover-card.component';
import { SliderInteractionComponent } from './components/slider-interaction/slider-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    AdminHoverCardComponent,
    OrderinteractionComponent,
    SliderInteractionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
