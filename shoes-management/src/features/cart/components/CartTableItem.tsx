import { Add, Delete, Remove } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Theme,
  Typography,
} from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LocalKey, LocalStorage } from 'ts-localstorage';
import { Product } from '../../../constants';
import { cartActions } from '../redux/cartSlice';

export interface CartTableItemProps {
  productList?: Product[];
  setTotalMoney: any;
}

const CartTableItem: FC<CartTableItemProps> = ({ setTotalMoney }) => {
  const [productList, setproductList] = useState<any>([]);
  const [total, setTotal] = useState<any>(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const key = new LocalKey('cart', '');
    const dataLC: any = LocalStorage.getItem(key);
    if (!dataLC) {
      return;
    }
    const count: any = JSON.parse(dataLC);
    setproductList(count);
    moneyTotal();
  }, []);

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
  };

  const deletItemCard = (id: number, size: number) => {
    const key = new LocalKey('cart', '');
    const dataLC: any = LocalStorage.getItem(key);
    const count: any = JSON.parse(dataLC);
    console.log('count');
    console.log(count);
    console.log('id');
    console.log(id);
    console.log('size');
    console.log(size);
    const dataNewAfterDelete = count.filter((item: any) => {
      if (item.id !== id) {
        return item.id !== id;
      }

      return item.size !== size;
    });
    if (dataNewAfterDelete.length > 0) {
      LocalStorage.setItem(key, JSON.stringify(dataNewAfterDelete));
    } else {
      LocalStorage.removeItem(key);
      window.location.reload();
    }

    toast.error('X??a s???n ph???m th??nh c??ng');
    moneyTotal();
    setproductList(dataNewAfterDelete);
    dispatch(cartActions.updateAmountCart());
  };

  const setDataCard = (index: number, b: boolean) => {
    const key = new LocalKey('cart', '');
    const dataLC: any = LocalStorage.getItem(key);
    const a: any = JSON.parse(dataLC);
    for (var i = 0; i < a.length; i++) {
      if (i === index && a[index].count === 1 && b === false) {
        toast.error('S???n ph???m mua nh??? nh???t l?? 1 ');
      } else if (i === index && a[index].count > 1 && b === false) {
        a[index].count -= 1;
        LocalStorage.setItem(key, JSON.stringify(a));
      } else if (i === index && b === true) {
        a[index].count += 1;
        LocalStorage.setItem(key, JSON.stringify(a));
      }
    }
    moneyTotal();
    setproductList(a);
  };
  console.log('productList');
  console.log(productList);
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
                {product?.size !== 0 ? product?.size : product?.productSizes[0]?.size?.sizeNumber}
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
                onClick={() => setDataCard(index, false)}
              >
                <Remove />
              </Button>
              <TextField name="amount" value={product.count} disabled />
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
                onClick={() => setDataCard(index, true)}
              >
                <Add />
              </Button>
            </Box>
          </TableCell>
          <TableCell align="center">
            <Typography color="secondary" fontWeight={500}>
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                (product.price - (product.price * product.discount) / 100) * product.count
              )}
            </Typography>
          </TableCell>
          <TableCell align="center">
            <IconButton onClick={() => deletItemCard(product.id, product.size)}>
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
      <TableRow
        sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', '& > td': { padding: '12px' } }}
      >
        <TableCell colSpan={3}></TableCell>
        <TableCell variant="head" align="center">
          <Typography fontSize="20px" fontWeight={600}>
            Th??nh ti???n:
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
