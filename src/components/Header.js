// import React, { useState, useRef, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
//   ListItemIcon,
// } from "@mui/material";
// import { Menu as MenuIcon, KeyboardArrowDown } from "@mui/icons-material";
// import { Link } from "react-scroll";

// const Header = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const timeoutRef = useRef(null);
//   const menuRef = useRef(null);
//   const isHovering = useRef(false);
//   // تنظيف المؤقت عند unmount
//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   // const handleOpenMenu = (event) => {
//   //   // إلغاء أي تأخير معلق للإغلاق
//   //   if (timeoutRef.current) {
//   //     clearTimeout(timeoutRef.current);
//   //   }
//   //   setAnchorEl(event.currentTarget);
//   // };

//   // const handleCloseMenu = () => {
//   //   // تأخير الإغلاق لمدة 300 مللي ثانية
//   //   timeoutRef.current = setTimeout(() => {
//   //     setAnchorEl(null);
//   //   }, 300);
//   // };

//   // const handleMenuEnter = () => {
//   //   // إلغاء التأخير عند دخول الماوس للقائمة
//   //   if (timeoutRef.current) {
//   //     clearTimeout(timeoutRef.current);
//   //   }
//   // };

//   const handleOpenMenu = (event) => {
//     isHovering.current = true;
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     isHovering.current = false;
//     timeoutRef.current = setTimeout(() => {
//       if (!menuRef.current?.contains(document.activeElement)) {
//         setAnchorEl(null);
//       }
//     }, 200);
//   };

//   const handleMenuEnter = () => {
//     isHovering.current = true;
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   };
//   return (
//     <AppBar
//       position="sticky"
//       sx={{ bgcolor: "white", boxShadow: "0 0 10px #ddd" }}
//     >
//       <Toolbar sx={{ justifyContent: "space-between" }}>
//         <Typography
//           variant="h6"
//           component="a"
//           href="#"
//           sx={{ color: "primary.main", fontWeight: "bold" }}
//         >
//           Main
//         </Typography>

//         <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
//           <Link to="services" smooth={true} duration={500}>
//             <Typography
//               sx={{
//                 color: "text.primary",
//                 cursor: "pointer",
//                 "&:hover": { color: "primary.main" },
//               }}
//             >
//               Services
//             </Typography>
//           </Link>
//           <Link to="features" smooth={true} duration={500}>
//             <Typography
//               sx={{
//                 color: "text.primary",
//                 cursor: "pointer",
//                 "&:hover": { color: "primary.main" },
//               }}
//             >
//               Projects
//             </Typography>
//           </Link>
//           <Typography
//             onMouseEnter={handleOpenMenu}
//             onMouseLeave={handleCloseMenu}
//             sx={{
//               color: "text.primary",
//               cursor: "pointer",
//               "&:hover": { color: "primary.main" },
//               display: "flex",
//               alignItems: "center",
//               gap: 0.5,
//             }}
//           >
//             Other Links
//             <KeyboardArrowDown
//               sx={{
//                 transform: open ? "rotate(180deg)" : "rotate(0deg)",
//                 transition: "transform 0.3s ease",
//               }}
//             />
//           </Typography>
//         </Box>

//         <IconButton sx={{ display: { md: "none" } }} onClick={handleClick}>
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>

//       {/* <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           onMouseEnter: handleMenuEnter, // إبقاء مفتوحة عند دخول القائمة
//           onMouseLeave: handleCloseMenu, // بدء إغلاق عند مغادرة القائمة
//         }}
//         PaperProps={{
//           onMouseLeave: handleCloseMenu, // بدء إغلاق عند مغادرة الورقة
//           sx: {
//             width: 300,
//             p: 2,
//             pointerEvents: "auto", // تأكد من تفعيل أحداث الماوس
//           },
//         }}
//       > */}
//       <Menu
//         ref={menuRef}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           onMouseEnter: handleMenuEnter,
//           onMouseLeave: handleCloseMenu,
//         }}
//         PaperProps={{
//           onMouseEnter: handleMenuEnter,
//           onMouseLeave: handleCloseMenu,
//           sx: {
//             width: 300,
//             p: 2,
//             pointerEvents: "auto",
//           },
//         }}
//       >
//         {/* عناصر القائمة مع إضافة onMouseEnter */}
//         {[
//           "services",
//           "features",
//           "work-steps",
//           "lan",
//           "jobs",
//           "softskills",
//           "footer",
//         ].map((item) => (
//           <MenuItem
//             key={item}
//             onClick={handleClose}
//             onMouseEnter={handleMenuEnter}
//           >
//             <Link to={item} smooth={true} duration={500} onClick={handleClose}>
//               {item === "features"
//                 ? "Projects"
//                 : item === "work-steps"
//                 ? "How It Works"
//                 : item === "lan"
//                 ? "Languages"
//                 : item === "jobs"
//                 ? "Latest Jobs"
//                 : item === "softskills"
//                 ? "Soft Skills"
//                 : item === "footer"
//                 ? "Contact me"
//                 : item.charAt(0).toUpperCase() + item.slice(1)}
//             </Link>
//           </MenuItem>
//         ))}
//       </Menu>
//       {/* <MenuItem onClick={handleClose} onMouseEnter={handleMenuEnter}>
//           <Link
//             to="services"
//             smooth={true}
//             duration={500}
//             onClick={handleClose}
//           >
//             Services
//           </Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose} onMouseEnter={handleMenuEnter}>
//           <Link
//             to="features"
//             smooth={true}
//             duration={500}
//             onClick={handleClose}
//           >
//             Projects
//           </Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose} onMouseEnter={handleMenuEnter}>
//           <Link
//             to="work-steps"
//             smooth={true}
//             duration={500}
//             onClick={handleClose}
//           >
//             How It Works
//           </Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose} onMouseEnter={handleMenuEnter}>
//           <Link to="lan" smooth={true} duration={500} onClick={handleClose}>
//             Languages
//           </Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose} onMouseEnter={handleMenuEnter}>
//           <Link to="jobs" smooth={true} duration={500} onClick={handleClose}>
//             Latest Jobs
//           </Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose} onMouseEnter={handleMenuEnter}>
//           <Link
//             to="softskills"
//             smooth={true}
//             duration={500}
//             onClick={handleClose}
//           >
//             Soft Skills
//           </Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose} onMouseEnter={handleMenuEnter}>
//           <Link to="footer" smooth={true} duration={500} onClick={handleClose}>
//             Contact me
//           </Link>
//         </MenuItem>
//       </Menu> */}
//     </AppBar>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, KeyboardArrowDown } from "@mui/icons-material";
import { Link } from "react-scroll";

import Divider from "@mui/material/Divider";
// Icons
import TextSnippetIcon from "@mui/icons-material/TextSnippet"; //How it works
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"; //languages
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Header = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuTimeout = useRef(null);
  const menuRef = useRef(null); // مرجع لعنصر القائمة
  const triggerRef = useRef(null); // مرجع لعنصر "More"
  const open = Boolean(anchorEl);

  // 2. تأثير تغيير الخلفية عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. تنظيف المؤقتات عند إغلاق المكون
  useEffect(() => {
    return () => {
      if (menuTimeout.current) clearTimeout(menuTimeout.current);
    };
  }, []);

  // 4. معالجات أحداث القائمة
  const handleMenuOpen = () => {
    clearTimeout(menuTimeout.current);
    setAnchorEl(triggerRef.current);
  };

  const handleMenuClose = () => {
    menuTimeout.current = setTimeout(() => {
      setAnchorEl(null);
    }, 300); // تأخير 300 مللي ثانية قبل الإغلاق
  };

  const cancelMenuClose = () => {
    clearTimeout(menuTimeout.current);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // 5. التحقق إذا كان الماوس ينتقل إلى القائمة
  const isMouseLeavingToMenu = (event) => {
    return menuRef.current?.contains(event.relatedTarget);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        // bgcolor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        // boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        bgcolor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        height: "64px", // ارتفاع ثابت للـ Header
        zIndex: theme.zIndex.drawer + 1, // تأكد أنه فوق كل العناصر
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          py: 1,
          px: { xs: 2, md: 10 }, // نفس القيم المستخدمة في Landing
          maxWidth: "1280px", // عرض أقصى للمحتوى
          mx: "auto", // مركزة المحتوى
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          component="a"
          href="#"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textDecoration: "none",
          }}
        >
          Main
        </Typography>

        {/* روابط القائمة الرئيسية */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center",
          }}
        >
          <Link to="Services" smooth={true} duration={500}>
            <Typography
              sx={{
                color: "text.primary",
                cursor: "pointer",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
                transition: "color 0.2s",
              }}
            >
              Services
            </Typography>
          </Link>

          <Link to="Projects" smooth={true} duration={500}>
            <Typography
              sx={{
                color: "text.primary",
                cursor: "pointer",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
                transition: "color 0.2s",
              }}
            >
              Projects
            </Typography>
          </Link>

          {/* قائمة More المنسدلة */}
          <Box
            ref={triggerRef}
            onMouseEnter={handleMenuOpen}
            onMouseLeave={(e) => !isMouseLeavingToMenu(e) && handleMenuClose()}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Typography
              sx={{
                color: "text.primary",
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
                transition: "color 0.2s",
              }}
            >
              Other Links
            </Typography>
            <KeyboardArrowDown
              sx={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                color: "text.primary",
              }}
            />
          </Box>
        </Box>

        {/* زر القائمة للجوال */}
        <IconButton
          sx={{ display: { md: "none" }, color: "text.primary" }}
          onClick={handleClickMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* القائمة المنسدلة */}
      <Menu
        ref={menuRef}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          onMouseEnter: cancelMenuClose,
          onMouseLeave: handleMenuClose,
          sx: { py: 0 },
        }}
        PaperProps={{
          onMouseLeave: handleMenuClose,
          sx: {
            width: 220,
            overflow: "hidden",
            mt: 1,
            p: 2,
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            borderBottom: "3px solid ",
            borderBottomColor: "primary.main",
          },
        }}
        transitionDuration={150}
        disableAutoFocusItem
      >
        <MenuItem onClick={() => setAnchorEl(null)}>
          <Link
            to="Work Steps"
            smooth={true}
            duration={500}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <ContentPasteSearchIcon sx={{ color: "primary.main" }} />
            <Typography
              sx={{ fontWeight: 500, width: "100%", color: "primary.main" }}
            >
              How It Works
            </Typography>
          </Link>
        </MenuItem>
        <Divider variant="middle" component="li" />
        <MenuItem onClick={() => setAnchorEl(null)}>
          <Link
            to="Languages"
            smooth={true}
            duration={500}
            offset={-64} // هذا الرقم يجب أن يساوي ارتفاع الـ Header الخاص بك
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <LibraryBooksIcon sx={{ color: "primary.main" }} />
            <Typography
              sx={{ fontWeight: 500, width: "100%", color: "primary.main" }}
            >
              Languages
            </Typography>
          </Link>
        </MenuItem>
        <Divider variant="middle" component="li" />
        <MenuItem onClick={() => setAnchorEl(null)}>
          <Link
            to="Latest Jobs"
            smooth={true}
            duration={500}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <CheckCircleOutlineIcon sx={{ color: "primary.main" }} />
            <Typography
              sx={{ fontWeight: 500, width: "100%", color: "primary.main" }}
            >
              Latest Jobs
            </Typography>
          </Link>
        </MenuItem>

        <Divider variant="middle" component="li" />
        <MenuItem onClick={() => setAnchorEl(null)}>
          <Link
            to="Soft Skills"
            smooth={true}
            duration={500}
            offset={-64} // هذا الرقم يجب أن يساوي ارتفاع الـ Header الخاص بك
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <PersonIcon sx={{ color: "primary.main" }} />
            <Typography
              sx={{ fontWeight: 500, width: "100%", color: "primary.main" }}
            >
              Soft Skills
            </Typography>
          </Link>
        </MenuItem>
        <Divider variant="middle" component="li" />
        <MenuItem onClick={() => setAnchorEl(null)}>
          <Link
            to="Contact Me"
            smooth={true}
            duration={500}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <PermContactCalendarIcon sx={{ color: "primary.main" }} />
            <Typography
              sx={{ fontWeight: 500, width: "100%", color: "primary.main" }}
            >
              Contact Me
            </Typography>
          </Link>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
