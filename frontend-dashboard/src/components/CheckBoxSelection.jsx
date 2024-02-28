import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function IndeterminateCheckbox() {
  const [twitterChecked, setTwitterChecked] = React.useState(false);
  const [redditChecked, setRedditChecked] = React.useState(false);
  const [playstoreChecked, setPlaystoreChecked] = React.useState(false);
  const [appstoreChecked, setAppstoreChecked] = React.useState(false);

  const handleSelectAllChange = (event) => {
    setTwitterChecked(event.target.checked);
    setRedditChecked(event.target.checked);
    setPlaystoreChecked(event.target.checked);
    setAppstoreChecked(event.target.checked);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Twitter"
        control={<Checkbox checked={twitterChecked} onChange={() => setTwitterChecked(!twitterChecked)} />}
      />
      <FormControlLabel
        label="Reddit"
        control={<Checkbox checked={redditChecked} onChange={() => setRedditChecked(!redditChecked)} />}
      />
      <FormControlLabel
        label="Google Playstore"
        control={<Checkbox checked={playstoreChecked} onChange={() => setPlaystoreChecked(!playstoreChecked)} />}
      />
      <FormControlLabel
        label="Appstore"
        control={<Checkbox checked={appstoreChecked} onChange={() => setAppstoreChecked(!appstoreChecked)} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Select all"
        control={
          <Checkbox
            checked={twitterChecked && redditChecked && playstoreChecked && appstoreChecked}
            onChange={handleSelectAllChange}
          />
        }
      />
      {children}
    </div>
  );
}
