import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../Components/stylesComponents/carousel.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ items }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === items.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? items.length - 1 : prevActiveStep - 1
    );
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "clamp(2rem, 50vw, 20rem)", // Adjust the left position here
          transform: "translateY(-50%)", // Translate only on Y-axis
          zIndex: 1, // Set a higher z-index for the text container
        }}
      >
        <div
          style={{
            cursor: "pointer",
          }}
          className="addbox"
        >
          <Typography
            variant="h2" // Change the variant as per your requirement
            style={{
              color: "#ffffff",
              letterSpacing: "3px",
              fontWeight: "500",
              fontSize: "clamp(1rem, 5vw, 4rem)",
              transition: "transform 0.2s ease-in-out 0.2s", // Add transition for smooth hover effect
              fontFamily: "Poppins",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateX(30px)"; // Shift on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateX(0)"; // Reset on hover out
            }}
          >
            {items[activeStep].name}
          </Typography>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <AutoPlaySwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          // slideStyle={{ transition: "6s ease-in-out right", transform: "6s", transitionDuration:"6s" }}
        >
          {items.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "100vh",
                maxHeight: "100vh",
                objectFit: "cover",
                transition: "transform ease-in-out 0.5s",
              }}
            />
          ))}
        </AutoPlaySwipeableViews>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NavigateBeforeIcon
          sx={{ fontSize: "40px", cursor: "pointer", color: "white" }}
          onClick={handleBack}
        />

        <NavigateNextIcon
          sx={{ fontSize: "40px", cursor: "pointer", color: "white" }}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Carousel;
