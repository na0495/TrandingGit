import React, { useEffect } from 'react';
import { Typography, CssBaseline, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getGitData } from '../redux/slices/git';
import Moment from 'react-moment';

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
    const { pureData } = useSelector((state) => state.git)
    useEffect(() => {
        dispatch(getGitData())
    }, [dispatch])
    console.log(pureData)
    return (
        <React.Fragment>
          <CssBaseline />
          {Object.entries(pureData).map((data, index) => (
            <Box
              display="flex"
              alignItems="flex-start"    
              p={1}
              m={1}
              className={classes.root}
              key={index}
              >
            <Avatar variant="square" src={data[1].owner.avatar_url} className={classes.square}/>
           <Box className={classes.content}>
              <Typography variant="h4" gutterBottom>
                {data[1].name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                 {data[1].description}
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
                      stars : {data[1].stargazers_count}
                  </Box>
                  <Box  display="flex" className={classes.box2}>
                      issues : {data[1].open_issues}
                  </Box>
                  <Typography variant="subtitle1" gutterBottom>
                      this repo was last time updated <Moment fromNow>{data[1].updated_at}</Moment>.
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))
        }
        </React.Fragment>
    )
}