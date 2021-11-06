interface BlogPost {
    __typename: string,
    id: string,
    title: string,
    slug: string,
    introduction: string,
    featured: boolean,
    variant: "blog",
    readTime: string,    
    author: string,
    content: {
        markdown: string
    },
    thumbnail: {
        id: string,
        url: string
    },
    tags: [{
        id: string,
        value: string,
        colorScheme: ThemeTypings['colorSchemes']
    }],
    createdAt: string
}

type ProjectPost = Omit<BlogPost, "variant"> & { variant: "project" };

type PartialBlogPost = Pick<BlogPost, "id" | "title" | "introduction" | "featured" | "tags" | "slug" | "thumbnail" | "variant">

type PartialProjectPost = Pick<ProjectPost, "id" | "title" | "introduction" | "featured" | "tags" | "slug" | "thumbnail" | "variant">

interface ThemeTypings {
    colorSchemes:
    | "whiteAlpha"
    | "blackAlpha"
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "teal"
    | "blue"
    | "cyan"
    | "purple"
    | "pink"
    | "linkedin"
    | "facebook"
    | "messenger"
    | "whatsapp"
    | "twitter"
    | "telegram"
}
