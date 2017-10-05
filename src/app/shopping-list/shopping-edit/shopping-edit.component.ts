import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild("f") formObject:NgForm;
  editedItemIndex:number;
  editMode=false;
  editedItem:Ingredient;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
      this.shoppingListService.startedEditing.subscribe(
          (index:number)=>{
              this.editedItemIndex=index;
              this.editMode=true;
              this.editedItem=this.shoppingListService.getIngredientByIndex(index);
              this.formObject.setValue({
              name:this.editedItem.name,
              quantity:this.editedItem.quantity
              })

          }
      );
  }

onSubmit(form:NgForm){
	const value=form.value;
	const newIngredient=new Ingredient(value.name,value.quantity);

  if(this.editMode){
  this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
  }
  else{
  this.shoppingListService.addIngredient(newIngredient);
  }
	
}

onClear(){
  this.formObject.reset();
}

onDelete(){
  this.shoppingListService.deleteIngredient(this.editedItemIndex);
  this.onClear();
}

}
