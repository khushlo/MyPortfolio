import React from "react";

export default function HomeBanner() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="w-full md:w-[60%] h-[100vh] hidden md:block">
          <div
            className="flex items-center justify-start w-full h-full flex-col"
            style={{
              backgroundImage: `url('/images/banner1.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-xl md:text-5xl font-bold text-black mt-[20%]">
              Hello <hr className="w-3/4 border-t-2 border-gray-300 mt-2" />
              I'm Khushal Patel
            </h1>
          </div>
        </div>

        <div className="flex flex-col mt-4 text-center justify-center items-center">
          <h1 className="text-xl md:text-5xl font-bold text-black block md:hidden">
            Hello !! <br></br>I'm Khushal Patel
            <hr className="w-full border-t-2 border-gray-300 mt-2" />
            <br></br>
          </h1>
          <img
            src="/images/home-right.png"
            className="rounded-full w-[80%] h-[80%] md:w-full md:h-full md:rounded-none border-4 border-gray-300 md:border-none"
            alt="Khushal Patel"
          />
        </div>
      </div>
    </main>
  );
}
