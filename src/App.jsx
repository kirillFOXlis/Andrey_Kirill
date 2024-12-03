import dots from "./img/Dots.svg";
import sub from "./img/Group 3.svg";
import sub1 from "./img/Screenshot 2024-03-13 at 11.09 1 (1).svg";
import modelshirt from "./img/Shirtww.svg";
import q1 from "./img/Social Proof.svg";
import shirt from "./img/shirt.svg";
import q2 from "./img/levo strelka.svg";
import q3 from "./img/pravo strellka.svg";
import q4 from "./img/photoman.svg"
import q5 from "./img/Frame 3526.svg"
import q6 from "./img/woman.svg"
import q7 from "./img/man.svg"

function App() {
  return (
    <>
      <div className="b1">
        <div className="flex justify-between py-3 px-4">
          <img className="" src={dots} alt="" />
          <p className="font-bold">SUMMER SALE UP TO 50% OFF</p>
          <img className="" src={dots} alt="" />
        </div>
      </div>

      <div className="p-16">
        <div className="flex justify-center">
          <img className="" src={sub} alt="" />
        </div>
      </div>

      <div className="relative">
        <img className="w-full" src={sub1} alt="Spring Season" />
        <div className="absolute bottom-36 left-64 text-3xl font-bold text-white">
          Spring Season
        </div>
        <div className="absolute bottom-40 right-36 flex items-center text-2xl text-white">
          <button><span className="mr-2">View Collection</span></button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.625 5V13.125C15.625 13.2908 15.5591 13.4497 15.4419 13.5669C15.3247 13.6842 15.1657 13.75 15 13.75C14.8342 13.75 14.6753 13.6842 14.558 13.5669C14.4408 13.4497 14.375 13.2908 14.375 13.125V6.50859L5.44217 15.4422C5.32489 15.5595 5.16583 15.6253 4.99998 15.6253C4.83413 15.6253 4.67507 15.5595 4.55779 15.4422C4.44052 15.3249 4.37463 15.1659 4.37463 15C4.37463 14.8341 4.44052 14.6751 4.55779 14.5578L13.4914 5.625H6.87498C6.70922 5.625 6.55025 5.55915 6.43304 5.44194C6.31583 5.32473 6.24998 5.16576 6.24998 5C6.24998 4.83424 6.31583 4.67527 6.43304 4.55806C6.55025 4.44085 6.70922 4.375 6.87498 4.375H15C15.1657 4.375 15.3247 4.44085 15.4419 4.55806C15.5591 4.67527 15.625 4.83424 15.625 5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="b1">
        <div className="flex justify-center">
          <img className="" src={q1} alt="" />
        </div>
      </div>

      <div className="b2 flex justify-center align-middle items-center">
        <div className="product flex-1  ">
          <div className="flex justify-center align-middle items-center ">
            <button><img className="" src={q2} alt="" /></button>
            <img src={shirt} alt="Basic Shirt" className="small-image flex-row "/>
            <button><img src={q3} alt="" /></button>
          </div>
          <div className="product_details">
            <h2 className="text-center font-bold">Basic Shirt</h2>
          </div>
          <div>
            <p className="text-center font-bold ">37.5$</p>
          </div>
        </div>
        <div className="model relative flex-1">
          <img src={modelshirt} alt="Shirt Model" className="w-full h-auto" />
          <button className="absolute bottom-4 left-20 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
            Shop Shirts
          </button>
        </div>
      </div>

      <div className="b3 p-16 flex justify-center align-middle items-center">
        <div className="relative">
          <img className="q1" src={q4} alt="" />
          <button className="absolute bottom-10 left-1/4 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
            Shop Shirts
          </button>
        </div>
        <div>
          <img className="qq1" src={q5} alt="" />
        </div>
      </div>
      <div className="b4 p-16 flex justify-center we">

      <div>
        <button><span className=" ww font-bold absolute">WOMEN</span></button>
      </div>
      <div>
        <img className="model flex-1" src={q6} alt="" />
      </div>
      <div>
        <img className="" src={q7} alt="" />
      </div>
      </div>
    </>
  );
}

export default App;
