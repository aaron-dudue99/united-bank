import React from "react";
import {
  BsBank,
  BsCheckCircle,
  BsCreditCard2Front,
  BsShieldCheck,
} from "react-icons/bs";

const Highlights = () => {
  const highlights = [
    {
      title: "Various Methods",
      icon: <BsCreditCard2Front />,
      desc: "Different methods can be used to make transactions.",
    },
    {
      title: "Broad Payments",
      icon: <BsBank />,
      desc: "Easy pay different type of account without restrictions",
    },
    {
      title: "Secure",
      icon: <BsShieldCheck />,
      desc: "All bank information will be secured anf protected against fraud and forgery",
    },
    {
      title: "Fast Transactions",
      icon: <BsCheckCircle />,
      desc: "Transactions are made easy and fast without any trouble",
    },
  ];

  return (
    <section className="grid grid-cols-4 py-12 gap-8">
      {highlights.map((highlight) => {
        return (
          <div
            key={highlight.title}
            className="bg-white p-4 flex gap-4 drop-shadow-sm shadow-sm"
          >
            <span className="text-primary text text-3xl">{highlight.icon}</span>
            <div>
              <h3 className="font-bold text-2xl">{highlight.title}</h3>
              <p>{highlight.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Highlights;
