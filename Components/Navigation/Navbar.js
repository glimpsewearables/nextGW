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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#dae3f0",
    flexDirection: 'column',
    borderRadius: "20px",
    // boxShadow: "4px 2px 11px grey",
    cursor: "pointer",
    fontFamily: "Segoe UI ",
    fontSize: "16px",
    color: "#7e7e7e",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(4),
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
          <Paper className={classes.paper} onClick={() => Router.push("/wifi")}>
            <img
              className={classes.Img}
              src="/wifi_vectorized.png"
              alt="WiFi Logo"
            />
            WIFI
          </Paper>
        </Grid>
        <Grid className={classes.Centerbox} item xs={6} sm={12}>
          <Paper className={classes.paper}>
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
          <Paper className={classes.paper} onClick={() => Router.push("/wifi")}>
            <img
              className={classes.Img}
              src="/wifi_vectorized.png"
              alt="WiFi Logo"
            />
            WIFI
          </Paper>
        </Grid>
        <Grid className={classes.Centerbox} item xs={6} sm={12}>
          <Paper className={classes.paper} onClick={() => Router.push("/wifi")}>
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
