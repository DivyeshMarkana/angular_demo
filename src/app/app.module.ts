import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
import { AngLinkComponent } from './ang-link/ang-link.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoreListComponent,
    FavPhotosComponent,
    AngLinkComponent,
    PageTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
