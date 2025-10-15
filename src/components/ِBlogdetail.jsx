import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import Navbarr from "./Navbarr";
import img5 from"../img/img5.png"
import "./blog_page_style.css"
import Footer from "./Footer";
function Bloge_react() {
  const blog = [
    {
        id: 5,
        title: "(React) ریکت ",
        desc: "توسعه رابط‌های کاربری مدرن و پویا با کتابخانه محبوب جاوااسکریپت.",
        img: img5,
    },
  ];
  const text = [
    {
      title: " درک مفاهیم پایه وب (HTML و CSS)",
      text: "قبل از شروع React باید ساختار و ظاهر صفحات وب را بشناسید. HTML مسئول ساختار محتوا و CSS مسئول زیباسازی آن است. بدون تسلط بر این دو، درک JSX یا کامپوننت‌ها دشوار خواهد بود.",
    },
    {
      title: " تسلط بر جاوااسکریپت (ویژه ES6+)",
      text: "React یک کتابخانه‌ی جاوااسکریپت است، پس باید جاوااسکریپت را خوب بلد باشید. مفاهیمی مثل متغیرهای let و const، توابع پیکانی، destructuring و ماژول‌ها بسیار مهم‌اند.",
    },
    {
      title: " آشنایی با DOM و نحوه‌ی کار آن",
      text: "DOM ساختار درختی صفحات وب است. React برای افزایش سرعت از Virtual DOM استفاده می‌کند، بنابراین اگر بدانید DOM چطور کار می‌کند، بهتر درک می‌کنید که چرا React سریع‌تر است.",
    },
    {
      title: " درک مفهوم SPA (تک‌صفحه‌ای بودن)",
      text: "React اغلب برای ساخت اپلیکیشن‌های تک‌صفحه‌ای استفاده می‌شود. یاد بگیرید SPA چیست و چرا به‌جای بارگذاری مجدد کل صفحه، فقط بخش‌های لازم تغییر می‌کنند.",
    },
    {
      title: " مفاهیم برنامه‌نویسی تابعی (Functional Programming)",
      text: "React بر پایه‌ی توابع ساخته شده است. درک مفاهیمی مانند pure function، immutability و callbackها باعث می‌شود کد شما تمیزتر و قابل پیش‌بینی‌تر باشد.",
    },
    {
      title: " ماژولار بودن و ساختار پروژه‌ها",
      text: "قبل از کار با React باید یاد بگیرید چطور کدها را به فایل‌ها و ماژول‌های جدا تقسیم کنید. این کار در پروژه‌های بزرگ ضروری است.",
    },
    {
      title: " درک مفاهیم API و درخواست‌های HTTP",
      text: "در اکثر پروژه‌های React باید به سرور متصل شوید و داده دریافت یا ارسال کنید. آشنایی با fetch یا axios و ساختار JSON قبل از شروع React ضروری است.",
    },
    {
      title: " کار با ابزارهای توسعه‌دهنده (DevTools و Console)",
      text: "برای رفع باگ‌ها باید بلد باشید از ابزارهای مرورگر مثل Console و Network استفاده کنید. این مهارت در زمان کار با React بسیار حیاتی است.",
    },
    {
      title: " درک Git و مدیریت نسخه‌ها",
      text: "تقریباً تمام پروژه‌های React با Git مدیریت می‌شوند. دانستن commit، branch و merge به شما کمک می‌کند با تیم‌ها به‌صورت حرفه‌ای کار کنید.",
    },
    {
      title: " آشنایی مقدماتی با NPM و Node.js",
      text: "برای نصب کتابخانه‌ها و اجرای پروژه‌های React باید NPM و Node.js را بشناسید. یاد بگیرید چطور بسته‌ها را نصب و اسکریپت‌ها را اجرا کنید.",
    }
  ];
  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    }}>
      <Navbarr/>
      {blog.map((c) => (
        <Box sx={{
          width:"60%",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          marginTop:"8vh",
          borderRadius:"32px",
          display:"flex",
          justifyContent:"center",
          marginBottom:"16px",
          "@media (max-width:1100px)": {
            width:"70%",
            borderRadius:"24px"
          },
          "@media (max-width:600px)": {
            width:"90%",
            borderRadius:"16px"
          },
        }}>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            margin:"32px",
            width:"100%",
            alignItems:"end",
          }}>
            <img src={c.img} style={{
              borderRadius:"32px",
              width:"100%",
              "@media (max-width:1100px)": {
                borderRadius:"24px"
              },
              "@media (max-width:600px)": {
                borderRadius:"16px"
              },
            }}/>
            <Typography style={{
              margin:"0px",
              fontSize:"2.5rem",
              fontFamily:"IranSansBold",
              color: "#303838",
              marginTop:"8px",
              textAlign:"right",
              marginTop:"16px"
            }}>
              {c.title}
            </Typography>
            {text.map((t) =>(
              <Box sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"end",
              }}>
                <Typography sx={{
                  margin:"0px",
                  fontSize:"1rem",
                  fontFamily:"IranSansBold",
                  color: "#303838",
                  marginTop:"8px",
                  textAlign:"right",
                  marginTop:"16px",
                }}>
                  {t.title}
                </Typography>
                <Typography sx={{
                  margin:"0px",
                  fontSize:"1rem",
                  fontFamily:"IranSansRegular",
                  color: "#303838",
                  marginTop:"8px",
                  textAlign:"right",
                }}>
                  {t.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
      <Footer/>
    </Box>
  )
}

export default Bloge_react;