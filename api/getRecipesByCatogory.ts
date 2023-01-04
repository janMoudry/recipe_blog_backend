import { Request, Response } from "express";

const RecipeScheme = require("../Models/Recipe");

const getRecipesByCategory = async (req: Request, res: Response) => {
  const { category } = req.query;
  console.log(category);

  if (category) {
    const databaseResponse = await RecipeScheme.find({
      $or: [{ mainCategory: category }, { secondaryCategory: category }],
    });
    res.send({ data: databaseResponse, errCode: "200" });
    return;
  } else {
    res.send({ errCode: "404", message: "Not contain category" });
  }
};

module.exports = getRecipesByCategory;
