import { Container } from '@mui/material';
import { FC } from 'react';
import ProductItem from './ProductItem';
import { Product } from '../../../constants';

export interface ProductListProps {
  data: Product[];
}

const ProductList: FC<ProductListProps> = ({ data }) => {
  return (
    <Container maxWidth="xl">
      <ProductItem productList={data} />
    </Container>
  );
};

export default ProductList;
