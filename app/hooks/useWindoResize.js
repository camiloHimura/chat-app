import { useEffect, useState } from "react";

//https://usehooks.com/page/3
export default () => {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handlerSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handlerSize);
    handlerSize();
  }, []);

  return size;
};
