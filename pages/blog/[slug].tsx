import { Center, Container, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { GetStaticProps, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import client from '../../apolloClient';
import ChakraNextImage from '../../components/Image';
import Layout from '../../components/Layout';
import {
    Blog as IBlog,
    GetAllBlogSlugsDocument,
    GetAllBlogSlugsQuery,
    GetSingleBlogBySlugDocument,
    GetSingleBlogBySlugQuery,
    GetSingleBlogBySlugQueryVariables,
} from '../../generated/types';

const Blog = ({ blog }: { blog: IBlog }) => {
    return (
        <Layout title={blog.title}>
            <ChakraNextImage src={blog.thumbnail.url} alt={blog.title + " - Image"} h={['250px', '300px', 'sm', 'lg']} />
            <Center py={"4"}>
                {blog.tags.map(tag => (
                    <Tag key={tag.id} colorScheme={tag.colorScheme} mx={"1"}>{tag.value}</Tag>
                ))}
            </Center>
            <Text py={"8"}>{blog.introduction}</Text>
            <RichText content={blog.content.raw} />
        </Layout>
    )
};

export const getStaticPaths = async () => {
    const blogs = await client.query<GetAllBlogSlugsQuery>({
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

    const blog = await client.query<GetSingleBlogBySlugQuery, GetSingleBlogBySlugQueryVariables>({
        query: GetSingleBlogBySlugDocument,
        variables: {
            slug
        }
    });

    return {
        props: {
            blog: blog.data.blog,
        },
    };
};

interface IParams extends ParsedUrlQuery {
    slug: string
}

export default Blog;
