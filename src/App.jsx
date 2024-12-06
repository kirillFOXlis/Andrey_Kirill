import dots from "./img/Dots.svg";
import sub from "./img/Group 3.svg";
import sub1 from "./img/Screenshot 2024-03-13 at 11.09 1 (1).svg";
import modelshirt from "./img/Shirtww.svg";
import q1 from "./img/Social Proof.svg";
import shirt from "./img/shirt.svg";
import q2 from "./img/levo strelka.svg";
import q3 from "./img/pravo strellka.svg";
import q4 from "./img/photoman.svg";
import q5 from "./img/Frame 3526.svg";
import q6 from "./img/woman.svg";
import q7 from "./img/man.svg";
import q8 from "./img/Arrow.svg";
import q9 from "./img/Fast company.svg";
import q10 from "./img/Forbes.svg";
import q11 from "./img/Bloomberg.svg";
import q12 from "./img/Vector.svg";
import d1 from "./img/DEV1.svg";
import d2 from "./img/DEV2.svg";
import d3 from "./img/DEV3.svg";
import d4 from "./img/DEV4.svg";
import s1 from "./img/LEVOSTRELKA.svg";
import s2 from "./img/PRAVOSTRELKA..svg";
import i1 from "./img/83d2704f33064265f60d2025217c864c.png";
import i2 from "./img/f5b0efc74552e7555bcc1731a9a346d1.png";
import i3 from "./img/5c7e0dbf8781038bcd905673f17bab8b.png";
import l1 from "./img/Icon1.svg";
import l2 from "./img/Icon2.svg";
import l3 from "./img/Icon3.svg";
import l4 from "./img/Icon4.svg";
import c1 from "./img/cloth.svg";

function App() {
  return (
    <>
      <header className="qqq">
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
          <img className="w-full" src={sub1} alt="" />
          <div className="absolute bottom-36 left-64 text-3xl font-bold text-white">
            Spring Season
          </div>
          <div className="absolute bottom-40 right-36 flex items-center text-2xl text-white">
            <button>
              <span className="mr-2">View Collection</span>
            </button>
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
          <div className="product flex-1 ">
            <div className="flex justify-center align-middle items-center ">
              <button>
                <img className="" src={q2} alt="" />
              </button>
              <img src={shirt} alt="" className="small-image flex-row " />
              <button>
                <img src={q3} alt="" />
              </button>
            </div>
            <div className="product_details">
              <h2 className="text-center font-bold">Basic Shirt</h2>
            </div>
            <div>
              <p className="text-center font-bold ">€49</p>
            </div>
          </div>
          <div className="model relative flex-1 ">
            <img src={modelshirt} alt="" className="w-full h-auto" />
            <button className="absolute bottom-4 left-20 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
              Shop Shirts
            </button>
          </div>
        </div>

        <div className="b3 p-16 flex justify-center align-middle items-center gap-6">
          <div className="relative">
            <img className="q1 rounded-lg" src={q4} alt="" />
            <button className="absolute bottom-10 left-1/4 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
              Shop Shirts
            </button>
          </div>
          <div className="justify-between bg rounded-lg flex flex-col w-[596px] h-[636px]">
            <div className="">
              <p className="text-4xl font-bold ml-[50px] mt-[50px]">
                “ First Light promises <br></br> quality, timeless designs{" "}
                <br></br> and with our mission it is <br></br> truly a buy it
                for life <br></br> purchase. “
              </p>
            </div>
            <div className="">
              <p className="font-bold text-xl ml-[50px] mt-[-50px]">
                — Guera Latissa, Creative Director
              </p>
            </div>
          </div>
        </div>

        <div className="b4 p-10 flex justify-center align-middle ">
          <div className="flex relative">
            <img className="rounded-l-lg" src={q6} alt="" />
            <div className="absolute bottom-10 left-10 p-2 flex">
              <button>WOMEN</button>
              <button>
                <img className="" src={q8} alt="" />
              </button>
            </div>
          </div>
          <div className="flex relative">
            <img className="rounded-r-lg" src={q7} alt="" />
            <div className="absolute bottom-10 left-10 p-2 flex">
              <button>MEN</button>
              <button>
                <img className="" src={q8} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="b5 p-0 ">
          <p className=" font-bold flex justify-center items-center text-3xl p-12 mb-0">
            Hot off the press
          </p>
        </div>
        <div className="p-12 flex justify-center ">
          <div className="flex space-x-10 rounded-lg border-2 p-6">
            <div className="flex flex-col items-center px-5">
              <img className="m-10 ml-[-55px]" src={q11} alt="" />
              <div className="">
                <p>“First Light: Where great design</p>
                <p>and the finest materials unite in</p>
                <p>ultimate comfort”</p>
                <div className="flex justify-center space-x-4 mt-4 ml-[-130px]">
                  <button className="wd font-bold">READ ARTICLE</button>
                  <button>
                    <img className="my-10" src={q12} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center border-l-2 border-r-2 px-10">
              <img className="m-10 ml-[-125px]" src={q10} alt="" />
              <div className="">
                <p>“First light proves it is possible to</p>
                <p>combine great design with</p>
                <p>the finest materials available."</p>
                <div className="flex justify-center space-x-4 mt-4 ml-[-130px]">
                  <button className="wd font-bold">READ ARTICLE</button>
                  <button>
                    <img className="my-10" src={q12} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center px-5">
              <img className="m-10 ml-[-65px]" src={q9} alt="" />
              <div className="">
                <p>“Redefining excellence with</p>
                <p>premium materials and visionary</p>
                <p>robust design.”</p>
                <div className="flex justify-center space-x-4 mt-4 ml-[-130px]">
                  <button className="wd font-bold">READ ARTICLE</button>
                  <button>
                    <img className="my-10" src={q12} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className=" font-bold flex justify-center items-center text-3xl p-5 mb-0 ">
          Women — Must Haves
        </p>

        <div className="p-10 flex justify-center align-middle items-center ">
          <div>
            <div className="flex justify-center items-center">
              <img className="m-6 relative" src={d1} alt="" />
              <img className="absolute left-48" src={s1} alt="" />
            </div>
            <div className="flex justify-center">
              <p className="mr-20"> Basic Shirt</p>
              <p className="ml-24">€49</p>
            </div>
          </div>
          <div>
            <div>
              <img className="m-6" src={d2} alt="" />
            </div>
            <div className="flex justify-center">
              <p className="mr-20"> Beige Jumper</p>
              <p className="ml-20">€99</p>
            </div>
          </div>
          <div>
            <div>
              <img className="m-6" src={d3} alt="" />
            </div>
            <div className="flex justify-center">
              <p className="mr-16"> Signature Jacket</p>
              <p className="ml-16">€249</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <img className="m-6 relative" src={d4} alt="" />
              <img className="flex absolute ml-40" src={s2} alt="" />
            </div>
            <div className="flex justify-center">
              <p className="mr-36"> Navy Jumper</p>
            </div>
          </div>
        </div>

        <p className=" font-bold flex justify-center items-center text-4xl p-10 mb-0">
          We always have your back
        </p>
        <div className="flex justify-center ">
          <div>
            <img className="w-[596px] h-[600px] relative rounded-lg" src={i1} alt="" />
            <div className="justify-center items-center">
              <button className="absolute transform -translate-x-1/2 bg-black text-white ml-[300px] rounded-lg top-[5450px] px-[12px] py-[8px]">
                <p className="font-bold">100% Premium Cotton </p>
                <p>We use ethically sourced cotton only.</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-6 gap-6">
            <div>
              <img className="w-[596px] h-72 object-cover rounded-lg" src={i2} alt="" />
              <button className="absolute transform -translate-x-1/2 bg-black text-white ml-[300px] rounded-lg top-[5130px] px-[12px] py-[8px]">
                <p className="font-bold">Made in Portugal </p>
                <p>With hand finished details</p>
              </button>
            </div>
            <div className="">
              <img className="w-[596px]  h-72 object-cover rounded-lg" src={i3} alt="" />
              <button className="absolute transform -translate-x-1/2 bg-black text-white ml-[300px] rounded-lg top-[5450px] px-[12px] py-[8px]">
                <p className="font-bold">Breathable material </p>
                <p>Keeping you cool throughout the day</p>
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center mt-[100px] space-x-[150px] border-y-2 mx-[350px] p-10">
            <div className="flex">
              <img className="" src={l1} alt="" />
              <p className="px-[10px]">Premium stain </p>
              <p className="mt-[20px] ml-[-117px]">resistant fabrics</p>
            </div>
            <div className="flex">
              <img src={l2} alt="" />
              <p className="px-[10px]">Free Express</p>
              <p className="mt-[20px] ml-[-109px]">Shipping</p>
            </div>
            <div className="flex">
              <img src={l3} alt="" />
              <p className="px-[10px]">Free returns</p>
              <p className="mt-[20px] ml-[-102px]">within 30 days</p>
            </div>
            <div className="flex">
              <img src={l4} alt="" />
              <p className="px-[10px]">Customers rate </p>
              <p className="mt-[20px] ml-[-124px]">us 4.8 / 5.0</p>
            </div>
          </div>
        </div>

        <div className="p-10 flex px-3 py-3 rounded-r-md items-center ml-[337px]">
          <div className="">
            <img className="rounded-l-lg" src={c1} alt="" />
          </div>
          <div className="justify-center bg-white rounded-r-lg w-[608px] h-[610px]">
            <div className="justify-center">
              <div className="">
                <p className="font-bold text-3xl ml-[70px] mt-[60px]">
                  Visit our popup shop
                </p>
              </div>
              <div>
                <p className="mt-[30px] ml-[70px]">
                  Willemsparkweg 63 <br></br>1071 GS Amsterdam <br></br>The
                  Netherlands
                </p>
              </div>
              <div className="flex">
                <div className="">
                  <p className="mt-[30px] font-bold ml-[70px]">Monday</p>
                  <p className="mt-[30px] font-bold ml-[70px]">Tuesday</p>
                  <p className="mt-[30px] font-bold ml-[70px]">Wednesday</p>
                  <p className="mt-[30px] font-bold ml-[70px]">Thursday</p>
                  <p className="mt-[30px] font-bold ml-[70px]">Friday</p>
                  <p className="mt-[30px] font-bold ml-[70px]">Saturday</p>
                  <p className="mt-[30px] font-bold ml-[70px]">Sunday</p>
                </div>
                <div className="ml-[180px]">
                  <p className="mt-[30px]">12.00 - 19.00</p>
                  <p className="mt-[30px]">10.00 - 19.00</p>
                  <p className="mt-[30px]">10.00 - 19.00</p>
                  <p className="mt-[30px]">10.00 - 21.00</p>
                  <p className="mt-[30px]">10.00 - 19.00</p>
                  <p className="mt-[30px]">10.00 - 18.00</p>
                  <p className="mt-[30px]">12.00 - 18.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
