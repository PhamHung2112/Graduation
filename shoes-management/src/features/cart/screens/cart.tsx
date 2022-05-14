import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import { CustomMuiButton } from 'components';
import { HomeEnumPath } from 'features/home/home';
import { FC, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LocalKey, LocalStorage } from 'ts-localstorage';
import CartTableList from '../components/CartTableList';

const CartPage: FC = () => {
  const [isCart, setIsCart] = useState(false);
  useEffect(() => {
    const key = new LocalKey('cart', '');
    const dataLC: any = LocalStorage.getItem(key);
    if (dataLC) {
      setIsCart(true);
    }
  }, []);
  const history = useHistory();
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
          Giỏ hàng
        </Typography>
        <Breadcrumbs>
          <Link to={HomeEnumPath.HOMEPAGE}>Trang chủ</Link>
          <Typography fontWeight={500} variant="body1">
            Giỏ hàng
          </Typography>
        </Breadcrumbs>
      </Box>
      <Container maxWidth="xl">
        <Box padding="50px 0">
          {isCart ? (
            <CartTableList />
          ) : (
            <>
              <Typography textAlign="center" marginBottom="30px" fontSize="25px">
                Giỏ hàng của bạn đang trống!
              </Typography>
              <Box display="flex" justifyContent="center">
                <CustomMuiButton
                  fullWidth={false}
                  backgroundColor="#ff871d"
                  color="#ffffff"
                  borderColor="#ff871d"
                  textColor="#ff871d"
                  type="submit"
                  onClick={() => history.push(HomeEnumPath.HOMEPAGE)}
                >
                  Tiếp tục mua hàng
                </CustomMuiButton>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default CartPage;
