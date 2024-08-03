import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './star.css';

function StarRating({ data }) {
  const [rating, setRating] = useState();
  const [color, setColor] = useState(0);

  const starClicked = (index) => {
    console.log("clicked",index);
    setRating(index);
    toast.success(`ThankYou For Rating`);
  };

  const starEnter = (index) => {
    console.log(index);
    setColor(index);
  };

  

  return (
    <div>
      {[...Array(data)].map((_, index) => (
        
        <FaStar
          className={index <= (color || rating) ? "active" : "inactive"}
          key={index}
          style={{ margin: '6px' }}
          onClick={() => starClicked(index)}
          onMouseEnter={() => starEnter(index)} 
        />
      ))}
    </div>
  );
}

export default StarRating;
