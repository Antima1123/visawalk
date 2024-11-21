import { client } from "@/lib/hono"
import { useQuery } from "@tanstack/react-query"

export const getAllNews = () =>{
    const query = useQuery({
        queryKey: ["news"],
        queryFn: async()=>{
            const response = await client.api.$get()

            if(!response){
                throw new Error("failed to fetch news");
            }
            const {data} = await response.json();
            return data;
        }
    })
    return query;
}