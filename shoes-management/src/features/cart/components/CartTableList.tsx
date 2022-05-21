import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { CustomMuiButton } from 'components';
import { CheckoutEnumPath } from 'features/checkout/checkout';
import { HomeEnumPath } from 'features/home/home';
import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CartTableItem from './CartTableItem';
const CartTableList: FC = () => {
  const history = useHistory();
  const handlePayment = () => {
    history.push(CheckoutEnumPath.CHECKOUT);
  };

  const [totalMoney, setTotalMoney] = useState<number>(0);

  return (
    <>
      <Table
        sx={{
          border: '1px solid rgba(224, 224, 224, 1)',
          '& > thead th:not(:last-child)': { borderRight: '1px solid rgba(224, 224, 224, 1)' },
        }}
      >
        <TableHead
          sx={{
            padding: '0 15px',
            '& th': { fontWeight: 600 },
          }}
        >
          <TableRow>
            <TableCell align="left">Sản phẩm</TableCell>
            <TableCell align="center">Đơn giá</TableCell>
            <TableCell align="center">Số lượng</TableCell>
            <TableCell align="center">Tổng tiền</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <CartTableItem setTotalMoney={setTotalMoney} />
        </TableBody>
      </Table>
      <Box display="flex" mt={4} justifyContent="flex-end" width="50%" marginLeft="auto">
        <CustomMuiButton
          fullWidth
          backgroundColor="#ff871d"
          color="#ffffff"
          borderColor="#ff871d"
          textColor="#ff871d"
          margin="0 15px 0 0"
          onClick={handlePayment}
        >
          Thanh toán
        </CustomMuiButton>
        <CustomMuiButton
          fullWidth
          backgroundColor="#000000"
          color="#ffffff"
          borderColor="#000000"
          textColor="#000000"
          type="submit"
          onClick={() => history.push(HomeEnumPath.HOMEPAGE)}
        >
          Tiếp tục mua hàng
        </CustomMuiButton>
      </Box>
    </>
  );
};

export default CartTableList;
