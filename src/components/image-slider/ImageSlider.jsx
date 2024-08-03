import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./image.css";

 function ImageSlider({ url, limit = 5, page = 1 }) {

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
       
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    // my url is not empty then only i will make api call

    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== '') {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">

      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>

       {images.map((images,index)=>{
        return(
          <div>
              <img alt={images.download_url}
                key={images.id}
                src={images.download_url}
                className={currentSlide===index ?"current-image"  : "current-image hide-current-image"}
              />
          </div>
        )
       })}
      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>

      <span className="circle-indicators">
         {images.map((_,index)=>{
          return(
            <div>
               <button 
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
               ></button>
            </div>
          )
         })}
      </span>
    </div>
  );
}

export default ImageSlider
