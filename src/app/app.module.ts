import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UiAppbarComponent } from './ui-appbar/ui-appbar.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { ContainerMoneyCreatorComponent } from './container-money-creator/container-money-creator.component';
import { ContainerMoneyRecordComponent } from './container-money-record/container-money-record.component';
import { ContainerMoneyCategoryComponent } from './container-money-category/container-money-category.component';
import { ContainerMoneyDatepickerComponent } from './container-money-datepicker/container-money-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    UiAppbarComponent,
    ContainerMainComponent,
    ContainerMoneyCreatorComponent,
    ContainerMoneyRecordComponent,
    ContainerMoneyCategoryComponent,
    ContainerMoneyDatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
