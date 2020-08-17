import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Navbar from "../Components/Navigation/Navbar";
import ListItemText from '@material-ui/core/ListItemText';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ReactPlayer from 'react-player';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: "34px 0",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  column: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "left",
    width: "100%",
    height: "642px",
    fontFamily: "Segoe UI",
    fontSize: "20px",
    color: "#7e7e7e",
    backgroundColor: "#fff",
    borderRadius: "8px",
    //boxShadow: "5px 6px 13px  grey",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
    },
  },
  main: {
    padding: "4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
    },
  },
  offline: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  typo: {
    display: "none",
    color: "#7e7e7e",
    fontWeight: "bold",
    fontFamily: "Segoe UI",
    marginLeft: "9%",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  video: {
    width: "100%",
    height: "65%",
    position: "relative",
    padding: theme.spacing(2),
    backgroundColor: "#dae3f0",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "17px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
      padding: "10px",
      height: "300px"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
      padding: "10px",
      height: "100%"
    },
  },
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  mobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
}));

const Videos = ({ baseURL }) => {
  const classes = useStyles();
  const [url, setUrl] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function getVideos() {
      try {
        const req_url = `${baseURL}/api/videos?baseURL=${baseURL}`;
        const response = await axios.get(req_url);
        setData(response.data.videos);
        console.log(response.data.videos);
      }
      catch (error) {
        console.log(error);
      }
    }

    getVideos();
  }, []);

  function toggleDisplay(id) {
    const x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <>
      <div className={classes.desktop}>
        <Container>
          <Grid className={classes.grid} container spacing={5}>
            <Grid item xs={12} sm={3} md={2}>
              <Navbar />
            </Grid>
            <Grid className={classes.main} item xs={12} sm={3} md={2}>
              <h1 style={{ color: '#7e7e7e', fontWeight: 'bold', fontFamily: 'Segoe UI', margin: '0' }}>Videos</h1>
              <div className={classes.column}>
                <Paper className={classes.paper}>
                  <List component="nav" className={classes.root}>
                    <ListItem button divider>
                      <ListItemText className={classes.item}><span style={{ fontFamily: 'Segoe UI' }}>Today</span></ListItemText>
                    </ListItem>
                    {data
                      ? data.map((video, key) => (
                        <ListItem button divider key={key} onClick={() => setUrl(video.url)}>
                          <ListItemText className={classes.item}>{video.time}</ListItemText>
                        </ListItem>
                      ))
                      : null
                    }
                  </List>
                </Paper>
              </div>
            </Grid>
            <Grid className={classes.main} item xs={12} sm={6} md={8}>
              <div style={{ width: "100%", height: "100%", marginTop: "85px" }}>
                <div className={classes.video}>
                  <ReactPlayer
                    style={{ borderRadius: "10px", overflow: "hidden" }}
                    url={url}
                    width='100%'
                    height='100%'
                    controls
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>


      <div className={classes.mobile}>
        <Grid className={classes.main} item xs={12} sm={12}>
          <h1 style={{ color: '#7e7e7e', fontFamily: 'Segoe UI', marginTop: "20px", marginBottom: '20px' }}>Videos</h1>
          <div className={classes.column}>
            <Paper className={classes.paper}>
              <List component="nav" className={classes.root}>
                <ListItem button divider>
                  <ListItemText className={classes.item}><div style={{ fontFamily: 'Segoe UI', textAlign: "center" }}>Today</div></ListItemText>
                </ListItem>
                {data
                  ? data.map((video, key) => (
                    <ListItem
                      key={key}
                      button
                      divider
                      onClick={() => toggleDisplay(`video${key + 1}`)}
                      style={{ display: "flex", flexDirection: "column", justifyContent: "left" }}
                    >
                      <ListItemText className={classes.item}>{video.time}</ListItemText>
                      <div className={classes.video} id={`video${key + 1}`}>
                        <ReactPlayer
                          style={{ borderRadius: "10px", overflow: "hidden" }}
                          url={video.url}
                          width='100%'
                          height='100%'
                        />
                      </div>
                    </ListItem>
                  ))
                  : null
                }
              </List>
            </Paper>
          </div>
        </Grid>
      </div>
    </>
  );
};
export default Videos;
