import { Center, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import client from '../../apolloClient';
import ChakraRichTextRenderer from '../../components/ChakraRichTextRenderer';
import ChakraNextImage from '../../components/Image';
import Layout from '../../components/Layout';
import {
    IBlog,
    GetAllBlogSlugsDocument,
    IGetAllBlogSlugsQuery,
    GetSingleBlogBySlugDocument,
    IGetSingleBlogBySlugQuery,
    IGetSingleBlogBySlugQueryVariables,
} from '../../generated/types';

const Blog = ({ blog }: { blog: IBlog }) => {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <Layout title={'Loading'} isFallback={isFallback} />;
    }

    return (
        <Layout title={blog.title} isFallback={isFallback}>
            <ChakraNextImage
                src={blog.thumbnail.url}
                alt={blog.title + ' - Image'}
                h={['250px', '300px', 'sm', 'lg']}
            />
            <Center py={'4'}>
                {blog.tags.map((tag) => (
                    <Tag key={tag.id} colorScheme={tag.colorScheme} mx={'1'}>
                        {tag.value}
                    </Tag>
                ))}
            </Center>
            <Text py={'8'}>{blog.introduction}</Text>
            <ChakraRichTextRenderer content={blog.content.raw} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const blogs = await client.query<IGetAllBlogSlugsQuery>({
        query: GetAllBlogSlugsDocument,
    });

    const paths = blogs.data.blogs.map((b) => ({ params: { slug: b.slug } }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams;

    const blog = await client.query<
        IGetSingleBlogBySlugQuery,
        IGetSingleBlogBySlugQueryVariables
    >({
        query: GetSingleBlogBySlugDocument,
        variables: {
            slug,
        },
    });

    if (!blog.data.blog?.id) {
        return {
            redirect: {
                destination: '/blog?errorMessage=Blog was not found',
                permanent: false,
            },
        };
    }

    return {
        props: {
            blog: blog.data.blog,
        },
    };
};

interface IParams extends ParsedUrlQuery {
    slug: string;
}

export default Blog;
