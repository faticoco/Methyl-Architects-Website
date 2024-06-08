import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Components/stylesComponents/Project.css";
import back4 from "../Images/back4.jpg";
import cont from "../Images/cont.jpg";
import home from "../Images/home.jpg";
import slide from "../Images/slide.jpg";
import projectsData from "../Projects/Projects.json";
import useSidebarStore from "../Store/SideBarStore";
import useWhitePageStore from "../Store/WhitePageStore";
const useStyles = styled((theme) => ({
  imageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  mainImage: {
    width: "80%",
    height: "80vh",
    objectFit: "cover",
    marginBottom: theme.spacing(2),
  },
}));

const Project = () => {
  const { toggleSidebar } = useWhitePageStore();
  const { sidebarOpen } = useSidebarStore();
  const { projectName } = useParams();
  const [project, setProject] = useState(null);
  const classes = useStyles({ sidebarOpen });

  const renderDescriptionWithLineBreaks = (description) => {
    return description.split("\n").map((paragraph, index) => (
      <React.Fragment key={index}>
        <span dangerouslySetInnerHTML={{ __html: paragraph }} />
        <br />
      </React.Fragment>
    ));
  };
  const openWhitePage = () => {
    toggleSidebar();
  };

  const closeWhitePage = () => {
    toggleSidebar();
  };

  useEffect(() => {
    openWhitePage();
    return () => {
      closeWhitePage();
    };
  }, []);

  useEffect(() => {
    const findMatchingProject = () => {
      const matchingProject = projectsData.find(
        (proj) => proj.identifier === projectName
      );
      setProject(matchingProject);
    };

    findMatchingProject();
  }, [projectName]);

  return (
    <>
      {/* Overlay with semi-transparent black layer */}
      {sidebarOpen && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(24, 23, 23, 0.651)",
            zIndex: 1,
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      <div className="project-container">
        {/* Overlay with semi-transparent black layer */}

        {project && (
          <>
            <img
              src={
                process.env.PUBLIC_URL +
                "/Projects/" +
                projectName +
                "/main.jpg"
              }
              alt={project.name}
              style={{
                width: "100%",
                height: "80vh",
                maxHeight: "100vh",
                objectFit: "cover",
              }}
              className="mainImage"
            />
            <div className="infoContainer">
              <div className="left">
                <h1 className="projname">{project.name}</h1>
                <p className="description1">
                  {renderDescriptionWithLineBreaks(project.description)}
                </p>{" "}
              </div>
              <div className="right">
                <div style={{ textAlign: "left", marginBottom: "35px" }}>
                  <strong>Location:</strong>
                  <p style={{ margin: "0.5rem 0" }}>{project.Location}</p>
                </div>
                <div style={{ textAlign: "left", marginBottom: "35px" }}>
                  <strong>Client:</strong>
                  <p style={{ margin: "0.5rem 0" }}>{project.Client}</p>
                </div>

                <div style={{ textAlign: "left", marginBottom: "35px" }}>
                  <strong>Total building surface:</strong>
                  <p style={{ margin: "0.5rem 0" }}>
                    {project.Totalbuildingsurface}
                  </p>
                </div>
                <div style={{ textAlign: "left", marginBottom: "35px" }}>
                  <strong>Building Site:</strong>
                  <p style={{ margin: "0.5rem 0" }}>{project.BuildingSite}</p>
                </div>
                <div style={{ textAlign: "left", marginBottom: "35px" }}>
                  <strong>Programme:</strong>
                  <p style={{ margin: "0.5rem 0" }}>{project.Programme}</p>
                </div>
                <div style={{ textAlign: "left", marginBottom: "35px" }}>
                  <strong>Status:</strong>
                  <p style={{ margin: "0.5rem 0" }}>{project.Status}</p>
                </div>
              </div>
            </div>
            <div className="bottomContainer">
              <div className="bottomleft">
                <h2 className="heading2">{project.heading2}</h2>
                <p className="description2">{project.description2}</p>
              </div>
              <div className="bottomright">
                <div className="imageContainer">
                  {project.imageUrls.slice(1).map((imageUrl, index) => (
                    <img
                      key={index + 1}
                      src={
                        process.env.PUBLIC_URL +
                        `/Projects/${projectName}/${imageUrl}`
                      }
                      alt={`Image ${index + 2}`}
                      className="increasewidth"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="TeamContainer">
              <div className="leftTeam">
                <h1 className="team">Team</h1>
              </div>
              <div className="rightTeam">
                <div style={{ textAlign: "left" }}>
                  <strong>{project.name}</strong>
                  <p>{project.Team}</p>
                </div>
                <br />

                <div style={{ textAlign: "left" }}>
                  <strong>Advisors</strong>
                  <p>{project.Advisors}</p>
                </div>

                <br />
                <div style={{ textAlign: "left" }}>
                  <p>
                    {" "}
                    <strong>Photos: </strong>
                    {project.Photos}
                  </p>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p>
                    {" "}
                    <strong>Visualisations: </strong>
                    {project.Visualisations}
                  </p>
                </div>
              </div>
            </div>
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
                  display: "flex",
                  flexDirection: "row",
                  gap: "50px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "clamp(2px, 40px, 80px)",
                }}
              >
                <Typography
                  color="primary"
                  gutterBottom
                  sx={{
                    fontSize: "clamp(40px,25px, 30px)",
                    marginTop: "50px",
                    color: "white",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    paddingLeft: "clamp(0.5rem, 50px, 60px)",
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
                      sx={{ fontFamily: "Montserrat" }}
                    >
                      The white home
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Montserrat" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed do eiusmod tempor incididunt.
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
                      sx={{ fontFamily: "Montserrat" }}
                    >
                      Spiral hall
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Montserrat" }}
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
                        fontFamily: "Montserrat",
                      }}
                    >
                      Gray Home
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Montserrat" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default Project;
