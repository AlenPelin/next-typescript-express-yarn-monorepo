import * as React from "react";
import { NextStatelessComponent } from "next";
import { Models } from "@acme/api/server";
import { apiClient } from "@acme/api/client";
import { 
  Layout, 
  PostsListing,
} from "@acme/design";

interface Props {
  posts: Models.Post[];
}

const BlogIndex: NextStatelessComponent<Props> = ({ posts }) => {
  return (
    <Layout>
      <PostsListing posts={posts} />
    </Layout>
  );
};

BlogIndex.getInitialProps = async () => {
  const posts = await apiClient.posts.getListing();
  return { posts };
};

export default BlogIndex;
