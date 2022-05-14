import React from 'react';
import { RouteItem } from 'types/routes.types';
import { CheckoutEnumPath } from '../checkout';

const CHECKOUT_SCREEN: RouteItem = {
  id: 'checkout-screen',
  path: CheckoutEnumPath.CHECKOUT,
  component: React.lazy(() => import('../screens/checkout')),
  isPrivateRoute: true,
  layout: React.lazy(() => import('../screens/checkout')),
};

export const CHECKOUT_ROUTES = [CHECKOUT_SCREEN];
