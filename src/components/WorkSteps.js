import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import workStepsImage from "../assets/images/work-steps.png";
import step1Image from "../assets/images/work-steps-1.png";
import step2Image from "../assets/images/work-steps-2.png";
import step3Image from "../assets/images/work-steps-3.png";

const steps = [
  {
    image: step1Image,
    title: "Analysis & Planning",
    description:
      "It is essential to gather the business requirements in this very first phase. At this point, the prime focus is to note the exact things needed from any software under consideration.",
  },
  {
    image: step2Image,
    title: "Design & Development",
    description:
      "In this stage, the draft design is prepared for the software. After creating the design documents, This is the stage where actual coding begins.",
  },
  {
    image: step3Image,
    title: "Testing & Maintenance",
    description:
      "All variants of functional testing such as integration testing, unit testing, system testing, acceptance testing, and non-functional testing are done.",
  },
];

const WorkSteps = () => {
  const theme = useTheme();

  return (
    <Box id="Work Steps" sx={{ py: 10, px: 2, maxWidth: 1200, mx: "auto" }}>
      <Typography
        variant="h2"
        sx={{
          textTransform: "uppercase",
          mx: "auto",
          mb: 8,
          width: "fit-content",
          fontSize: 27,
          p: "10px 20px",
          border: "2px solid",
          borderColor: "secondary.main",
          position: "relative",
          transition: "all 0.3s ease-in-out",
          zIndex: 100,
          "&:before, &:after": {
            content: '""',
            width: 12,
            height: 12,
            position: "absolute",
            bgcolor: "primary.main",
            borderRadius: "50%",
            top: "50%",
            transform: "translateY(-50%)",
            transition: "all 0.3s ease-in-out",
          },
          "&:before": { left: -30 },
          "&:after": { right: -30 },
          "&:hover": {
            color: "white",
            borderColor: "white",
            "&:before": {
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              borderRadius: 0,
            },
            "&:after": {
              right: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              borderRadius: 0,
            },
          },
        }}
      >
        Work Steps
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ height: "100%", display: "flex", alignItems: "center" }}
      >
        {/* صورة العمل الكبيرة */}
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }} sx={{ height: "100%" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#f9f9f9",
              borderRadius: 2,
              p: 2,
              position: { md: "sticky" },
              top: 20,
            }}
          >
            <CardMedia
              component="img"
              image={workStepsImage}
              alt="Work Steps"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 500,
                objectFit: "contain",
                borderRadius: 1,
              }}
            />
          </Box>
        </Grid>

        {/* خطوات العمل */}
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }} sx={{ height: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {steps.map((step, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#f5f6f6",
                  p: 3,
                  border: "2px solid white",
                  borderRadius: 2,
                  position: "relative",
                  zIndex: 1,
                  "&:hover": {
                    "&::before": {
                      width: "100%",
                      height: "100%",
                    },
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: 0,
                    height: 0,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: 2,
                    bgcolor: "#ededed",
                    transition: "all 0.4s",
                    zIndex: -1,
                  },
                  [theme.breakpoints.down("sm")]: {
                    flexDirection: "column",
                    textAlign: "center",
                    alignItems: "center",
                    "& .MuiCardContent-root": {
                      ml: 0,
                      mt: 2,
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={step.image}
                  alt={step.title}
                  sx={{
                    width: 64,
                    height: 64,
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
                <CardContent sx={{ ml: 3 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      m: 0,
                      fontSize: 20,
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      color: "text.secondary",
                      lineHeight: 1.6,
                      fontSize: 16,
                    }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkSteps;
