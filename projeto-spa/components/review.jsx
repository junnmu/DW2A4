import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Review() {
  const course = JSON.parse(localStorage.getItem('course'));

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Resumo do pedido
      </Typography>
      <List disablePadding>
        <ListItem key={course.title} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={'Curso: ' + course.title} secondary={course.info} />
          <Typography variant="body2">R${course.price}</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            R${course.price}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}