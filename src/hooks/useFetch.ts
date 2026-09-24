import { useEffect, useState } from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const useFetch = <T,>(
    url: string,
    method: HttpMethod = "GET",
    token?: string | null
) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        ...(method !== "GET" && {
                            "Content-Type": "application/json"
                        }),

                        ...(token && {
                            Authorization: `Bearer ${token}`
                        })
                    }
                });

                if (!response.ok) {
                    throw new Error(
                        `${response.status} ${response.statusText}`
                    );
                }

                const result: T = await response.json();

                setData(result);

            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            }
        };

        fetchData();

    }, [url, method, token]);

    return { data, error };
};