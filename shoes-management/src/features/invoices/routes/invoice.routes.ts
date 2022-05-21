import React from 'react';
import { RouteItem } from 'types/routes.types';
import { InvoicesEnumPath } from '../invoices';

const INVOICES_SCREEN: RouteItem = {
  id: 'invoices-screen',
  path: InvoicesEnumPath.INVOICES,
  component: React.lazy(() => import('../screens/invoices')),
};

export const INVOICES_ROUTES = [INVOICES_SCREEN];
