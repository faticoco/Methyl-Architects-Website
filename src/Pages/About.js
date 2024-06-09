import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "../Components/stylesComponents/about.css";
import about1 from "../Images/About1.jpg";
import back4 from "../Images/back4.jpg";
import cont from "../Images/cont.jpg";
import home from "../Images/home.jpg";
import gif from "../Images/homeabt.mp4";
import slide from "../Images/slide.jpg";
import team from "../Images/team.jpg";
import useSidebarStore from "../Store/SideBarStore";
import useWhitePageStore from "../Store/WhitePageStore";
import useLogoStore from "../Store/logostore";

function About() {
  const { sidebarOpen } = useSidebarStore();
  const { toggleSidebar } = useWhitePageStore(); // Get toggleSidebar function
  const { toggleLogo } = useLogoStore();
  const { whitelogo } = useLogoStore();

  // Function to set white page state to true
  const openWhitePage = () => {
    toggleSidebar(); // Call toggleSidebar to set white page state to true
  };

  // Function to set white page state to false
  const closeWhitePage = () => {
    toggleSidebar(); // Call toggleSidebar to set white page state to false
  };

  useEffect(() => {
    console.log("whitelogo state:", whitelogo);
    toggleLogo(); // This will toggle the logo state on component mount
    openWhitePage(); // Call openWhitePage when component mounts
    return () => {
      toggleLogo();
      closeWhitePage(); // Call closeWhitePage when component unmounts
    };
  }, []);
  return (
    <Box
      style={{
        transition: "opacity 0.3s ease",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative", // Added to position the text
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

      {/* Add Typography component for the big text */}
      <Typography
        variant="h1"
        align="center"
        sx={{
          fontSize: { xs: "2rem", sm: "4rem", md: "5rem" },
          position: "absolute",
          top: { xs: "20%", sm: "30%", md: "50%" }, // Adjusted top position for smaller screens
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "100",
          color: "white",
          fontFamily: "Poppins",
        }}
      >
        About Us
      </Typography>

      <video
        autoPlay
        loop
        muted
        src={gif}
        alt="About GIF"
        style={{
          width: "100%",
          height: "90vh",
          maxHeight: "100vh",
          objectFit: "cover",
          marginBottom: "clamp(10px, 100px, 200px)",
        }}
      >
        <source src={gif} type="video/mp4" />
      </video>
      {/* Text at the bottom-center of the video */}
      <Typography
        variant="body1"
        align="center"
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontFamily: "Poppins",
          zIndex: "100",
        }}
        className="show-on-large-screen" // Add class name
      >
        We design experiences .
      </Typography>

      {/* Vertical line with trailing dot beneath */}
      <div
        style={{
          position: "absolute",
          marginTop: "40px",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 1,
          height: "10%",
          backgroundColor: " black",
          zIndex: "100",
        }}
        className="show-on-large-screen" // Add class name
      >
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 2,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "black",
            animation: "bounce 1s infinite", // Add animation
          }}
        />
      </div>

      {/* CSS Animation for the trailing dot */}
      <style>{`
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
 
`}</style>

      <Box
        style={{
          flex: 1,
          display: "flex",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "clamp(10px, 100px, 200px)",
          textAlign: "left",
        }}
      >
        <Card
          style={{
            flex: 1,
          }}
        >
          <div className="paddingtoleft">
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "50px",
                marginTop: "clamp(2px, 40px, 80px)",
              }}
            >
              <p
                color="textSecondary"
                style={{
                  fontFamily: "Poppins",
                }}
                className="number"
              >
                01
              </p>
              <Typography
                color="primary"
                gutterBottom
                sx={{
                  fontSize: "clamp(30px,20px, 20px)",
                  marginTop: "50px",
                  color: "black",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  paddingRight: "clamp(0.25rem, 5vw, 1rem)",
                }}
              >
                WE ARE ARCHITECTS
              </Typography>
            </Box>

            <Box
              sx={{
                paddingRight: "clamp(0.25rem, 5vw, 1rem)",
                fontSize: "11px",
              }}
            >
              <p
                className="aboutbody"
                color="textSecondary"
                sx={{ textAlign: "left" }}
              >
                The core of matter is architecture, this center has enabled us
                to participate in a wide spectrum of design work and solution
                providing throughout New Zealand and Australia.
              </p>
              <p
                className="aboutbody"
                color="textSecondary"
                sx={{ textAlign: "left" }}
              >
                We prioritize people, sustainability, and exceptional creative
                product. Our project outcomes represent the effective
                collaborative relationships we develop between clients,
                consultants, contractors, and council.
              </p>
              <p
                className="aboutbody"
                color="textSecondary"
                sx={{ textAlign: "left" }}
              >
                We are a multi award winning practice, our work recognised in
                the areas of architecture, urban planning, design, and strategic
                thinking. We love what we do and have a profound commitment to
                our clients. We pride ourselves on our ethical, honest, and
                transparent approach to all projects.
              </p>
              <p
                className="aboutbody"
                color="textSecondary"
                sx={{
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                Please contact us for more information about our professional
                services and the processes we employ.
              </p>
              <p
                className="aboutbody"
                sx={{ textAlign: "left" }}
                color="primary"
                style={{ cursor: "pointer", color: "black" }}
              >
                See Our Work &gt;
              </p>
            </Box>
          </div>
        </Card>
        <Card
          style={{
            flex: 1,
            padding: 20,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="hide-on-small-screen "
        >
          {/* Add your second image here */}
          <img
            src={about1}
            alt="Second Image"
            style={{
              width: "clamp(40%, 60%, 80%)",
              height: "auto",
              padding: 20,
            }}
          />
        </Card>
      </Box>
      <Box
        style={{
          flex: 1,
          display: "flex",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "clamp(10px, 100px, 200px)",
          textAlign: "left",
        }}
      >
        <Card
          style={{
            flex: 1,
          }}
        >
          <div className="paddingtoleft">
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "50px",
                marginTop: "clamp(2px, 40px, 80px)",
              }}
            >
              <p
                color="textSecondary"
                style={{
                  fontFamily: "Poppins",
                }}
                className="number"
              >
                02
              </p>
              <Typography
                color="primary"
                gutterBottom
                sx={{
                  fontSize: "clamp(30px,20px, 20px)",
                  marginTop: "50px",
                  color: "black",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  paddingRight: "clamp(0.25rem, 5vw, 1rem)",
                }}
              >
                OUR COMMUNITY
              </Typography>
            </Box>

            <Box
              sx={{
                paddingRight: "clamp(0.25rem, 5vw, 1rem)",
                fontSize: "11px",
              }}
            >
              <p
                className="aboutbody"
                color="textSecondary"
                sx={{ textAlign: "left" }}
              >
                The name ‘matter’ represents our collection of creatives. We are
                a bespoke architectural practice working in a collaborative
                manner, many of us having been together for more than 12 years.
                We feel more like a family than a work place, but still talk to
                each other over the holidays.
              </p>

              <p
                className="aboutbody"
                color="textSecondary"
                sx={{ textAlign: "left" }}
              >
                We are a multi award winning practice, our work recognised in
                the areas of architecture, urban planning, design, and strategic
                thinking. We love what we do and have a profound commitment to
                our clients. We pride ourselves on our ethical, honest, and
                transparent approach to all projects.
              </p>
              <p
                className="aboutbody"
                color="textSecondary"
                sx={{
                  textAlign: "left",
                  marginBottom: "20px",
                }}
              >
                Please contact us for more information about our professional
                services and the processes we employ.
              </p>
              <p
                className="aboutbody"
                sx={{ textAlign: "left" }}
                color="primary"
                style={{ cursor: "pointer", color: "black" }}
              >
                See Our Work &gt;
              </p>
            </Box>
          </div>
        </Card>
        <Card
          style={{
            flex: 1,
            padding: 20,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="hide-on-small-screen "
        >
          {/* Add your second image here */}
          <img
            src={team}
            alt="Second Image"
            style={{
              width: "clamp(40%, 60%, 80%)",
              height: "auto",
              padding: 20,
            }}
          />
        </Card>
      </Box>

      <Box
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px",
          textAlign: "center",
          backgroundImage: `url(${back4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          style={{
            gap: "20px",
            marginTop: "clamp(2px, 40px, 80px)",
          }}
          className="centeronsmall"
        >
          <Typography
            color="grey"
            gutterBottom
            sx={{
              fontFamily: "Poppins",

              marginTop: "50px",
            }}
            className="number"
          >
            03
          </Typography>
          <Typography
            color="primary"
            gutterBottom
            sx={{
              fontSize: "clamp(30px,20px, 20px)",
              marginTop: "50px",
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "bold",

              paddingRight: "clamp(0.25rem, 5vw, 1rem)",
              marginBottom: "20px",
            }}
          >
            Latest Work
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image={cont} alt="dummy image" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontFamily: "Poppins", cursor: "pointer" }}
                className="card-heading"
              >
                The white home
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: "left",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image={slide} alt="dummy image" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontFamily: "Poppins", cursor: "pointer" }}
                className="card-heading"
              >
                Spiral hall
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: "left",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image={home} alt="dummy image" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontFamily: "Poppins",
                  cursor: "pointer",
                }}
                className="card-heading"
              >
                Gray Home
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: "left",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
