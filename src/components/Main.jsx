import React from 'react';
import { Typography, CssBaseline, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 25,
        margin: 0,
    },
    content: {
        padding: 25,

    },
    square: {
      color: 'white',
      backgroundColor: 'green',
      width: 170,
      height: 170
    },
    box1: {
      color: 'white',
      backgroundColor: 'red',
      padding: 15,
      width: 75
    },
    box2: {
      color: 'white',
      backgroundColor: 'yellow',
      marginRight: 10,
      marginLeft: 10,
      padding: 15,
      width: 75
    },
  }));

export default function Main() {
    const classes = useStyles();
    return (
        <React.Fragment>
          <CssBaseline />
            <Box
              display="flex"
              alignItems="flex-start"    
              p={1}
              m={1}
              className={classes.root}
              >
            <Avatar variant="square" className={classes.square}>
                N
            </Avatar>

           <Box className={classes.content}>
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
              </Box>
            </Box>
        </React.Fragment>
    )
}