import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { api } from 'api/api';
import { CustomMuiButton, InputField } from 'components';
import { CheckoutEnumPath } from 'features/checkout/checkout';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { LocalKey, LocalStorage } from 'ts-localstorage';
import * as yup from 'yup';
import { Voucher } from '../../../constants';
import PaypalButtonWrapper from '../../../helpers/payment/paypal';
import CartTableItem from './CartTableItem';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';

const schema = yup.object().shape({
  voucher: yup.string().required('Vui lòng nhập mã giảm giá'),
});

const moneyTotal = () => {
  const key = new LocalKey('cart', '');
  const dataLC: any = LocalStorage.getItem(key);
  const a: any = JSON.parse(dataLC);
  let count = 0;
  for (var i = 0; i < a.length; i++) {
    count += (a[i].price - (a[i].price * a[i].discount) / 100) * a[i].count;
  }
  return count;
};

const CartTableList: FC = () => {
  const history = useHistory();
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const [voucher, setVoucher] = useState<Voucher>();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      voucher: '',
    },
    resolver: yupResolver(schema),
  });
  const userInfor = useAppSelector((state: RootState) => state.auth.currentUser);
  const handlePayment = async() => {
    // set voucherId
    const voucherId=1;

    // get user
    const userId= userInfor?.id;

    // get cart 
    const key = new LocalKey('cart', '');
    const dataLC: any = LocalStorage.getItem(key);
    const a = JSON.parse(dataLC) || [];
    const cartList = a.map((i: any)=>{
      return {
        productId: i.id,
        amount: i.price*i.count
      }
    })

    // sum func
    let total= moneyTotal()

     try {

      //  add invoice
      const res= await api.post('invoice/create',{voucherId, userId, total });
      if(res){

        // get Id invoice for detailInvoice table
        const invoiceId= res.data?.invoice?.id;

        // add detailInvoice
        for(let i=0; i<cartList.length; i++){
          await api.post('invoiceDetail/create',{
            invoiceId,
            ... cartList[i]
          });
        }

      }
    } catch (error) {
      console.log(error);
    }
    
    localStorage.removeItem('cart');
    toast.success('Thanh toán đơn hàng thành công');
    history.push(CheckoutEnumPath.CHECKOUT);
  };

  const handleSubmitForm = async (formValues: { voucher: string }) => {
    try {
      const response = await api.get(`/voucher/all?search=${formValues.voucher}`);
      setVoucher(response.data.vouchers.rows[0]);
      reset();
    } catch (error) {
      toast.error('Voucher không tồn tại');
    }
  };

  return (
    <Box marginTop="30px">
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
            <TableCell align="center" sx={{ width: '130px' }}>
              Số lượng
            </TableCell>
            <TableCell align="center">Tổng tiền</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <CartTableItem setTotalMoney={setTotalMoney} voucher={voucher} />
        </TableBody>
      </Table>
      <Box display="flex" mt={4} justifyContent="space-between" alignItems="baseline">
        <Box order={2} display="flex" flex={1} marginLeft="40px">
          <CustomMuiButton
            fullWidth
            backgroundColor="#ff871d"
            color="#ffffff"
            borderColor="#ff871d"
            textColor="#ff871d"
            margin="0 15px 0 0"
            onClick={handlePayment}
          >
            Thanh toán COD
          </CustomMuiButton>
          <PaypalButtonWrapper total={totalMoney} />
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit(handleSubmitForm)}
          order={1}
          display="flex"
          alignItems="center"
          flex={1}
          sx={{
            '& .MuiFormControl-root': {
              margin: 0,
            },

            '& button': {
              width: '30%',
              height: '56px',
              marginLeft: '10px',
            },
          }}
        >
          <InputField name="voucher" control={control} label="Mã giảm giá" />
          <CustomMuiButton
            backgroundColor="#000000"
            color="#ffffff"
            borderColor="#000000"
            textColor="#000000"
            type="submit"
          >
            Áp dụng
          </CustomMuiButton>
        </Box>
      </Box>
      <ToastContainer position="top-right" autoClose={3000} closeOnClick />
    </Box>
  );
};

export default CartTableList;
