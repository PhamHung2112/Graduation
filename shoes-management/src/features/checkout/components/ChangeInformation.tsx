import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { api } from 'api/api';
import { RootState } from 'app/store';
import { CustomMuiButton, InputField } from 'components';
import { RegisterPayload, updateUserSchema } from 'features/auth/auth';
import { HomeEnumPath } from 'features/home/home';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useAppSelector } from '../../../app/hooks';

export interface ChangeInformationProps {
  onNextStep: () => void;
}

const ChangeInformation: FC<ChangeInformationProps> = ({ onNextStep }) => {
  const userInfor = useAppSelector((state: RootState) => state.auth.currentUser);
  const history = useHistory();

  const initialValues: RegisterPayload = {
    firstName: userInfor?.fullName?.split(' ')[0],
    lastName: userInfor?.fullName?.split(' ').slice(1, 3).join(' '),
    email: userInfor ? userInfor.email : '',
    phoneNumber: userInfor?.phoneNumber || '',
    address: userInfor?.address || '',
  };

  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(updateUserSchema),
  });

  const handleFormSubmit = async (formValues: RegisterPayload) => {
    formValues.firstName = formValues?.firstName
      ? formValues?.firstName
      : userInfor?.fullName?.split(' ')[0];
    formValues.lastName = formValues?.lastName
      ? formValues?.lastName
      : userInfor?.fullName?.split(' ').slice(1, 3).join(' ');
    formValues.email = formValues?.email ? formValues?.email : userInfor?.email + '';
    formValues.address = formValues?.address ? formValues?.address : userInfor?.email + '';
    formValues.phoneNumber = formValues?.phoneNumber
      ? formValues?.phoneNumber
      : userInfor?.email + '';
    formValues.fullName = `${formValues?.firstName} ${formValues?.lastName}`;
    delete formValues.lastName;
    delete formValues.firstName;
    try {
      const res = await api.post('user/updateMe', formValues);
      if (res) {
        onNextStep();
      }
    } catch (error) {
      toast.error('C???p nh???t th??ng tin kh??ng th??nh c??ng!');
    }
  };

  if (userInfor)
    return (
      <Box width="500px" padding="50px" margin="auto">
        <Box width="95%" margin="0 auto" textAlign="center">
          <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
            <Box display="flex">
              <Box mr={2}>
                <InputField control={control} label="H???" name="firstName" />
              </Box>
              <Box>
                <InputField control={control} label="T??n" name="lastName" />
              </Box>
            </Box>
            <InputField control={control} label="Email" name="email" readOnly />
            <InputField control={control} label="S??? ??i???n tho???i" name="phoneNumber" />
            <InputField control={control} label="?????a ch???" name="address" />

            <CustomMuiButton
              fullWidth
              backgroundColor="#000000"
              color="#ffffff"
              borderColor="#000000"
              textColor="#000000"
              margin="15px 0 0 0"
              type="submit"
            >
              Thanh to??n ????n h??ng
            </CustomMuiButton>
          </Box>
          <CustomMuiButton
            fullWidth
            backgroundColor="#ff871d"
            color="#ffffff"
            borderColor="#ff871d"
            textColor="#ff871d"
            margin="15px 0 0 0"
            onClick={() => history.push(HomeEnumPath.HOMEPAGE)}
          >
            Quay v??? trang ch???
          </CustomMuiButton>
        </Box>
      </Box>
    );
  else return <></>;
};

export default ChangeInformation;
