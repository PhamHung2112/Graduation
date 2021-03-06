import { Box, Grid, Typography } from '@mui/material';
import { Blog } from '../../../constants';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import moment from 'moment';

export interface BlogItemProps {
  list?: Blog[];
}

const BlogItem: FC<BlogItemProps> = ({ list = [] }) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={3}
      className="blog-slider"
      // loop={true}
      // grabCursor={true}
    >
      <Grid container>
        {list.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ padding: '0 30px' }}>
              <Box
                borderRadius="50%"
                overflow="hidden"
                margin="0 auto"
                width="360px"
                height="360px"
                sx={{
                  '&>a': {
                    backgroundColor: 'transparent',
                    '&>img': {
                      objectFit: 'cover',
                      verticalAlign: 'middle',
                      textDecoration: 'none',
                    },
                  },
                }}
              >
                <Link to={'./blog/' + blog.id}>
                  <img src={blog.image} alt="" width="100%" height="100%" />
                </Link>
              </Box>
              <Box
                sx={(theme) => ({
                  textAlign: 'center',
                  '&>a': {
                    textDecoration: 'none',
                    color: theme.palette.primary.contrastText,
                    '&:hover': { color: theme.palette.secondary.main },
                    marginTop: '42px',
                    display: 'block',
                    width: '100%',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontSize: '20px',
                    fontWeight: 500,
                  },
                })}
              >
                <Link to={'./blog/' + blog.id}>{blog.title}</Link>
                <Typography
                  marginTop="11px"
                  color="#b6b6b6"
                  fontWeight={600}
                  textTransform="uppercase"
                  variant="subtitle2"
                  fontSize="12px"
                  letterSpacing="2px"
                  sx={(theme) => ({
                    '&::after': {
                      content: '""',
                      backgroundColor: theme.palette.secondary.contrastText,
                      width: '70px',
                      height: '1px',
                      display: 'block',
                      margin: '0 auto',
                      marginTop: '17px',
                    },
                  })}
                >
                  {moment(blog.createdAt).format('lll')}
                </Typography>
                <Typography
                  variant="subtitle1"
                  lineHeight="30px"
                  color="#868686"
                  width="100%"
                  height="90px"
                  marginTop="18px"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {blog.summary}
                </Typography>
              </Box>
            </Grid>
          </SwiperSlide>
        ))}
      </Grid>
    </Swiper>
  );
};

export default memo(BlogItem);
