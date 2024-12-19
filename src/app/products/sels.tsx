import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string
}

let product:Iproducts[] = [
    {
        title:"VERTICAL STRIPED SHIRT",
        id:1,
        price:"$212",
        img_url:"/sell1.png",
        old_price:"$232"
    },
    {
        title:"COURAGE GRAPHIC T-SHIRT",
        id:2,
        price:"$145",
        img_url:"/sell2.png",
    },
    {
        title:"LOOSE FIT BERMUDA SHORTS",
        id:3,
        price:"$80",
        img_url:"/sell3.png"
    },
    {
        title:"FADED SKINNY JEANS",
        id:4,
        price:"$210",
        img_url:"/sell4.png",
        
    }
]

// Adding Key Props In Star Array
let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
];

export default function Top_sell(){
    return(
        <div className="w-full h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data,index)=>{
                        return(
                            <div key={data.id}>
                                <Link href={`/products/${data.id}`}>
                                <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                                <Image src={data.img_url} alt={data.title}
                                className="w-full h-full rounded-[20px]" 
                                width={100} height={100}></Image>
                                
                                </div>
                                </Link>
                                <div>
                                <p className="text-lg mt-2 font-bold" key={index}>{data.title}</p>
                                {/* /* <p  className="flex text-yellow-400">{star}</p> */}
                                <div className="flex text bg-yellow-400">
                                {/* Map stars Correctly */}
                                {star.map((icon, index) => (
                                    <span key={index}>{icon}</span>
                                ))}
                                </div>
                                <p className="font-bold mt-1" key={index}>{data.price} <span className="text-gray-500 font-bold line-through">{data.old_price}</span></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}