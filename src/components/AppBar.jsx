import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, SvgIcon, Toolbar, Typography } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  justifyContent: {
    justifyContent: "space-between",
  },
  hide: {
    zIndex: 1,
  }
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function SimpleAppBar(props) {
  const { classes, reset } = props;
  return (
    <div className={classes.root}>
      <AppBar className={props.isGalleryDisplayed ? classes.hide : ""} position="fixed" color="primary">
        <Toolbar className={classes.justifyContent}>
          <Typography variant="title" color="inherit">
            Cuts by Norma
          </Typography>
          <HomeIcon color="default" onClick={reset} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(SimpleAppBar);
