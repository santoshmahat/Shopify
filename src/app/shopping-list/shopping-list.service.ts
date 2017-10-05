import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService{
	 
   startedEditing=new Subject<number>();

   private ingredients:Ingredient[]=[
    new Ingredient("tomato","4"),
    new Ingredient("Bread","2"),

   ];

   getShoppingListService(){
   return this.ingredients;
   }

   getIngredientByIndex(index:number){
   return this.ingredients[index];
   }

   addIngredient(ingredient:Ingredient){
      this.ingredients.push(ingredient);
   }

   addIngredients(ingredients:Ingredient[]){
      
      this.ingredients.push(...ingredients);
   }

   updateIngredient(index:number,newIngredient:Ingredient){
      this.ingredients[index]=newIngredient;
   }

   deleteIngredient(index:number){

   this.ingredients.splice(index,1);

   }
}