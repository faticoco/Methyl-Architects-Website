import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useEffect, useRef, useState } from "react";
import "../Components/stylesComponents/contact.css";
import contactus from "../Images/contact.jpg";
import useSidebarStore from "../Store/SideBarStore";
import useLogoStore from "../Store/logostore";
function ContactUs() {
  const { sidebarOpen } = useSidebarStore();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toggleLogo } = useLogoStore();
  const { whitelogo } = useLogoStore();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7tstquc", "template_k1cwvbj", form.current, {
        publicKey: "96omJ25jGyf-R3AKh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    toggleLogo(); // This will toggle the logo state on component mount

    return () => {
      toggleLogo();
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        fontFamily: "Poppins",
        backgroundImage: `url(${contactus})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        transition: "opacity 0.3s ease", // Apply transition for opacity
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

      {/* Left Div */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="left"
      >
        <div style={{ marginBottom: "20px", color: "white" }}>
          <span style={{ fontSize: "clamp(3rem, 7vw, 5em)", display: "block" }}>
            Let's
          </span>
          <span
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)", display: "block" }}
          >
            Talk
          </span>
          <span
            style={{
              fontSize: "clamp(0.4rem, 2vw, 1rem)",
              display: "block",
              marginTop: "20px",
              color: "white",
            }}
          >
            60 College Hill, Ponsonby, Auckland. <br />
            Phone: 027 566 2355
            <br />
            studio@matter.co.nz
          </span>
        </div>
      </div>

      {/* Right Div */}
      <div
        style={{
          flex: 1,
          paddingLeft: "20px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        classname="rightdiv"
      >
        <div
          style={{ marginBottom: "20px", textAlign: "center" }}
          className="givemargin"
        >
          <span style={{ fontSize: "clamp(0.5rem, 3vw, 2em)" }}>
            We'd love to hear from you
          </span>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              name="from_name"
              label="Name"
              variant="standard"
              InputLabelProps={{ style: { color: "#444444" } }}
              InputProps={{
                style: { borderColor: "#444444" },
                classes: { focused: "input-focused" },
                autoComplete: "off",
              }}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="textfield"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              name="from_email"
              label="Email"
              variant="standard"
              InputLabelProps={{
                style: { color: "#444444" },
                autoComplete: "off",
              }}
              InputProps={{
                classes: { focused: "input-focused" },
                autoComplete: "off",
              }}
              onChange={(e) => {
                setEmail(e.target.value.toString()); // Convert value to string
              }}
              className="textfield"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              name="message"
              label="Message"
              variant="standard"
              multiline
              rows={4}
              placeholder="Enter your message"
              InputLabelProps={{ style: { color: "#444444" } }}
              inputProps={{ style: { color: "black" } }}
              style={{
                borderColor: "#444444",
                "&:focus": { borderColor: "#444444" },
              }} // Change border color on focus
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="textfield"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              value="Send"
              variant="outlined"
              color="primary"
              style={{
                backgroundColor: "transparent",
                width: "100px",
                height: "40px",
                color: "black",
                borderColor: "#444444", // Change border color
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
