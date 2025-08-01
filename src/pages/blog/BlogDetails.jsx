import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { blogPostData } from '../../data/BlogPostData'
import { Image } from 'react-bootstrap'

const BlogDetails = () => {
    const params = useParams()
    const navigateData = useLocation()
    const blogData = blogPostData.filter((blog) => blog.id === parseInt(params.id))[0]
    return (
        <div>
            {/* {params.slug} */}
            {/* params :
            <pre>{JSON.stringify(params, null, 2)}</pre>
            navigateData:
            <pre>{JSON.stringify(navigateData, null, 2)}</pre> */}

            <h1>{blogData.title}</h1>
            <Image className='w-100' src={blogData.image} />
            <p>{blogData.body}</p>
            <NavLink to="/blog">Back</NavLink>

        </div>
    )
}

export default BlogDetails
