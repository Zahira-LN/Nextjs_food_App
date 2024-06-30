import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";

export default function MealItem({title,slug,image,summary,creator}){
    return (
     <div className="">
     <div className="relative h-48 p-3">
        <Image src={image} alt={"Alternate image"} fill className="rounded-t"/>
     </div>
     <div className="text-primary-foreground p-3 ">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-[16px]">{creator}</p>
       <p className="text-[14px]">{summary}</p>



     </div>
     <div className="px-3">
     <Link href={`/meals/${slug}`} className={buttonVariants({className:""})}>View Details</Link>
     </div>
     </div>
    )
}