import MaxWidthWrapper from "../MaxWidthWrapper";
import MealItem from "./MealItem";

export default function MealsGrid({meals}){
return(
<MaxWidthWrapper>
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8  md:grid-cols-3 p-10 w-[100%]">
{meals.map((meal)=>(
    <li key={meal.id} className="bg-orange-800 h-[360px] w-[100%] relative rounded-md shadow-black">
        <MealItem {...meal}/>
    </li>
))

}


  </ul>
 

</MaxWidthWrapper>
)
}