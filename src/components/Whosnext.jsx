import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    center: {
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    centerColumn: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: "4em"
    },
    buttonStyleRight: {
        backgroundColor: "#3F7CAC",
        padding: "1em",
        borderRadius: "30px",
        boxShadow: "-10px 0 7px #3F7CAC"
    },
    buttonStyleLeft: {
        backgroundColor: "#3F7CAC",
        padding: "1em",
        borderRadius: "30px",
        boxShadow: "10px 0 7px #3F7CAC",
    }
}));

export const Whosnext = () => {
    const mitglieder = ["Eyleen", "Paco", "Anthea", "Paul", "Civan"]
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 0);
    let week = Math.ceil((((now - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    const putzPlanCalc = () => {
        return week % mitglieder.length
    }

    const currWeek = ["Vorvorletzte W.",
        "Vorletzte Woche",
        "Letzte Woche",
        "Diese Woche",
        "Nächste Woche",
        "Übernächste Woche",
        "Überübernächste W."]

    const [currentPutzperson, setCurrentPutzperson] = useState("")
    const [currentPersonIndex, setCurrentPersonIndex] = useState(putzPlanCalc())
    const [weekDisplayIndex, setWeekDisplayIndex] = useState(3)

    console.log(currentPersonIndex)
    console.log(weekDisplayIndex)
    const nextWeekButton = () => {
        if (currentPersonIndex === 4) {
            setCurrentPersonIndex(0)
            setWeekDisplayIndex(weekDisplayIndex+1)
        } else {
            setCurrentPersonIndex(currentPersonIndex + 1)
            setWeekDisplayIndex(weekDisplayIndex + 1)
        }
    }
    const lastWeekButton = () => {
        if (currentPersonIndex === 0) {
            setCurrentPersonIndex(4)
            setWeekDisplayIndex(weekDisplayIndex - 1)
        } else {
            setCurrentPersonIndex(currentPersonIndex - 1)
            setWeekDisplayIndex(weekDisplayIndex - 1)
        }
    }

    useEffect(() => {
        setCurrentPutzperson(mitglieder[currentPersonIndex])

    }, [currentPersonIndex])

    useEffect(() => {
        setCurrentPutzperson(mitglieder[putzPlanCalc()])
    }, [])


    const classes = useStyles();
    return (
        <Box className={classes.centerColumn}>
            <Box style={{height: "40vh",width: "100%"}} className={classes.centerColumn}>
                <h2 style={{fontSize: "2em", padding: "1em", backgroundColor: "#61dafb", color: "#282c34", borderRadius: "20px",  boxShadow: "0 -2px 10px rgba(0, 0, 0, 1)"}}>
                    {weekDisplayIndex > 6 || weekDisplayIndex < 0 ? "Übertreib ma nich" : currWeek[weekDisplayIndex]}</h2>
            </Box>

            <Box className={classes.center} style={{height: "20vh",width: "100%"}}>
                <Box onClick={lastWeekButton} className={classes.buttonStyleLeft}><img style={{height: "20px"}}
                                                                                       src="./images/leftArrow.svg"
                                                                                       alt=""/>
                </Box>
                <h1 className={classes.text}>{currentPutzperson}</h1>

                <Box onClick={nextWeekButton} className={classes.buttonStyleRight}><img style={{height: "20px"}}
                                                                                        src="./images/rightArrow.svg"
                                                                                        alt=""/></Box>
            </Box>
            <Box style={{height: "40vh", display: "flex", alignItems: "flex-end", marginTop: "-1em"}}>  Aktuelle Kalenderwoche: {week} </Box>
        </Box>
    )
}