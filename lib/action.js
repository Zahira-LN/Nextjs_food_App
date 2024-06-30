import SaveMeal from "./meals"

export async function  shareMeal(formData){
    "use server"

    const meal = {
     name:formData.get("name"),
      email:formData.get("email"),
      title:formData.get("title"),
      summary:formData.get("summary"),
      instructions:formData.get("instructions"),
      image:formData.get("image"),

    }
 
await SaveMeal(meal);
}