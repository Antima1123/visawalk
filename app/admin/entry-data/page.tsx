"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { UseAdmin } from "@/features/use-admin"
import { title } from "process"
import { useState } from "react"

type formprops = {
    title: string,
    image: string,
    slug:  string,
    content: string,
}
const EntryData = () =>{
    const [data, setData] = useState<formprops>({
        title:   '',
        image:   '',
        slug:    '',
        content: '',
    })
    const inputdata = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const{ name, value} = e.target
        setData(prevData => ({
          ...prevData,
          [name]: value
        }))
      }

      const mutation = UseAdmin()
      const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(data)

        const values = {
            image:     data.image,
            content:  data.content,
            header:   data.title,
            slug:     data.slug
        }

        mutation.mutate(values,{
            onSuccess: () => {
                console.log("Data entered")
            }
        })
      }

    return(
        <div className="w-full h-full  items-center justify-center flex ">
            <form onSubmit={handlesubmit} className="max-w-screen-md mt-12 mx-auto shadow-2xl rounded-2xl border w-[48rem] h-[30rem] px-16 ">
                <h1 className=" flex items-center justify-center mt-8 text-xl font-[600]">Blog Data</h1>
               <div>
                    <div className="mt-12 gap-2 px-2 flex items-center">
                        <Label id="title">Title:</Label>
                        <input
                            name="title"
                            className="px-2 w-[38rem] border border-gray-100 py-2 outline-none"
                            value={data.title}
                            onChange={inputdata}
                        />
                    </div>

                    <div className="mt-4 gap-2 px-2 flex items-center">
                        <Label id="image">Image:</Label>
                        <input
                            name="image"
                            className="px-2 w-[38rem] border border-gray-100 py-2  outline-none"
                            value={data.image}
                            onChange={inputdata}
                        />
                    </div>

                    <div className="mt-4 gap-2 px-2 flex items-center">
                        <Label id="slug">:Slug</Label>
                        <input
                            name="slug"
                            className="px-2 w-[38rem] border border-gray-100 py-2  outline-none"
                            value={data.slug}
                            onChange={inputdata}
                        />
                    </div>
                    
                    <div className="mt-4 gap-2  px-2 flex items-center">
                        <Label id="content">Content:</Label>
                        <Card>
                            <textarea
                                name="content"
                                className="px-2 w-[34rem] border border-gray-100 py-2  outline-none"
                                value={data.content}
                                onChange={inputdata}
                            >
                            </textarea>
                        </Card>
                    </div>
               </div>
               <Button type="submit">submit</Button>
            </form>
        </div>
    )
}


export default EntryData