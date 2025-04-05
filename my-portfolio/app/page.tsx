import Footer from "@/components/footer/page";
import Navbar from "../components/navbar/page";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar
        extraStyle={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="w-full md:w-[60%] h-[100vh]">
            <div
              className="flex items-center justify-start w-full h-full flex-col"
              style={{
                backgroundImage: `url('/images/banner1.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-5xl font-bold text-black mt-[20%]">
                Hello <hr className="w-3/4 border-t-2 border-gray-300 mt-2" />
                I'm Khushal Patel
              </h1>
            </div>
          </div>

          <div className="mt-4 text-center hidden md:block">
            <img src="/images/home-right.png" alt="Khushal Patel" />
          </div>
        </div>
      </main>

      {/* About Me  */}
      <section id="about" className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4">
          I am a web developer with a passion for creating beautiful and
          functional websites.
        </p>
        <p className="mt-4">
          I love learning new technologies and improving my skills.
        </p>
      </section>

      {/* Footer  */}
      <Footer myUserName="khushlo" />
    </>
  );
}
