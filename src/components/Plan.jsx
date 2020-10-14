import React from "react";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import { useHistory} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    },
    text: {
        fontSize: "2em"
    }
}));

 export default function Plan () {


     const classes = useStyles();
     const history = useHistory();
    const routeNextCleanPerson = () => {
        let path = `/whosnext`;
        history.push(path)
    }   
    const routeTodo = () => {
        let path = `/todo`;
        history.push(path)
    }
    return (
        <Box className={classes.center} style={{height: "100vh"}}>
            <Box onClick={routeNextCleanPerson}>
            <img style={{height: "20vh"}} src="./images/cleaning.svg" alt="clean"/>
            <h2 className={classes.text}>Sömmering bleibt sauber!</h2>
            </Box>
            <Box onClick={routeTodo}>
            <img style={{height: "20vh"}} src="./images/improvement.svg" alt="clean"/>
            <h2 className={classes.text}>Sömmering - Evolution</h2>
            </Box>
        </Box>
    )
}
