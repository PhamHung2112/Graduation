import { Grid } from '@mui/material';
import { FC, memo, useEffect, useState } from 'react';
import { LocalKey, LocalStorage } from 'ts-localstorage';
import { Product } from '../../../constants';
import Item from './Item';

export interface ProductItemProps {
  productList: Product[];
}

const ProductItem: FC<ProductItemProps> = ({ productList }) => {
  return (
    <>
      <Grid container spacing={3}>
        {productList?.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </Grid>
    </>
  );
};

export default memo(ProductItem);
