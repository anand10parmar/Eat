import { Component, OnInit } from '@angular/core';
import {DishesModel} from '../../../shared/dishes.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AppMenuService} from '../../../services/app.menu.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-menu-selected-dish',
  templateUrl: './menu-selected-dish.component.html',
  styleUrls: ['./menu-selected-dish.component.css']
})
export class MenuSelectedDishComponent implements OnInit {
  dishModel: Observable<DishesModel>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: AppMenuService) { }

  ngOnInit() {
    this.dishModel = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getSelectedDish(params.get('id')))
    );
  }


  // gotoMenu(hero: Hero) {
  //   let heroId = hero ? hero.id : null;
  //   // Pass along the hero id if available
  //   // so that the HeroList component can select that hero.
  //   // Include a junk 'foo' property for fun.
  //   this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
  // }

}
