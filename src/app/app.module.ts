import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ItemListComponent } from              './recipes/item-list/item-list.component';
import { RecipeItemComponent } from './recipes/item-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { Routes,RouterModule } from "@angular/router";
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoutes:Routes=[
{path:"recipes",component:RecipesComponent,   children:[
{path:"add",component:RecipeEditComponent},
{path:":id",component:RecipeDetailComponent}
]},
{path:"shopping",component:ShoppingListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
