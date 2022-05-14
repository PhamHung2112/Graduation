import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Rating, Typography } from '@mui/material';
import { CustomMuiButton, InputField } from 'components';
import { Product } from '../../../constants';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { commentSchema } from '../product';
import { useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import { api } from 'api/api';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export interface ProductCommentProps {
  product?: Product;
}

const ProductComment: FC<ProductCommentProps> = ({ product }) => {
  const [rating, setRating] = useState<number | null>(0);
  const [comment, setComment] = useState([])
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      content: '',
    },
    resolver: yupResolver(commentSchema),
  });

  const path: any = useParams();
  const id = path.slug;
  useEffect(()=>{
    const getComment= async()=>{
      const res= await api('product/comments/'+id)
      setComment(res.data?.comments?.comments)
    }
    getComment();
  },[])
  const user = useAppSelector((state: RootState) => state.auth.currentUser);

  const handleFormSubmit = async (values: string | any) => {
    const formValues = { ...values, rating, userId: user?.id };

    try {
      const res = await api.post('/comment/create', {...formValues, productId:id});
      if (res.data) {
        toast.success('Đánh giá sản phẩm thành công');
      }
      reset();
      setRating(0);
    } catch (error) {
      toast.error('Đánh giá sản phẩm không thành công');
    }
  };

  console.log(comment)
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
            4/5
          </Typography>
          <Rating
            name="rating"
            value={5}
            onChange={(e: SyntheticEvent<any, any>, value: number | null) => setRating(value)}
            precision={0.5}
            sx={{
              fontSize: '40px',
              color: (theme) => theme.palette.secondary.main,
            }}
          />
          <Typography margin="15px 0 20px" fontSize="14px" fontWeight={500}>
            (1 đánh giá)
          </Typography>
          <Box display="flex" justifyContent="center">
            <Box bgcolor="#ffffff" border="1px solid #e2e2e2" marginRight="30px" padding="5px 15px">
              Tất cả (1)
            </Box>
            <Box bgcolor="#ffffff" border="1px solid #e2e2e2" marginRight="30px" padding="5px 15px">
              5 sao (1)
            </Box>
            <Box bgcolor="#ffffff" border="1px solid #e2e2e2" marginRight="30px" padding="5px 15px">
              4 sao (1)
            </Box>
            <Box bgcolor="#ffffff" border="1px solid #e2e2e2" marginRight="30px" padding="5px 15px">
              3 sao (1)
            </Box>
            <Box bgcolor="#ffffff" border="1px solid #e2e2e2" marginRight="30px" padding="5px 15px">
              2 sao (1)
            </Box>
            <Box bgcolor="#ffffff" border="1px solid #e2e2e2" padding="5px 15px">
              1 sao (1)
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
            {
              comment.map((i:any)=>
                
              <Box
                display="flex"
                flexDirection="column"
                padding="20px"
                sx={{
                  '&:not(:last-chid)': {
                    borderBottom: '1px solid #e5e5e5',
                  },
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography marginRight="15px" fontWeight={500}>
                    {
                      i?.user?.fullName
                    }
                  </Typography>
                  <Rating
                    name="rating"
                    value={i?.rating}
                    onChange={(e: SyntheticEvent<any, any>, value: number | null) => setRating(value)}
                    precision={0.5}
                    sx={{
                      fontSize: '20px',
                      color: (theme) => theme.palette.secondary.main,
                    }}
                  />
                </Box>
                <Typography margin="10px 0">
                  {i?.content}
                </Typography>
                <Typography fontSize="12px" color="#272727">
                  {
                    
                    i?.createdAt? new Date(i?.createdAt).toLocaleString():''
                  }
                </Typography>
              </Box>
          
                
          )
        }
        </Box>
      </Box>
    </Box>
  );
};

export default ProductComment;
