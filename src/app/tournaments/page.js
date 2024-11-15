// src/app/tournaments/page.js
"use client";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Tournaments() {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        async function fetchTournaments() {
            const res = await fetch("/api/tournaments");
            const data = await res.json();
            setTournaments(data);
        }
        fetchTournaments();
    }, []);

    return (
        <div>
            <Head>
                <title>(Unoffical) Autodarts League</title>
            </Head>
            <h1>Tournaments</h1>
            <ul>
                {tournaments.map((tournament) => (
                    <li key={tournament.tournament_id}>
                        {tournament.name} - {tournament.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}
