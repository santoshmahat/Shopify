import { Recipe } from './recipe.model';
import { EventEmitter,Injectable } from '@angular/core';

import { Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{

 
	
	recipeSelected=new EventEmitter<Recipe>();

	private recipeList:Recipe[]=[
       new Recipe("Burger","Rs:80","/assets/img/abc.jpg",[new Ingredient("Bread","2"),new Ingredient("Tomato","1")]),
       new Recipe("Samosa","Rs:15","/assets/img/xyz.jpg",[new Ingredient("Potato","1"),new Ingredient("pea","2")])
	]

	constructor(private shoppingListService:ShoppingListService){

	}
 

   getRecipeService(){
     return this.recipeList;
   }

   addIngredientToShoppingList(ingredient:Ingredient[]){
      this.shoppingListService.addIngredients(ingredient);
   }

     getRecipeById(id:number){

       return this.recipeList[id];
     }
  

}