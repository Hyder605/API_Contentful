import React from 'react'

type Book = {
    id: number,
    name: string,
    type: string,
    available: boolean
}

async function getfiction() {
    const response = await fetch("https://simple-books-api.glitch.me/books?type=fiction")
    const data = response.json()
    return data;
}

async function getNonfiction() {
    const response = await fetch("https://simple-books-api.glitch.me/books?type=non-fiction")
    const data = response.json()
    return data;
}


export default async function Parallel() {
    const fictionbooks = getfiction();
    const Nonfictionbooks = getNonfiction();
    //Parallel: getting fiction and non fiction at one time
    const [fiction,nonfiction] =await Promise.all([fictionbooks,Nonfictionbooks])

    return (
        <div>
            <h1>Fiction Books</h1>
            <ul>
                {fiction.map((items: Book) => {
                    return (
                        <li key={items.id}>{items.name} - {items.type}-{items.available ? " Avialable " : " Not Available "}</li>

            
            )})}
            </ul>
            <h1>Non Fiction Books</h1>
            <ul>
                {nonfiction.map((items: Book) => {
                    return (
                        <li key={items.id}>{items.name} - {items.type}-{items.available ? " Avialable " : " Not Available "}</li>

            
            )})}
            </ul>
        </div>
        
    )
}
