export type RecipeData = {
  title: string;
  author: string;
  price: string;
  calories: string;
  mainCategory: Category;
  secondaryCategory: Category;
  ingredience: Array<string>;
  recipe: string;
};
export type Category =
  | "beef"
  | "chicken"
  | "pork"
  | "burger"
  | "pizza"
  | "sea"
  | "fish"
  | "sweet"
  | "drink"
  | "vegetarian";
