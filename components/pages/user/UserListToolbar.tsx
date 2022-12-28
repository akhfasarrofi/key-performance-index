import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Iconify from 'components/Iconify';
import { UserListToolbarProps } from 'types/user';

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  'width': 240,
  'transition': theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));


const UserListToolbar = ({ numSelected, filterName, onFilterName }: UserListToolbarProps) => (
  <RootStyle
    sx={{
      ...(numSelected > 0 && {
        color: 'primary.main',
        bgcolor: 'primary.lighter',
      }),
    }}
  >
    {numSelected > 0 ? (
      <Typography component="div" variant="subtitle1">
        {numSelected} selected
      </Typography>
    ) : (
      <SearchStyle
        value={filterName}
        onChange={onFilterName}
        placeholder="Search user..."
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
          </InputAdornment>
        }
      />
    )}

    {numSelected > 0 ? (
      <Tooltip title="Delete">
        <IconButton>
          <Iconify icon="eva:trash-2-fill" />
        </IconButton>
      </Tooltip>
    ) : (
      <Tooltip title="Filter list">
        <IconButton>
          <Iconify icon="ic:round-filter-list" />
        </IconButton>
      </Tooltip>
    )}
  </RootStyle>
);

export default UserListToolbar;
