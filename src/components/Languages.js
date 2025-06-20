import React, { useEffect } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
const Languages = () => {
  useEffect(() => {
    const skills = document.querySelectorAll(".skill-progress");
    if (skills.length > 0) {
      skills.forEach((skill) => {
        skill.style.width = skill.dataset.width;
      });
    }
  }, []);
  return (
    <Box
      id="Languages"
      sx={{
        marginTop: "64px", // يعوض ارتفاع الـ Header
        py: 10,
        bgcolor: "background.section",
        position: "relative",
        
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: 30,
          left: 0,
          top: 0,
          backgroundImage:
            "linear-gradient(135deg, white 25%, transparent 25%), linear-gradient(225deg, white 25%, transparent 25%)",
          backgroundSize: "30px 30px",
          zIndex: 2,
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textTransform: "uppercase", // يحول النص إلى أحرف كبيرة
          mx: "auto", // يوسّط العنصر أفقيًا
          mb: 8, // هامش سفلي (8 * 8px = 64px)
          width: "fit-content", // عرض يتناسب مع المحتوى
          fontSize: 27, // حجم الخط
          p: "10px 20px", // padding: 10px عمودي، 20px أفقي
          border: "2px solid", // حد بسمك 2px
          borderColor: "secondary.main", // لون الحد من الثيم
          position: "relative", // مهم لعمل العناصر الزائفة
          zIndex: 100, // يضمن بقاء النص فوق العناصر الأخرى
          transition: "all 0.3s ease-in-out", // يتحكم في سلاسة التحولات
          "&:before, &:after": {
            // يطبق هذه الخصائص على العنصرين الزائفين
            content: '""', // ضروري لعرض العناصر الزائفة
            width: 12, // عرض الدوائر الصغيرة
            height: 12, // ارتفاع الدوائر
            position: "absolute", // تموضع مطلق بالنسبة للعنصر الأب
            bgcolor: "primary.main", // لون من الثيم
            borderRadius: "50%", // يجعلها دائرية
            top: "50%", // يضعها في المنتصف عموديًا
            transform: "translateY(-50%)", // يوسّطها بدقة
            transition: "all 0.3s ease-in-out", // تأثير سلس للتحولات
            zIndex: -1, // يضعها خلف النص
          },
          "&:before": { left: -30 }, // يضع الدائرة اليسرى خارج الزر
          "&:after": { right: -30 }, // يضع الدائرة اليمنى خارج الزر
          "&:hover": {
            color: "white", // يغير لون النص إلى أبيض
            borderColor: "white", // يغير لون الحد إلى أبيض
            "&:before": {
              left: 0, // تتحرك الدائرة اليسرى إلى أقصى اليسار
              width: "100%", // تتوسع لتغطي 51% من الزر
              height: "100%", // تملأ ارتفاع الزر كاملًا
              border: "0",
              borderRadius: 0, // تتحول من دائرة إلى مستطيل
            },
            "&:after": {
              right: 0, // تتحرك الدائرة اليمنى إلى أقصى اليمين
              width: "100%", // تتوسع لتغطي 49% المتبقية
              height: "100%", // تملأ الارتفاع كاملًا
              border: "0",
              borderRadius: 0, // تتحول إلى مستطيل
            },
          },
        }}
      >
        Languages
      </Typography>

      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          px: 4,
          transform: "translateY(-25px)",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography
              variant="h3"
              sx={{ position: "relative", fontSize: 22 }}
            >
              Arabic
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                border: "1px solid white",
                fontSize: 17,
                p: "3px 5px",
                borderRadius: 1,
              }}
            >
              Native
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{
              height: 40,
              bgcolor: "#eee",
              "& .MuiLinearProgress-bar": {
                bgcolor: "primary.main",
                transition: "width 0.5s linear",
              },
            }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography
              variant="h3"
              sx={{ position: "relative", fontSize: 22 }}
            >
              English
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                border: "1px solid white",
                fontSize: 17,
                p: "3px 5px",
                borderRadius: 1,
              }}
            >
              Fluent
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={70}
            sx={{
              height: 40,
              bgcolor: "#eee",
              "& .MuiLinearProgress-bar": {
                bgcolor: "primary.main",
                transition: "width 0.5s linear",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Languages;
