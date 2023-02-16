import React from "react";

const Customers = () => {
  const customers = [
    {
      image: "./gent-2.jpg",
      name: "Joseph Greg",
      description:
        "I have been using united bank and am happy to say I haven't been disappointed for once, because my transactions always go smoothly",
    },
    {
      image: "./lady-1.jpg",
      name: "Stella George",
      description:
        "I have been using united bank and am happy to say I haven't been disappointed for once, because my transactions always go smoothly",
    },
    {
      image: "./gent-1.jpg",
      name: "Kelvin Paul",
      description:
        "I have been using united bank and am happy to say I haven't been disappointed for once, because my transactions always go smoothly",
    },
  ];
  return (
    <section>
      <h2 className="font-bold text-4xl text-center">Customers Feedback</h2>
      <div className="grid grid-cols-3 gap-12 my-12">
        {customers.map((customer) => {
          return (
            <div
              key={customer.name}
              className="bg-white shadow-sm drop-shadow-sm p-8"
            >
              <div className="w-28 h-28 rounded-full relative overflow-hidden">
                <img src={customer.image} alt="" />
              </div>
              <h3 className="font-bold text-2xl mt-4 mb-2 ">{customer.name}</h3>
              <p className="font-medium">{customer.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Customers;
