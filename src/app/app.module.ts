import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { OrderinteractionComponent } from './components/orderinteraction/orderinteraction.component';
import { AdminHoverCardComponent } from './components/admin-hover-card/admin-hover-card.component';
import { FileManipulationComponent } from './components/file-manipulation/file-manipulation.component';
import { Graphicalinteraction12Component } from './components/graphicalinteraction12/graphicalinteraction12.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    AdminHoverCardComponent,
    OrderinteractionComponent,
    FileManipulationComponent,
    Graphicalinteraction12Component,
  ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   RouterModule.forRoot([
  //     {
  //       path: 'file-manipulation',
  //       component: FileManipulationComponent,
  //     },
  //     { path: 'order-interaction', component: OrderinteractionComponent },
  //   ]),
  // ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
