import { Add, FavoriteBorder, Remove } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { CustomMuiButton, CustomMuiIconButton, CustomRadioGroupField } from 'components';
import { InputField } from 'components';
import { Product } from '../../../constants';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from 'api/api';
import { FcLocalStrogate, updateTim } from 'helpers/action';
import { toast } from 'react-toastify';

export interface ProductInforProps {
  product: Product;
}

const ProductInfor: FC<ProductInforProps> = ({ product }) => {
  const [sizes, setSizes] = useState<number[]>([]);
  const { control, setValue, getValues } = useForm({
    defaultValues: {
      amount: 1,
      size: 36,
    },
  });

  useEffect(() => {
    const getSizes = async () => {
      try {
        const res = await api.get('productSize/' + product?.id);
        if (res?.data) {
          setSizes(res.data?.sizes);
          setValue('size', res.data?.sizes[0]);
        }
      } catch (error) {
        toast.error('Không lấy được size giày');
      }
    };
    getSizes();
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between" pb={3} borderBottom="1px solid #e7e7e7">
        <Box>
          <Typography
            variant="h5"
            color={(theme) => theme.palette.secondary.contrastText}
            fontWeight={500}
            textTransform="capitalize"
            mb={1.25}
          >
            {product.name}
          </Typography>
          <Box display="flex">
            {product.discount > 0 ? (
              <>
                <Typography color="secondary" fontWeight={700} marginRight="5px">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                    product.price - (product.price * product.discount) / 100
                  )}
                </Typography>
                <Typography
                  color="#979797"
                  sx={{ textDecoration: 'line-through' }}
                  fontWeight={700}
                >
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                    product.price
                  )}
                </Typography>
              </>
            ) : (
              <Typography color="secondary" fontWeight={700}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                  product.price
                )}
              </Typography>
            )}
          </Box>
        </Box>
        <Box>
          <CustomMuiIconButton
            title="Thêm sản phẩm yêu thích"
            width="40px"
            height="40px"
            border="1px solid #e9e9e9"
            onClick={() => {
              updateTim(product);
            }}
          >
            <FavoriteBorder />
          </CustomMuiIconButton>
        </Box>
      </Box>
      <Box pt={3}>
        <Typography fontSize="15px" color="#969696" lineHeight={1.6}>
          {product.summary}
        </Typography>
      </Box>
      <Box component="form" my={3}>
        <Box display="flex" alignItems="flex-end" mb={4}>
          <Typography
            fontSize="16px"
            fontWeight={600}
            borderBottom={(theme) => `1px solid ${theme.palette.secondary.contrastText}`}
            mr={3}
            pb={0.5}
            minWidth="55px"
          >
            Size
          </Typography>
          {sizes.length > 0 && (
            <CustomRadioGroupField control={control} name="size" options={sizes} />
          )}
        </Box>
        <Box display="flex" alignItems="flex-end">
          <Typography
            fontSize="16px"
            fontWeight={600}
            borderBottom={(theme) => `1px solid ${theme.palette.secondary.contrastText}`}
            mr={3}
            pb={0.5}
            minWidth="55px"
          >
            Số lượng
          </Typography>
          <Box
            display="flex"
            sx={{
              '& .MuiFormControl-root': {
                margin: 0,

                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  '& input': {
                    textAlign: 'center',
                    width: '70px',
                    height: '40px',
                    padding: 0,
                  },
                },
              },
            }}
          >
            <Button
              variant="contained"
              sx={(theme) => ({
                border: '1px solid #ced4da',
                borderRight: 'none',
                boxShadow: 'none',
                borderRadius: '4px 0 0 4px',
                minWidth: '40px',
                padding: 0,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: 'none',
                },
              })}
              onClick={() => setValue('amount', getValues().amount - 1)}
            >
              <Remove />
            </Button>
            <InputField control={control} name="amount" />
            <Button
              variant="contained"
              sx={(theme) => ({
                border: '1px solid #ced4da',
                borderLeft: 'none',
                boxShadow: 'none',
                borderRadius: '0 4px 4px 0',
                minWidth: '40px',
                padding: 0,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: 'none',
                },
              })}
              onClick={() => setValue('amount', getValues().amount + 1)}
            >
              <Add />
            </Button>
          </Box>
        </Box>
        <Box display="flex" mt={5}>
          <CustomMuiButton
            fullWidth
            backgroundColor="#ff871d"
            color="#ffffff"
            borderColor="#ff871d"
            textColor="#ff871d"
            margin="0 15px 0 0"
            onClick={() => {
              FcLocalStrogate(product, getValues('size'));
            }}
            disabled={sizes.length > 0 ? false : true}
          >
            Thêm vào giỏ hàng
          </CustomMuiButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfor;
