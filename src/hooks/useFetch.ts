import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                    console.error('Fetch failed: ', error.message);
                } else throw error
            }
        }
        fetchData();
    }, [url])

    return { data, isLoading, error };
}