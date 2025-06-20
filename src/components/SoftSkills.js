import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import {
  Favorite as TeamworkIcon,
  Handshake as NegotiateIcon,
  ThumbUp as ConflictIcon,
  People as LeadershipIcon,
  Shuffle as AdaptabilityIcon,
  HourglassTop as SelfLearningIcon,
} from "@mui/icons-material";

const skills = [
  {
    icon: <TeamworkIcon fontSize="large" />,
    title: "Teamwork",
    details: "images/sanad.jpg",
  },
  {
    icon: <NegotiateIcon fontSize="large" />,
    title: "Negotiate",
    details: "images/sanad.jpg",
  },
  {
    icon: <ConflictIcon fontSize="large" />,
    title: "Conflict resolution",
    details: "images/sanad.jpg",
  },
  {
    icon: <LeadershipIcon fontSize="large" />,
    title: "Leadership",
    details: "images/sanad.jpg",
  },
  {
    icon: <AdaptabilityIcon fontSize="large" />,
    title: "Adaptability",
    details: "images/sanad.jpg",
  },
  {
    icon: <SelfLearningIcon fontSize="large" />,
    title: "Self-learning",
    details: "images/sanad.jpg",
  },
];

const SoftSkills = () => {
  return (
    <Box
      id="Soft Skills"
      sx={{
        py: 10,
        bgcolor: "background.section",
        position: "relative",
        mx: "auto",
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
        Soft Skills
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          px: 2,
          justifyContent: "center", // هذا سيتوسط العناصر أفقيًا
          maxWidth: "1200px", // حد أقصى للعرض لتجنب التمدد الزائد
          mx: "auto", // توسيط الـ Grid نفسه
          counterReset: "services",
        }}
      >
        {skills.map((skill, index) => (
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
                height: 230, // ارتفاع ثابت للبطاقة
                maxWidth: 350,
                width: "100%", // لجعل البطاقة تأخذ العرض الكامل
                maxWidth: { xs: "none", md: "none" }, // إزالة الحد الأقصى للعرض عند حجم md
                display: "flex",
                flexDirection: "column",
                bgcolor: "white",
                boxShadow:
                  "0 12px 20px 0 rgba(0,0,0,0.13), 0 2px 4px 0 rgba(0,0,0,0.12)",
                transition: "all 0.4s",
                position: "relative",
                "&:hover": {
                  transform: "translateY(-10px)",
                  "&::before": {
                    width: "100%",
                  },
                  "& .top-border-effect": {
                    width: "100%",
                    left: 0,
                  },
                },
                "&::before": {
                  content: '""',

                  height: 3,
                  top: -3,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 0,
                  position: "absolute",
                  bgcolor: "primary.main",
                  transition: "width 0.4s",
                },
              }}
            >
              {/* إضافة عنصر للتأثير العلوي */}
              <Box
                className="top-border-effect"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  height: 3,
                  width: 0,
                  bgcolor: "primary.main",
                  transition: "all 0.4s ease-in-out",
                }}
              />
              <Box sx={{ textAlign: "center", mt: 5 }}>
                {React.cloneElement(skill.icon, {
                  sx: { fontSize: 40, color: "primary.main" },
                })}
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontSize: 25, color: "primary.main", pb: 3 }}
                >
                  {skill.title}
                </Typography>
              </CardContent>
              <Button
                href={skill.details}
                target="_blank"
                fullWidth
                sx={{
                  textAlign: "right",
                  p: 2,
                  position: "relative",
                  bgcolor: "#f9f9f9",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "flex-end", // هذه الخاصية ستحرك النص لليمين

                  "&::before": {
                    content: "counter(services)",
                    counterIncrement: "services", // زيادة العداد هنا فقط
                    position: "absolute",
                    bgcolor: "primary.main",
                    color: "white",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: 100,
                    fontSize: 30,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pr: 2,
                    counterIncrement: "services",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bgcolor: "#d5d5d5", // لون الجزء الرمادي
                    top: 0,
                    left: 80, // المسافة من اليسار
                    width: 50, // عرض الجزء الرمادي
                    height: "calc(100% + 0.4px)",
                    transform: "skewX(-30deg)", // إمالة الجزء الرمادي
                  },
                }}
              >
                Details
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SoftSkills;
