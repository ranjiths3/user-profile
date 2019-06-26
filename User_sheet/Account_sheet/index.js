import React, { Component } from 'react';

// Material components
import { Grid } from '@material-ui/core';

// Material helpers
import { withStyles } from '@material-ui/core';

import AccountProfile from './profile';

// Component styles
const styles = theme => ({
    root: {
      padding: theme.spacing.unit * 4
    }
  });

class AccountSheet extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid
                    container
                    spacing={8}
                >
                    <Grid
                    item
                    lg={4}
                    md={6}
                    xl={4}
                    xs={12}
                    >
                    <AccountProfile />
                    </Grid>
                    <Grid
                    item
                    lg={8}
                    md={6}
                    xl={8}
                    xs={12}
                    >
                    {/* <AccountDetails /> */}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default  withStyles(styles) (AccountSheet);

