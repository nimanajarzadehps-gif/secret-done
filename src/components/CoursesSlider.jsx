
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style.css"; 

export default function CoursesSlider() {
  const courses = [
    {
      id: 5,
      title: "تیلویند CSS (Tailwind)",
      desc: "طراحی سریع و مدرن رابط کاربری فقط با کلاس‌های آماده.",
      img: "Copilot_20250924_071534.png",
    
    },
    {
      id: 6,
        title: "جاوااسکریپت (JavaScript)",
        desc: "یادگیری زبان وب برای ساخت صفحات پویا و تعامل‌پذیر.",
      img: "Copilot_20250924_070904 - Copy.png",
      
    },
    {
      id: 4,
       title: "پایتون (Python)",
      desc: "شروع برنامه‌نویسی با زبانی ساده و همه‌کاره، از وب تا هوش مصنوعی.",
      img: "Copilot_20250924_070736.png",
     
    },
    {
      id: 1,
      title: "جنگو (Django)",
      desc: "ساخت وب‌اپلیکیشن‌های قدرتمند با محبوب‌ترین فریم‌ورک پایتون.",
      img: "Copilot_20250924_070451.png",
      
    },
    {
      id: 2,
       title: "ری‌اکت (React)",
      desc: "توسعه رابط‌های کاربری مدرن و پویا با کتابخانه محبوب جاوااسکریپت.",
      img: "Copilot_20250924_074908.png",
    
    },
    {
      id: 3,
      title: "گیت و گیت‌هاب (Git & GitHub)",
      desc: "مدیریت نسخه کد و همکاری تیمی حرفه‌ای با ابزارهای ضروری برنامه‌نویسان.",
      img: "Copilot_20250924_052743.png",
     
    },
  ];

  return (
<section id="courses" className="courses-slider" dir="rtl">
     <div className="courses-header">
      <h2 className="section-title">دوره‌های اصلی</h2>
    </div>
  <div className="container">

 

  
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={18}
      slidesPerView={3}
      pagination={{ clickable: true }}
      loop={true}
      grabCursor={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
 
       breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
    >
      {courses.map((c) => (
        <SwiperSlide key={c.id}>
          <article className="course-card">
            <div className="course-thumb">
              <img src={c.img} alt={c.title} loading="lazy" />
            </div>
            <div className="course-body">
              <h3 className="course-title">{c.title}</h3>
              <p className="course-desc">{c.desc}</p>
              <a href={c.link} className="course-btn">مشاهده آموزش‌ها</a>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
}
