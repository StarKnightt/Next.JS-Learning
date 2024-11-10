import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
     <img className="mx-auto" width={500} height={500} src="https://www.menucool.com/slider/prod/image-slider-1.jpg" alt="" />
    </div>
  );
}
