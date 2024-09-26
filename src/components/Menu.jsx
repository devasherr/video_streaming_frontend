import React from "react";
import styled from "styled-components";
import siteLogo from "../img/sitelog.png";
import Github from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Telegram from "@mui/icons-material/Telegram";
import Logout from "@mui/icons-material/Logout";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.dim};
  // background-color: red;
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  color: ${({ theme, selected }) => (selected ? theme.hover : "inherit")};

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const isCurPath = (path) => {
    return location.pathname === path;
  };

  const handleLogOut = () => {
    localStorage.clear();
    axios.post(
      "https://video-streaming-backend-8lgu.onrender.com/api/auth/signout",
      {},
      {
        withCredentials: true,
      }
    );

    navigate("/");
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={siteLogo} />
            vt Stream
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item selected={isCurPath("/")}>
            <HomeOutlinedIcon />
            Home
          </Item>
        </Link>

        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item selected={isCurPath("/trends")}>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>

        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item selected={isCurPath("/subscriptions")}>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </Link>

        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        <hr />

        {currentUser && (
          <Item onClick={() => handleLogOut()}>
            <Logout /> Logout
          </Item>
        )}

        <footer
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#999",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            href="https://github.com/devasherr"
            target="_blank"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Github style={{ fontSize: "22px", margin: "0 7px" }} />
          </a>
          <a
            href="https://linkedin.com/in/asher-samuel"
            target="_blank"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <LinkedIn style={{ fontSize: "22px", margin: "0 7px" }} />
          </a>
          <a
            href="https://t.me/dev_asherr"
            target="_blank"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Telegram style={{ fontSize: "22px", margin: "0 7px" }} />
          </a>
        </footer>
      </Wrapper>
    </Container>
  );
};

export default Menu;
