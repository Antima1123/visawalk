import { client } from "@/providers/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetNews = (slug: any) =>{
    const query = useQuery({
        queryKey: ["news", slug],
        queryFn: async()=>{
            
            const response = await client.api[":slug"].$get({
                param: slug
            });

            if(!response.ok){
                throw new Error("Failed to fetch news");
            }

            const  {data}  = await response.json();
            return data;
        }
    });
    return query;
}