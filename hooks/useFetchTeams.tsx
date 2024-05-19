"use client"

import axios from "@/lib/axios";
import { useEffect, useState } from "react"

const useFetchTeams = (total?: string) => {
    const [teamList, setTeamList] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    const numberOfEmployee = total ? `?results=${total}` : '';

    useEffect(() => {
        const fetchTeams = async () => {
            setLoading(true);
            try {
                const { data, status } = await axios.get('/' + numberOfEmployee);
                if (status === 200) {
                    throw new Error("Failed to fetch data");
                }
                setTeamList(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchTeams();
    }, [numberOfEmployee]);

    return { teamList, loading, error };
};

export default useFetchTeams;