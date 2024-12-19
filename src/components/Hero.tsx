import Image from "next/image";

export default function Hero() {
  return (
    <main className="bg-[#F2F0F1] md:h-[500px] md:px-10 sm:pt-4 md:pt-0 flex flex-col md:flex-row justify-between items-start max-w-screen-2xl mx-auto">
      {/* Left */}
      <div className="md:pl-0 md:w-[450px] lg:w-[600px] space-y-5 sm:pt-7 p-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="text-sm">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="w-full sm:w-[140px] text-sm bg-black  text-white py-2 px-8 rounded-[20px] ">Shop Now</button>
      </div>
      {/* Midle Div */}
      <div className="sm:hidden flex justify-evenly flex-wrap gap-y-4 mt-4 ml-4 space-x-4">
      </div>
      <div>
      <h1 className="text-2xl font-bold">200+</h1>
      <p className="text-xs">International Brand</p>
      </div>
      <div>
      <h1 className="text-2xl font-bold">2,000++</h1>
      <p className="text-xs">High-Quality Products</p>
      </div>
      <div>
      <h1 className="text-2xl font-bold">30,000+</h1>
      <p className="text-xs">Happy Customers</p>
      </div>
      {/* Right */}
      <div className="relative">
        <Image src={"/wtsap.jpeg"} className="w-[500px] h-[500px]" width={200} height={200} alt="profile"></Image>
        {/* Star */}
        <Image src={"/star.png"} className="w-[70px] sm:w-[100px] absolute top-[60px] left-10 md:top-[300px] md:left-[-100px]" width={200} height={200} alt="profile"></Image>
        <Image src={"/star.png"} className="w-[50px] md:w-[90px] absolute top-8 right-[50px] md:top-[50px] md:right-[30px]" width={200} height={200} alt="profile"></Image>
      </div>
    </main>
  );
}
