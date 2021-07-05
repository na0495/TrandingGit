import React from 'react';
import { Typography, Container, CssBaseline, Grid, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    square: {
      color: 'white',
      backgroundColor: 'green',
      width: 50,
      height: 50
    },
    box1: {
      color: 'white',
      backgroundColor: 'red',
      padding: 5,
      width: 25
    },
    box2: {
        color: 'white',
        backgroundColor: 'yellow',
        padding: 5,
        width: 25
      }
  }));

export default function Main() {
    const classes = useStyles();
    return (
        <React.Fragment>
          <CssBaseline />
          <Container>
            <Grid Container>
              <Grid item xs={4}>
                <Avatar variant="square" className={classes.square}>
                    N
                </Avatar>
              </Grid>
              <Grid item xs={8}>
                  <Typography variant="h4" gutterBottom>
                      Repository Name
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                      Repository Description
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="flex-start"
                    p={1}
                    m={1}
                    bgcolor="background.paper"
                    css={{ height: 100 }}
                   >
                    <Box display="flex" className={classes.box1}>

                    </Box>
                    <Box  display="flex" className={classes.box2}>

                    </Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Repository Description
                    </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
    )
}