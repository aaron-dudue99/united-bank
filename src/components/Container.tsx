import React from "react";

const Container = ({ background, children }: any) => {
  return (
    <div className={`w-full ${background ? background : "bg-white"}`}>
      <div className="w-4/5 max-w-7xl my-0 mx-auto">{children}</div>
    </div>
  );
};

export default Container;
