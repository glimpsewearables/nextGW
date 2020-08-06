import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    boxShadow: "8px 7px 14px grey",
    borderRadius: "1rem",
  },
  item: {
    margin: "1.2rem",
  },
  button: {
    width: "100%",
    marginBottom: "1rem",
    backgroundColor: "#d8d8d8",
    marginTop: "-0.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 11px 15px -10px black",
    fontFamily: "Segoe UI Semibold",
    fontSize: "20px",
    color: "	#7e7e7e",
  },
  INPUT: {
    width: "100%",
  },
}));

const Connect = (props) => {
  const classes = useStyles();
  const [Data, setData] = useState([]);
  const ScanData = () => {
    setData(data);
  };
  return (
    <Container>
      <h1
        style={{
          color: "#7e7e7e",
          fontWeight: "bold",
          fontFamily: "Segoe UI ",
        }}
      >
        WiFi
      </h1>
      <List component="nav" className={classes.root}>
        <Button onClick={ScanData} className={classes.button}>
          SSID1
        </Button>
        <ListItem>
          <Input
            className={classes.INPUT}
            disableUnderline={true}
            placeholder="Enter Password"
          />
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              width: "14rem",
              color: "#7e7e7e",
              fontFamily: "Segoe UI Semibold",
            }}
            variant="contained"
          >
            Connect
          </Button>
        </ListItem>
      </List>
    </Container>
  );
};
export default Connect;
