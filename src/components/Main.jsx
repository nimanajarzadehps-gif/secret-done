import { useEffect, useState } from "react";
import "../style.css";
import {useTypewriter , Cursor} from 'react-simple-typewriter'

export default function Main() {
 
 

const [text] = useTypewriter({
  words: ["جاوااسکریپت", "پایتون", "جنگو", "گیت", "گیت هاب", "وردپرس"],
  loop: true,          
  typeSpeed: 100,         
  deleteSpeed:100,    
  delaySpeed: 1500,       
})
// بهترین وبسایت برای علاقه‌مندان به برنامه‌نویسی، با اساتید حرفه‌ای و پروژه‌های عملی.
const [para] = useTypewriter({
  words: [" بهترین وبسایت برای علاقه‌مندان به برنامه‌نویسی، با اساتید حرفه‌ای و پروژه‌های عملی"],
      
  typeSpeed: 7,         

})
  return (
    <main>
      <div className="containernav">
        <div className="hero-img">
          <img
            src="photo21390889489.jpg"
            alt="تصویر تکنولوژی"
          />
        </div>
        <div className="hero-text">
          <h1 style={{
              fontFamily:"IranSansBold",
              color: "#303838",
            }}>
            آموزش <span style={{color : "#04ABA2"}} className="typing">{text}</span>
            <Cursor style={{color : "#04ABA2"}}/>
          </h1>
          <p style={{
            fontFamily:"IranSansRegular",
            color: "#303838",
          }}>
           {para}
          </p>
          <button style={{
            fontFamily:"IranSansRegular",
            color: "white",
          }}>شروع کنید</button>
        </div>
      </div>
    </main>
  );
}
