import { Ingredient } from '../shared/ingredient.model';
export class Recipe{
	 
    name:String;
    price:String;
    imagePath:String;
    ingredient:Ingredient[];

constructor(name:String,price:String, imagePath:String,ingredient:Ingredient[]){
     this.name=name;
     this.price=price;
     this.imagePath=imagePath;
     this.ingredient=ingredient;
     
    }


}