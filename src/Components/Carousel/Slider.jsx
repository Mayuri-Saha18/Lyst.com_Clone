import { useEffect, useState } from "react";

export const Slider = ({ data }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const length = data.length;

  useEffect(() => {
    setTimeout(() => {
      setImageIndex(imageIndex < length - 1 ? imageIndex + 1 : 0);
    }, 3000);
  });

  return (
    <div className="container">
      <div className="slider">
        {data.map((item, index) => (
          <div
            className={index === imageIndex ? "image-active" : "image"}
            key={index}
          >
            {index === imageIndex && (
              <img
                src={item.image}
                alt=""
                style={{ width: "90%" ,height:"500px"}}
              />
            )}
          </div>
        ))}
        
      </div>
    </div>
  );
};
