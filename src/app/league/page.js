// pages/league.js
"use-client";

import React from "react";
import LeagueTable from "../components/LeagueTable";

const LeaguePage = () => {
    // Define columns for the table
    const columns = React.useMemo(
        () => [
            {
                Header: "player",
                accessor: "player",
            },
            {
                Header: "Played",
                accessor: "played",
            },
            {
                Header: "Wins",
                accessor: "wins",
            },
            {
                Header: "Losses",
                accessor: "losses",
            },
            {
                Header: "Draws",
                accessor: "draws",
            },
            {
                Header: "Points",
                accessor: "points",
            },
        ],
        []
    );

    // Sample data (could be fetched from an API)
    const data = React.useMemo(
        () => [
            {
                player: "Yorked16AD:Yorked16(44.65)",
                played: 9,
                wins: 8,
                draws: 1,
                losses: 0,
                goalDifference: 20,
                points: 52,
                rank: 1,
                group: 1,
            },
            {
                player: "pongy20 AD:pongy20 (62.22)",
                played: 9,
                wins: 7,
                draws: 2,
                losses: 0,
                goalDifference: 23,
                points: 50,
                rank: 2,
                group: 1,
            },
            {
                player: "andy_19428AD:Andy Watson(54.66)",
                played: 9,
                wins: 4,
                draws: 2,
                losses: 3,
                goalDifference: 8,
                points: 37,
                rank: 3,
                group: 1,
            },
            {
                player: "Nills11:Nills11 (45.15)",
                played: 9,
                wins: 4,
                draws: 1,
                losses: 4,
                goalDifference: -1,
                points: 33,
                rank: 4,
                group: 1,
            },
            {
                player: "salgueirone AD:salgueirone (43.05)",
                played: 9,
                wins: 3,
                draws: 2,
                losses: 4,
                goalDifference: 0,
                points: 31,
                rank: 5,
                group: 1,
            },
            // Repeat for other players in Group 1...

            // Group 2 starts here
            {
                player: "EspaDo2000AD:EspaDo2000(39.32)",
                played: 9,
                wins: 9,
                draws: 0,
                losses: 0,
                goalDifference: 33,
                points: 54,
                rank: 1,
                group: 2,
            },
            {
                player: "Buffel5 AD:Buffel Jr.(40.78)",
                played: 9,
                wins: 8,
                draws: 0,
                losses: 1,
                goalDifference: 22,
                points: 48,
                rank: 2,
                group: 2,
            },
            {
                player: "mattr83 AD:MattR83 (38.38)",
                played: 9,
                wins: 6,
                draws: 1,
                losses: 2,
                goalDifference: 15,
                points: 42,
                rank: 3,
                group: 2,
            },
            {
                player: "JoeJade12AD:H3RBSKIx (wife)(35.00)",
                played: 9,
                wins: 6,
                draws: 0,
                losses: 3,
                goalDifference: 12,
                points: 38,
                rank: 4,
                group: 2,
            },
            {
                player: "JacoBSmitHAD:yakoob19(31.27)",
                played: 9,
                wins: 4,
                draws: 1,
                losses: 4,
                goalDifference: -4,
                points: 28,
                rank: 5,
                group: 2,
            },
            // Repeat for other players in Group 2...
        ],
        []
    );

    return (
        <div className="w-full flex flex-col items-center text-center bg-gray-900 min-h-screen">
            <div className="w-full flex justify-center py-6">
                <h1 className="text-2xl font-semibold bg-blue-900 text-white py-3 px-6 rounded-full w-1/4">
                    League Standings
                </h1>
            </div>
            <div className="w-full flex justify-center pt-10 space-x-5">
                {/* Division 1 */}
                <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold bg-blue-700 text-white py-1 px-4 rounded-full mb-3">
                        Division 1
                    </span>
                    <LeagueTable columns={columns} data={data.slice(0, 5)} />
                </div>

                {/* Division 2 */}
                <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold bg-blue-700 text-white py-1 px-4 rounded-full mb-3">
                        Division 2
                    </span>
                    <LeagueTable columns={columns} data={data.slice(5)} />
                </div>
            </div>
        </div>
    );
};

export default LeaguePage;
