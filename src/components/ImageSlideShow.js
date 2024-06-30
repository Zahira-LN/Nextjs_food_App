"use client"
import burgerImg from '../assets/burger.jpg';
import curryImg from '../assets/curry.jpg';
import dumplingsImg from '../assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import Image from 'next/image';
import { useEffect, useState } from 'react';



const images = [
    { image: burgerImg, alt: 'A delicious, juicy burger' },
    { image: curryImg, alt: 'A delicious, spicy curry' },
    { image: dumplingsImg, alt: 'Steamed dumplings' },
    { image: macncheeseImg, alt: 'Mac and cheese' },
    { image: pizzaImg, alt: 'A delicious pizza' },
    { image: schnitzelImg, alt: 'A delicious schnitzel' },
    { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
  ];

export default function ImageSlideShow(){
    const [SlideImage,setSlideImage] = useState(0)
useEffect(()=>{
    const interval = setInterval(()=>(
        setSlideImage((prev)=>(
            prev<images.length-1 ? prev+1 : 0
        ))
    ),1500)
    return ()=>clearInterval(interval)
},[]) 
    return(
     <>
     {
        images.map((image,index)=>(
            <Image src={image.image} key={index} alt={image.alt} width={400}  className={index===SlideImage ? "block rounded-lg " : "hidden"}/> 
        ))
     }
     </>

    )
}