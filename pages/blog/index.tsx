import React from 'react';
import client from '../../apolloClient';
import { SimpleGrid } from '@chakra-ui/layout';
import Layout from '../../components/Layout';
import BlogPost from '../../components/BlogPost';
import {
    IBlog,
    GetAllBlogsDocument,
    IGetAllBlogsQuery,
} from '../../generated/types';
import { GetStaticProps } from 'next';

interface Props {
    blogs: IBlog[];
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

export const getStaticProps: GetStaticProps = async () => {
    const blogsData = await client.query<IGetAllBlogsQuery>({
        query: GetAllBlogsDocument,
    });

    return {
        props: {
            blogs: blogsData.data.blogs,
        },
        revalidate: 60,
    };
};

export default Blogs;
