import Image from 'next/image'

async function getBlog() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json()
}

export default async function Home() {
  const blogs = await getBlog();
  console.log(blogs.items[0].fields)

  return (
    <div>
      <ul>

        {blogs.items.map((item: any) => {
          // const blogimage = blogs.includes.Asset.find((img: any) => img.sys.id === item.fields.image.sys)
          // const imagurl=blogimage.fields.file.url
          return(
          <div key={item.sys.id}>
            <li >
              <h1>{item.fields.title}</h1>
              <p>{item.fields.description}</p>
              <img src={blogs.includes.Asset[0].fields.file.url} alt="pic" />
  
            </li>
          </div>
  
          )
  
        }
      )}
      </ul>
    </div>

  )

}
