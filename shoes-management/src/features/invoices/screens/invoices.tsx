import { Visibility } from '@mui/icons-material';
import { IconButton, TableBody, Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { api } from 'api/api';
import { useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import InvoiceDetailModal from '../components/InvoiceDetailModal';

export default function InvoicePage() {
  const [invoiceList, setInvoiceList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [invoiceDetail, setInvoiceDetail] = useState();
  const user = useAppSelector((state: RootState) => state.auth.currentUser);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.get(`invoice/getByUser/${user?.id}`);
        setInvoiceList(data.data.invoices.rows);
      } catch (error) {
        toast.error('Lấy danh sách hoá đơn thất bại');
      }
    })();
  }, []);

  const handleClose = () => setOpen(false);
  const handleOpen = (invoice: any) => {
    setOpen(true);
    setInvoiceDetail(invoice);
  };
  const handleFillData = (invoice: any) => {
    setOpen(true);
    setInvoiceDetail(invoice);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box mt={3}>
          <Typography
            variant="h5"
            fontWeight={500}
            marginBottom="15px"
            color="secondary"
            textTransform="uppercase"
          >
            Hoá đơn của bạn
          </Typography>
        </Box>
      </Box>
      <Box margin="20px auto 40px" width="1400px">
        <Table
          sx={{
            border: '1px solid #e2e2e2',

            '& .MuiTableCell-head': {
              borderRight: '1px solid #e2e2e2',
              fontWeight: 600,
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Voucher</TableCell>
              <TableCell align="center">Tên khách hàng</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Ngày mua</TableCell>
              <TableCell align="center">Phương thức thanh toán</TableCell>
              <TableCell align="center">Tổng tiền</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoiceList &&
              invoiceList.length > 0 &&
              invoiceList.map((row, index) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.voucherId ? row?.Voucher?.voucherName : null}</TableCell>
                  <TableCell align="center">{row?.user?.fullName}</TableCell>
                  <TableCell align="center">{row?.user?.email}</TableCell>
                  <TableCell align="center">
                    {row?.invoiceDetails && row?.invoiceDetails.length > 0
                      ? moment(row?.invoiceDetails[0]?.createdAt).format('DD/MM/YYYY')
                      : moment().format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell align="center">
                    {row?.payment === 1 ? 'Thanh toán online' : 'Thanh toán COD'}
                  </TableCell>
                  <TableCell align="center">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    }).format(row.total)}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip
                      title="Xem thông tin chi tiết hoá đơn"
                      placement="top"
                      arrow
                      disableInteractive
                    >
                      <IconButton color="secondary" onClick={() => handleOpen(row.invoiceDetails)}>
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>

      <InvoiceDetailModal open={open} onClose={handleClose} invoice={invoiceDetail} />
    </Box>
  );
}
