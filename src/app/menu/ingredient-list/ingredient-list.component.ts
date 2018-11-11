import { Component, OnInit } from '@angular/core';
import {DishesModel} from '../../shared/dishes.model';
import {AppMenuService} from '../../services/app.menu.service';
import { Router } from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  selectedId: number;
  dishModel: Observable<DishesModel[]>;
  // dishModel: DishesModel[];

  constructor(private menuService: AppMenuService,
              private router: ActivatedRoute) {}

  ngOnInit() {
    this.dishModel = this.router.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.menuService.getDish();
      })
    );
  }
  // get_products() {
  //   this.menuService.getDish().
  //   subscribe((res: any) => {
  //     this.dishModel = res;
  //   });
  // }

}
