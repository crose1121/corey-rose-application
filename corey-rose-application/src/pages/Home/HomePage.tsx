import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { Box, Button, Modal, Typography } from "@mui/material";
import coreyUrl from "../../static/corey.svg?url";
import resumeUrl from "../../static/CoreyRoseResume.pdf?url";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      {" "}
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            background: "linear-gradient(90deg, #ff4d4d, #ff9a00, #ffd500)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "2px",
            mb: 1,
          }}
        >
          Corey Rose
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "#666",
            fontStyle: "italic",
            letterSpacing: "1px",
            mb: 4,
            opacity: 0.9,
            animation: "pulse 3s ease-in-out infinite",
          }}
        >
          App Developer ✨
        </Typography>
        <img src={coreyUrl} alt="Corey" style={{ width: 240, height: 240 }} />
      </Box>
      <section className="hero">
        <div className="hero-actions">
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.open(resumeUrl, "_blank", "noopener")}
          >
            View Resume
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </Button>
        </div>
      </section>
    </Box>
  );
};
