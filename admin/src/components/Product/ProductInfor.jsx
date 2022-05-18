import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import productSizeApi from "../../api/productSizeApi";
import sizeApi from "../../api/sizeApi";
import typeApi from "../../api/typeApi";
import ProductSize from "./ProductSize";

const ProductInfor = ({ product, open, onClose, onOpen, onSubmit }) => {
  const [sizes, setSizes] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [type, setType] = useState();

  console.log(product);

  const sizeProduct = product?.ProductSizes.reduce((prev, acc) => {
    const sizeNumber = acc.Size.sizeNumber;
    prev.push(sizeNumber);
    return prev;
  }, []);

  const productSize = sizeList
    .filter((size) => {
      return !sizeProduct.includes(size.sizeNumber);
    })
    .reduce((prev, acc) => {
      const obj = {};
      obj.label = acc.sizeNumber;
      obj.value = acc.id;
      prev.push(obj);
      return prev;
    }, []);

  useEffect(() => {
    const getSizes = async () => {
      try {
        const res = await productSizeApi.getById(product?.id);
        setSizes(res.sizes);
      } catch (error) {
        toast.error("Không lấy được size giày");
      }
    };
    getSizes();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await typeApi.getById(product.typeId);
        setType(res.type);
      } catch (error) {
        toast.error("Lấy tên thương hiệu thất bại");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await sizeApi.getAll();
        setSizeList(res.sizes.rows);
      } catch (error) {
        toast.error("Lấy size giày thất bại");
      }
    })();
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        justifyContent="space-between"
        pb={3}
        borderBottom="1px solid #e7e7e7"
      >
        <Box>
          <Typography
            variant="h5"
            color="#000"
            fontWeight={500}
            textTransform="capitalize"
            mb={1.5}
          >
            {product?.productName}
          </Typography>
          <Typography
            variant="body1"
            color="error"
            fontWeight={500}
            textTransform="capitalize"
            mb={1.5}
          >
            Loại thương hiệu: {type?.typeName}
          </Typography>
          <Box display="flex">
            {product?.discount > 0 ? (
              <>
                <Typography color="primary" fontWeight={700} marginRight="5px">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(
                    product.productPrice -
                      (product.productPrice * product.discount) / 100
                  )}
                </Typography>
                <Typography
                  color="#979797"
                  sx={{ textDecoration: "line-through" }}
                  fontWeight={700}
                >
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.productPrice)}
                </Typography>
              </>
            ) : (
              <Typography color="primary" fontWeight={700}>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product?.productPrice)}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      <Box pt={3}>
        <Typography fontSize="15px" color="#969696" lineHeight={1.6}>
          {product?.summary}
        </Typography>
      </Box>
      <Box component="form" my={3}>
        <Box display="flex" alignItems="flex-end" mb={4}>
          <Typography
            fontSize="16px"
            fontWeight={600}
            borderBottom="1px solid #000"
            mr={3}
            pb={0.5}
            minWidth="55px"
          >
            Size
          </Typography>
          {sizes.length > 0 &&
            sizes.map((size) => (
              <Typography
                key={size}
                p={1}
                color="#fff"
                bgcolor="#1976d2"
                borderRadius="3px"
                mr={1.5}
              >
                {size}
              </Typography>
            ))}
        </Box>
      </Box>
      <Button color="primary" variant="contained" onClick={onOpen}>
        Thêm size giày
      </Button>
      <ProductSize
        open={open}
        onClose={onClose}
        sizeList={productSize}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

export default ProductInfor;
