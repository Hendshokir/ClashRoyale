import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// root Component.
import { AppComponent } from './app.component';

// shared component.
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

//components
import { RandomModeComponent } from './components/deck-cards/random-mode/random-mode.component';
import { SelectModeComponent } from './components/deck-cards/select-mode/select-mode.component';
import { CardStatisticsComponent } from './components/deck-cards/card-statistics/card-statistics.component';
import { CardItemComponent } from './components/deck-cards/card-item/card-item.component';
import { CardDesignComponent } from './components/deck-cards/card-design/card-design.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RandomModeComponent,
    SelectModeComponent,
    CardStatisticsComponent,
    CardItemComponent,
    CardDesignComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  exports : [
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
