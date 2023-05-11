import { Typography, Box, useTheme } from '@mui/material';
import { colourTokens } from '../theme';

export const Header = (parameters: { title: string; subTitle: string }) => {
  const theme = useTheme();
  const colours = colourTokens(theme.palette.mode);
  return (
    <Box mb={'30px'}>
      <Typography
        variant="h2"
        color={colours.grey[100]}
        fontWeight={'bold'}
        sx={{ mb: '5px' }}
      >
        {parameters.title}
      </Typography>
      <Typography variant="h5" color={colours.greenAccent[400]}>
        {parameters.subTitle}
      </Typography>
    </Box>
  );
};
