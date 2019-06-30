import React, { Component } from 'react';

// Material components
import { Grid } from '@material-ui/core';

// Material helpers
import { withStyles } from '@material-ui/core';

import AccountProfile from './profile';
import Changecredential from './credential';

// Component styles
const styles = theme => ({
    root: {
      padding: theme.spacing.unit * 9
    }
  });

class AccountSheet extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item lg={6} md={6} xl={8} xs={12}>
                        <AccountProfile />
                    </Grid>
                    <Grid style ={{paddingLeft: '30px'}} item  md={5} xs={12}>
                      <Changecredential />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default  withStyles(styles) (AccountSheet);

