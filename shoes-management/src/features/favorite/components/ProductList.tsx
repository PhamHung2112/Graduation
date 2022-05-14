import { Container } from '@mui/material';
import { FC } from 'react';
import ProductItem from './ProductItem';

const ProductList: FC = () => {
  return (
    <Container maxWidth="xl">
      <ProductItem />
    </Container>
  );
};

export default ProductList;
