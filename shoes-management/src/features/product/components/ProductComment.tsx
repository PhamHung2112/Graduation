import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Rating, Typography } from '@mui/material';
import { api } from 'api/api';
import { useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import { CustomMuiButton, InputField } from 'components';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Product } from '../../../constants';
import { commentSchema } from '../product';

export interface ProductCommentProps {
  product?: Product;
}

const ProductComment: FC<ProductCommentProps> = ({ product }) => {
  const [rating, setRating] = useState<number | null>(0);
  const [comment, setComment] = useState([]);
  const user = useAppSelector((state: RootState) => state.auth.currentUser);
  const path: any = useParams();
  const id = path.slug;
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      content: '',
    },
    resolver: yupResolver(commentSchema),
  });

  const ratingAVG = comment.reduce((prev: any, acc: any) => {
    return prev + acc.rating;
  }, 0);
  const rating5Star = comment.filter((item: any) => item.rating === 5).length;
  const rating4Star = comment.filter((item: any) => item.rating === 4).length;
  const rating3Star = comment.filter((item: any) => item.rating === 3).length;
  const rating2Star = comment.filter((item: any) => item.rating === 2).length;
  const rating1Star = comment.filter((item: any) => item.rating === 1).length;

  useEffect(() => {
    const getComment = async () => {
      const res = await api.get('product/comments/' + parseInt(id));
      setComment(res.data?.comments?.comments);
    };
    getComment();
  }, [id]);

  const handleFormSubmit = async (values: string | any) => {
    const formValues = { ...values, rating, userId: user?.id, productId: +id };
    if (rating === 0) {
      toast.error('Vui lòng đánh giá sản phẩm');
    } else {
      try {
        const res = await api.post('/comment/create', { ...formValues });
        if (res.data) {
          toast.success('Đánh giá sản phẩm thành công');
        }
        reset();
        setRating(0);
        const getComment = async () => {
          const res = await api.get('product/comments/' + parseInt(id));
          setComment(res.data?.comments?.comments);
        };
        getComment();
      } catch (error) {
        toast.error('Đánh giá sản phẩm không thành công');
      }
    }
  };

  return (
    <Box display="flex" alignItems="baseline" justifyContent="space-around">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        border="1px solid #e5e5e5"
        padding="20px"
      >
        <Typography variant="h5" fontWeight={500}>
          Đánh giá của bạn về sản phẩm
        </Typography>
        <Typography margin="20px 0" variant="h6" fontWeight={500} color="secondary">
          {product?.name}
        </Typography>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="500px"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <Rating
            name="rating"
            value={rating}
            onChange={(e: SyntheticEvent<any, any>, value: number | null) => setRating(value)}
            sx={{
              fontSize: '40px',
              color: (theme) => theme.palette.secondary.main,
            }}
          />
          <InputField
            control={control}
            name="content"
            label="Đánh giá của bạn"
            multiline
            rows={6}
          />
          <CustomMuiButton
            fullWidth
            backgroundColor="#000000"
            color="#ffffff"
            borderColor="#000000"
            textColor="#000000"
            type="submit"
            margin="30px 0 0"
          >
            Đánh giá
          </CustomMuiButton>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginTop="15px"
          border="1px solid #e5e5e5"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgcolor="rgb(255 135 29 / 40%)"
            padding="20px"
          >
            <Typography fontSize="30px" marginBottom="5px" color="secondary">
              {comment.length > 0 ? (ratingAVG / comment.length).toFixed(1) : 0}/5
            </Typography>
            <Rating
              name="rating"
              value={+(ratingAVG / comment.length).toFixed(1) || 0}
              precision={0.5}
              sx={{
                fontSize: '40px',
                color: (theme) => theme.palette.secondary.main,
              }}
              readOnly
            />
            <Typography margin="15px 0 20px" fontSize="14px" fontWeight={500}>
              ({comment?.length || 0} đánh giá)
            </Typography>
            <Box display="flex" justifyContent="center">
              <Box
                bgcolor="#ffffff"
                border="1px solid #e2e2e2"
                marginRight="30px"
                padding="5px 15px"
              >
                Tất cả ({comment?.length || 0})
              </Box>
              <Box
                bgcolor="#ffffff"
                border="1px solid #e2e2e2"
                marginRight="30px"
                padding="5px 15px"
              >
                5 sao ({rating5Star || 0})
              </Box>
              <Box
                bgcolor="#ffffff"
                border="1px solid #e2e2e2"
                marginRight="30px"
                padding="5px 15px"
              >
                4 sao ({rating4Star || 0})
              </Box>
              <Box
                bgcolor="#ffffff"
                border="1px solid #e2e2e2"
                marginRight="30px"
                padding="5px 15px"
              >
                3 sao ({rating3Star || 0})
              </Box>
              <Box
                bgcolor="#ffffff"
                border="1px solid #e2e2e2"
                marginRight="30px"
                padding="5px 15px"
              >
                2 sao ({rating2Star || 0})
              </Box>
              <Box bgcolor="#ffffff" border="1px solid #e2e2e2" padding="5px 15px">
                1 sao ({rating1Star || 0})
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            {comment && comment.length > 0
              ? comment.map((i: any) => (
                  <Box
                    key={i.id}
                    display="flex"
                    flexDirection="column"
                    padding="20px"
                    sx={{
                      '&:not(:last-child)': {
                        borderBottom: '1px solid #e5e5e5',
                      },
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Typography marginRight="15px" fontWeight={500}>
                        {i?.user?.fullName}
                      </Typography>
                      <Rating
                        name="rating"
                        value={i?.rating}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: '20px',
                          color: (theme) => theme.palette.secondary.main,
                        }}
                      />
                    </Box>
                    <Typography margin="10px 0">{i?.content}</Typography>
                    <Typography fontSize="12px" color="#272727">
                      {i?.createdAt ? new Date(i?.createdAt).toLocaleString() : ''}
                    </Typography>
                  </Box>
                ))
              : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductComment;
