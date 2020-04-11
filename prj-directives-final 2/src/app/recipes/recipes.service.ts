import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

export class RecipesService {
  recipe: Recipe;

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty schnitzel',
      'Super tastu',
      'https://en.wiktionary.org/wiki/food#/media/File:Good_Food_Display_-_NCI_Visuals_Online.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('fries', 20)
      ]
    ),
    new Recipe(
      'Da food',
      'A lot',
      'https://en.wiktionary.org/wiki/food#/media/File:Good_Food_Display_-_NCI_Visuals_Online.jpg',
      [
        new Ingredient('veggies', 5),
        new Ingredient('Food', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
