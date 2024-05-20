"use client"

import axios from "@/lib/axios";
import { useEffect, useState } from "react"

const useFetchTeams = () => {
    const [teamList, setTeamList] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchTeams = async () => {
            setLoading(true);
            try {
                const result = await axios.get('');
                if (result.status !== 200) {
                    throw new Error("Failed to fetch data");
                }
                
                setTeamList(result.data.dataList);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchTeams();
    }, []);

    return { teamList, loading, error };
};

export default useFetchTeams;