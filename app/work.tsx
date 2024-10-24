"use client"
export default function Work(){
    return (
      <div className={`flex item-center justify-center w-full py-5 h-screen`}>
        <div className={`w-[80%] flex flex-col justify-between gap-x-4`}>
          <div
            className={`flex items-center justify-center text-2xl font-bold animate-ping`}
          >
            <p>My Work</p>
          </div>
          <div className={`flex gap-4 justify-between h-[80%] `}>
            <div
              className={`bg-slate-900 hover:bg-blue-900 px-3 flex flex-col items-center justify-center`}
            >
                
            </div>
          </div>
        </div>
      </div>
    );
}