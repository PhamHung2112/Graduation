import { FavoriteBorder, Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { FC, memo } from 'react';
import { Product } from '../../../constants';
import { ProductItemControl } from '../home';
import Item from './Item';

export interface ProductItemProps {
  productList?: Product[];
  productColumn?: number;
  a?: any;
}

export const productControl: ProductItemControl[] = [
  {
    id: 1,
    title: 'Thêm vào danh sách yêu thích',
    icon: <FavoriteBorder />,
  },
  {
    id: 2,
    title: 'Thêm vào giỏ hàng',
    icon: <ShoppingBagOutlined />,
  },
  {
    id: 3,
    title: 'Xem nhanh',
    icon: <Search />,
  },
];

const ProductItem: FC<ProductItemProps> = ({ productList, productColumn, a }) => {
  return (
    <>
      <Grid container spacing={3}>
        {productList?.map((product) => (
          <Item product={product} key={product.id} productColumn={productColumn} />
        ))}
      </Grid>
    </>
  );
};

export default memo(ProductItem);
