"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [tournaments, setTournaments] = useState([]);
    const [matches, setMatches] = useState([]);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        fetch("/api/tournaments")
            .then((res) => {
                console.log("Response:", res);
                return res.json();
            })
            .then((data) => {
                setTournaments(data);
                console.log("Tournaments:", data);
            })
            .catch((err) => console.error("Failed to load tournaments:", err));

        fetch("/api/matches")
            .then((res) => {
                console.log("Response:", res);
                if (!res.ok) {
                    throw new Error("Failed to fetch matches");
                }
                return res.json();
            })
            .then((data) => {
                console.log("Matches:", data);
                setMatches(data);
            })
            .catch((err) => console.error("Failed to load matches:", err));

        fetch("/api/participants")
            .then((res) => {
                console.log("Response:", res);
                if (!res.ok) {
                    throw new Error("Failed to fetch participants");
                }
                return res.json();
            })
            .then((data) => {
                console.log("Participants:", data);
                setParticipants(data);
            })
            .catch((err) => console.error("Failed to load participants:", err));
    }, []);

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Tournament Dashboard
            </h1>

            <div className="overflow-x-auto mb-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Tournaments</h2>
                <table className="w-full table-auto rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Start Date</th>
                            <th className="px-4 py-2">End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tournaments.map((tournament) => (
                            <tr
                                key={tournament.tournament_id}
                                className="border-b"
                            >
                                <td className="px-4 py-2">
                                    {tournament.tournament_id}
                                </td>
                                <td className="px-4 py-2">{tournament.name}</td>
                                <td className="px-4 py-2">
                                    {tournament.status}
                                </td>
                                <td className="px-4 py-2">
                                    {tournament.start_date}
                                </td>
                                <td className="px-4 py-2">
                                    {tournament.end_date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="overflow-x-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">Matches</h2>
                <table className="w-full table-auto rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Match ID</th>
                            <th className="px-4 py-2">Player 1 ID</th>
                            <th className="px-4 py-2">Player 2 ID</th>
                            <th className="px-4 py-2">Winner ID</th>
                            <th className="px-4 py-2">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map((match) => (
                            <tr key={match.match_id} className="border-b">
                                <td className="px-4 py-2 ">{match.match_id}</td>
                                <td className="px-4 py-2">
                                    {match.player1_id}
                                </td>
                                <td className="px-4 py-2">
                                    {match.player2_id}
                                </td>
                                <td className="px-4 py-2">{match.winner_id}</td>
                                <td className="px-4 py-2">{match.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="overflow-x-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">Participants</h2>
                <table className="w-full table-auto rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Participant ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {participants.map((participant) => (
                            <tr
                                key={participant.participant_id}
                                className="border-b"
                            >
                                <td className="px-4 py-2">
                                    {participant.participant_id}
                                </td>
                                <td className="px-4 py-2">
                                    {participant.name}
                                </td>
                                <td className="px-4 py-2">
                                    {participant.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
