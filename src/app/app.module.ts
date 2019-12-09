import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material-module';

//componenet
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/app.toolbar';
import { FooterComponent } from './footer/app.footer';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, ToolBarComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { } 
