import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import "./header.css";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import favicon from "../../img/favicon.svg";



// const pages = [
//   { name: "Home", nav: "/" },
//   { name: "Hotel", nav: "/room" },

//   { name: "Experience", nav: "/room/experience" },
//   { name: "About", nav: "/room/about" },
// ];

import { UserButton, useUser, useClerk } from "@clerk/react";
import { assets } from "../../img/assets";

function Header() {
  const { user } = useUser();
    const myemail = import.meta.env.VITE_OWNER_EMAIL;

  const isemail = user?.primaryEmailAddress?.emailAddress === myemail;


const pages = [
  { name: "Home", nav: "/" },
  { name: "Hotel", nav: "/room" },

  { name: "Experience", nav: "/room/experience" },
  { name: "About", nav: "/room/about" },
  { name: `${isemail?'Dashpoard':'Listroom'}`, nav: `${isemail?'/owenr':''}` },
];


  const location = useLocation();
  const mybooking = () => assets.addIcon;
  const navagita = useNavigate();
  const { openSignIn } = useClerk();


  const [scroll, setsceoll] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    if (location.pathname !== "/") {
      setsceoll(true);
      return;
    } else {
      setsceoll(false);
    }

    const handscroll = () => {
      if (window.scrollY > 150) {
        setsceoll(true);
      } else {
        setsceoll(false);
      }
    };

    window.addEventListener("scroll", handscroll);
    return () => {
      window.removeEventListener("scroll", handscroll);
    };
  }, [location.pathname]);

  return (
    <AppBar
      position="fixed"
      sx={{
        top: "0",
        left: "0",
        right: "0",
        transition: "all .5s ease-in-out",
        background: scroll ? "rgb(240, 239, 239)" : "transparent",
        boxShadow: scroll ? "" : "0 0 0",
        padding: scroll ? "" : "10px 0px 0px 0px",
        color: scroll ? "black" : "white",
      }}
    >
      <Container className="countenr">
        <Toolbar disableGutters>
          <img className="imgfrist" src={`${favicon}`} alt="" />
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            onClick={(e)=>{e.preventDefault()
              navagita('/')
              scrollTo(0,0)
            }
            }
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            QuickStay
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
              slotProps={{
                paper: {
                  style: {
                    width: "100vw",
                    height: "100vh",
                    top: "110px",
                  },
                },
                list: {
                  style: {
                    height: "100%",
                  },
                },
              }}
              // sx={{ display: { xs: "block", md: "lg" } }}
              // style={{ width: "100%", background: "green" }}
            >
              {pages.map((page) => (
                <Link key={page.nav} to={page.nav}>
                                <MenuItem
                  style={{ padding: "12px 10px" }}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                >
                  <Typography style={{color:'#444'}} sx={{ textAlign: "center" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
                </Link>

              ))}
            </Menu>
          </Box>
          <img className="imfsec" src={`${favicon}`} alt="" />

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
                        onClick={(e)=>{e.preventDefault()
              navagita('/')
               scrollTo(0,0)
            }
            }
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
            className="qicktwo"
          >
            QuickStay
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page,index) => (
              <Link key={page.nav} to={`${page.nav}`}>
                <Button
                style={{cursor:'pointer'}}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: scroll ? "black" : "white",
                    display: "block",
                  }}
                  style={{ margin: "0px 10px" ,border:`${index==4?'1.2px solid #ffffff':''}`,padding:`${index==4?'2px 4px':''}`,fontWeight:`${index==4?'300':''}`,borderRadius:`${index==4?'40px':''}`}}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div className="searche">
              <SearchIcon />
            </div>

            {user ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Booking"
                    labelIcon={mybooking}
                    onClick={() => {
                      navagita("/mybook");
                    }}
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <div
                style={{ color: "white" }}
                className="login"
                onClick={openSignIn}
              >
                Login
              </div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
