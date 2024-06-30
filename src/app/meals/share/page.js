import ImagePicker from "@/components/ImagePicker";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { saveMeal } from "@/lib/Meals";

export default function Share() {
    const divs = "flex flex-col"
    const inputs = "border border-orange-800 rounded p-2 focus-visible:outline-orange-950 text-black bg-white"
    const label=" text-sm text-orange-700"

 async function Meals(formData){
    "use server"
const newmeal={
    title:formData.get('title'),
    image:formData.get("image"),
    summary:formData.get("summary"),
    instructions:formData.get("instructions"),
    creator:formData.get("name"),
    creator_email:formData.get("email"),
  


}
await saveMeal(newmeal)
console.log(newmeal)


}

  return (
    <MaxWidthWrapper className={"flex justify-center mt-4 items-center "}>

          <form className="w-full m-4  md:w-[500px] bg-black text-white h-auto px-12 py-10  rounded flex flex-col space-y-4" action={Meals}>
            <div className="flex flex-row gap-4">
              <div className={`divs w-[50%]`}>
                <label className={label}>YOUR NAME</label>
                <input type="text" autoComplete="new-password" className={`${inputs} w-[100%] `} name="name"/>
              </div>
              <div  className={`divs w-[50%]`}>
                <label className={label}>YOUR EMAIL</label>
                <input type="text" autoComplete="new-password"  className={`${inputs} w-[100%]`} name="email"/>
              </div>
            </div>
            <div className={divs}>
              <label className={label}>TITLE</label>
              <input type="text" autoComplete="new-password"  className={inputs} name="title"/>
            </div>
            <div className={divs}>
              <label className={label}>SHORT SUMMARY</label>
              <input type="text" autoComplete="new-password"  className={inputs} name="summary"/>
            </div>
            <div>
              <label className={label}>instructionsS</label>
              <textarea cols={20} className="w-[100%] text-black h-auto" name="instructions"></textarea>
            </div>
            <div>
                <ImagePicker name={"image"}/>
            </div>
            <div className=" flex justify-end">
                <Button className="bg-orange-900 text-white hover:bg-orange-950">Share Meal</Button>
            </div>
          </form>
   
    
    </MaxWidthWrapper>
  );
}
