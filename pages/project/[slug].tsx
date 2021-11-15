import { Center, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import client from '../../apolloClient';
import ChakraNextImage from '../../components/Image';
import Layout from '../../components/Layout';
import {
    Project as IProject,
    GetAllProjectSlugsDocument,
    GetAllProjectSlugsQuery,
    GetSingleProjectBySlugDocument,
    GetSingleProjectBySlugQuery,
    GetSingleProjectBySlugQueryVariables,
} from '../../generated/types';

const Project = ({ project }: { project: IProject }) => {
    const { isFallback } = useRouter();

    return (
        <Layout title={project.title} isFallback={isFallback}>
            <ChakraNextImage
                src={project.thumbnail.url}
                alt={project.title + ' - Image'}
                h={['250px', '300px', 'sm', 'lg']}
            />
            <Center py={'4'}>
                {project.tags.map((tag) => (
                    <Tag key={tag.id} colorScheme={tag.colorScheme} mx={'1'}>
                        {tag.value}
                    </Tag>
                ))}
            </Center>
            <Text py={'8'}>{project.introduction}</Text>
            <RichText content={project.content.raw} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const projects = await client.query<GetAllProjectSlugsQuery>({
        query: GetAllProjectSlugsDocument,
    });

    const paths = projects.data.projects.map((b) => ({
        params: { slug: b.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams;

    const project = await client.query<
        GetSingleProjectBySlugQuery,
        GetSingleProjectBySlugQueryVariables
    >({
        query: GetSingleProjectBySlugDocument,
        variables: {
            slug,
        },
    });

    if (!project.data.project) {
        return {
            redirect: {
                destination: '/project',
                permanent: false,
            },
        };
    }

    return {
        props: {
            project: project.data.project,
        },
    };
};

interface IParams extends ParsedUrlQuery {
    slug: string;
}

export default Project;
