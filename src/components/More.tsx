import React from "react";
import Button from "./Button";

const More = () => {
  return (
    <section className=" w-full py-12">
      <h2 className="font-bold text-4xl text-center">More About Us</h2>
      <div className="grid grid-cols-2 justify-between mt-8">
        <div className="flex flex-col gap-10 my-auto py-8 px-12">
          <p>
            We help connect people and keep good relationship, and enable them
            to make good smooth transfers to each other from wherever they may
            be. United gives the best services.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default More;
