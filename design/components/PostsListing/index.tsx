import * as React from "react";
import Link from 'next/link';

// @ts-ignore
import icon from './icon.png';

export function PostsListing({ posts }: { posts: any[] }) {
    return (
        <ul style={{listStyleImage: `url("${icon}")`}}>
            {posts.map(post => (
                <li key={post.id}>
                    <Link passHref href={`/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
