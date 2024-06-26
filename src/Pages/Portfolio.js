import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/stylesComponents/portfolio.css"; // Import the CSS file for styling
import about1 from "../Images/About1.jpg";
import villa from "../Images/Villa.jpg";
import back3 from "../Images/back3.jpg";
import home from "../Images/home.jpg";
import slide from "../Images/slide.jpg";
import team from "../Images/team.jpg";
import useSidebarStore from "../Store/SideBarStore";
import useWhitePageStore from "../Store/WhitePageStore";

export default function Portfolio() {
  const navigate = useNavigate();
  const { sidebarOpen } = useSidebarStore();
  const { toggleSidebar } = useWhitePageStore(); // Get toggleSidebar function
  const [searchKeyword, setSearchKeyword] = React.useState("");

  const navigateToProject = (projectName) => {
    const formattedProjectName = projectName.replace(/\s+/g, "-"); // Replace spaces with dashes
    navigate(`/Portfolio/${encodeURIComponent(formattedProjectName)}`);
  };

  // Function to set white page state to true
  const openWhitePage = () => {
    toggleSidebar(); // Call toggleSidebar to set white page state to true
  };

  // Function to set white page state to false
  const closeWhitePage = () => {
    toggleSidebar(); // Call toggleSidebar to set white page state to false
  };

  React.useEffect(() => {
    openWhitePage(); // Call openWhitePage when component mounts
    return () => {
      closeWhitePage(); // Call closeWhitePage when component unmounts
    };
  }, []);

  return (
    <Box
      className="border-apply"
      style={{
        transition: "opacity 0.3s ease",
        marginBottom: "100px",
        position: "relative",
      }}
    >
      {/* Overlay with semi-transparent black layer */}
      {sidebarOpen && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(24, 23, 23, 0.651)",
            zIndex: 1,
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {/* Search Bar */}
      <div className="search-bar">
        <TextField
          className="search"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>

      <div className="grid-container">
        {/* The Slide Hall */}
        {searchKeyword === "" ||
        "The Slide Hall".toLowerCase().includes(searchKeyword.toLowerCase()) ? (
          <div
            className="grid-item landscape img1"
            style={{
              gridColumn: "span 2",
              gridRow: "span 1",

              position: "relative",
            }}
            onClick={() => navigateToProject("The Slide Hall")}
          >
            <img
              src={slide}
              alt="Image 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="imgpage"
            />
            <div className="overlay">
              <p className="overlay-text">The Slide Hall</p>
              <div className="location-line"></div>
              <p className="location-on-hover">Malaysia, Kota Kinabalu</p>
              <p className="view-more">View More</p>
            </div>
          </div>
        ) : null}

        {/* About Us */}
        {searchKeyword === "" ||
        "About Us".toLowerCase().includes(searchKeyword.toLowerCase()) ? (
          <div
            className="grid-item portrait img2"
            style={{
              gridColumn: "span 1",
              gridRow: "span 1",
              position: "relative",
            }}
            onClick={() => navigateToProject("About Us")}
          >
            <img
              src={about1}
              alt="Image 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="imgpage"
            />

            <div className="overlay">
              <p className="overlay-text">About Us</p>
              <div className="location-line"></div>
              <p className="location-on-hover">Lorem Ipsum, Dolor Sit Amet</p>
              <p className="view-more">View More</p>
            </div>
          </div>
        ) : null}

        {/* Repeat the above structure for each image */}
        {/* Luxury Villa */}
        {searchKeyword === "" ||
        "Luxury Villa".toLowerCase().includes(searchKeyword.toLowerCase()) ? (
          <div
            className="grid-item landscape"
            style={{
              gridColumn: "span 2",
              gridRow: "span 1",
              position: "relative",
            }}
          >
            <img
              src={villa}
              alt="Image 3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="imgpage"
            />

            <div className="overlay">
              <p variant="h4" className="overlay-text">
                Luxury Villa
              </p>
              <div className="location-line"></div>
              <p variant="body1" className="location-on-hover">
                Bahamas, Nassau
              </p>
              <p variant="h6" className="view-more">
                View More
              </p>
            </div>
          </div>
        ) : null}

        {/* Beautiful Backyard */}
        {searchKeyword === "" ||
        "Backyard".toLowerCase().includes(searchKeyword.toLowerCase()) ? (
          <div
            className="grid-item portrait"
            style={{
              gridColumn: "span 1",
              gridRow: "span 1",

              position: "relative",
            }}
          >
            <img
              src={back3}
              alt="Image 4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="imgpage"
            />

            <div className="overlay">
              <p variant="h4" className="overlay-text">
                Backyard
              </p>
              <div className="location-line"></div>
              <p variant="body1" className="location-on-hover">
                Paris, France
              </p>
              <p variant="h6" className="view-more">
                View More
              </p>
            </div>
          </div>
        ) : null}

        {/* Modern Home */}
        {searchKeyword === "" ||
        "Modern Home".toLowerCase().includes(searchKeyword.toLowerCase()) ? (
          <div
            className="grid-item landscape"
            style={{
              gridColumn: "span 3",
              gridRow: "span 2",

              position: "relative",
            }}
          >
            <img
              src={home}
              alt="Image 5"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="imgpage"
            />

            <div className="overlay">
              <p variant="h4" className="overlay-text">
                Modern Home
              </p>
              <div className="location-line"></div>
              <p variant="body1" className="location-on-hover">
                New York, USA
              </p>
              <p variant="h6" className="view-more">
                View More
              </p>
            </div>
          </div>
        ) : null}

        {/* Our Team */}
        {searchKeyword === "" ||
        "Our Team".toLowerCase().includes(searchKeyword.toLowerCase()) ? (
          <div
            className="grid-item portrait"
            style={{
              gridColumn: "span 1",
              gridRow: "span 1",
              position: "relative",
            }}
          >
            <img
              src={team}
              alt="Image 6"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="imgpage"
            />

            <div className="overlay">
              <p variant="h4" className="overlay-text">
                Our Team
              </p>
              <div className="location-line"></div>
              <p variant="body1" className="location-on-hover">
                London, UK
              </p>
              <p variant="h6" className="view-more">
                View More
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </Box>
  );
}
