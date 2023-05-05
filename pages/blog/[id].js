import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../../styles/post.module.css'


export default function Post(props) {
    const router = useRouter()

    
    
    

    return (
        <>
            <p>
                <Link href="/blog">Back to the blogs baby</Link>
            </p>
            <h2>{props.post.title}</h2>
            <p>{props.post.content}</p>

            <button className={styles.stupidButton} onClick={()=>router.push('/blog')}>
                Click me to programmatically navigate or redirect
            </button>
        </>
    )
}


export async function getStaticPaths() {
    const response = await fetch('https://learnwebcode.github.io/json-example/posts.json')
    const data = await response.json()

    const thePaths = data.posts.map(post => {
        return { params: { id: post.slug } }
    })

    return {
        paths: thePaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
    const data = await response.json()
    const thePost = data.posts.filter(post => post.slug === context.params.id)[0]

    return {
        props: {
            post: thePost,
        }
    }
}