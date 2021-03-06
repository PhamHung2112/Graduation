import { List, ListItem, Typography } from '@mui/material';
import { Brand } from '../../constants';
import React, { FC, memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuDropDown from './components/MenuDropDown';
import { api } from 'api/api';

interface MenuHeaderOptions {
  id: number;
  label: string;
  path: string;
}

interface MenuHeaderProps {
  menuOptions: MenuHeaderOptions[];
}

const MenuHeader: FC<MenuHeaderProps> = ({ menuOptions }) => {
  const [open, setOpen] = useState<boolean>(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await api.get('brand/all');
      const convertDataType = res.data.brands.rows.map((obj: any) => ({
        ...obj,
        name: obj.brandName,
      }));
      setData(convertDataType);
    };
    getData();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        '& > li': {
          padding: theme.spacing(1, 0),

          '& > a': {
            textDecoration: 'none',
            color: 'inherit',
            position: 'relative',
            padding: theme.spacing(1),

            '&::after': {
              borderBottom: '1px solid',
              bottom: 0,
              content: '""',
              position: 'absolute',
              right: 0,
              transition: 'width .4s linear 0s',
              width: 0,
            },

            '&:hover': {
              color: theme.palette.secondary.main,
            },

            '&:hover::after': {
              left: 0,
              width: '90%',
            },
          },
        },
      })}
    >
      <ListItem>
        <NavLink to="/" exact>
          <Typography variant="body1" textTransform="uppercase" fontWeight={600} width="120px">
            trang ch???
          </Typography>
        </NavLink>
      </ListItem>

      <ListItem
        onMouseOver={handleOpen}
        onMouseOut={handleClose}
        sx={{
          '&:hover > p': { color: (theme) => theme.palette.secondary.main },
        }}
      >
        <Typography variant="body1" textTransform="uppercase" fontWeight={600} width="135px">
          th????ng hi???u
        </Typography>

        <MenuDropDown open={open} brands={data} />
      </ListItem>

      {menuOptions.map((option) => (
        <ListItem key={option.id}>
          <NavLink to={option.path} exact>
            <Typography
              variant="body1"
              textTransform="uppercase"
              fontWeight={600}
              width={option.id === 3 ? '100px' : option.id === 1 ? '80px' : '90px'}
            >
              {option.label}
            </Typography>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default memo(MenuHeader);
