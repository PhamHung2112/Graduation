import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import Logo from 'assets/image/logo.png';
import { InputField, PasswordField } from 'components';
import { AuthEnumsPath, LoginPayload, loginSchema } from 'features/auth/auth';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { LocalKey, LocalStorage } from 'ts-localstorage';
import { STORAGE_KEY } from 'constants/storage/storage';
import axios from 'axios';
import { HomeEnumPath } from 'features/home/home';

export interface LoginFormProps {
  initialValues?: LoginPayload;
  onSubmit?: (formValues: LoginPayload) => void;
}

const LoginForm: FC<LoginFormProps> = ({ initialValues, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(loginSchema),
  });

  const handleFormSubmit = async (formValues: LoginPayload) => {
    try {
      const data: any = await axios.post('http://localhost:5000/api/auth/login', formValues);

      const key = new LocalKey(STORAGE_KEY.TOKEN, '');
      const keyUser = new LocalKey(STORAGE_KEY.USER, '');
      LocalStorage.setItem(key, JSON.stringify(data.data.message.token));
      LocalStorage.setItem(keyUser, JSON.stringify(data.data.message));
      window.location.href = 'http://localhost:3000';
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Box width="500px" padding="50px" margin="auto">
      <Box width="85%" margin="0 auto" textAlign="center">
        <Box paddingBottom="20px" borderBottom="1px solid #ccc">
          <Link to={HomeEnumPath.HOMEPAGE}>
            <img src={Logo} alt="logo" width={160} />
          </Link>
        </Box>

        <Typography
          component="h2"
          variant="h6"
          textTransform="unset"
          paddingTop="20px"
          fontWeight={400}
          color={(theme) => theme.palette.secondary.contrastText}
        >
          Ch??o m???ng b???n quay tr??? l???i!
        </Typography>

        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
          <InputField control={control} label="Email" name="email" />
          <PasswordField control={control} label="M???t kh???u" name="password" />

          <Box
            sx={(theme) => ({
              textAlign: 'left',
              margin: theme.spacing(1, 0, 2.5),

              '& > a': {
                color: theme.palette.secondary.main,
                textDecoration: 'none',
              },
            })}
          >
            <Link to={AuthEnumsPath.FORGOT_PASSWORD}>Qu??n m???t kh???u</Link>
          </Box>

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={(theme) => ({
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.secondary.contrastText,
              letterSpacing: '2px',
              padding: '10px 40px',

              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
              },
            })}
          >
            ????ng nh???p
          </Button>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="30px"
          padding="10px"
          bgcolor="#f2f2f2"
          border="1px solid #e8eced"
          fontSize="14px"
          sx={(theme) => ({
            '&>a': {
              color: theme.palette.secondary.main,
              textDecoration: 'none',
              marginLeft: '8px',
            },
          })}
        >
          <Typography variant="body1">Ch??a c?? t??i kho???n?</Typography>
          <Link to={AuthEnumsPath.REGISTER}>????ng k?? ngay</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
