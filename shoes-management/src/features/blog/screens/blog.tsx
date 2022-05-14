import { Search } from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Container, TextField, Typography } from '@mui/material';
import { HomeEnumPath } from 'features/home/home';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogList from '../components/BlogList';
import ContactImage from 'assets/image/contact/contact.webp';
import { toast } from 'react-toastify';
import { Blog } from '../../../constants';
import { api } from 'api/api';

const BlogPage: FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [list, setList] = useState<Blog[]>();

  useEffect(() => {
    const getBlog = async () => {
      const res = await api.get('blog/all');
      if (res?.data) setList(res.data.blogs.rows);
    };
    getBlog();
  }, []);

  const handleSearch = async () => {
    try {
      const res = await api.get(`blog/all?search=${keyword}`);
      if (res?.data) setList(res.data.blogs.rows);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <>
      <Box
        width="100%"
        height="200px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: '#dbdbdb',
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            fontSize: '16px',
            '&:hover': { color: (theme) => theme.palette.secondary.main },
          },
        }}
      >
        <Typography fontSize="40px" fontWeight={500} letterSpacing={2} marginBottom="15px">
          Blog
        </Typography>
        <Breadcrumbs>
          <Link to={HomeEnumPath.HOMEPAGE}>Trang chủ</Link>
          <Typography fontWeight={500} variant="body1">
            Blog
          </Typography>
        </Breadcrumbs>
      </Box>

      <Container maxWidth="xl" sx={{ display: 'flex' }}>
        <Box
          flex="0 0 25%"
          maxWidth="25%"
          display="flex"
          flexDirection="column"
          paddingRight="30px"
        >
          <Box
            display="flex"
            alignItems="flex-start"
            margin="40px 0"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 0,
                height: '40px',
                '&.Mui-focused': {
                  border: '1px solid #000000',
                },
                '& input': {
                  height: '40px',
                  padding: '0 16px',
                },
              },
            }}
          >
            <TextField
              name="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              fullWidth
              placeholder="Từ khoá..."
            />
            <Button
              variant="contained"
              sx={(theme) => ({
                boxShadow: 'none',
                borderLeft: 'none',
                height: '40px',
                borderRadius: 0,
                backgroundColor: theme.palette.primary.contrastText,
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.contrastText,
                  color: theme.palette.primary.main,
                  boxShadow: 'none',
                },
              })}
              onClick={handleSearch}
            >
              <Search />
            </Button>
          </Box>
          <img src={ContactImage} alt="blog" width="100%" height="600px" />
        </Box>
        <Box flex="0 0 75%" maxWidth="75%">
          <BlogList list={list} />
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
