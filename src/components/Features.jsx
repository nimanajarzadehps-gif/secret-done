import React from "react";
import "../style.css";

function Features() {
  const features = [
    { 
      id: 1, 
      title: "پشتیبانی ۲۴ ساعته", 
      desc: "هر زمان سوال داشتی، پشتیبان‌ها آماده پاسخگویی هستن.", 
      img: "photo20984426789.png" 
      
    },
    { 
      id: 2, 
      title: "آموزش پروژه‌محور", 
      desc: "با مثال‌های واقعی یاد می‌گیری تا سریع وارد بازار کار بشی.", 
      img: "photo20984426688.png" 
    },
    { 
      id: 3, 
      title: "ضمانت کیفیت", 
      desc: "تمام آموزش‌ها توسط متخصصین بررسی و تایید شدن.", 
      img: "photo20985617621.png" 
    },
    { 
      id: 4, 
      title: "آپدیت منظم", 
      desc: "محتواها همیشه به‌روز میشن تا چیزی از دستت نره.", 
      img: "photo20987922049.png" 
    },
  ];

  return (
    <section id="features" className="features">
      <h2 style={{
        fontFamily:"IranSansRegular",
      }}>چرا باید مارو انتخاب کنی ؟</h2>
      <div className="features-container">
        {features.map((item) => (
          <div key={item.id} className="feature-card">
            <img src={item.img} alt={item.title} className="feature-icon" />
            <h3 style={{
              fontFamily:"IranSansBold",
            }}
          >{item.title}</h3>
            <p style={{
              fontFamily:"IranSansRegular",
              color: "#303838",
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
