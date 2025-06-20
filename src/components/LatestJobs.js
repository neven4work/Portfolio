import React from "react";
import { Box, Typography, Grid, Avatar, IconButton } from "@mui/material";
import { LinkedIn, Facebook, Telegram } from "@mui/icons-material";
import disruptemImg from "../assets/images/photo_2025-05-15_16-35-16.jpg";
import tabtabgoImg from "../assets/images/photo_2024-03-18_08-04-08.jpg";
import sourceImg from "../assets/images/source.jpg";
import freelanceImg from "../assets/images/freelance.jpg";
const jobs = [
  {
    company: "Disrupt'em",
    position: "QA Specialist",
    period: "since Mar 2025",
    image: disruptemImg,
    social: [
      {
        icon: <LinkedIn />,
        link: "https://www.linkedin.com/company/disruptem/",
      },
      { icon: <Facebook />, link: "https://www.facebook.com/disruptem/" },
    ],
  },
  {
    company: "TabTabGo",
    position: "QA Engineer",
    period: "Jan 2024 - Mar 2025",
    image: tabtabgoImg,
    social: [
      {
        icon: <LinkedIn />,
        link: "https://www.linkedin.com/company/tabtabgo/",
      },
      { icon: <Facebook />, link: "https://www.facebook.com/TabTabGo/" },
    ],
  },
  {
    company: "Source Code Company",
    position: "Software Tester",
    period: "Aug 2022 - Dec 2023",
    image: sourceImg,
    social: [
      {
        icon: <LinkedIn />,
        link: "https://www.linkedin.com/company/sourcecodesyr/",
      },
      { icon: <Facebook />, link: "https://www.facebook.com/sourcecodesyr" },
    ],
  },
  {
    company: "Freelance",
    position: "Front-End Developer",
    period: "Dec 2021 - Dec 2023",
    image: freelanceImg,
    social: [
      { icon: <LinkedIn />, link: "https://www.linkedin.com/in/masa-al" },
      { icon: <Telegram />, link: "https://mostaql.com/u/Masaalaya" },
    ],
  },
];

const LatestJobs = () => {
  return (
    <Box
      id="Latest Jobs"
      sx={{
        py: 10, // padding عمودي (أعلى وأسفل) بقيمة 10 وحدات
        mx: "auto", // margin أفقي تلقائي (لتوسيط المحتوى)
        display: "flex",
        flexDirection: "column", // ترتيب العناصر بشكل عمودي
        position: "relative", // تحديد position كنسبي للعناصر الداخلية المطلقة
        textAlign: "center", // محاذاة النص إلى الوسط
        // "&::before": {
        //   content: '""',
        //   position: "absolute",
        //   width: "100%",
        //   height: 30,
        //   left: 0,
        //   top: 0,
        //   backgroundImage:
        //     "linear-gradient(135deg, white 25%, transparent 25%), linear-gradient(225deg, white 25%, transparent 25%)",
        //   backgroundSize: "30px 30px",
        //   zIndex: 2,
        // },
      }}
    >
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
        Latest Jobs
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{ px: 2, mx: "auto", textAlign: "start" }}
      >
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ mx: "auto" }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 1, // حواف دائرية خفيفة
                mx: "auto", // توسيط أفقي
                maxWidth: "100%", // أقصى عرض 90%
                py: 1,
                "&:hover": {
                  // تأثيرات عند التحويم
                  "&::after": {
                    width: "calc(100% - 40px)",
                  },
                  "& .MuiAvatar-img": {
                    filter: "grayscale(100%)", // تحويل الصورة إلى أبيض وأسود
                  },
                  "& .job-title": {
                    color: "text.secondary", // تغيير لون النص
                  },
                },
                "&::before, &::after": {
                  // عناصر زائفة لإنشاء تأثيرات التصميم
                  content: '""',
                  position: "absolute",
                  bgcolor: "background.section",
                  height: "90%",
                  right: 10,
                  top: 30,
                  borderRadius: 2,
                  transition: "all 0.4s", // تأثير انتقالي
                },
                "&::before": {
                  width: "calc(100% - 40px)",
                  zIndex: -2,
                },
                "&::after": {
                  zIndex: -1,
                  width: 0,
                  bgcolor: "#e4e4e4",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pt: 7.5,
                  justifyContent: "center",
                }}
              >
                <Avatar
                  src={job.image}
                  alt={job.company}
                  sx={{
                    width: 220,
                    height: 220,
                    borderRadius: "16px", // حواف دائرية متوسطة
                    transition: "all 0.4s",
                    boxShadow:
                      "4px 4px 4px 4px rgba(142, 0, 0, 0.4), 0px 1px 1px 0px rgba(142, 0, 0, 0.4)",
                  }}
                  variant="square" // تغيير الشكل من دائري إلى مربع
                />
                <Box
                  sx={{
                    width: 55,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2.5,
                    pr: 1,
                  }}
                >
                  {job.social.map((social, i) => (
                    <IconButton
                      key={i}
                      href={social.link}
                      target="_blank"
                      sx={{
                        width: 40,
                        height: 30,
                        "&:hover": {
                          "& .MuiSvgIcon-root": {
                            color: "primary.main",
                          },
                        },
                      }}
                    >
                      {React.cloneElement(social.icon, {
                        sx: { color: "text.secondary", transition: "all 0.4s" },
                      })}
                    </IconButton>
                  ))}
                </Box>
              </Box>
              <Box sx={{ pl: 5 }}>
                <Typography
                  className="job-title"
                  sx={{
                    mb: 0,
                    pt: 2,
                    color: "primary.main",
                    fontSize: 20,
                    transition: "all 0.4s",
                  }}
                >
                  {job.position}
                </Typography>
                <Typography sx={{ mt: 1, mb: 3, fontSize: 14 }}>
                  {job.company} <br />
                  {job.period}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestJobs;
