import React from "react";
import Button from "./Button";

const Transactions = () => {
  return (
    <section className="grid grid-cols-2 min-h-100 justify-between w-full py-12">
      <div className="h-full w-full overflow-hidden ">
        <img
          src="./Transactions.png"
          alt=""
          className="object-fit h-100 w-auto"
        />
      </div>
      <div className="flex flex-col gap-10 my-auto">
        <h2 className="font-bold text-4xl">Transactions</h2>
        <p>
          Enables you to see all your transactions that have been made, and the
          amount used in total to get the transactions done. United stores all
          your history so you would know how you have spent. Enables you to see
          all your transactions that have been made, and the amount used in
          total to get the transactions done. United stores all your history so
          you would know how you have spent.
        </p>
        <Button>Learn More</Button>
      </div>
    </section>
  );
};

export default Transactions;
