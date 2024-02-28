import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { posts } from 'src/_mock/blog';

import Iconify from 'src/components/iconify';

import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import { Card } from '@mui/material';

// ----------------------------------------------------------------------

export default function BlogView() {
  return (
    <Container>
    

      <Grid container spacing={3}>
       <Card></Card>
      </Grid>
    </Container>
  );
}
