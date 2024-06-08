import { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                console.log(posts)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='relative  mt-10 w-full py-8 '>
            <Container>
                <div className=' flex flex-auto w-10 sm:flex-col min-[643px]:justify-center min-[10px]:flex-col  lg:flex-row md:w-1/3 sm:w-full'>
                    {posts.map((post) => (
                        <div key={post.$id} className=' flex flex-col gap-4  justify-center p-2 w-1/10 md:w-1/3 sm:w-1/2 min-[10px]:w-full'>
                            <PostCard {...post} />
                            <PostCard {...post} />
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home