import * as React from "react";
import Link from 'next/link';

export function PostsListing({ posts }: { posts: any[] }) {
    return (
        <ul>
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
