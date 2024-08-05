import React, { useEffect, useState } from 'react';
import "./load.css";

function Load() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
 

  async function fetchData() {

    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=5&skip=${count===0?0:count * 20}`);
      const result = await response.json();

      console.log("result", result.products); 

      if (result) {
        setLoading(false);
        setData((prevData)=> [...prevData,...result.products]);
        console.log("data set", result.products.length); 
      }
    }
     catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  

  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className='container'>

      <div className='product-container'>
       
        {data.map((item)=>{
            return(
                <div key={item.id} className='product'>
                   <img src={item.thumbnail} alt={item.title} />
                   <p>{item.title}</p>
                </div>
            )
        })}
      </div>

      <div className='button-container'>
        <button onClick={()=>setCount(count+1)}>
          Load More Products
        </button>
      </div>

      
    </div>
  );
}

export default Load;
