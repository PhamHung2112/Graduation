import { Grid } from '@mui/material';
import { FC, memo, useEffect, useState } from 'react';
import { LocalKey, LocalStorage } from 'ts-localstorage';
import { Product } from '../../../constants';
import Item from './Item';

const ProductItem: FC = () => {
  const [productListData, setproductList] = useState<Product[]>([]);

  useEffect(() => {
    const key = new LocalKey('array', '');
    const dataLC: any = LocalStorage.getItem(key);
    const count: any = JSON.parse(dataLC);
    setproductList(count);
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        {productListData?.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </Grid>
    </>
  );
};

export default memo(ProductItem);
