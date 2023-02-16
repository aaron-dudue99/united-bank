import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 min-h-100 justify-between w-full py-4">
      <div className="flex flex-col gap-10 my-auto">
        <h1 className="font-bold text-5xl">
          Make easy transactions with{" "}
          <span className="text-primary">United</span>
        </h1>
        <p>
          Make easy transactions from one bank to another and also between same
          bank. United made banking easy for everyone. Make easy transactions
          from one bank to another and also between same bank. United made
          banking easy for everyone.
        </p>
        <Button>Learn More</Button>
      </div>
      <div className="h-full w-full flex flex-col items-end justify-between">
        <img
          src="./united-14-promax.png"
          alt=""
          className="object-cover h-100 w-50"
        />
      </div>
    </section>
  );
};

export default Hero;
