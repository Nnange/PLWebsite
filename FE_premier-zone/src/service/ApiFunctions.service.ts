import {axios} from "../utils/axios";

export async function getAllPlayers() {
    try {
        const response = await axios.get("/api/v1/player");
        return response.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Error fetching players");
    }
}
