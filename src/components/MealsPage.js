import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import MealsGrid from "./meals/MealsGrid";
import { getMeals } from "@/lib/Meals";

export default async function MealsPage(){
    const meals = await getMeals();
    return (
<MaxWidthWrapper>
<header className="text-orange-900 p-4 pl-10">
<h1 className="text-2xl font-bold">Delicious Food, created <span>By you</span></h1>
<p className="mb-5">Choose your Favourite recipe and cook it yourself.It is easy and fun!!</p>
<Link href={'/meals/share'} className={buttonVariants({className:"text-orange-800 bg-orange-900 hover:bg-orange-950"})}>Share Your Meal</Link>
</header>
<main>

<MealsGrid meals={meals}/>
</main>


</MaxWidthWrapper>

    )
}