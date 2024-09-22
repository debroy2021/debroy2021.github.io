interface Props {
  children: string;
  onClick: () => void;
}

import { useState, useEffect } from "react";

const Button = ({ children, onClick }: Props) => {
  const [color, setColor] = useState("primary");
  const colors = ["primary", "secondary", "danger", "success"];

  useEffect(() => {
    const timer = setInterval(() => {
      // Cycle through colors
      setColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 250); // Change color every 1 second

    return () => {
      // Clean up the timer when the component unmounts
      clearInterval(timer);
    };
  }, []);

  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
