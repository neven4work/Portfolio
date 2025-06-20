import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { LinkedIn, Email, Telegram } from "@mui/icons-material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const ContactMe = () => {
  return (
    <Box
      id="Contact Me"
      sx={{
        bgcolor: "#f3f3f3",
        py: 5,
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "30px",
          left: 0,
          bottom: "100%",
        },
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={4}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* العنوان والروابط الاجتماعية */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h3" component="div">
              <Link
                href="mailto:masaal808@gmail.com?subject=contact"
                sx={{
                  color: "primary.main",
                  fontSize: "50px",
                  textDecoration: "none",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Neven Ali
              </Link>
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 3,
                mb: 4,
              }}
            >
              <IconButton
                href="https://www.linkedin.com/in/neven-ali-85274424a"
                target="_blank"
                sx={{
                  bgcolor: "#b9b9b9",
                  color: "#ffffffd6",
                  width: 50,
                  height: 50,
                  "&:hover": {
                    bgcolor: "#1877f2",
                    color: "white",
                  },
                }}
              >
                <LinkedIn fontSize="large" />
              </IconButton>

              <IconButton
                href="mailto:nevenali2019@gmail.com?subject=contact"
                target="_blank"
                sx={{
                  bgcolor: "#b9b9b9",
                  color: "#ffffffd6",
                  width: 50,
                  height: 50,
                  "&:hover": {
                    bgcolor: "#ff0000",
                    color: "white",
                  },
                }}
              >
                <Email fontSize="large" />
              </IconButton>

              <IconButton
                href="https://t.me/NevenAli7"
                target="_blank"
                sx={{
                  bgcolor: "#b9b9b9",
                  color: "#ffffffd6",
                  width: 50,
                  height: 50,
                  "&:hover": {
                    bgcolor: "#1da1f2",
                    color: "white",
                  },
                }}
              >
                <Telegram fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* العنوان والهاتف */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              color: "#555",
              textAlign: "center",
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Box component="span" sx={{ mr: 1, mt: 1 }}>
                <LocationOnIcon />
              </Box>
              Syria, Damascus, Mazzeh
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* حقوق النشر */}
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mt: 4,
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Neven Ali. All rights reserved.
      </Typography>
    </Box>
  );
};

export default ContactMe;
