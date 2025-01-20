import a_logo from "../assets/amazon.png"
import shoeImage from "../assets/shoe_image.png"; 
import f_logo from "../assets/flipkart.png"

const Hero = () => {
  return (
    <div className='Hero flex justify-center mt-16 '>
      <div className="m-14">
        <h1 className="text-7xl font-bold">
        YOUR FEET<br />DESERVE<br />THE BEST
        </h1>
        <p className="text-sm m-3 text-gray-900">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
        <div>
            <button className="bg-red-700 cursor-pointer text-white px-4 m-4">Shope now</button>
            <button className=" px-4 m-3 border border-zinc-900">Category</button>
        </div>
        <p className="text-xs m-5 text-gray-950">Also Available on</p>
        <div className="flex  m-5 gap-4 " >
            
            <img src={a_logo} alt=" amezon logo"  />
            <img  src={f_logo} alt="flipkard logo" />
        </div>
      </div>
      <div>
        <img src={shoeImage} alt="Shoe image" />
      </div>
    </div>
  );
}

export default Hero;
