import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import Navbarr from "./Navbarr";
import "./blog_page_style.css"
import img1 from"../img/img1.png"
import img2 from"../img/img2.png"
import img3 from"../img/img3.png"
import img4 from"../img/img4.png"
import img5 from"../img/img5.png"
import img6 from"../img/img6.png"
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Blog () {
    const blog = [
    {
        id: 1,
        title: "تیلویند CSS (Tailwind)",
        desc: "طراحی سریع و مدرن رابط کاربری فقط با کلاس‌های آماده.",
        img: img1,
    
    },
    {
        id: 2,
        title: "جاوااسکریپت (JavaScript)",
        desc: "یادگیری زبان وب برای ساخت صفحات پویا و تعامل‌پذیر.",
        img: img2,
      
    },
    {
        id: 3,
        title: "پایتون (Python)",
        desc: "شروع برنامه‌نویسی با زبانی ساده و همه‌کاره، از وب تا هوش مصنوعی.",
        img: img3,
     
    },
    {
        id: 4,
        title: "جنگو (Django)",
        desc: "ساخت وب‌اپلیکیشن‌های قدرتمند با محبوب‌ترین فریم‌ورک پایتون.",
        img: img4,
      
    },
    {
        id: 5,
        title: "ریکت (React)",
        desc: "توسعه رابط‌های کاربری مدرن و پویا با کتابخانه محبوب جاوااسکریپت.",
        img: img5,
    
    },
    {
        id: 6,
        title: "گیت و گیت‌هاب (Git & GitHub)",
        desc: "مدیریت نسخه کد و همکاری تیمی حرفه‌ای با ابزارهای ضروری .",
        img: img6,
    },
  ];
  return (
    <Box sx={{
      display:"flex",
      alignItems:"center",
      flexDirection:"column",
      width:"100%"
    }}>
      <Navbarr/>
      <Box class="bloge_box">
        <Typography class="text_blog">
            لیست بلاگ ها
        </Typography>
      </Box>
      <Box class="box_list">
        {blog.map((c) => (
            <Box key={c.id} class="blog_item">
              <Box sx={{
                width:"100%",
                display:"flex",
                justifyContent:"center"
              }}>
                <img src={c.img} alt={c.title} class="imgall"/>
              </Box>
              <Typography class="text_item">
                {c.title}
              </Typography>
              <Typography class="text_item_2">
                {c.desc}
              </Typography>
              <Button className="btnitem" sx={{
                backgroundColor: "#18D3C9",
                border: "0px",
                marginRight: "5%",
                marginBottom: "16px",
                marginTop: "8px",
                width: "99px",
                height: "32px",
                color: "#fff",
                fontFamily: "IranSansRegular",
                fontSize: "14px",
                borderRadius: "8px",
              }}>
                <Link to="/detail">ادامه مطالب</Link>
              </Button>
            </Box>
          ))}
      </Box>
      <Footer/>
    </Box>
  )
}

export default Blog ;