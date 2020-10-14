import React from 'react'
import { useHistory} from "react-router-dom";
import '../styling/BackButton.scss'

export default function BackButton() {
    
    const history = useHistory();

    const routeBack = () => {
        let path = `/`;
        history.push(path)
    }

    return (
        <div>
            <button className="back-button" onClick={routeBack}>Back</button>
        </div>
    )
}
