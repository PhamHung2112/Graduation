import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import voucherApi from "../../api/voucherApi";
import VoucherModal from "./VoucherModal";
import VoucherTable from "./VoucherTable";

const VoucherPage = () => {
  const [voucherList, setVoucherList] = useState([]);
  const [open, setOpen] = useState(false);
  const [voucherEdit, setVoucherEdit] = useState();

  useEffect(() => {
    (async () => {
      const response = await voucherApi.getAll();
      setVoucherList(response.vouchers.rows);
    })();
  }, []);

  const handleCloseModal = () => {
    setOpen(false);
    setVoucherEdit(undefined);
  };
  const handleOpenModal = () => setOpen(true);

  const handleSubmit = async (formValues) => {
    try {
      if (voucherEdit) {
        await voucherApi.update(formValues);
        toast.success("Cập nhật mã giảm giá thành công");
        setVoucherEdit(undefined);
      } else {
        await voucherApi.create(formValues);
        toast.success("Thêm mới mã giảm giá thành công");
      }
      handleCloseModal();

      (async () => {
        const response = await voucherApi.getAll();
        setVoucherList(response.vouchers.rows);
      })();
    } catch (error) {
      toast.error("Thêm mới mã giảm giá thất bại");
    }
  };

  const handleUpdate = (voucher) => {
    setVoucherEdit(voucher);
  };

  const initialValue = {
    voucherName: "",
    voucherPercent: "",
    amount: "",
  };

  const handleDelete = async (voucher) => {
    try {
      await voucherApi.delete(voucher.id);
      toast.success("Xoá mã giảm giá thành công");
      (async () => {
        const response = await voucherApi.getAll();
        setVoucherList(response.vouchers.rows);
      })();
    } catch (error) {
      toast.error("Xoá mã giảm giá thật bại");
    }
  };

  return (
    <>
      <VoucherTable
        voucherList={voucherList}
        onOpenModal={handleOpenModal}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <VoucherModal
        open={open}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        voucherEdit={voucherEdit}
        initialValue={initialValue}
      />
    </>
  );
};

export default VoucherPage;
