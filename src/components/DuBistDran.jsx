import React from "react";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: "2em"
    }
}));

export const DuBistDran = () => {
    //Here weekly Calculation --> Next and Before button

    const mitglieder = ["Paul", "Eyleen", "Anthea", "Civan", "Paco"]

    const classes =useStyles();
    return (
        <Box className={classes.center} style={{height: "100vh"}}>
            <h1>Civan</h1>
        </Box>
    )
}