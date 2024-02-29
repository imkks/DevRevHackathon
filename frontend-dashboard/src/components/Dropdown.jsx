import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({onSelectProduct }) {
  const [id, setId] = React.useState('');

  const handleChange = (event) => {
    var selectedProduct = event.target.value;
    onSelectProduct(selectedProduct); // Invoke the callback with the selected product
    setId(selectedProduct);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Product</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={id}
        label="Product"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Adobe</MenuItem>
        <MenuItem value={20}>Ludo King</MenuItem>
      </Select>
    </FormControl>
  );
}