import React from 'react'
import client from '../../apolloClient'
import { gql } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/layout';
import Layout from '../../components/Layout';
import BlogPost from '../../components/BlogPost';

interface Props {
    blogs: BlogPost[]
}

const Blogs = ({ blogs }: Props) => {
    return (
        <Layout title="Blogs">
            <SimpleGrid columns={[1,2, null, 3]}>
                {blogs.map(blog => (
                    <BlogPost
                        {...blog}
                        key={blog.id}
                        slug={'/blog/' + blog.slug}
                    />
                ))}
            </SimpleGrid>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const blogs = await client.query({
        query: gql` 
            query allBlogs{
                blogs(where: { variant: blog }) {
                    id,
                    title,
                    slug,
                    featured,    
                    variant,
                    author,
                    readTime,
                    introduction,
                    content {
                        markdown
                    },
                    thumbnail {
                        id,
                        url
                    },
                    tags {
                        id,
                        value,
                        colorScheme
                    },
                    createdAt
                }
            }
        `
    });

    return {
        props: {
            blogs: blogs.data.blogs
        }
    }
}

export default Blogs
