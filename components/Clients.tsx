"use client";

import React from "react";
import { TextRevealCard } from "./ui/TextRevealCard"
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Insights  
        <span className="text-purple"> Vault</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        
          <h2 className="heading">
            Dev
            <span className="text-purple">Ops</span>
            </h2>
       
          
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-12">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-22 w-20"
                />
                {/* <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                /> */}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
