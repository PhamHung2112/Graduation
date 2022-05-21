import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import Logo from 'assets/image/logo.png';
import axios from 'axios';
import { PasswordField } from 'components/FormElement/PasswordField';
import { AuthEnumsPath, RecoverPasswordPayload, recoverPasswordSchema } from 'features/auth/auth';
import { HomeEnumPath } from 'features/home/home';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export interface RecoverPasswordFormProps {
  initialValues?: RecoverPasswordPayload;
  onSubmit?: (formValues: RecoverPasswordPayload) => void;
}

const RecoverPasswordForm: FC<RecoverPasswordFormProps> = ({ initialValues, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(recoverPasswordSchema),
  });
  const history = useHistory();
  const { token }: any = useParams();
  const handleFormSubmit = async (formValues: RecoverPasswordPayload) => {
    try {
      const form = {
        passwordNew: formValues.password,
      };
      const res = await axios.post(`http://localhost:5000/api/auth/update-password/${token}`, form);
      toast.success(res.data.message);
      history.push(AuthEnumsPath.LOGIN);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Box width="500px" padding="50px" margin="auto">
      <Box width="95%" margin="0 auto" textAlign="center">
        <Box paddingBottom="20px" borderBottom="1px solid #ccc">
          <Link to={HomeEnumPath.HOMEPAGE}>
            <img src={Logo} alt="logo" width={160} />
          </Link>
        </Box>

        <Typography
          component="h2"
          variant="h6"
          textTransform="uppercase"
          paddingTop="20px"
          fontSize="16px"
          letterSpacing="0.2em"
        >
          đổi mật khẩu
        </Typography>

        <Typography my={2} lineHeight="30px">
          Nhập mật khẩu mới của bạn
        </Typography>

        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
          <PasswordField control={control} label="Mật khẩu" name="password" />
          <PasswordField control={control} label="Nhập lại mật khẩu" name="confirmPassword" />

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={(theme) => ({
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.secondary.contrastText,
              letterSpacing: '2px',
              padding: '10px 40px',
              marginTop: theme.spacing(3),

              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
              },
            })}
          >
            Đặt lại mật khẩu
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
          <Typography variant="body1">Đã có tài khoản?</Typography>
          <Link to={AuthEnumsPath.LOGIN}>Đăng nhập</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default RecoverPasswordForm;
