import sql from "better-sqlite3";
import slugify from "slugify";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });

  const extensions = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extensions}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      throw new Error("saving images failed");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(`
   INSERT INTO meals 
   (title,image,summary,instructions,creator,creator_email,slug)
   VALUES 
    (@title, @image, @summary, @instructions, @creator, @creator_email,@slug)
   
   `).run(meal);
}
