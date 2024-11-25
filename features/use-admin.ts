"use client"

import { client } from "@/providers/hono"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.admin.$post>
type ReqestType = InferRequestType<typeof client.api.admin.$post>["json"]

export const UseAdmin = () => {
    const queryclient = useQueryClient();

    const mutation = useMutation<
    ResponseType,
    Error,
    ReqestType
    >
    ({
        mutationFn: async (json) =>{
            const response = await client.api.admin.$post({json})
            return await response.json();
        },
        onSuccess: () =>{
            queryclient.invalidateQueries({queryKey: ["admin"]})
        },
        onError: () =>{
            console.log("something wrong in helper")
        }
    })
    return mutation
}