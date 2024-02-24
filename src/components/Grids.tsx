import { Image } from "astro:assets";
import React from "react";

interface GridsProps extends React.HTMLAttributes<HTMLElement> {
  //imageSrc: string;
}

export const Grids: React.FC<GridsProps> = ({ children }) => {
  return <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>;
};

export default Grids;
