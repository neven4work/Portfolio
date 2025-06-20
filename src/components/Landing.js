import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link } from "react-scroll";
import nevenImage from "../assets/images/neven.jpg";

const Landing = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop: "64px", // يعوض ارتفاع الـ Header
        position: "relative", // مهم للعناصر المطلقة داخله
        "&::before": {
          content: '""', // ضروري لعناصر ::before و ::after
          position: "absolute", // تحديد موقع مطلق بالنسبة للـ Box الأب
          top: -40, // يبدأ من أعلى مع إزاحة للأعلى
          left: 0, // يبدأ من أقصى اليسار
          width: "100%", // عرض كامل
          height: "100%", // ارتفاع كامل
          bgcolor: "background.section", // اللون من السمة (زهري في حالتك)
          zIndex: -1, // يوضع خلف المحتوى
          transform: "skewY(-6deg)", // إمالة العنصر
          transformOrigin: "top left", // نقطة الارتكاز للإمالة
        },
        minHeight: "calc(100vh - 64px)", // ارتفاع كامل الشاشة ناقص ارتفاع الـ Header
        display: "flex", // تخطيط مرن
        alignItems: "center", // مركزة عمودياً
        pb: 15, // padding-bottom
        [theme.breakpoints.down("md")]: {
          // استجابة للشاشات الصغيرة
          flexDirection: "column",
          pb: 25,
        },
      }}
    >
      <Box
        sx={{
          flex: 1, // يأخذ كل المساحة المتاحة
          pl: { xs: 2, md: 10 }, // padding-left متجاوب
          pr: { xs: 2, md: 5 }, // padding-right متجاوب
          [theme.breakpoints.down("md")]: {
            // تعديلات للجوال
            width: "100%",
            textAlign: "center",
            pl: 2,
            pr: 2,
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <Box
            component="span"
            sx={{
              mb: 1, // margin-bottom
              display: "block", // يجعلها سطر منفصل
              borderRight: "1px solid", // يشبه مؤشر الكتابة
              borderColor: "transparent", // غير مرئي لكنه مهم للأنيميشن
              overflow: "hidden", // يخفي النص الزائد
              whiteSpace: "nowrap", // يمنع التفاف النص
              animation:
                "control-width 3s steps(24) 1s both, blink 1s infinite",
              [theme.breakpoints.down("md")]: { mx: "auto" }, // مركز في الجوال
            }}
          >
            Neven Ali
          </Box>
          Software Engineer
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px", // يمنع امتداد النص أكثر من اللازم
            mx: "auto", // مركز إذا كان أصغر من maxWidth
            textAlign: { xs: "justify", md: "justify" }, // محاذاة النص
            textAlignLast: { xs: "center", md: "left" }, // محاذاة آخر سطر
            p: { xs: 2, md: 0 }, // padding متجاوب
            mt: 2, // margin-top
          }}
        >
          Telecommunications engineer turned frontend developer. I transform
          Figma designs into pixel-perfect React interfaces with clean code and
          optimal performance. My HIAST engineering background brings analytical
          precision to UI development, creating interfaces that work as
          beautifully as they look. Proficient in HTML, CSS, JavaScript, and
          modern frontend workflows, I bridge the gap between design and
          technical execution.
        </Typography>
      </Box>
      <Box
        component="img"
        src={nevenImage}
        alt="Neven Ali"
        sx={{
          p: { xs: 2, md: 7 }, // padding متجاوب
          width: { xs: 300, md: 400 }, // حجم متجاوب
          borderRadius: "50%", // يجعلها دائرية
          position: "relative", // مهم للأنيميشن
          animation: "up-and-down 4s linear infinite", // حركة تذبذب
          filter: "drop-shadow(2px 4px 6px black)", // ظل
          [theme.breakpoints.down("md")]: { maxWidth: 350 }, // حجم أقصى للجوال
        }}
      />
      <Link to="services" smooth={true} duration={500}>
        <Box
          sx={{
            position: "absolute", // موقع مطلق
            bottom: 50, // من الأسفل
            left: "50%", // منتصف الأفقي
            transform: "translate(-50%)", // مركزة دقيقة
            display: { xs: "none", md: "block" }, // مخفي في الجوال
          }}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{
              fontSize: 40,
              color: "primary.main",
              animation: "bouncing 1.5s infinite", // حركة ارتداد
            }}
          />
        </Box>
      </Link>
    </Box>
  );
};

export default Landing;
