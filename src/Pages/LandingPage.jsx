import { useNavigate, Link } from "react-router-dom";
import avatar from "../Assets/image/avatar.png";
import logo from "../Assets/Logo/logo.png";
import { useRef, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import ReactPlayer from "react-player";
import videoTutorial from "../Assets/videos/MBD-Tutorial.mp4";

const LandingPage = () => {
  const [isBurger, setIsBurger] = useState(false);
  const navigate = useNavigate();

  const ref = {
    mainRef: useRef(null),
    produkRef: useRef(null),
    keunggulanRef: useRef(null),
    contactRef: useRef(null),
    footerRef: useRef(null),
  };

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex justify-center flex-col items-center bg-gradient-to-bl pattern-tornado">
      <Link
        to={"/#produk"}
        onClick={() => {
          handleScroll(ref.mainRef.current);
        }}
        className="fixed bottom-7 right-7 z-20"
      >
        <BsFillArrowUpCircleFill className=" rounded-full animate-bounce text-4xl text-blue-800 hover:text-blue-900  lg:text-blue-50 lg:hover:text-blue-200 cursor-pointer hover:shadow-md" />
      </Link>
      {/* navbar */}
      <div className="w-full h-12 flex justify-center top-0 sticky bg-slate-50 text-slate-500 shadow-xl z-30">
        <div className="w-11/12 lg:w-4/6 flex justify-between items-center relative">
          <p className="text-2xl font-bold cursor-pointer hover:underline flex items-center hover:text-slate-700 transition-all ease-in-out">
            <img src={logo} alt="Logo MBD" className="w-16 h-min mr-2" />
          </p>
          <div className="absolute right-0">
            {!isBurger && (
              <RxHamburgerMenu
                className="text-3xl block lg:hidden"
                onClick={() => {
                  setIsBurger(true);
                }}
              />
            )}
            <div
              className={
                "flex justify-between gap-3 lg:gap-10 font-medium flex-col lg:flex-row absolute right-0 -top-3 lg:static text-center bg-blue-50 py-3 lg:py-0 rounded-lg shadow-lg lg:shadow-none border lg:border-0 " +
                (!isBurger ? "hidden lg:flex" : "")
              }
            >
              {["Produk", "Keunggulan", "Contact", "Login"].map((e, idx) => {
                return (
                  <p
                    key={"navbar-bar-" + idx}
                    className="cursor-pointer hover:underline hover:text-slate-700 transition-all ease-in-out mx-6 lg:mx-0"
                  >
                    {e !== "Login" && (
                      <Link
                        to={`/#${e.toLowerCase()}`}
                        onClick={() => {
                          setIsBurger(false);
                          handleScroll(ref[`${e.toLowerCase()}Ref`].current);
                        }}
                      >
                        {e}
                      </Link>
                    )}
                    {e === "Login" && (
                      <p
                        onClick={() => {
                          setIsBurger(false);
                          navigate("/signin");
                        }}
                      >
                        {e}
                      </p>
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* content 1 */}
      <div
        ref={ref.mainRef}
        className="w-full flex justify-center bg-gradient-to-tr -mt-20 lg:-mt-16 lg:h-screen text-blue-50 z-20 pattern-tornado"
      >
        <div className="w-11/12 lg:w-4/6 flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 h-screen lg:h-auto flex flex-col gap-12 lg:gap-8 mt-20 lg:mt-7 text-center lg:text-start items-center lg:items-start justify-center">
            <h1 className="font-bold font-poppins text-5xl lg:text-6xl">
              Meja Belajar Digital
            </h1>
            <p className="text-xl font-medium font-poppins">
              Meja Belajar Digital adalah aplikasi yang dapat memudahkan siswa
              dalam belajar mandiri secara efektif dengan memanfaatkan teknologi
              yang ada, dengan menggunakan beberapa metode belajar.
            </p>
            <div
              className="bg-blue-50 font-medium text-xl text-blue-600 w-fit p-3 rounded-3xl cursor-pointer hover:bg-blue-100 hover:drop-shadow-xl transition-all ease-in-out"
              onClick={() => navigate("/signup")}
            >
              Get started!
            </div>
          </div>
          <div className="w-11/12 lg:w-1/2 lg:mt-auto h-96 pb-10 lg:pb-0 lg:h-full justify-start items-center flex pl-0 lg:pl-16 ">
            <img src={avatar} alt="Logo MBD" />
          </div>
        </div>
      </div>
      <div
        ref={ref.produkRef}
        className="w-full flex justify-center mt-16 lg:-mt-5"
      >
        <div className="w-11/12 lg:w-4/6 shadow-md h-auto flex flex-col justify-between bg-blue-50 rounded-2xl py-14 lg:px-14 px-5 z-10 lg:z-20">
          <p className="font-poppins text-3xl lg:text-4xl font-bold text-center mb-10 text-slate-600">
            Produk dan solusi untuk perjalanan belajarmu!
          </p>
          <div className="h-full w-full flex justify-center items-center">
            <ReactPlayer
              url={videoTutorial}
              height={"auto"}
              width={"100%"}
              controls={true}
            />
          </div>
        </div>
      </div>
      <div ref={ref.keunggulanRef} className="w-full flex justify-center mt-32">
        <div className="w-11/12 lg:w-4/6 shadow-md h-screen flex justify-center bg-blue-50 rounded-2xl px-8 pt-20 z-10">
          <p className="font-poppins text-3xl lg:text-4xl font-bold text-center mb-10 text-slate-600">
            Keunggulan
          </p>
        </div>
      </div>
      <div ref={ref.contactRef} className="w-full flex justify-center mt-32">
        <div className="w-11/12 lg:w-4/6 shadow-md h-screen flex justify-center bg-blue-50 rounded-2xl px-8 pt-20 z-10">
          Contact
        </div>
      </div>
      <div ref={ref.footerRef} className="w-full flex justify-center mt-32">
        <div className="w-11/12 lg:w-4/6 shadow-md h-screen flex justify-center bg-blue-50 rounded-2xl px-8 pt-20 z-10">
          Footer
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
