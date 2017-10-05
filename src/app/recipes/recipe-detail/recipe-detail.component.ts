import { Recipe } from "../recipe.model";
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';



import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
       id:number;
    recipe:Recipe;

  
  constructor(private recipeService:RecipeService,private route:ActivatedRoute) { }

   toTheShoppingList(){
       this.recipeService.addIngredientToShoppingList(this.recipe.ingredient);
   }

  ngOnInit() {
   this.route.params.subscribe(
      (params:Params)=>{
          this.id=+params["id"];
         this.recipe= this.recipeService.getRecipeById(this.id);
  }
  );

}
}
