//import styles from "./style.module.css";

export default function Hero() {
  return (
    <div className={`w-full flex pt-10 justify-center h-screen`}>
      <div className={`grid grid-cols-2 w-[80%]`}>
        <div className={`flex flex-col items-center justify-center`}>
          <p className={` text-xl font-bold`}>Frontend Developer</p>
          <div className={` text-3xl font-bold w-[80%] mt-4 px-8`}>
            <h1>Hi, I'm Precious Nnebuogor Osemeke from Nigeria, African.</h1>
          </div>
        </div>

        <div className={`h-full w-full flex items-center justify-center`}>
          <img
            src="/1.jpg"
            
            className="w-fit h-[450px]  animate-pulse rounded-lg border-white border-2"
          />
        </div>
      </div>
    </div>
  );
}
