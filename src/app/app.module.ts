import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngredientsComponent } from './menu/ingredients.component';
import { IngredientListComponent } from './menu/ingredient-list/ingredient-list.component';
import { FooterComponent } from './footer/footer.component';
import {AppMenuService} from './services/app.menu.service';
import { MenuSelectedDishComponent } from './menu/ingredient-list/menu-selected-dish/menu-selected-dish.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientsComponent,
    IngredientListComponent,
    FooterComponent,
    MenuSelectedDishComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
