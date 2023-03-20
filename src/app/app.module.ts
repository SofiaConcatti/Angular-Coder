import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentareaComponent } from './contentarea/contentarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LayoutComponent,
    SidebarComponent,
    ContentareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
