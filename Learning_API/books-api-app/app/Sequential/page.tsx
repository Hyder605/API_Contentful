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


export default async function Sequential() {
    //Sequential: geting one by one
    const fictionbooks = await getfiction();
    const Nonfictionbooks = await getNonfiction();
   

    return (
        <div>
            <h1>Fiction Books</h1>
            <ul>
                {fictionbooks.map((items: Book) => {
                    return (
                        <li key={items.id}>{items.name} - {items.type}-{items.available ? " Avialable " : " Not Available "}</li>

            
            )})}
            </ul>
            <h1>Non Fiction Books</h1>
            <ul>
                {Nonfictionbooks.map((items: Book) => {
                    return (
                        <li key={items.id}>{items.name} - {items.type}-{items.available ? " Avialable " : " Not Available "}</li>

            
            )})}
            </ul>
        </div>
        
    )
}
