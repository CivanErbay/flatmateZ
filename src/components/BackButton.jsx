import React from 'react'
import { useHistory} from "react-router-dom";

export default function BackButton() {
    
    const history = useHistory();

    const routeBack = () => {
        let path = `/`;
        history.push(path)
    }

    return (
        <div>
            <button onClick={routeBack}>Back</button>
        </div>
    )
}
