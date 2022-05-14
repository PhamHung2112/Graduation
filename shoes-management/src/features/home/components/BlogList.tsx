import { Container } from '@mui/material';
import { api } from 'api/api';
import { Blog } from '../../../constants';
import { FC, useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import Widget from './Widget';

const BlogList: FC = () => {
  const [list, setList] = useState<Blog[]>();
  useEffect(() => {
    const getBlog = async () => {
      const res = await api.get('blog/all');
      if (res?.data) setList(res.data.blogs.rows);
    };
    getBlog();
  }, []);

  return (
    <Container maxWidth="xl">
      <Widget title="Tin tức" buttonTitle="blog" buttonOption={false}>
        <BlogItem list={list} />
      </Widget>
    </Container>
  );
};

export default BlogList;
