import React from "react";
import Button from "./Button";

const Transfer = () => {
  return (
    <section className="grid grid-cols-2 min-h-100 justify-between w-full py-4">
      <div className="flex flex-col gap-10 my-auto">
        <h2 className="font-bold text-4xl">Transfers</h2>
        <p>
          Enables you to transfer from a different type of account from
          different countries without any transaction errors, effective
          transfers are what we offer our beloved users. Enables you to transfer
          from a different type of account from different countries without any
          transaction errors, effective transfers are what we offer our beloved
          users.
        </p>
        <Button>Learn More</Button>
      </div>
      <div className="h-full w-full flex flex-col">
        <img
          src="./Transfer.png"
          alt=""
          className="object-cover h-100 w-auto self-end"
        />
      </div>
    </section>
  );
};

export default Transfer;
