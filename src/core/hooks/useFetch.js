import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const defaultOptions = {};

export function useFetch(url, options = defaultOptions) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const fetchData = useCallback(async (url, reqOptions) => {
    setLoading(true);
    setError(false);
    setData(null);

    try {
      const response = await axios(url, reqOptions);
      setData(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(url, { ...options });
  }, [url, options, fetchData]);

  const refetch = () => {
    fetchData(url, { ...options });
  };

  return { data, isLoading, isError, refetch };
}
