"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"

type props = {
    title:          string,
    subtitle:       string,
    content:        string,
    author:         string,
    publiseddate:   string,
    coverimage:     string,
    slug:           string
}
const PostPage = () => {
    const [inputVal, setInputVal] = useState<props>({
        title:          '',
        subtitle:       '',
        content:        '',
        author:         '',
        publiseddate:   '',
        coverimage:     '',
        slug:           ''
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const{ name, value} = e.target
        setInputVal(prevData => ({
          ...prevData,
          [name]: value
        }))
    }
    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return(
        <div className="flex items-center justify-center py-16">
            <div className="flex w-[45rem] h-[30rem]  shadow-md border rounded-2xl  ">
                
                <form onSubmit={handlesubmit} className="px-8 mt-8 gap-y-4 flex flex-col w-full">
                    <div className="flex justify-between items-center ">
                        <Label id="title">Title:</Label>
                        <input
                            name="title"
                            className="outline-none w-[30rem] border px-2 py-1"
                            value={inputVal.title}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <Label id="subtitle">Sub-Title:</Label>
                        <input
                            name="subtitle"
                            className="outline-none w-[30rem] border px-2 py-1"
                            value={inputVal.subtitle}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <Label id="content">Content:</Label>
                        <textarea
                            name="content"
                            className="outline-none w-[30rem] border px-2 py-1"
                            value={inputVal.content}
                            onChange={handleInput}
                        >
                        </textarea>
                    </div>

                    <div className="flex justify-between items-center">
                        <Label id="author">Author:</Label>
                        <input
                            name="author"
                            className="outline-none w-[30rem] border px-2 py-1"
                            value={inputVal.author}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <Label id="publisheddate">Published-Date:</Label>
                        <input
                            name="publiseddate"
                            className="outline-none w-[30rem] border px-2 py-1"
                            value={inputVal.publiseddate}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <Label id="coverimage">cover-Image:</Label>
                        <input
                            name="coverimage"
                            className="outline-none w-[30rem] border px-2 py-1"
                            value={inputVal.coverimage}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <Label id="coverimage">Slug:</Label>
                        <input
                            name="slug"
                            className="outline-none w-[30rem] border px-2 py-1"
                            value={inputVal.slug}
                            onChange={handleInput}
                        />
                    </div>
                    <Button type="submit">submit</Button>

                </form>
            </div>
        </div>
    )
}

export default PostPage