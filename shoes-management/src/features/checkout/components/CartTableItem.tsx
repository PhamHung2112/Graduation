import { Box, TableCell, TableRow, TextField, Theme, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LocalKey, LocalStorage } from 'ts-localstorage';
import { Product, Voucher } from '../../../constants';

export interface CartTableItemProps {
  productList?: Product[];
  setTotalMoney: any;
  voucher?: Voucher;
}

const CartTableItem: FC<CartTableItemProps> = ({ setTotalMoney, voucher }) => {
  const [productList, setproductList] = useState<any>([]);
  const [total, setTotal] = useState<any>(0);

  useEffect(() => {
    const key = new LocalKey('cart', '');
    const dataLC: any = LocalStorage.getItem(key);
    if (!dataLC) {
      return;
    }
    const count: any = JSON.parse(dataLC);
    setproductList(count);
    moneyTotal();
  }, [voucher]);

  const moneyTotal = () => {
    const key = new LocalKey('cart', '');
    const dataLC: any = LocalStorage.getItem(key);
    const a: any = JSON.parse(dataLC);
    let count = 0;
    for (var i = 0; i < a.length; i++) {
      count += (a[i].price - (a[i].price * a[i].discount) / 100) * a[i].count;
    }
    setTotal(count);
    setTotalMoney(count);
    if (voucher) {
      count = count - (voucher.voucherPercent * count) / 100;
      setTotal(count);
      setTotalMoney(count);
    }
  };

  return (
    <>
      {productList?.map((product: any, index: number) => (
        <TableRow
          key={index}
          sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', '& > td': { padding: '12px' } }}
        >
          <TableCell sx={{ display: 'flex', borderBottom: 'none' }}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image[0]} alt={product.name} width="100px" height="100px" />
            </Link>
            <Box
              padding="12px 12px 12px 24px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              lineHeight={1.6}
              sx={{
                '& a': {
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '15px',

                  '&:hover': {
                    color: (theme: Theme) => theme.palette.secondary.main,
                  },
                },
              }}
            >
              <Link to={`/product/${product.id}`}>{product.name}</Link>
              <Typography color="#959595" fontSize="14px">
                {product?.productSizes[0]?.amount}
              </Typography>
            </Box>
          </TableCell>
          <TableCell align="center">
            <Typography color="secondary" fontWeight={500}>
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                product.price - (product.price * product.discount) / 100
              )}
            </Typography>
          </TableCell>
          <TableCell>
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                '& .MuiFormControl-root': {
                  margin: 0,

                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    '&.Mui-focused': {
                      border: '1px solid #000000',
                    },
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
              <TextField name="amount" value={product.count} disabled />
            </Box>
          </TableCell>
          <TableCell align="center">
            <Typography color="secondary" fontWeight={500}>
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                (product.price - (product.price * product.discount) / 100) * product.count
              )}
            </Typography>
          </TableCell>
        </TableRow>
      ))}
      <TableRow
        sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', '& > td': { padding: '12px' } }}
      >
        <TableCell colSpan={2}></TableCell>
        <TableCell variant="head" align="center">
          <Typography fontSize="20px" fontWeight={600}>
            Thành tiền:
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography fontSize="18px" fontWeight={600} color="secondary">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}
          </Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CartTableItem;
