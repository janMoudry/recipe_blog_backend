import { Request, Response } from "express";

const test = async (req: Request, res: Response) => {
  const testScheme = require("../Models/test");

  const test = new testScheme({
    name: "Hello world",
    date: new Date(),
  });
  try {
    const testSaved = await test.save();
    res.send(testSaved);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = test;
