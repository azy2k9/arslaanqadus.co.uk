import React from 'react';
import client from '../../apolloClient';
import { SimpleGrid } from '@chakra-ui/layout';
import Layout from '../../components/Layout';
import BlogPost from '../../components/BlogPost';
import {
    Blog,
    GetAllBlogsDocument,
    GetAllBlogsQuery,
} from '../../generated/types';

interface Props {
    blogs: Blog[];
}

const Blogs = ({ blogs }: Props) => {
    return (
        <Layout title="Blogs">
            <SimpleGrid columns={[1, 2, null, 3]}>
                {blogs.map((blog) => (
                    <BlogPost
                        {...blog}
                        key={blog.id}
                        slug={'/blog/' + blog.slug}
                    />
                ))}
            </SimpleGrid>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const blogsData = await client.query<GetAllBlogsQuery>({
        query: GetAllBlogsDocument,
    });

    const urls = blogsData.data.blogs.reduce(
        (sum, current) => {
            sum.push({ title: current.title, img: current.thumbnail });
            return sum;
        },
        [{}]
    );

    console.log(urls);

    return {
        props: {
            blogs: blogsData.data.blogs,
        },
    };
};

export default Blogs;
