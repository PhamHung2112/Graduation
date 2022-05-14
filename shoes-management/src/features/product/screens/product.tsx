import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import { api } from 'api/api';
import { Product } from '../../../constants';
import { HomeEnumPath } from 'features/home/home';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductFeatured from '../components/ProductFeatured';
import ProductInfor from '../components/ProductInfor';
import ProductSlider from '../components/ProductSlider';
import ProductTabs from '../components/ProductTabs';

const ProductDetailPage: FC = () => {
  const [product, setProduct] = useState<Product>();
  const [brand, setBrand] = useState<any>();
  const path: any = useParams();
  const id = path.slug;
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await api.get('product/' + id);
        const data = res?.data.product;
        const cast = {
          ...data,
          price: data.productPrice,
          name: data.productName,
          image: data?.image.split(','),
        };
        setProduct(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  useEffect(() => {
    const tmp: any = product;
    if (tmp?.typeId) {
      try {
        const getBrand = async () => {
          const res = await api.get('type/get-brand/' + tmp?.typeId);
          console.log(res);
          setBrand(res.data?.types?.brand);
        };
        getBrand();
      } catch (error) {
        console.log(error);
      }
    }
  }, [product]);
  return (
    <Container maxWidth="xl">
      <Box
        padding="6px 0 30px 0"
        sx={{
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': { color: (theme) => theme.palette.secondary.main },
          },
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={HomeEnumPath.HOMEPAGE}>Trang chủ</Link>
          <Link to={'/brand/' + brand?.id}>{brand?.brandName ? brand?.brandName : 'no-brand'}</Link>
          <Typography color="secondary">{product?.name}</Typography>
        </Breadcrumbs>
      </Box>
      <Grid container spacing={4} sx={{ paddingBottom: '68px' }}>
        <Grid item xl={6} lg={6} md={6}>
          {product && <ProductSlider imageList={product?.image} />}
        </Grid>
        <Grid item xl={6} lg={6} md={6} paddingLeft="90px !important">
          {product && <ProductInfor product={product} />}
        </Grid>
      </Grid>
      <ProductFeatured />
      <ProductTabs product={product} />
    </Container>
  );
};

export default ProductDetailPage;
