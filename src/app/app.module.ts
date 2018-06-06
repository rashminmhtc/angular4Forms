import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { PhoneBookFormComponent } from './phone-book-form/phone-book-form.component';
import { BirthDateValidatorDirective } from './birthDate.validator';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookFormComponent,
    BirthDateValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
