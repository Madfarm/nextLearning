# Next.js

React apps use client-side rendering which can make pages slow to initially load and content invisible to bots like web crawlers

Next allows you to render the content on the server side and serve it to the browser as static html afterward react takes over and everything is client side rendered

## File Structure & Routing
Create a pages directory
it MUST be named pages

this pages will be served up when a user navigates to the associated url
about.js -> '/about'

and index.js will be the root route
index.js -> '/'

we can go into subpaths by creating directories with that path name
cars/index.js -> '/cars'

square brackets allow for dynamic urls and url parameters
cars/[id].js -> '/cars/:id'

const router = useRouter()
will allow you access the router object which can be used for things like,
- redirects via router.push()
- checking the current path via router.pathname for conditional rendering
- router.query will access the url params

[id].js as the filename

const { id } = router.query  -> to access that url param

Programmatic Redirect => router.push('<whatever url>') 

## Data Fetching
Next allows you to employ multiple data fetching strategies in the same app

### getStaticProps()

allows you fetch data and serve it to the components as a prop and build time it will be fetched and included in the static generation of the html

to update the data in getStaticProps you would need to rebuild your application

build time

### getServerSideProps()
tells next to fetch the data/generate the page everytime the page is requested

request time


## Incremental Static Generation
add the revalidate keyword to the return of getStaticProps() and the next will regenerate the page at that incrememnt

return {
    props: { car },
    revalidate: 30 
}

Above example will regenerate the page every 30 seconds


## Styling
global.css will apply to the entire application but we can create css modules
<component/page name>.module.css

and import them in the files
import styles from path

then to use those classes
className={styles.<class name>}

these classes are only scoped to that file so we can reuse css class names for every module


## Static Generation with Data Fetching

export async function getStaticProps({ params }){
    fetch(`<whatever urls>${params.id}`)
}


## SEO shit
import Head from 'next/head'

<Head>
    seo stuff here like <title></title> and meta tags
</Head>