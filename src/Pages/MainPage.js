// MainPage.js
import React, { useEffect } from "react";
import Carousel from "../Components/Carousel";
import home from "../Images/Portfolio/23001   Jalan Equine 3/01_Render/20240329_Draft Renders/front view.png";
import Villa from "../Images/Villa.jpg";
import cutehome from "../Images/cutehome.jpg";
import useSidebarStore from "../Store/SideBarStore";
import useLogoStore from "../Store/logostore";
function MainPage() {
  const { sidebarOpen } = useSidebarStore();
  const { toggleLogo } = useLogoStore();

  const items = [
    {
      img: home,
      name: "Jalan Equine 3",
    },
    {
      img: cutehome,
      name: "B2 House",
    },
    {
      img: Villa,
      name: "The Villa",
    },
  ];

  useEffect(() => {
    toggleLogo(); // This will toggle the logo state on component mount

    return () => {
      toggleLogo();
    };
  }, []);
  return (
    <div
      style={{
        position: "relative",
      }}
    >
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

      {/* Carousel component */}
      <Carousel items={items} />
    </div>
  );
}

export default MainPage;
