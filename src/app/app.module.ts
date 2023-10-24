import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    NavbarComponent,
    NewsCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
