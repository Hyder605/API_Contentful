'use client'

//Install swr libaray for using client side rendering (npm i swr)

import useSWR from "swr";

const url="https://api.quotable.io/random?tags=technology";

const fetcher=(url:string)=> fetch(url).then((res)=>res.json())


export default function ClientPage() {
    //Using Destructuring method
    const {data,error,isLoading}=useSWR(url,fetcher);
    if (error) return <div>Error</div>;
    if(isLoading)
     return (
    <div>
    Data is Loading.Please wait....
    </div>
     )
    return (
        <div>
            <h1>ClientSide Rendering Page for Quotes</h1>
                    <div>{data.content}</div>                    
        </div>
    )
}