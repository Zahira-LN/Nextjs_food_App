import sql from "better-sqlite3";
import slugify from "slugify";
import fs from "node:fs";
import { Strait } from "next/font/google";
import { Stream } from "node:stream";
import { error } from "node:console";

const db = sql("meals.db");

export async function GetMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return meal;
}

export default async function SaveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving Image Failed");
    }
  });
  meal.image = `/images/${fileName}`;

  db.prepare(`
  INSERT INTO meals (title,summary)
  VALUES(
    @title,
    @summary,

  
  )
  `).run(meal);
}
