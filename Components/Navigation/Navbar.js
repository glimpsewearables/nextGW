import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Router from "next/router";
import getBaseURL from '../../utils/baseURL';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
    },
  },
  PaperDesk: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontFamily: "Segoe UI ",
    fontSize: "20px",
    color: "#7e7e7e",
    backgroundColor: "#dae3f0",
    borderRadius: "8px",
    //boxShadow: "5px 6px 13px  grey",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(4),
      fontSize: "24px",
      display: "none",
    },
  },
  PaperMob: {
    display: "none",
    padding: theme.spacing(2),
    textAlign: "center",
    fontFamily: "Segoe UI ",
    fontSize: "20px",
    color: "#7e7e7e",
    backgroundColor: "#dae3f0",
    borderRadius: "8px",
    //boxShadow: "5px 6px 13px  grey",
    cursor: "pointer",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(4),
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  Img: {
    height: "5rem",
    width: "4.5rem",
    marginBottom: "10px"
  },
  Centerbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  let baseURL;
  React.useEffect(() => {
    baseURL = getBaseURL(window);
  }, [])

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid className={classes.Centerbox} item xs={6} sm={12}>
          <Paper
            onClick={() => Router.push("/")}
            className={classes.PaperDesk}
          >
            <img
              className={classes.Img}
              src="/wifi_vectorized.png"
              alt="WiFi Logo"
            />
            WIFI
          </Paper>
          <Paper
            onClick={() => Router.push("/wifi")}
            className={classes.PaperMob}
          >
            <img
              className={classes.Img}
              src="/wifi_vectorized.png"
              alt="WiFi Logo"
            />
            WIFI
          </Paper>
        </Grid>
        <Grid className={classes.Centerbox} item xs={6} sm={12}>
          <Paper className={classes.PaperDesk}>
            <a href="http://a57f3ce3144e.ngrok.io/pikrellcam/media/videos/raspberrypi_video_2019-05-13_18.35.54.mp4">
              <img
                className={classes.Img}
                src="/video.png"
                alt="Video Logo"
              />
            </a>
            VIDEOS
          </Paper>
          <Paper className={classes.PaperMob}>
            <a href="http://a57f3ce3144e.ngrok.io/pikrellcam/media/videos/raspberrypi_video_2019-05-13_18.35.54.mp4">
              <img
                className={classes.Img}
                src="/video.png"
                alt="Video Logo"
              />
            </a>
            VIDEOS
          </Paper>
        </Grid>
        <Grid className={classes.Centerbox} item xs={6} sm={12}>
          <Paper
            onClick={() => Router.push("/livestream")}
            className={classes.PaperDesk}
          >
            <img
              className={classes.Img}
              src="/wifi_vectorized.png"
              alt="WiFi Logo"
            />
            LIVE
          </Paper>
          <Paper
            onClick={() => Router.push("/livestream")}
            className={classes.PaperMob}
          >
            <img
              className={classes.Img}
              src="/wifi_vectorized.png"
              alt="WiFi Logo"
            />
            LIVE
          </Paper>
        </Grid>
        <Grid className={classes.Centerbox} item xs={6} sm={12}>
          <Paper className={classes.PaperDesk}>
            <img
              className={classes.Img}
              src="/wifi_vectorized.png"
              alt="WiFi Logo"
            />
            WIFI
          </Paper>
          <Paper
            onClick={() => Router.push("/wifi")}
            className={classes.PaperMob}
          >
            <img
              className={classes.Img}
              src="/wifi_vectorized.png"
              alt="WiFi Logo"
            />
            WIFI
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
