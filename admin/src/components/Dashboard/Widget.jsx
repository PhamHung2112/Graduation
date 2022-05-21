import { Box, Typography } from "@mui/material";

const Widget = ({ label, children }) => {
  <Box
    bgcolor="#fff"
    boxShadow={1}
    padding={2}
    borderColor={(theme) => theme.palette.divider}
  >
    <Typography variant="body1" mb={2} fontWeight={500}>
      {label}
    </Typography>
    <Box>{children}</Box>
  </Box>;
};

export default Widget;
