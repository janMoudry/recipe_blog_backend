import { Request, Response } from "express";
import { Schema } from "mongoose";
import { RecipeData } from "../types/reicepe";

const saveRecipe = async (req: Request, res: Response) => {
  const recipeScheme = require("../Models/Recipe");

  const params = req.query;

  if (params.apiKey !== process.env.RECIPE_API_KEY) {
    res.send({ errCode: "405", err: "Missing api key" });
    return;
  }
  if (!params) {
    res.send({ errCode: "400", err: "Not existing data" });
    return;
  }

  //@ts-ignore
  const {
    title,
    author,
    price,
    recipe,
    ingredience,
    mainCategory,
    secondaryCategory,
    calories,
  }: RecipeData = params;

  if (
    !title &&
    !author &&
    !price &&
    !recipe &&
    !ingredience &&
    !mainCategory &&
    !secondaryCategory &&
    !calories
  ) {
    res.send({ errCode: "400", err: "Some of values does not exist" });
    return;
  }

  try {
    const Recipe = new recipeScheme(params);

    const dbRes = await Recipe.save();

    res.send({ ...dbRes, errCode: "200" });
    return;
  } catch (err) {
    // console.log(err);
    res.send(err);
    return;
  }
};

module.exports = saveRecipe;
