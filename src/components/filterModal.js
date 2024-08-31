import { useState } from 'react'
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ControlledOpenSelect from './select';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const useStyles = makeStyles({
  divider: {
    display: "flex"
  },
  filter: {
    display: "flex",
    justifyContent: 'space-between'
  }
})

const FilterModal = ({ open, handleClose, onApply, onClear }) => {
  const brand = ["Apollo", 'Ceat', "MRF"]
  const price = ["Price Low to High", "Price High to Low"]
  const category = ['Car', 'Bike']
  const modal = ['205/65 R16', '105/55 D16', "309/45 A16"]
  const classes = useStyles()

  const [filters, setFilters] = useState({
    brand: '',
    price: '',
    category: '',
    modal: ''
  });

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const applyFilters = () => {
    onApply(filters);
    handleClose();
  };

  const clearFilters = () => {
    setFilters({
      brand: '',
      sortBy: '',
      category: '',
      modal: ''
    });
    onClear();
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <div className={classes.filter}>
            <Typography>Filter</Typography>
            <CloseIcon onClick={handleClose} />
          </div>
          <div className={classes.divider}>
            <ControlledOpenSelect placeholder='Brand' menuItems={brand} onChange={handleFilterChange} />
            <ControlledOpenSelect placeholder='Price' menuItems={price} onChange={handleFilterChange} />
          </div>
          <Typography>Advance Filter</Typography>
          <div className={classes.divider}>
            <ControlledOpenSelect placeholder='Category' menuItems={category} onChange={handleFilterChange} />
            <ControlledOpenSelect placeholder='Modal' menuItems={modal} onChange={handleFilterChange} />
          </div>
          <Button onClick={clearFilters}>Clear</Button>
          <Button onClick={applyFilters}>Apply</Button>
        </Box>
      </Modal>
    </div>
  );
}
export default FilterModal;