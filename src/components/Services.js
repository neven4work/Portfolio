import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import front from "../assets/images/front.png";
import testing from "../assets/images/testing.jpg";
import Screenshot from "../assets/images/Screenshot (56).png";
import operations from "../assets/images/operations.jpg";
import database from "../assets/images/database.jpg";
import tutor from "../assets/images/tutor.jpg";
const services = [
  {
    title: "Front-End Development",
    description:
      "Reactjs /HTML5 / CSS3 / JS (E6) / RESTful API / Version control /Cross-Browser",
    image: front,
    link: "https://t.me/NevenAli7",
  },
  {
    title: "Software quality Assurance",
    description:
      "SDLC / STLC / Test scenarios / Test cases / JMeter / Selenium / Postman API",
    image: testing,
    link: "https://t.me/NevenAli7",
  },
  {
    title: "Programming and Algorithms",
    description:
      "Python / C++ / C# / SOLID / Problem Solving / Critical Thinking",
    image: Screenshot,
    link: "https://t.me/NevenAli7",
  },
  {
    title: "IT Operations",
    description:
      "Strong understanding of operating systems, software, and devices",
    image: operations,
    link: "https://t.me/NevenAli7",
  },
  {
    title: "Database",
    description:
      "SQL / Linux / Oracle / Advanced knowledge of database security, backup and performance",
    image: database,
    link: "https://t.me/NevenAli7",
  },
  {
    title: "Tutor",
    description:
      "Communication / Flexible / Patient / Active listening / Leadership.",
    image: tutor,
    link: "https://t.me/NevenAli7",
  },
];

const Services = () => {
  return (
    <Box id="Services" sx={{ py: 10, position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: 30,

          zIndex: 2,
          left: 0,
          top: 0,
        }}
      />

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
          zIndex: 100,
          transition: "all 0.3s ease-in-out", // يتحكم في سلاسة التحولات
          "&:before, &:after": {
            content: '""',
            width: 12,
            height: 12,
            position: "absolute",
            bgcolor: "primary.main",
            borderRadius: "50%",
            top: "50%",
            transform: "translateY(-50%)",
            transition: "all 0.3s ease-in-out", // يتحكم في سلاسة التحولات
          },
          "&:before": { left: -30 },
          "&:after": { right: -30 },
          "&:hover": {
            color: "white",
            borderColor: "white",
            "&:before": {
              left: 0,
              width: "51%",
              height: "100%",
              zIndex: -1,
              borderRadius: 0,
            },
            "&:after": {
              right: 0,
              width: "49%",
              height: "100%",
              zIndex: -1,
              borderRadius: 0,
            },
          },
        }}
      >
        Services
      </Typography>

      <Grid container spacing={4} sx={{ px: { xs: 2, sm: 4, md: 12 } }}>
        {services.map((service, index) => (
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
            key={index}
            sx={{
              mx: "auto",
              my: 1,
              textAlign: "start",
              display: "flex", // لجعل البطاقة تتمدد لتملأ المساحة
              justifyContent: "center", // توسيط البطاقة
            }}
          >
            <Card
              sx={{
                height: 400, // زيادة الارتفاع في حجم sm
                width: "100%",
                maxWidth: { xs: "none", sm: "none", md: "none", lg: 350 }, // تعديل العرض الأقصى
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.4s, box-shadow 0.4s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 2px 15px rgba(0,0,0,0.4)",
                },
              }}
            >
              <Box
                sx={{
                  height: 220, // زيادة ارتفاع الصورة في حجم sm
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f5f5f5", // لون خلفية إذا كانت الصورة غير متوافقة
                }}
              >
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    // height: 250,
                    width: "100%",
                    height: "auto",
                    objectFit: "contain", // عرض الصورة كاملة بدون اقتصاص
                    // maxHeight: "100%",
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, overflow: "hidden" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: 1.5,
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
              <Divider />

              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  size="small"
                  href={service.link}
                  target="_blank"
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    p: 2,
                  }}
                >
                  Request
                </Button>
                <Button
                  href={service.link}
                  target="_blank"
                  sx={{ minWidth: 0, p: 1 }}
                >
                  <ArrowForward sx={{ color: "primary.main" }} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
