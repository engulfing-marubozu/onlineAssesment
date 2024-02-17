import { useRef } from "react";
import "./App.css";
// Import your images
import firstImage from "./assets/9.jpeg"; // Update the path as necessary
import secondImage from "./assets/8.jpeg"; // Update the path as necessary
import thirdImage from "./assets/4.jpeg"; // Update the path as necessary
import LosWord from "./assets/3.jpeg"; // Presumed to be one of the overlay images
import edited from "./assets/edited.png"; // Presumed to be the other overlay image
import mainBackGroud from "./assets/5.jpeg"; // The background image
import secondBtm from "./assets/6.jpeg";
import two from "./assets/2.jpeg";
import ten from "./assets/10.jpeg";
import one from "./assets/1.jpeg";
function App() {
  const secondImgRef = useRef(null);
  const thirdImgRef = useRef(null);

const scrollToImage = (ref) => {
  const element = ref.current;
  const bottomOffset = element.offsetTop + element.clientHeight;

  window.scrollTo({
    top: bottomOffset,
    behavior: "smooth",
  });
};

  return (
    <>
      <div className="image-container">
        <img src={firstImage} alt="Background" className="background-image" />
        <img src={mainBackGroud} alt="Middle" className="middle-image" />
        <img src={edited} alt="Overlay" className="overlay-image" />
        <div className="button-container">
          <button onClick={() => scrollToImage(secondImgRef)}>History</button>
          <button onClick={() => scrollToImage(thirdImgRef)}>Climb</button>
        </div>
      </div>
      <div style={{ position: "relative", width: "100%", height: "700px" }}>
        {" "}
        <img
          ref={secondImgRef}
          src={secondImage}
          alt="Second"
          className="second-image"
        />
        <div className="text">
          Embark on an unforgettable journey to the majestic mountains with our
          expertly crafted travel guide. Discover hidden trails, breathtaking
          vistas, and immerse yourself in nature's grandeur. Whether you seek
          thrilling adventures or serene retreats, let us be your compass to
          mountain bliss.
        </div>
        <div>
          <img
            className="secondBtm"
            src={secondBtm}
            alt="Overlay at the bottom"
          />
        </div>
        <div
          className="stick"
          style={{
            display: "flex",
            height: "130px",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img className="img" src={two}></img>{" "}
          <img className="img" src={ten}></img>
          <img className="img" src={two}></img>
          <img className="img" src={ten}></img>
        </div>
      </div>
      <div className="climb">
        <div style={{width:"50%"}}>
          Ascend to new heights with our mountain climbing guide, meticulously
          designed for adventurers like you. Conquer rugged peaks, challenge
          your limits, and savor panoramic views from summits.
        </div>
      </div>
      <div>
        <img ref={thirdImgRef} src={one} alt="Third" className="third-image" />
      </div>
    </>
  );
}

export default App;
