import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Drawer,
} from "@mui/material";
import menu from "../icone/menu.svg";
import login from "../icone/login.svg";
import shop from "../icone/shopping-cart.svg";
import { Link } from "react-router-dom";

function Nav() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active, setActive] = useState("خانه");

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const menuItems = [
    { title: "تماس با ما", link: "/contact" },
    { title: "بلاگ", link: "/blog" },
    { title: "درباره ما", link: "/about" },
    { title: "دوره‌ها", link: "/courses" },
    { title: "خانه", link: "/" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        position: "fixed",
        bgcolor: "white",
        top: 0,
        zIndex: 1000,
      }}
    >
     
      <Box
        sx={{
          width: "17svh",
          height: "5vh",
          paddingInlineStart: "1%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            height: "30px",
            color: "white",
            backgroundColor: "#18D3C9",
            borderRadius: "100px",
            mr: "8px",
            "&:hover": { backgroundColor: "#00827B" },
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "IranSansRegular",
                fontSize: "1rem",
              }}
            >
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              >
                ورود
              </Link>
            </Typography>
            <Box sx={{ ml: "4px" }}>
              <img src={login} alt="login" />
            </Box>
          </Box>
        </Button>

        <Box display="flex" flexDirection="row">

          <img
            src={shop}
            alt="shop"
            style={{ width: "3.5vh", height: "3.5vh" }}
          />
          <Box
            sx={{
              width: "2vh",
              height: "2vh",
              mt: "1.5vh",
              ml: "-1.3vh",
              borderRadius: "100vh",
              backgroundColor: "#18D3C9",
            }}
          />
        </Box>
      </Box>


      <Box
        sx={{
          display: "none",
          "@media (max-width:700px)": {
            display: "flex",
            width: "32px",
            height: "32px",
            mr: "5%",
          },
        }}
      >
        <Box
          onClick={toggleDrawer(true)}
          sx={{
            cursor: "pointer",
          }}
        >
          <img src={menu} alt="menu" />
        </Box>
      </Box>

    
      <Box
        sx={{
          width: "60vh",
          height: "32px",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "6vh",
          "@media (max-width:700px)": {
            display: "none",
          },
        }}
      >
        
        {menuItems.map((item) => {
          const isActive = active === item.title;

          return (
            <Button
              key={item.title}
              onClick={() => setActive(item.title)}
              sx={{
                fontFamily: "IranSansRegular",
                fontSize: "1.1rem",
                color: isActive ? "#fff" : "#303838",
                backgroundColor: isActive ? "#18D3C9" : "white",
                borderRadius: "8px",
                position: "relative",
                transition: "all 0.3s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "4px",
                  left: 0,
                  width: isActive ? "0" : "0",
                  height: "2px",
                  backgroundColor: "#18D3C9",
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: isActive ? "0" : "100%",
                },
                "&:hover": {
                  color: isActive ? "#fff" : "#303838",
                  backgroundColor: isActive ? "#18D3C9" : "white",
                },
              }}
            >
              <Link
                to={item.link}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {item.title}
              </Link>
            </Button>
          );
        })}
      </Box>

  
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            bgcolor: "#18D3C9",
            width: "25vh",
            height: "140px",
            mb: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <img style={{width : "300%"}} src="unnamed (3).jpg" alt="" />
        </Box>

        {menuItems.map((item) => {
          const isActive = active === item.title;
          return (
            <Button
              key={item.title}
              onClick={() => {
                setActive(item.title);
                setOpenDrawer(false);
              }}
              sx={{
                fontFamily: "IranSansRegular",
                fontSize: "1.1rem",
                color: isActive ? "#fff" : "#303838",
                backgroundColor: isActive ? "#18D3C9" : "white",
                width: "80%",
                m: "8px auto",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#18D3C9",
                  backgroundColor: "#EBEDED",
                },
              }}
            >
              <Link
                to={item.link}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {item.title}
              </Link>
            </Button>
          );
        })}
      </Drawer>
    </Box>
  );
}

export default Nav;
