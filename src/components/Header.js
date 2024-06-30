import Image from "next/image";
import Link from "next/link";
import logo from '../assets/logo.png';
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Header(){

    return(
      <MaxWidthWrapper>
        <div className="h-16 flex  justify-between items-center sticky top-0 inset-x-0 z-50 bg-orange-950 rounded-b shadow-black text-white p-2">
        <div className="flex items-center gap-2">
                <div>
   <Link href={'/'}><Image src={logo} width={70}/></Link>
    </div>
  
    
      <h1 className="font-bold ">NEXTLEVEL FOOD</h1>
      </div>
    <div className="flex gap-5 text-[14px]">
      <Link href={"/meals"} >Browse Meals</Link>
      <Link href={"/community"}>Foodies Community</Link>


    </div>
        </div>
      </MaxWidthWrapper>
    )
}