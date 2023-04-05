

async function getQuotes() {
    const response = await fetch("https://api.quotable.io/random?tags=technology")
    const data = response.json()
    return data;
}


export default async function StaticPage() {
    const quotes = await getQuotes();
    return (
        <div>
            <h1>Static Page for Quotes</h1>
                    <div>{quotes.content}</div>                    
        </div>
    )
}
