import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "40px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px"
    },
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
    height: "8.5rem",
    width: "5.5rem",
    textAlign: "center",
    fontFamily: "Roboto ",
    fontSize: "16px",
    color: "#fafafa",
    backgroundColor: "#e1f5fe",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(4),
      fontSize: "24px",
      display: "none",
    },
  },
  PaperMob: {
    height: "10rem",
    width: "10rem",
    display: "none",
    padding: '0px',
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontSize: "20px",
    color: "#056082",

    backgroundColor: "#FFFFFF",
    opacity: '0.16',
    borderRadius: "40px",
    boxShadow: "",
    cursor: "pointer",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
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

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={5}>
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
         
          </Paper>
        </Grid>
        <Grid className={classes.Centerbox} item xs={6} sm={12}>
          <Paper
            className={classes.PaperDesk}
            onClick={() => Router.push("/videos")}
          >
            <img
              className={classes.Img}
              src="/video.png"
              alt="Video Logo"
              style={{height: '4rem', width: '4rem', marginTop: '10px'}}
            />
        
          </Paper>
          <Paper
            className={classes.PaperMob}
            onClick={() => Router.push("/videos")}
           
          >
            <img
              className={classes.Img}
              src="/video.png"
              alt="Video Logo"
              style={{height: '4rem', width: '4rem', marginTop: '10px'}}
            />
        
          </Paper>
        </Grid>
        <Grid className={classes.Centerbox} item xs={6} sm={12}>
          <Paper
            onClick={() => Router.push("/livestream")}
            className={classes.PaperDesk}
          >
            <img
              className={classes.Img}
              src="/live.webp"
              alt="Live"
              style={{height: '3rem', width: '7rem', marginTop: '18px'}}
            />
           
          </Paper>
          <Paper
            onClick={() => Router.push("/livestream")}
            className={classes.PaperMob}
          >
            <img
              className={classes.Img}
              src="/live.webp"
              alt="Live"
              style={{height: '3rem', width: '7rem', marginTop: '18px'}}
            />
          
          </Paper>
        </Grid>
        <Grid className={classes.Centerbox} item xs={6} sm={12}>
          <Paper
            onClick={() => Router.push("/log")}
            className={classes.PaperDesk}
          >
            <img
              className={classes.Img}
              src="/log.webp"
              alt="Log"
            />
           
          </Paper>
          <Paper
            onClick={() => Router.push("/log")}
            className={classes.PaperMob}
          >
            <img
              className={classes.Img}
              src="/log.webp"
              alt="Log"
            />
          
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
