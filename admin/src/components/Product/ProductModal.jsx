import { Close } from "@mui/icons-material";
import { Fade, Grid, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import productSizeApi from "../../api/productSizeApi";
import { isEmptyObject } from "../../utils/common";
import ProductInfor from "./ProductInfor";
import ProductSlider from "./ProductSlider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "20px",
  borderRadius: "6px",
};

const ProductModal = ({ open, onCloseModal, product }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  const handleAddSize = async (formValues) => {
    const values = { ...formValues, productId: product.id };
    try {
      await productSizeApi.create(values);
      toast.success("Thêm size giày thành công");
      handleCloseModal();
      onCloseModal();
    } catch (error) {
      toast.error("Thêm size giày thất bại");
    }
  };

  return (
    <Modal open={open} onClose={onCloseModal}>
      <Fade in={open}>
        <Grid container sx={{ ...style }} spacing={2}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            paddingLeft="0 !important"
            paddingRight="16px"
          >
            <ProductSlider
              flexDirection="column"
              direction="horizontal"
              width="100%"
              height="100%"
              imageList={product?.image.split(",")}
            />
          </Grid>
          <Grid item xl={6} lg={6} md={6}>
            {!isEmptyObject(product) && (
              <ProductInfor
                product={product}
                open={openModal}
                onClose={handleCloseModal}
                onOpen={handleOpenModal}
                onSubmit={handleAddSize}
              />
            )}
          </Grid>
          <IconButton
            color="primary"
            sx={{
              position: "absolute",
              top: "-15px",
              right: "-10px",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "1px solid #1976d2",
              backgroundColor: "#fff",

              "&:hover": {
                backgroundColor: "#1976d2",
                color: "#fff",
              },
            }}
            onClick={onCloseModal}
          >
            <Close />
          </IconButton>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default ProductModal;
