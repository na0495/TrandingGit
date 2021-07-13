import React, { useEffect } from 'react';
import { Typography, CssBaseline, Avatar, Box, Card, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getGitData } from '../redux/slices/git';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 25,
        margin: 25,
        width: 1000,
    },
    square: {
      color: 'white',
      backgroundColor: 'green',
      width: 170,
      height: 170
    },
    box1: {
      color: 'white',
      backgroundColor: '#bdbdbd',
      padding: 15,
      width: 150,
      borderRadius: 7,
      border: 'solid black'
    },
    box2: {
      color: 'black',
      backgroundColor: '#fff176',
      marginRight: 10,
      marginLeft: 10,
      padding: 15,
      width: 150,
      borderRadius: 7,
      border: 'solid black'
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
            <Card
              display="flex"
              alignItems="flex-start"
              className={classes.root}
              key={index}
              >
              <Grid container>
                <Grid xs={4}>
                  <Avatar variant="square" src={data[1].owner.avatar_url} className={classes.square}/>
                </Grid>
                <Grid xs={8}>
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
                </Grid>
              </Grid>
            </Card>
          ))
        }
        </React.Fragment>
    )
}