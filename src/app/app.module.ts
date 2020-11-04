import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CampaComponent } from './campa/campa.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MeComponent } from './me/me.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
