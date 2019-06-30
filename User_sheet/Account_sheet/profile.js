import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Material helpers
import { withStyles, Divider } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';

// Component styles
import styles from './styles';

class profile extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.root}>
                    <div className={classes.profileheader}>
                        My Profile
                    </div>
                    <Divider />
                    <form autoComplete="off" noValidate>
                        <div className={classes.field}>
                            <TextField
                                className={classes.textField}
                                label="First name"
                                margin="dense"
                                required
                                value="firstName"
                                variant="outlined"
                            />
                         </div>
                        <div className={classes.field}>
                        <TextField
                            className={classes.textField}
                            label="Last name"
                            margin="dense"
                            required
                            value="lastName"
                            variant="outlined"
                        />
                        </div>
                        <div className={classes.field}>
                        <TextField
                            className={classes.textField}
                            label="Email Address"
                            margin="dense"
                            required
                            value="email"
                            variant="outlined"
                        />
                                                </div>
                        <div className={classes.field}>
                        <TextField
                            className={classes.textField}
                            label="Phone Number"
                            margin="dense"
                            type="number"
                            value="phone"
                            variant="outlined"
                        />
                        </div>
                    </form>   
                    <div className={classes.portletFooter}>
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            Save details
                        </Button>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles) (profile);
