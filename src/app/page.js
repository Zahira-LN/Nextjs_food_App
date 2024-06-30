import ImageSlideShow from "@/components/ImageSlideShow";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper className={"space-y-5"}>
      <div className="h-[16%] flex p-10 flex-col md:flex-row gap-3 bg-black">
        <div className="md:w-[50%] w-[100%]  flex justify-center items-center">
          <ImageSlideShow />
        </div>
        <div className="space-y-4 md:w-[50%]  w-[100%] flex flex-col justify-center ">
          <div className="text-orange-900 text-center md:text-left">
            <h1 className="text-[20px] md:text-4xl font-bold mb-2">
              NextLevel Food{" "}
            </h1>
            <h1 className="text-[20px] md:text-4xl font-bold ">
              For NextLevel Foodies!!
            </h1>
            <p>Taste & share food from all over the world.</p>
            <p className="text-muted-foreground text-[12px]">
              Delicious food tantalizes the senses with its vibrant colors,
              enticing aromas, and rich, diverse flavors. Each dish offers a
              unique culinary experience, from the comforting warmth of
              home-cooked meals to the sophisticated elegance of gourmet
              creations. Perfectly balanced textures and ingredients come
              together to create unforgettable moments of indulgence. Whether
              it's a hearty entree or a decadent dessert, every bite promises
              pure satisfaction and delight.
            </p>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button className="text-orange-800 hover:bg-orange-950 hover:text-white">Explore Meals</Button>
            <Link href={"/"} className={buttonVariants({ variant: "ghost" ,className:"text-orange-900 hover:bg-orange-950 hover:text-white"})}>
              Join the Community
            </Link>
          </div>
        </div>
      </div>
      <section className="flex justify-center flex-col items-center px-6 md:px-28">
        <h2 className="font-bold text-4xl text-orange-900 py-3">
          How it works
        </h2>
        <p className="text-popover-foreground  text-center ">
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p className="text-center">
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>

      <section className="flex justify-center flex-col items-center px-6 md:px-28">
        <h2 className="font-bold text-4xl text-orange-900 py-3">
          Why NextLevel Food?
        </h2>
        <p className="text-popover-foreground  text-center ">
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p className="text-popover-foreground  text-center ">
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>
    </MaxWidthWrapper>
  );
}
