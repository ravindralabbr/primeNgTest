import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormBuilder, Validators, NgForm, NgControl,FormGroup, FormControl,ReactiveFormsModule, FormsModule } from '@angular/forms';
import {AutoCompleteModule, InputSwitchModule,MultiSelectModule,PasswordModule, SelectButtonModule,ChipsModule, CarouselModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/components/accordion/accordion';
import {MenuItem} from 'primeng/components/common/api';
import { HttpModule } from '@angular/http';
import { InputWsitchDemo,AutoCompleteDemo,MultiSelectDemo } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryService } from './validation.service';
import { Http, Response, Headers,RequestOptions, Request, RequestMethod } from '@angular/http';
import {CalendarModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    InputWsitchDemo,
    AutoCompleteDemo,
    MultiSelectDemo
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    CalendarModule,
    InputSwitchModule,
    MultiSelectModule,
    AutoCompleteModule,
    PasswordModule,
    SelectButtonModule,
    ChipsModule,
    CarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ CountryService ],
  bootstrap: [AutoCompleteDemo ]
})
export class AppModule { }
