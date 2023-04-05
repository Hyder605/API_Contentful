import React from 'react'

type Book = {
    id: number,
    name: string,
    type: string,
    available: boolean
}

async function getBooks() {
    const response = await fetch("https://simple-books-api.glitch.me/books")
    const data = response.json()
    return data;
}


export default async function StaticPage() {
    const books = await getBooks();
    return (
        <div>
            <h1>Static Page</h1>
            <ul>
                {books.map((items: Book) => {
                    return (
                        <li key={items.id}>{items.name} - {items.type}-{items.available ? " Avialable " : " Not Available "}</li>

            
            )})}
            </ul>
        </div>
    )
}
