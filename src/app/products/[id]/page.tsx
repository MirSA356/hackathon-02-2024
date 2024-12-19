"use client"
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";



// Adding Key Props In Star Array
let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
];

interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string,
    img1:string,
    img2:string,
    img3:string,
    img4:string

}

let product:Iproducts[] = [
    {
        title:"VERTICAL STRIPED SHIRT",
        id:1,
        price:"$212",
        img_url:"/sell1.png",
        old_price:"$232",
        img1:"/detail1.png",
        img2:"/detail2.png",
        img3:"/detail3.png",
        img4:"/detailpro.png"
    },
    {
        title:"COURAGE GRAPHIC T-SHIRT",
        id:2,
        price:"$145",
        img_url:"/sell2.png",
        img1:"/detail1.png",
        img2:"/detail2.png",
        img3:"/detail3.png",
        img4:"/detailpro.png"
    },
    {
        title:"LOOSE FIT BERMUDA SHORTS",
        id:3,
        price:"$80",
        img_url:"/sell3.png",
        img1:"/detail1.png",
        img2:"/detail2.png",
        img3:"/detail3.png",
        img4:"/detailpro.png"
    },
    {
        title:"FADED SKINNY JEANS",
        id:4,
        price:"$210",
        img_url:"/sell4.png",
        img1:"/detail1.png",
        img2:"/detail2.png",
        img3:"/detail3.png",
        img4:"/detailpro.png"
        
    },
];

export default function Pro_Details(){
    const params = useParams();
    const id = params.id //here is dynamic id
    const item = product.find((item)=>item.id ===Number(id));
    if(!item){
        return <h1>This Product Is Not Available</h1>;
    } 


    return(
        
        <div  className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-2xl mx-auto">
           {/* Left Side */}
           <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
            {/* Images */}
            <Image 
            src={item.img1} 
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px]" alt="[productsdetails" width={100} height={100}>
            </Image>
            <Image 
            src={item.img2} 
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="[productsdetails"
             width={100} 
             height={100}>
             </Image>
            <Image 
            src={item.img3} 
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" 
            alt="[productsdetails" 
            width={100} 
            height={100}>
            </Image>
           </div>
            {/* Midle Div Aria */}
           <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
           <Image 
           src={item.img4} 
           alt="[productsdetails" 
           className="w-full h-[95%]" 
           width={100} 
           height={100}>
           </Image>
           </div>
           {/* Right Side */}
           <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
               <h1 className="text-2xl md:text-3xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
               {/* <div className="flex text-yellow-500">
                {star}
               </div> */}
               <div className="flex text-yellow-400">
                {/* Maps Stars Correctly */}
                {star.map((icon,index) => (
                    <span key={index}>{icon}</span>
                ))}
               </div>
               <p className="font-bold mt-1">
                {item.price} <span>{item.old_price}</span>
                </p>
               <p>
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
               {/* Select Colors */}
               <div className="mt-5">
                <p  className="text-gray-500">Select Colors
                </p>
                <div className="flex space-x-3 mt-2">
                   <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center">
                    <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/>
                   </div>
                   <div className="w-[37px] h-[37px] bg-[#314F4A]  rounded-full flex justify-center items-center">
                    <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/>
                   </div>
                   <div className="w-[37px] h-[37px] bg-[#31344F]  rounded-full flex justify-center items-center">
                    <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
               </div>
               </div>
               {/* Choose Size */}
               <div className="mt-4">
                  <p className="text-gray-500">Choose Size
                  </p>
                   <div className="flex space-x-3 mt-3">
                   <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#f0f0f0] text-gray-700">Small</div>
                   <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px]  bg-[#f0f0f0] text-gray-700">Medium</div>
                   <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px]  bg-[#f0f0f0] text-gray-700">Large</div>
                   <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#f0f0f0] text-gray-700">X-Large
                   </div>
                   </div>
               </div>
               {/* Select Countity And Buttons */}
                <div className="flex justify-start items-center mt-7 space-x-5">
                <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#f0f0f0] text-gray-700">
                <Minus/>
                1
                <Plus/> 
                </div>
                <Button className="bg-black text-white w-[300px]">Add To Cart</Button>
                  
           </div>
           </div>
        </div>
    )
}