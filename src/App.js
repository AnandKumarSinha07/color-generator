import './App.css';
import ImageSlider from './components/image-slider/ImageSlider';
//import StarRating from './components/star-rating/StarRating';
//import { ToastContainer} from 'react-toastify';
// import  Randome from "./components/randomColor/Randome"
//import 'react-toastify/dist/ReactToastify.css'; 
function App() {
  return (
    <div className="App">  
      {/* <ToastContainer/> */}
      {/* <StarRating data={10} /> */}

     <ImageSlider url={"https://picsum.photos/v2/list"} limit={'10'} page={'1'}/>
    </div>
  );
}

export default App;
