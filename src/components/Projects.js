import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  styled,
} from "@mui/material";
import Game from "../assets/images/Game-Theory.png";
import Hotels from "../assets/images/Hotels (1).png";
const TriangleCard = styled(Card)(({ theme, index }) => ({
  position: "relative",
  overflow: "visible",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  maxWidth: 450,

  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",

    "& .card-image-container::before": {
      opacity: 0,
    },
    "& .card-image": {
      transform: "scale(1.05)",
    },
    "&::before": {
      clipPath: " polygon(0 20%, 0% 100%, 100% 40%)", // الشكل الجديد عند hover
    },
    // تأثير الزر عند hover على البطاقة
    "& .visit-button": {
      color: "white !important",
      "&::after": {
        width: "100% !important",
      },
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    clipPath: "polygon(0 40%, 100% 20%, 100% 100%, 0% 100%)", // الشكل الأساسي
    backgroundColor: "white",
    zIndex: 2,
    filter: "drop-shadow(0 -2px 5px rgba(0,0,0,0.2))",
    transition: "clip-path 0.01s ease-out", // إضافة transition لخاصية clip-path
  },
}));
const projects = [
  {
    title: "Hotel-Hub",
    description:
      "Providing an online portal for tenants to search for suitable hotels and secure bookings. The project utilizes an easy-to-use interface that allows users to search for hotels in any region of Syria, select the appropriate hotel, and view available rooms for reservation. Additionally, users can filter search results based on various criteria such as location, price range, room type, and facilities.",
    image: Hotels,
    link: "https://phpstack-79404-3892742.cloudwaysapps.com/",
    color: "#03a9f4",
  },
  {
    title: "Game Theory",
    description:
      "Created using Python, Flask, HTML5, CSS3, and JS, this dynamic website showcases a wide range of technical skills, including algorithm development and data analysis. The website offers interactive game simulations, educational resources, providing real-world value and practical tools for businesses seeking to optimize their decision-making through game theory and the Nash equilibrium.",
    image: Game,
    link: "http://masaalaya.pythonanywhere.com/",
    color: "#009688",
  },
];

const Projects = () => {
  return (
    <Box id="Projects" sx={{ py: 10, bgcolor: "background.section" }}>
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
        projects as a developer
      </Typography>

      <Grid
        container
        spacing={{ xs: 4 }} // تباعد مختلف حسب حجم الشاشة
        sx={{
          mx: "auto",
          px: 2, // padding متجاوب
          maxWidth: "1200px", // حد أقصى للعرض لتجنب التمدد الزائد
          display: "flex",
          justifyContent: "center", // توسيط البطاقات
        }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            size={{ xs: 12, sm: 12, md: 6 }}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              width: "100%", // لجعل البطاقة تأخذ العرض الكامل
              // // maxWidth: { xs: "100%", sm: "400px", md: "450px" }, // عرض متجاوب
              // maxWidth: { xs: "none", md: "none" }, // إزالة الحد الأقصى للعرض عند حجم md
            }}
          >
            <TriangleCard
              index={index}
              sx={{
                width: "100%", // تأخذ العرض الكامل للخلية
                borderRadius: 6, // ← هنا تضاف الزوايا المستديرة

                maxWidth: { xs: 400, sm: 400, md: 450 }, // أقصى عرض متجاوب
              }}
            >
              <Box
                className="card-image-container"
                sx={{
                  position: "relative",
                  height: 250,
                  overflow: "hidden",
                  "&::before": {
                    // طبقة ملونة فوق الصورة
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    backgroundColor:
                      index === 0
                        ? "rgba(3, 169, 244, 0.4)"
                        : "rgba(0, 150, 136, 0.4)",
                    transition: "all 0.3s ease",
                    zIndex: 1,
                  },
                  "&::after": {
                    // تدرج لوني علوي
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "40%",
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  className="card-image"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    position: "relative",
                  }}
                />
              </Box>

              <CardContent
                sx={{
                  p: 3,
                  position: "relative",
                  backgroundColor: "white",
                  zIndex: 3,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    mb: 2,
                    color: project.color,
                    position: "relative",
                    textAlign: "center", // لتوسيط العنوان
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -10,
                      left: "50%", // بداية من المنتصف
                      transform: "translateX(-50%)", // لضبط المركز بدقة
                      width: "30%", // يمكنك تعديل العرض حسب الحاجة
                      height: "3px",
                      backgroundColor: project.color, // يمكنك تغيير اللون هنا
                    },
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    lineHeight: 1.6,
                    mb: 3,
                    fontSize: "1rem",
                  }}
                >
                  {project.description}
                </Typography>
                {/* <Button
                  href={project.link}
                  target="_blank"
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: project.color,
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    border: "solid 3px",
                    borderColor: project.color,
                    borderRadius: "4px",
                    boxShadow: "none",
                    position: "relative",
                    transition: "all 0.5s ease",
                    zIndex: 1,
                    overflow: "hidden", // لإخفاء الجزء الزائد من التأثير
                    // إنشاء حد زائف على اليسار للتأثير
                    "&::hi": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: "5px", // زيادة السماكة من 1px إلى 5px
                      backgroundColor: project.color,
                      transition: "all 0.5s ease",
                      transformOrigin: "left center",
                      zIndex: -1,
                    },

                    // "&:hover": {
                    //   color: "white",

                    //   // توسيع الحد الزائف ليملأ الزر بالكامل
                    //   "&::before": {
                    //     width: "100%",

                    //     opacity: 1,
                    //   },
                    // },
                  }}
                >
                  <Box
                    component="span"
                    sx={{ position: "relative", zIndex: 2 }}
                  >
                    Visit
                  </Box>
                </Button> */}

                <Button
                  href={project.link}
                  target="_blank"
                  variant="contained"
                  className="visit-button"
                  sx={{
                    backgroundColor: "white",
                    color: project.color,
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    border: "solid 3px",
                    borderColor: project.color,
                    borderRadius: "4px",
                    boxShadow: "none",
                    position: "relative",
                    transition: "all 0.5s ease",
                    zIndex: 1,
                    overflow: "hidden",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: "1px",
                      backgroundColor: project.color,
                      transition: "all 0.5s ease",
                      zIndex: -1,
                    },
                  }}
                >
                  <Box
                    component="span"
                    sx={{ position: "relative", zIndex: 2 }}
                  >
                    Visit
                  </Box>
                </Button>
              </CardContent>
            </TriangleCard>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ textAlign: "center", mx: 6 }}>
            More Projects?{" "}
            <Button
              href="https://github.com/neven4work?tab=repositories"
              target="_blank"
              sx={{
                color: "primary.main",
                fontWeight: "bolder",
                fontSize: "inherit",
                textTransform: "none",
              }}
            >
              Visit My github
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
