import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    center: {
        display: "flex",

        justifyContent: "space-around",
        alignItems: "center"
    },
    text: {
        fontSize: "5em"
    }
}));

export const Whosnext = () => {

    const [currentPutzperson, setCurrentPutzperson] = useState("")
    const mitglieder = ["Paul", "Eyleen", "Anthea", "Civan", "Paco"]


    useEffect (() => {
        let now = new Date();
        let onejan = new Date(now.getFullYear(), 0, 1);
        let week = Math.ceil( (((now - onejan) / 86400000) + onejan.getDay() + 1) / 7 );

        setCurrentPutzperson(mitglieder[week%mitglieder.length])

    }, [])

    const classes = useStyles();
    return (
        <Box className={classes.center} style={{height: "100vh"}}>
            <Box><img style={{height: "25px"}} src="./images/leftArrow.svg" alt=""/> </Box>
            <h1 className={classes.text}>{currentPutzperson}</h1>
            <Box><img style={{height: "25px"}} src="./images/rightArrow.svg" alt=""/></Box>
        </Box>
    )
}