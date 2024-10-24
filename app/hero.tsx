//import styles from "./style.module.css";

export default function Hero() {
  return (
    <div className={`w-full flex items-center justify-center`}>
      <div className={`grid grid-cols-2 w-[80%]`}>
        <div className={` mt-40 flex flex-col items-center`}>
          <p className={` text-xl font-bold`}>Frontend Developer</p>
          <div className={` text-3xl font-bold w-[80%] mt-4 px-8`}>
            <h1>Hi, I'm Precious Nnebuogor Osemeke from Nigeria, African.</h1>
          </div>
        </div>

        <div className={` `}>
          <img src="/e.png" sizes=""></img>
        </div>
      </div>
    </div>
  );
}
