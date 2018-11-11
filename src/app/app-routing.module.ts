import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuSelectedDishComponent} from './menu/ingredient-list/menu-selected-dish/menu-selected-dish.component';
import {IngredientListComponent} from './menu/ingredient-list/ingredient-list.component';
import {IngredientsComponent} from './menu/ingredients.component';

const routes: Routes = [
  {path: '', component: IngredientListComponent},
  {path: 'dishModel', redirectTo: '/slectedDish'},
  {path: 'dish/:id', redirectTo: '/slectedDish/:id'},
  {path: 'slectedDish', component: IngredientListComponent, data: {animation: 'selectedDish'}},
  {path: 'slectedDish/:id', component: MenuSelectedDishComponent, data: {animation: 'selectedDish'}},

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
