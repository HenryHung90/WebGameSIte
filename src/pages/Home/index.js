import $ from "jquery";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShortCut from "./components/ShortCut";
import GroupLine from "./components/GroupLine";

import GoogleIcon from "@mui/icons-material/Google";
import "./index.css";

//NaviBar
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { firebase } from "../../Firebase/firebase";

const Home = ({ User }) => {
  const [Scroll, setScroll] = useState(0);
  const Navigate = useNavigate();

  //NaviBar
  const [anchorElNav, setAnchorElNav] = useState(null);

  const Group = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
  ];
  const pages = ["評分", "課堂剪影"];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    if (event.currentTarget.id === 0) {
      Navigate("/Scoring");
    } else {
      Navigate("/photograph");
    }
  };

  useEffect(() => {
    if (Scroll >= 350) {
      $("#HomeUser").animate({ opacity: 1 }, 500);
    }
    if (Scroll >= 400) {
      $("#Line_1").animate({ opacity: 1 }, 500);
    }
    if (Scroll >= 800) {
      $("#Line_2").animate({ opacity: 1 }, 500);
    }
    if (Scroll >= 1100) {
      $("#Line_3").animate({ opacity: 1 }, 500);
    }
    if (Scroll >= 1700) {
      $("#Line_4").animate({ opacity: 1 }, 500);
    }
  }, [Scroll]);
  $(window).scroll(function () {
    //為了保證相容性，這裡取兩個值，哪個有值取哪一個
    setScroll(document.documentElement.scrollTop || document.body.scrollTop);
    //scrollTop就是觸發滾輪事件時滾輪的高度
  });

  const Logout = () => {
    firebase.auth().signOut();
    Navigate("/");
  };

  return (
    <div className="HomeContainer">
      <div className="CenterBox">
        <h1 id="HomeTitle">網頁遊戲設計大賞</h1>
        <div id="HomeBackground">
          {Group.map((item) => {
            return <ShortCut Group={item} key={item} />;
          })}
        </div>
        <div className="HomeGroupFileBox">
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                {/* Web Menu Button */}
                <GoogleIcon
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 4,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  WebGame
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  {/* Phone Page Button */}
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page, key) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                {/* Phone Page Button */}
                <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>

                {/* Web Page Button */}
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page, key) => (
                    <Button
                      key={page}
                      id={key}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="This is you">
                    <IconButton sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={User.UserPhoto} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <h3 id="HomeUser">歡迎回來 {User.UserName}</h3>
          <GroupLine Group={Group} />
        </div>
      </div>
      <Button
        id="LogoutButton"
        onClick={Logout}
        variant="contained"
        startIcon={<GoogleIcon />}
        style={{ fontFamily: "pixel font", fontSize: "20px" }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Home;
