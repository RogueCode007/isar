import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { apiRoutes } from "../routes/apiRoutes";

export function useWebSocket(url) {
  const [data, setData] = useState(null);
  const [isActionRequired, setIsActionRequired] = useState(false);
  const wsRef = useRef(null);

  useEffect(() => {
    wsRef.current = new WebSocket(url);
    wsRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setData(message);
      if (message.IsActionRequired) {
        setIsActionRequired(true);
        wsRef.current.close();
      }
    };

    return () => {
      wsRef.current.close();
    };
  }, [url]);

  useEffect(() => {
    wsRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setData(message);
      if (message.IsActionRequired) {
        setIsActionRequired(true);
        wsRef.current.close();
      }
    };
  }, [wsRef]);
  const actOnSpectrum = async () => {
    try {
      const response = await axios.get(`${apiRoutes.actOnSpectrum}`);
      console.log(response);
      setIsActionRequired(false);
      wsRef.current = new WebSocket(url);
    } catch (error) {
      console.error("Error acting on Spectrum:", error);
    }
  };

  return { data, isActionRequired, actOnSpectrum };
}
