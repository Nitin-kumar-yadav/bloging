import { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import toast from 'react-hot-toast';

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)

        }
    })
    return (
        <div className='w-full py-8 flex flex-auto sm:flex-col min-[643px]:justify-center min-[10px]:flex-col  lg:flex-row md:w-1/3 sm:w-full gap-4 '>
            <Container>
                <div className='flex flex-auto gap-4  w-full sm:flex-col min-[643px]:justify-center min-[10px]:flex-col  lg:flex-row md:w-10 sm:w-full'>
                    {posts.map((post) => (
                        <div key={post.$id} className='flex flex-auto w-full sm:flex-col min-[643px]:justify-center min-[10px]:flex-col  lg:flex-row md:w-10 sm:w-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts