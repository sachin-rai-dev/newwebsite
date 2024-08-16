import React from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Form from "./components/form";
import { Link, useNavigate } from "react-router-dom";
import { Development, developmentServisecard, disign, slidedata } from "./lib";
import Showcard from "./components/showcard";
import { servisecard } from "./lib";
import Servisecarddisign from "./components/servisecarddisign";
import Button from "./components/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Services() {
  let navigater = useNavigate();

  let contact = () => {
    navigater("/Contactus");
  };
  return (
    <div>
      <Nav />
      <div className="servises1 white-bg">
        <h1 className="animatiin">
          Get all the <span className="text-orange">benefits of </span>
          working with
          <span className="text-orange"> full-cycle studio</span>
        </h1>
        <div>
          <button className="submit">
            <Link to={"/Contactus"} className="ank">
              Lets talk
            </Link>
          </button>
          <span className="animatiin">
            Learn more about the team of professionals who care about your
            product as much as you do and the fields we can help you with.
          </span>
        </div>
      </div>

      <div className="servises2 container">
        <div className="servises2left">
          <img
            src="https://cdn.phenomenonstudio.com/wp-content/webp-e…ads/2023/03/3d-illustrations-30-rotation.png.webp"
            alt=""
          />
        </div>

        <div className="servises2right">
          <h1 className="heding-black textani py-5">
            Is it possible to blend technology, professionalism, and aesthetics?
          </h1>
        </div>
      </div>

      <div className="container ">
        <h2 className="fw-bold py-4 px-2 srvises3 textani">
          By merging aesthetic design with reliable processes, we'll help you
          achieve your goals
        </h2>
      </div>

      <div className="container-md p-3 servisecardgrid">
        {disign.map((val, i) => (
          <Showcard carddata={val} kay={i} />
        ))}
      </div>

      <div>
        <h1 className="heding-black text-center py-4">
          Design <span className="text-orange">services</span>
        </h1>
        <div className="container-md p-3 servisecardgrid">
          {servisecard.map((val, i) => (
            <Servisecarddisign data={val} />
          ))}
        </div>
      </div>

      <Button />

      <div className="servises2 container">
        <div className="servises2left">
          <img
            src="https://cdn.phenomenonstudio.com/wp-content/webp-e…ads/2023/03/3d-illustrations-30-rotation.png.webp"
            alt=""
          />
        </div>

        <div className="servises2right">
          <h1 className="heding-black textani py-5">
            Did you face mis communication between disign & development teams.
          </h1>
        </div>
      </div>

      <div className="container ">
        <h2 className="fw-bold py-4 px-2 srvises3 textani">
          Our developers and designers cooperate closely to overcome any
          challenges
        </h2>
      </div>

      <div className="container-md p-3 servisecardgrid">
        {Development.map((val, i) => (
          <Showcard carddata={val} kay={i} />
        ))}
      </div>

      <div>
        <h1 className="heding-black text-center py-4">
          Development <span className="text-orange">services</span>
        </h1>
        <div className="container-md p-3 servisecardgrid">
          {developmentServisecard.map((val, i) => (
            <Servisecarddisign data={val} />
          ))}
        </div>
      </div>

      <Button />

      <div className="white-bg servises11">
        <div>
          <img src="sn7.svg" alt="" />
          <h1>End-to-end</h1>
          <p className="text-center p-4">
            We manage every aspect of the project that is entrusted to our team,
            and provide you with detailed reports about what we’re doing — along
            with updates from the project manager.
          </p>
          <button onClick={contact} className="button">
            Contact us
          </button>
        </div>

        <div className="text-center ">
          <img src="sn8.svg" alt="" />
          <h1>Dedicated team</h1>
          <p className="text-center p-4">
            Searching for specialists on your own is a time-consuming task.
            That’s why we can provide you with a 100% independent professional
            who will fit in with your team and help get your project over the
            line as quickly as possible.
          </p>
          <button onClick={contact} className="button">
            Contact us
          </button>
        </div>
      </div>

      <div className="bg-black">
        <h1 className="heding-white p-5 text-center white-bg">
          What do people <span className="text-orange"> say about </span> us?
        </h1>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper white-bg"
        >
          {slidedata.map((val, i) => (
            <SwiperSlide key={i}>
              <div className="slid-card bg-black white-bg">
                <div className="slid-cardmain">
                  <div className="slid-cardmain-1">
                    <img
                      src={val.src}
                      height="70px"
                      width="80px"
                      alt=""
                    />
                    <div className="m-2">
                      <h3>{val.h3}</h3>
                      <p>{val.d}</p>
                    </div>
                  </div>

                  <p>
                    <div>
                      <h1 style={{ fontSize: "6rem" }} className="text-orange">
                        ,,
                      </h1>
                    </div>
                    {val.para}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Form titel={"drop as a line!"} />
      <Footer />
    </div>
  );
}

export default Services;
