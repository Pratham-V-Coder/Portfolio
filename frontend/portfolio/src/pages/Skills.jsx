import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import python from "../assets/python.png";
import cplus from "../assets/cpp.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongo from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";

const skills = [
  {
    name: "HTML",
    image: html,
    level: "95%",
  },
  {
    name: "CSS",
    image: css,
    level: "90%",
  },
  {
    name: "JavaScript",
    image: js,
    level: "85%",
  },
  {
    name: "React",
    image: react,
    level: "85%",
  },
  {
    name: "Node.js",
    image: node,
    level: "85%",
  },
  {
    name: "Express.js",
    image: express,
    level: "85%",
  },
  {
    name: "MongoDB",
    image: mongo,
    level: "85%",
  },
  {
    name: "MySQL",
    image: mysql,
    level: "85%",
  },
  {
    name: "C++",
    image: cplus,
    level: "80%",
  },
  {
    name: "Python",
    image: python,
    level: "90%",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          My Skills
        </h2>

        <p className="text-center text-gray-400 mt-3 mb-14">
          Technologies I work with
        </p>

        <div className="py-4">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={25}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-400 hover:scale-110 transition duration-300">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-20 h-20 mx-auto object-contain"
                  />

                  <h3 className="mt-5 text-xl font-semibold">{skill.name}</h3>

                  <div className="mt-5 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-cyan-400 h-2 rounded-full"
                      style={{ width: skill.level }}
                    />
                  </div>

                  <p className="text-cyan-400 mt-2">{skill.level}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
