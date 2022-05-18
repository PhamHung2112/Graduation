import { api } from 'api/api';
import { useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import { Voucher } from '../../constants';
import { HomeEnumPath } from 'features/home/home';
import React, { FC, memo } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LocalKey, LocalStorage } from 'ts-localstorage';

const PayPalButton = (window as any)?.paypal.Buttons.driver('react', { React, ReactDOM });

export interface PaypalButtonWrapperProps {
  total: number;
  voucher?: Voucher;
}

const PaypalButtonWrapper: FC<PaypalButtonWrapperProps> = ({ total, voucher }) => {
  const userInfor = useAppSelector((state: RootState) => state.auth.currentUser);
  const history = useHistory();
  const money = +total / 23000;
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: money.toFixed(2),
          },
        },
      ],
    });
  };
  const onApprove = async (data: any, actions: any) => {
    // get user
    const userId = userInfor?.id;

    const voucherId = voucher?.id;

    // get cart
    const key = new LocalKey('cart', '');
    const dataLC: any = LocalStorage.getItem(key);
    const a = JSON.parse(dataLC) || [];
    const cartList = a.map((i: any) => {
      return {
        productId: i.id,
        amount: i.price * i.count,
      };
    });
    try {
      //  add invoice
      if (voucher?.id) {
        total = total - (total * voucher.voucherPercent) / 100;
      }
      const res = await api.post('invoice/create', {
        voucherId,
        userId: parseInt(userId as string),
        total,
      });
      if (res) {
        // get Id invoice for detailInvoice table
        const invoiceId = res.data?.invoice?.id;

        // add detailInvoice
        for (let i = 0; i < cartList.length; i++) {
          await api.post('invoiceDetail/create', {
            invoiceId,
            ...cartList[i],
          });
        }
      }
    } catch (error) {
      toast.error('Thanh toán sản phẩm không thành công');
    }

    localStorage.removeItem('cart');
    toast.success('Thanh toán đơn hàng thành công');
    history.push(HomeEnumPath.HOMEPAGE);
    return actions.order.capture();
  };

  return (
    <PayPalButton
      createOrder={(data: any, actions: any) => createOrder(data, actions)}
      onApprove={(data: any, actions: any) => onApprove(data, actions)}
    />
  );
};

export default memo(PaypalButtonWrapper);
