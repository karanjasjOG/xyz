import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from './images/memories.png'
import Form from './components/Forms/Form.js';
import Posts from './components/Posts/Posts';
import useStyles from './styles.js'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts)
  }, [dispatch])
  const classes = useStyles()
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
          <img className={classes.image} src={memories} alt="memories" height="60" />
        </Typography>
      </AppBar>
      <Grow in>
        <Container >
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}

export default App;
