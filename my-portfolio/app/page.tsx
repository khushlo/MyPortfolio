import Footer from "@/components/footer/page";
import Navbar from "../components/navbar/page";
import HomeBanner from "../components/homeBanner/page";
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
      
      {/* Home Banner  */}
      <HomeBanner />

      {/* About Me  */}
      <section id="about">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:flex-row items-center">
            <img src="images/about-us.png" alt="About Me" className="h-auto" />
          </div>

          <div className="flex flex-col items-center justify-center md:w-1/3 p-4">
            <div>
              <h2 className="text-3xl font-bold text-left mb-4">let’s Introduce about myself</h2>
                <p className=" text-[#777777] text-left">
                I am a passionate software developer with experience in building web applications. 
                I specialize in creating responsive and user-friendly interfaces using modern web technologies.
                </p><br></br>
                <p className=" text-[#777777] text-left">
                I love learning new technologies, improving my skills, and collaborating with others to solve challenging problems. 
                My goal is to deliver high-quality software that makes a positive impact.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer  */}
      <Footer myUserName="khushlo" />
    </>
  );
}
