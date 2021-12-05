import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Copyright from './Copyright';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    title: 'Web Básico',
    price: '15',
    info: 'Aprenda o básico de desenvolvimento web com este curso rápido.',
    description: [
      'HTML',
      'CSS',
      'Javascript básico'
    ],
    buttonText: 'Adquira já',
    buttonVariant: 'outlined',
  },
  {
    title: 'Web com React',
    subheader: 'Mais procurado',
    price: '50',
    info: 'Domine as principais técnicas utilizadas no desenvolvimento de SPAs.',
    description: [
      'Javascript avançado',
      'Técnicas de responsividade',
      'Projeto em ReactJS',
    ],
    buttonText: 'Adquira já',
    buttonVariant: 'contained',
  },
  {
    title: 'React Native',
    price: '30',
    info: 'Descubra como construir aplicativos móveis nativos para Android e iOS através de apenas um código.',
    description: [
      'React Native',
      'Desenvolvimento de 2 projetos',
      'Deploy na App Store',
    ],
    buttonText: 'Adquira já',
    buttonVariant: 'outlined',
  },
];

export function Courses() {
  const navigate = useNavigate();

  const checkout = (course) => {
    localStorage.setItem('course', JSON.stringify(course));
    navigate('/checkout');
  }

  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <NavBar />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Cursos disponíveis
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Escolha o curso que melhor se adequa às suas necessidades como desenvolvedor.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {courses.map((course) => (
            <Grid
              item
              key={course.title}
              xs={12}
              sm={course.title === 'React Native' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={course.title}
                  subheader={course.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={course.title === 'Web com React' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      R${course.price}
                    </Typography>
                  </Box>
                  <ul>
                    {course.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button onClick={() => checkout(course)} fullWidth variant={course.buttonVariant}>
                    {course.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Copyright sx={{ mt: 5 }} />
    </>
  );
}