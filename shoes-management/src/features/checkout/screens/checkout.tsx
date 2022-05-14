import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import React, { FC, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import CartTableList from '../components/CartTableList';
import ChangeInformation from '../components/ChangeInformation';

const steps = ['Thay đổi thông tin cá nhân', 'Thanh toán'];

const getStepContent = (step: number, handleNext: () => void) => {
  switch (step) {
    case 0:
      return <ChangeInformation onNextStep={handleNext} />;
    case 1:
      return <CartTableList />;
    default:
      throw new Error('Unknown step');
  }
};

const CheckoutPage: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '50px' }}>
      <Container maxWidth="md" sx={{ border: '1px solid #e5e5e5', padding: '30px 10px' }}>
        <Typography
          textTransform="uppercase"
          fontSize="35px"
          marginBottom="30px"
          align="center"
          letterSpacing="2px"
          color="secondary"
        >
          Thanh toán đơn hàng
        </Typography>
        <Stepper
          activeStep={activeStep}
          sx={{
            '& .css-1svxasb-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
              color: '#ff871d',

              '& .css-192y5rx-MuiStepIcon-text': {
                fill: '#ffffff',
              },
            },

            '& .css-1svxasb-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
              color: '#ff871d',

              '& .css-192y5rx-MuiStepIcon-text': {
                fill: '#ffffff',
              },
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Fragment>
            <Typography variant="h5" gutterBottom>
              Cảm ơn bạn đã mua hàng !.
            </Typography>
            <Typography variant="subtitle1">
              Đơn hàng của bạn đã được gửi lên thành công. Chúng tôi sẽ kiểm tra đơn hàng và sẽ sớm
              gửi đến bạn nhanh nhất có thể.
            </Typography>
            <footer className="page-footer" style={{ justifyContent: 'space-between' }}>
              <Link to={'/'} className="account-link">
                <span>Trang chủ</span>
              </Link>
            </footer>
          </Fragment>
        ) : (
          <Fragment>
            {getStepContent(activeStep, handleNext)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} variant="text" color="secondary">
                  Quay lại trang điền thông tin
                </Button>
              )}
            </Box>
          </Fragment>
        )}
      </Container>
    </Box>
  );
};

export default CheckoutPage;
