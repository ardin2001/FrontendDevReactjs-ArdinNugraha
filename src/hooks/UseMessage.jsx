import { useState } from "react";
export default function UseMessage() {
    const [message, setMessage] = useState("");
    const HandlerMessage = (data) =>{
        setMessage(data);
    }
    return [message, HandlerMessage];
}