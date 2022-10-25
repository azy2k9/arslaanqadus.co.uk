import { Center, Text, Box } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import client from '../../apolloClient';
import ChakraRichTextRenderer from '../../components/ChakraRichTextRenderer';
import Layout from '../../components/Layout';
import {
    IProject,
    GetAllProjectSlugsDocument,
    IGetAllProjectSlugsQuery,
    GetSingleProjectBySlugDocument,
    IGetSingleProjectBySlugQuery,
    IGetSingleProjectBySlugQueryVariables,
} from '../../generated/types';
import NextImage from 'next/image';

const Project = ({ project }: { project: IProject }) => {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <Layout title={'Loading'} isFallback={isFallback} />;
    }

    return (
        <Layout title={project.title} isFallback={isFallback}>
            <Box pos="relative" minH={'xs'}>
                <NextImage
                    src={project.thumbnail.url}
                    alt={project.thumbnail.fileName}
                    layout="fill"
                    objectFit="contain"
                    priority
                />
            </Box>
            <Center py={'4'}>
                {project.tags.map((tag) => (
                    <Tag key={tag.id} colorScheme={tag.colorScheme} mx={'1'}>
                        {tag.value}
                    </Tag>
                ))}
            </Center>
            <Text py={'8'}>{project.introduction}</Text>
            <ChakraRichTextRenderer content={project.content.raw} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const projects = await client.query<IGetAllProjectSlugsQuery>({
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
        IGetSingleProjectBySlugQuery,
        IGetSingleProjectBySlugQueryVariables
    >({
        query: GetSingleProjectBySlugDocument,
        variables: {
            slug,
        },
    });

    if (!project.data.project?.id) {
        return {
            redirect: {
                destination: '/project?errorMessage=Project was not found',
                permanent: true,
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
