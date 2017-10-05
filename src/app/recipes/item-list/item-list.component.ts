import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Router,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  
})
export class ItemListComponent implements OnInit {
 
   recipes:Recipe[];
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
   this.recipes=this.recipeService.getRecipeService();
  }

  onAddRecipe(){
     this.router.navigate(["add"],{relativeTo:this.route});
  }

  

}
