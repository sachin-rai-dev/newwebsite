import React from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Fnq from "./components/fnq";
import Form from "./components/form";
import Button from "./components/button";
import Stikywhatsapp from "./components/stikywhatsapp";
import { Swiper, SwiperSlide } from "swiper/react";
import { slidedata } from "./lib";
import { Navigation } from 'swiper/modules';

function Company() {
  return (
    <div className="with-100">
      <Nav />
      <Stikywhatsapp />
      <div>
        <div className="abuts1">
          <div className="abuts1left">
            <h1 className="text-ani">
              International full-cycle product development company
            </h1>
            <p>
              A team of top-performers who leverage their expertise in Business
              Analysis, UI&UX Design, and Development to build products that
              'wow' users.
            </p>
          </div>
          <div className="abuts1right">
            <img src="Services.png" alt="" />
          </div>
        </div>
      </div>

      {/* second section 2 */}

      <div className="white-bg with-100">
        <div className="abuts2">
          <div className="abuts2left">
            <h5>Mission</h5>
          </div>
          <div className="abuts2right">
            <h1>
              Delivering innovative digital products and solutions, which users
              do want, for our clients worldwide
            </h1>
          </div>
        </div>
      </div>

      <div className="abuts3">
        <div className="abuts3a">
          <img src="/globe.png" alt="" height={"400rem"} />
        </div>

        <div className="abuts3b">
          <h1>
            How did we get <span className="text-orange">here?</span>
          </h1>
          <p>
            Founded in 2018 as a indian design & development agency, webgenn has
            grown into a top-rated agency with office in delhi.
          </p>
          <p>
            In these 5 years, we’ve assembled a tight-knit team of professionals
            united by a common aim: to build products that matter.
          </p>
        </div>
      </div>

      <div className="white-bg">
        <div className="abuts2">
          <div className="abuts2left">
            <h5>Principles</h5>
          </div>
          <div className="abuts2right">
            <h1>
              We work with startups & established businesses to help them{" "}
              <span className="text-orange">meet today’s</span> evolving
              business challenges
            </h1>
          </div>
        </div>
      </div>

      <div className="grid white-bg">
        <div className="gridmain">
          <div className="grid1">
            <h1>Passion and personality</h1>
            <span>01</span>
          </div>
          <div className="grid2">
            <p>
              Our team is made up of people with personality, and one thing they
              have in common is passion for what they do.
            </p>
          </div>
        </div>

        <div className="gridmain">
          <div className="grid1">
            <h1>Unconventional — and highly effective</h1>
            <span>02</span>
          </div>
          <div className="grid2">
            <p>
              We see our clients as partners, and work alongside them so we can
              achieve great things together.
            </p>
          </div>
        </div>

        <div className="gridmain">
          <div className="grid1">
            <h1>Measure twice,code once</h1>
            <span>03</span>
          </div>
          <div className="grid2">
            <p>
              Our dedication and attention to detail allow us to deliver
              products and services of the highest quality.
            </p>
          </div>
        </div>

        <div className="gridmain">
          <div className="grid1">
            <h1>Fresh design, smart business processes</h1>
            <span>04</span>
          </div>
          <div className="grid2">
            <p>
              We take a flexible and free-thinking approach to every task, and
              this allows us to deliver great solutions for our clients.
            </p>
          </div>
        </div>
      </div>

      <Button />

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
                      height={"100px"}
                      width={"100px"}
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

      <Fnq />

      <Form titel={"drop as a line!"} />

      <Footer />
    </div>
  );
}

export default Company;
