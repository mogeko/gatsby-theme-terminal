import { Link } from 'gatsby';
import { styled } from '@linaria/react';
import React from 'react';
import { Header } from './article';

const PostsList = ({ data, keyPrefix }: PostsListProps) => {
  const PostItem = styled.article`
    text-align: left;
    margin: 20px auto;
    padding: 20px 0;
    &:not(:last-of-type) {
      border-bottom: 1px solid #3034361a;
    }
  `;
  const ReadMore = ({ url }: { url: string }) => {
    const ReadMoreWrap = styled.div`
      a {
        color: inherit;
        display: inline-flex;
        background: none;
        padding: 0;
        margin: 20px 0;
        max-width: 100%;
        border-color: transparent;
        outline-color: currentcolor;
        text-decoration: none;
      }
    `;
    return (
      <ReadMoreWrap>
        <Link to={url}>Read More &rarr;</Link>
      </ReadMoreWrap>
    );
  };

  return (
    <div>
      {data.posts.map(({ node }) => (
        <PostItem key={`${keyPrefix}-${node.id}`}>
          <Header title={node.frontmatter.title} date={node.frontmatter.date} />
          <p>{node.excerpt}</p>
          <ReadMore url={node.slug} />
        </PostItem>
      ))}
    </div>
  );
};

interface PostsListProps {
  data: PostsData;
  keyPrefix: string;
}

export interface PostsData {
  posts: {
    node: {
      id: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
      };
      slug: string;
    };
  }[];
}

export default PostsList;