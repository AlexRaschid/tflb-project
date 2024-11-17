import axios from "axios";
import { useQuery } from "@tanstack/react-query";

//https://github.com/leonlarsson/the-finals-api
    //https://api.the-finals-leaderboard.com/#tag/leaderboards
    //example: https://api.the-finals-leaderboard.com/v1/leaderboard/s4/crossplay
    
    //const BASE_URL = "https://api.the-finals-leaderboard.com";
    //const S4_LB = "/v1/leaderboard/s4/";//crossplay 




    //Todo: create a state and store leaderboard data in there? 
    // w/ what time it was retrieved

const fetchLeaderboard = async () => {
    const response = await axios.get('https://api.the-finals-leaderboard.com/v1/leaderboard/s4/crossplay'); // Replace hardcoded crossplay with interchangable variable later
    console.log("API response: ", response.data); //  debugging
    return response.data;
};


export default function useFetchLeaderboard() {

    return useQuery({
        queryKey: ['leaderboard'], 
        queryFn: fetchLeaderboard
    });


}
