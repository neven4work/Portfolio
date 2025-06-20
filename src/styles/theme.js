import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8e0000a8",
    },
    secondary: {
      main: "#4a596ced",
    },
    background: {
      default: "#f9f9f9",
      section: "#c7927461",
    },
    text: {
      primary: "#4a596ced",
      secondary: "#777",
    },
  },
  typography: {
    fontFamily: '"Cairo", sans-serif',
    h1: {
      fontSize: "40px",
      letterSpacing: "-1px",
      color: "#4a596ced",
      "@media (max-width:767px)": {
        fontSize: "28px",
      },
    },
    h2: {
      fontSize: "33px",
      position: "relative",
      width: "fit-content",
      margin: "0 auto",
    },
    h3: {
      fontSize: "25px",
      color: "#4a596ced",
    },
    body1: {
      fontSize: "20px",
      lineHeight: 1.5,
      color: "#4a596ced",
      "@media (max-width:500px)": {
        fontSize: "14px",
        lineHeight: 1.4,
      },
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          flexWrap: "wrap",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit",
          "&:hover": {
            color: "#8e0000a8",
          },
        },
      },
    },
  },
});

export default theme;
