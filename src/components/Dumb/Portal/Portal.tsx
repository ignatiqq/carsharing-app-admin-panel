import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

interface IProtal {
    children: React.ReactElement
}

const Portal: React.FC<IProtal> = ({children}) => {
    const [container] = useState(() => document.createElement('div'));
    
    useEffect(() => {
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        }
    }, [])

    return ReactDOM.createPortal(children, container);
    
}

export default Portal;