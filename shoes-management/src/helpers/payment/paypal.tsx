import { HomeEnumPath } from 'features/home/home';
import React, { FC, memo } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const PayPalButton = (window as any)?.paypal.Buttons.driver('react', { React, ReactDOM });

export interface PaypalButtonWrapperProps {
  total: number;
}

const PaypalButtonWrapper: FC<PaypalButtonWrapperProps> = ({ total }) => {
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
  const onApprove = (data: any, actions: any) => {
    toast.success('Thanh toán đơn hàng thành công');
    history.push(HomeEnumPath.HOMEPAGE);
    localStorage.removeItem('cart');
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
