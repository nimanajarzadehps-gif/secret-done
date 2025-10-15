import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/Courses.module.css";
import Navbarr from "./Navbarr";
import Footer from "./Footer";

const courseData = {
  javascript: [
 
   {
      title: "React Hooks پیشرفته",
      desc: "مدیریت وضعیت با useContext و useReducer",
      img: "photo21390889489.jpg",
      price: "420,000 تومان",
    },
    {
      title: "React Hooks پیشرفته",
      desc: "مدیریت وضعیت با useContext و useReducer",
      img: "photo21390889489.jpg",
      price: "420,000 تومان",
    },
     {
      title: "React Hooks پیشرفته",
      desc: "مدیریت وضعیت با useContext و useReducer",
      img: "photo21390889489.jpg",
      price: "420,000 تومان",
    },
    {
      title: "React Hooks پیشرفته",
      desc: "مدیریت وضعیت با useContext و useReducer",
      img: "photo21390889489.jpg",
      price: "420,000 تومان",
    },
  ],
  react: [
 {
      title: "React Hooks پیشرفته",
      desc: "مدیریت وضعیت با useContext و useReducer",
      img: "photo21390889489.jpg",
      price: "420,000 تومان",
    },
    {
      title: "React Hooks پیشرفته",
      desc: "مدیریت وضعیت با useContext و useReducer",
      img: "photo21390889489.jpg",
      price: "420,000 تومان",
    },
     {
      title: "React Hooks پیشرفته",
      desc: "مدیریت وضعیت با useContext و useReducer",
      img: "photo21390889489.jpg",
      price: "420,000 تومان",
    },
    {
      title: "React Hooks پیشرفته",
      desc: "مدیریت وضعیت با useContext و useReducer",
      img: "photo21390889489.jpg",
      price: "420,000 تومان",
    },
  
  ],
};

const Courses = () => {
  const renderSlider = (title, data) => (
    <section>
      <h2 className={styles.sectionTitlessn}>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={3}
     
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.courseSwipersn}
      >
        {data.map((course, index) => (
          <SwiperSlide key={index}>
            <div className={styles.courseCardsn}>
              <img src={course.img} alt={course.title} />
              <div className={styles.courseInfosn}>
                <h3 style={{color : "#04ABA2"}}>{course.title}</h3>
                <p>{course.desc}</p>
                <div className={styles.teacherNamen}>مدرس: استاد نیما نجارزاده</div>
                <div style={{color : "#9B9FE4"}} className={styles.pricesn}>{course.price}</div>
                <button className={styles.detailsBtnsn} style={{backgroundColor : "#04ABA2"}}>مشاهده آموزش</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );

  return (
    <div className={styles.coursesWrappersn}>
      <Navbarr />
      {renderSlider("دوره های جاوااسکریپت", courseData.javascript)}
      {renderSlider("دوره های هوش مصنوعی", courseData.react)}
      {renderSlider("دوره های ری اکت", courseData.react)}
+
      <Footer />
    </div>
  );
};

export default Courses;
