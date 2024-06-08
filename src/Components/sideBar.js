import TableRowsIcon from "@mui/icons-material/DensityMedium";

import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import linkedin from "../Images/linkedin.png";
import useSidebarStore from "../Store/SideBarStore"; // Import the hook
import useWhitePageStore from "../Store/WhitePageStore"; // Import the hook
import "./stylesComponents/sideBar.css";
function SideBar() {
  const theme = useTheme();
  const sidebarOpen = useSidebarStore((state) => state.sidebarOpen); // Use the correct property name
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const whitePage = useWhitePageStore((state) => state.whitepage);
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        transition: "transform ease-in-out 0.8s",
      }}
      role="presentation"
      className="sidebar"
      onClick={() => toggleSidebar()} // Use the toggle function
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      ></Box>
      <List>
        {[
          { text: "Home", link: "/" },
          { text: "About", link: "/About" },
          { text: "Portfolio", link: "/Portfolio" },
          { text: "Contact Us", link: "/ContactUs" },
        ].map((item, index) => (
          <ListItem key={index} style={{ fontFamily: "Montserrat" }}>
            <ListItemButton>
              <Link
                to={item.link}
                style={{
                  margin: "0px",
                  padding: "0px",
                  height: "60px",
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "bold",
                }}
              >
                <p
                  className="custom-button"
                  style={{
                    fontFamily: "Montserrat",
                    color: "white",

                    fontWeight: "lighter",
                  }}
                >
                  {item.text}
                </p>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          position: "absolute",
          bottom: "150px",
          display: "flex",
          justifyContent: "left",
          flexDirection: "row",
          gap: "10px",
          marginLeft: "15px",
        }}
      >
        <a
          href="https://www.facebook.com/profile.php?id=61557350133569"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebook}
            alt="Facebook"
            style={{ width: 40, marginRight: 10, overflow: "hidden" }} // Add overflow: 'hidden' to hide scrollbar
          />
        </a>
        <a
          href="https://www.instagram.com/studio.methyl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={insta}
            alt="Instagram"
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </a>

        <a
          href="https://www.linkedin.com/company/methyl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            style={{ width: 50, color: "white", marginTop: 5 }}
          />
        </a>
      </Box>
    </Box>
  );
  let marginTop;
  if (theme.breakpoints.down("sm")) {
    marginTop = "100px"; // For smaller mobile screens
  } else if (theme.breakpoints.down("md")) {
    marginTop = "200px"; // For smaller laptops
  } else {
    marginTop = "500px"; // For big screens
  }
  return (
    <Box sx={{ position: "relative" }}>
      <TableRowsIcon
        sx={{
          position: "absolute",
          zIndex: 1000,

          left: sidebarOpen ? "clamp(2.5rem, 50vw, 12rem)" : "10px",
          transform: sidebarOpen ? "rotate(-90deg)" : "rotate(0deg)",
          transition: "left 0.4s, transform ease-in-out 0.8s",
          cursor: "pointer",
          fontSize: "clamp(1rem, 5vw, 3rem)",
          color: sidebarOpen ? "white" : "black",
        }}
        onClick={() => toggleSidebar()}
        className="slideright"
      />

      <Drawer
        open={sidebarOpen}
        onClose={() => toggleSidebar()} // Use the toggle function
        variant="persistent"
        anchor="left"
        PaperProps={{
          style: {
            border: "transparent",
            marginTop: marginTop,
            background: "transparent",
            color: "black",
            fontFamily: "Montserrat",
            transition: " transform ease-in-out 0.8s",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}

export default SideBar;
