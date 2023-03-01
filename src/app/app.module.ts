import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { OrderinteractionComponent } from './components/orderinteraction/orderinteraction.component';
import { AdminHoverCardComponent } from './components/admin-hover-card/admin-hover-card.component';
import { FileManipulationComponent } from './components/file-manipulation/file-manipulation.component';
import { GraphicalInteractionComponent } from './components/graphical-interaction/graphical-interaction.component';
import { HottextInteractionComponent } from './components/hottext-interaction/hottext-interaction.component';
import { Graphicalinteraction12Component } from './components/graphicalinteraction12/graphicalinteraction12.component';
import { MatchInteractionComponent } from './components/match-interaction/match-interaction.component';
import { Ctm001002Component } from './components/ctm001002/ctm001002.component';
import { ExtTextInteractionComponent } from './components/ext-text-interaction/ext-text-interaction.component';
import { ChoiceBoxComponent } from "./components/choice-box/choice-box.component";
import { CardBoxComponent } from './components/card-box/card-box.component';
import { Choiceintraction002Component } from './components/choiceintraction002/choiceintraction002.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SideBarComponent,
        AdminHoverCardComponent,
        OrderinteractionComponent,
        FileManipulationComponent,
        GraphicalInteractionComponent,
        HottextInteractionComponent,
        Graphicalinteraction12Component,
        MatchInteractionComponent,
        Ctm001002Component,
        ExtTextInteractionComponent,
        ChoiceBoxComponent,
        CardBoxComponent,
        Choiceintraction002Component
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, DragDropModule, ReactiveFormsModule]
})
export class AppModule {}
