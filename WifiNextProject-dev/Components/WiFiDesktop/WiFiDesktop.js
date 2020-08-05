import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  box: {
    border: "1px ",
    boxShadow: "1px 1px 4px grey",
    backgroundColor: "#f2f2f2",
    borderRadius: "1rem",
    height: "23rem",
    width: "30rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
  },
  INPUT: {
    marginLeft: "3rem",
    // '&::-Input::placeholder':{
    //   opacity: 0
    // },
    // '&::Input:focus::placeholder':{
    //   opacity: 1
    // }
  },
  Label: {
    fontFamily: "Segoe UI Semibold",
    marginLeft: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
    },
  },
}));
let data = [
  { name: "SSID1" },
  { name: "SSID2" },
  { name: "SSID3" },
  { name: "SSID4" },
  { name: "SSID5" },
];
export default function WiFiDesktop() {
  const [button, setButton] = useState("scan");
  const [Data, setData] = useState([]);

  const classes = useStyles();
  const changeScantoConnect = () => {
    setButton("Connect");
    setData(data);
  };

  const [isClicked, setIsClicked] = useState(false);
  const Clicked = (name) => {
    const changeData = Data.map((wifi) => {
      if (wifi.name === name) {
        return { placeholder: "Enter Password", name };
      } else {
        return { name: wifi.name };
      }
    });
    setData(changeData);
  };
  const UnClicked = (name) => {
    const changeData = Data.map((wifi) => {
      if (wifi.name === name) {
        return { placeholder: "", name };
      } else {
        return { name: wifi.name };
      }
    });
    setData(changeData);
  };
  return (
    <div className={classes.box}>
      {Data.map((data) => (
        <div style={{ borderBottom: "1px solid" }}>
          <span className={classes.Label}>
            {data.name}
            <Input
              className={classes.INPUT}
              disableUnderline={true}
              placeholder={data.placeholder}
              onFocus={() => Clicked(data.name)}
              onBlur={() => UnClicked(data.name)}
            />
          </span>
        </div>
      ))}
      <Button
        onClick={changeScantoConnect}
        style={{
          width: "14rem",
          width: "14rem",
          color: "#7e7e7e",
          fontFamily: "Segoe UI Semibold",
        }}
        variant="contained"
      >
        {button}
      </Button>
    </div>
  );
}
