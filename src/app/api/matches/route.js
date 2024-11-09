import { db } from "@/app/db";

export async function GET(request) {
    try {
        const result = await db.query("SELECT * FROM matches");
        return new Response(JSON.stringify(result.rows), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching tournaments:", error);
        return new Response("Failed to fetch tournaments", { status: 500 });
    }
}
