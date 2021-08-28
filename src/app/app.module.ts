import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';


//importando Meeting List(Components/meeting-list)
import { MeetingsListComponent } from './components/meetings-list/meetings-list.component';
//Importante Toolbar
import {MatToolbarModule} from '@angular/material/toolbar';
//Importando Icone de Agenda
import {MatIconModule} from '@angular/material/icon';
//Importando Botão
import {MatButtonModule} from '@angular/material/button';
//Importando Table
import {MatTableModule} from '@angular/material/table';
//Importando Paginador
import {MatPaginatorModule} from '@angular/material/paginator';
//Importando Dialog
import {MatDialogModule} from '@angular/material/dialog';
//Importando o meetings form
import { MeetingsFormComponent } from './components/meetings-form/meetings-form.component';
//Importando o input
import {MatInputModule} from '@angular/material/input';
//Importando o DatePicker
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeetingsListComponent,
    MeetingsFormComponent
  ],
  //Setando os Imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule, 
    MatTableModule, 
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
