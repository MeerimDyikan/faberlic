import './Home.css';
import aboutImg1 from "../../images/Carousel-1-7-2024-ru-en.jpg"
import aboutImg2 from "../../images/Carousel-2-7-2024-ru-en.jpg"
import aboutImg3 from "../../images/Carousel-3-7-2024-ru-en.jpg"
import aboutImg4 from "../../images/Carousel-4-7-2024-ru-en.jpg"
import aboutImg5 from "../../images/Carousel-5-7-2024-ru-en.jpg"
function Home() {
  return (
    <>
     <body>
     <div className="slider-container">
  <div className="slider">
    <div className="slide" id="slide1"><img src={aboutImg1} alt="Faberlic "/></div>
    <div className="slide" id="slide2"><img src={aboutImg3} alt="Faberlic "/></div>
    <div className="slide" id="slide3"><img src={aboutImg2} alt="Faberlic "></img></div>
    <div className="slide" id="slide3"><img src={aboutImg4} alt="Faberlic "/></div>
    <div className="slide" id="slide3"><img src={aboutImg5} alt="Faberlic "/></div>
  </div>
  <div class="swipper-pagination"></div>
</div>
<div class="swipper-button-next"></div>
<div class="swipper-button-prev"></div>



</body>
    </>
  );
}

export default Home;