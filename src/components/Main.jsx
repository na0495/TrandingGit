import React, { useEffect } from 'react';
import { Typography, CssBaseline, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getGitData } from '../redux/slices/git';

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
    const dispatch = useDispatch();
    const { gitData } = useSelector((state) => state.git)
    useEffect(() => {
        dispatch(getGitData())
    }, [dispatch])
    return (
        <React.Fragment>
          <CssBaseline />
          {gitData.map((data, index) => (
            <Box
              display="flex"
              alignItems="flex-start"    
              p={1}
              m={1}
              className={classes.root}
              key={index}
              >
            <Avatar variant="square" className={classes.square}>
                {data.owner}
            </Avatar>
           <Box className={classes.content}>
              <Typography variant="h4" gutterBottom>
                {data.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                 {data.description}
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
                      stars : {data.stargazers_count}
                  </Box>
                  <Box  display="flex" className={classes.box2}>
                      Number of issues : {data.open_issues}
                  </Box>
                  <Typography variant="subtitle1" gutterBottom>
                      Repository Description
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))
        }
        </React.Fragment>
    )
}