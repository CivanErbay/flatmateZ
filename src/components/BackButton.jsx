import React from 'react'
import { useHistory} from "react-router-dom";
import '../styling/BackButton.scss'

export default function BackButton({style}) {
    
    const history = useHistory();

    const routeBack = () => {
        let path = `/`;
        history.push(path)
    }

    return (
        <div style={style}>
            <button className="back-button" onClick={routeBack}>Back</button>
        </div>
    )
}
