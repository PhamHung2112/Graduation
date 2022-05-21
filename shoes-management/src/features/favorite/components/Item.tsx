import { FavoriteBorder, Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { useAppDispatch } from 'app/hooks';
import { CustomMuiIconButton } from 'components';
import { cartActions } from 'features/cart/redux/cartSlice';
import ProductModal from 'features/product/components/ProductModal';
import { FcLocalStrogate } from 'helpers/action';
import { FC, Fragment, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LocalKey, LocalStorage } from 'ts-localstorage';
import { Product } from '../../../constants';
import { ProductItemControl } from '../../home/constants/home.constants';
import ProductSlider from './ProductSlider';

export interface ProductItemProps {
  product: Product;
  productColumn?: number;
}

export const productControl: ProductItemControl[] = [
  {
    id: 1,
    title: 'Thêm vào danh sách yêu thích',
    icon: <FavoriteBorder />,
  },
  {
    id: 2,
    title: 'Thêm vào giỏ hàng',
    icon: <ShoppingBagOutlined />,
  },
  {
    id: 3,
    title: 'Xem nhanh',
    icon: <Search />,
  },
];

const buzz = keyframes`
  0% {
    transform: scale(1.0) rotate(8deg);
  }
  25% {
    transform: scale(1.0) rotate(-8deg);
  }
  50% {
    transform: scale(1.0) rotate(8deg);
  }
  100% {
    transform: scale(1.1) rotate(-8deg);
  }
`;

const Item: FC<ProductItemProps> = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);
  const [callList, setCallList] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const dispatch = useAppDispatch();

  const updateTim = (data: any) => {
    const key = new LocalKey('array', '');
    const dataLC: any = LocalStorage.getItem(key);
    const tim = JSON.parse(dataLC) || [];
    if (tim.length > 0) {
      let checktim = tim.find((item: any) => item.id === data.id);
      if (checktim) {
        const arrNew = tim.filter((item: any) => item.id !== data.id);
        LocalStorage.setItem(key, JSON.stringify(arrNew));
        toast.success('Xóa sản phẩm yêu thích thành công');
      } else {
        tim.push(data);
        toast.success('Thêm sản phẩm yêu thích thành công');
        LocalStorage.setItem(key, JSON.stringify(tim));
      }
    } else {
      tim.push(data);
      toast.success('Thêm sản phẩm yêu thích thành công');
      LocalStorage.setItem(key, JSON.stringify(tim));
    }
    setCallList(!callList);
  };

  return (
    <Fragment key={product.id}>
      <Grid item lg={3} xl={3} textAlign="center" position="relative">
        {product.productSizes && product.productSizes.length > 0 ? null : (
          <Typography
            sx={{
              pointerEvents: 'none',
              userSelect: 'none',
              position: 'absolute',
              top: '35%',
              left: '45%',
              transform: 'translate(-50%, -50%)',
              color: '#ffffff',
              background: '#000000',
              borderRadius: '50%',
              textAlign: 'center',
              width: '50px',
              height: '50px',
              lineHeight: '50px',
              display: 'inline-block',
              fontSize: '18px',
              zIndex: 99,
              fontWeight: 500,
              animation: `${buzz} .5s ease-in-out infinite alternate`,
            }}
          >
            Hết
          </Typography>
        )}
        <Box
          position="relative"
          border="1px solid #e2e2e2"
          padding={product.productSizes && product.productSizes.length > 0 ? '10px' : 0}
          sx={{
            '&:hover': {
              '& > .MuiBox-root > div': {
                visibility: 'visible',
                transform: 'none',
                opacity: 1,
              },
            },
          }}
        >
          <ProductSlider
            imageList={product?.image}
            productId={product.id}
            checkSize={product.productSizes && product.productSizes.length > 0}
          />
          <Box
            position="absolute"
            right={0}
            top="calc(50% - 37px)"
            bgcolor="transparent"
            display="block"
            sx={{
              transform: 'translateY(-50%)',
              '& div:not(:last-child)': { marginBottom: '15px' },
            }}
            zIndex={10}
          >
            <Box
              sx={{
                transition: '.5s',
                visibility: 'hidden',
                opacity: 0,
                transform: 'translateX(30px)',
              }}
            >
              <CustomMuiIconButton
                title="Thêm sản phẩm yêu thích"
                width="46px"
                height="46px"
                boxShadow="0 3px 10px rgb(0 0 0 / 8%)"
                transition=".3s"
                margin="0 10px"
                backgroundColor="#ff871d"
                color="#ffffff"
                onClick={() => {
                  updateTim(product);
                }}
              >
                <FavoriteBorder />
              </CustomMuiIconButton>
            </Box>
            {product.productSizes && product.productSizes.length > 0 && (
              <Box
                sx={{
                  transition: '.5s',
                  visibility: 'hidden',
                  opacity: 0,
                  transform: 'translateX(30px)',
                }}
              >
                <CustomMuiIconButton
                  title="Thêm vào giỏ hàng"
                  width="46px"
                  height="46px"
                  boxShadow="0 3px 10px rgb(0 0 0 / 8%)"
                  transition=".3s"
                  margin="0 10px"
                  onClick={() => {
                    FcLocalStrogate(product);
                    dispatch(cartActions.updateAmountCart());
                  }}
                >
                  <ShoppingBagOutlined />
                </CustomMuiIconButton>
              </Box>
            )}
            <Box
              sx={{
                transition: '.5s',
                visibility: 'hidden',
                opacity: 0,
                transform: 'translateX(30px)',
              }}
            >
              <CustomMuiIconButton
                title="Xem nhanh"
                width="46px"
                height="46px"
                boxShadow="0 3px 10px rgb(0 0 0 / 8%)"
                transition=".3s"
                margin="0 10px"
                onClick={handleOpenModal}
              >
                <Search />
              </CustomMuiIconButton>
            </Box>
          </Box>
        </Box>
        <Box
          border="1px solid #e2e2e2"
          padding="10px"
          borderTop={0}
          sx={{
            '&>a': {
              color: (theme) => theme.palette.primary.contrastText,
              textDecoration: 'none',
              width: '100%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              display: 'block',

              '&:hover': {
                color: (theme) => theme.palette.secondary.main,
              },
            },
          }}
        >
          <Link to="">{product.name}</Link>
          <Box fontSize="15px" margin="10px 015px" display="flex" justifyContent="center">
            {product.discount > 0 ? (
              <>
                <Typography color="secondary" fontWeight={700} marginRight="5px">
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(product.price - (product.price * product.discount) / 100)}
                </Typography>
                <Typography
                  color="#979797"
                  sx={{ textDecoration: 'line-through' }}
                  fontWeight={700}
                >
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(product.price)}
                </Typography>
              </>
            ) : (
              <Typography color="secondary" fontWeight={700}>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(product.price)}
              </Typography>
            )}
          </Box>
        </Box>
      </Grid>
      <ProductModal
        open={openModal}
        onCloseModal={handleCloseModal}
        product={product}
        key={product.id}
      />
    </Fragment>
  );
};

export default memo(Item);
