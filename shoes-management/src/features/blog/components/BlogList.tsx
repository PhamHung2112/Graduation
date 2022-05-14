import { FC } from 'react';
import { Blog } from '../../../constants';
import BlogItem from './BlogItem';

export interface BlogListProps {
  list?: Blog[];
}

const BlogList: FC<BlogListProps> = ({ list }) => {
  return (
    <>
      <BlogItem blogList={list} />
    </>
  );
};

export default BlogList;
