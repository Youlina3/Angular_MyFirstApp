import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//when adding a new component we need to add import to let the typescript know
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent //when adding a new component we need to declare the component using the component's export class name
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //list a list of components
  bootstrap: [AppComponent]
})
export class AppModule { }
