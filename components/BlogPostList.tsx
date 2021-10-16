import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import BlogPost from './BlogPost';
// import BlogPost from './BlogPost';

const BlogPostList = () => {
    return (
        <SimpleGrid columns={[1, 2, null, 3]}>
            <BlogPost
                title="What food to eat to learn new things..."
                date="12/12/2020"
                previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nostrum dolores ea. Explicabo eos unde delectus nobis eius minus, eveniet consectetur esse molestias."
                img="https://picsum.photos/800/1200"
                author="Arslaan Qadus"
                avatarImg="/me.png"
                readTime="6 min"
                tags={[
                    { tag: 'Food', colorScheme: 'twitter' },
                    { tag: 'Cooking', colorScheme: 'messenger' },
                    { tag: 'Productivity', colorScheme: 'orange' },
                ]}
            />
            <BlogPost
                title="How to build mobile apps"
                date="12/12/2020"
                previewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea distinctio dolorem aut, vero ut possimus! Sint at voluptate doloribus adipisci architecto. Explicabo velit in, porro sit maiores beatae voluptatem consequatur."
                img="https://picsum.photos/801/1200"
                author="Arslaan Qadus"
                avatarImg="/me.png"
                readTime="9 min"
                tags={[
                    { tag: 'React Native', colorScheme: 'twitter' },
                    { tag: 'NEW', colorScheme: 'green' },
                    { tag: 'Mobile', colorScheme: 'pink' },
                ]}
            />
            <BlogPost
                title="Working together solves problems"
                date="12/12/2020"
                previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sapiente nobis, dignissimos ipsa veritatis est expedita iusto esse quaerat necessitatibus laborum asperiores! Cum libero exercitationem, vel eaque veniam saepe laborum?"
                img="https://picsum.photos/802/1200"
                author="Arslaan Qadus"
                avatarImg="/me.png"
                readTime="4 min"
                tags={[{ tag: 'Team Work', colorScheme: 'teal' }]}
            />
            <BlogPost
                title="React query deep dive!"
                date="12/12/2020"
                previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt illo, sint commodi facere deleniti! Ipsum in harum non voluptate. Voluptatibus debitis libero sunt quia vel ducimus, iste rerum eaque?"
                img="https://picsum.photos/803/1200"
                author="Arslaan Qadus"
                avatarImg="/me.png"
                readTime="15 min"
                tags={[
                    { tag: 'React', colorScheme: 'cyan' },
                    { tag: 'In Depth', colorScheme: 'yellow' },
                ]}
            />
            <BlogPost
                title="Developing my portfolio"
                date="12/12/2020"
                previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dignissimos illo. Voluptates soluta vero molestiae ipsum iure, excepturi quia veniam reprehenderit, dolore corporis qui exercitationem aspernatur mollitia officia magni reiciendis."
                img="https://picsum.photos/804/1200"
                author="Arslaan Qadus"
                avatarImg="/me.png"
                readTime="8 min"
                tags={[
                    { tag: 'Project', colorScheme: 'red' },
                    { tag: 'Coding', colorScheme: 'orange' },
                ]}
            />
        </SimpleGrid>
    );
};

export default BlogPostList;
