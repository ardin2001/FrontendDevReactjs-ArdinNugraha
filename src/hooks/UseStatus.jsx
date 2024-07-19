import { useState } from "react";
export default function UseStatus(){
    const [status, setStatus] = useState(false);
    const HandlerStatus = () => {
        setStatus(prev => !prev)
    }

    return [status, HandlerStatus]
}