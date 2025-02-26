import { useState, useEffect } from "react";
import { WS_URL } from "../app/room/[slug]/config";


export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwODA5MTkzMS0zMTYwLTQ3YzgtYWZjZS1kZWZlNmVjMmRmZWMiLCJpYXQiOjE3MzkzOTg3MTZ9.sh5V8BL4rjtSEGUmWbtLLfvdpIi_Qa5bqL5VZwP7RKQ`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }
}