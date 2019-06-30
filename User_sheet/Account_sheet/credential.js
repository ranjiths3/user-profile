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
    state = {
        values: {
          password: '',
          confirm: ''
        }
      };
    
      handleFieldChange = (field, value) => {
        const newState = { ...this.state };
        newState.values[field] = value;
        this.setState(newState, this.validateForm);
      };
    render() {
        const {classes} = this.props;
        const { values } = this.state;
        return (
            <div>
                <Paper className={classes.root}>
                    <div className={classes.profileheader}>
                        Change Password
                    </div>
                    <Divider />
                    <form>
                        <div className={classes.field}>
                            <TextField
                            className={classes.textField}
                            label="Password"
                            name="password"
                            onChange={event =>
                                this.handleFieldChange('password', event.target.value)
                            }
                            type="password"
                            value={values.password}
                            variant="outlined"
                            />
                        </div>
                        <div className={classes.field}>
                            <TextField
                            className={classes.textField}
                            label="Confirm password"
                            name="confirm"
                            onChange={event =>
                                this.handleFieldChange('confirm', event.target.value)
                            }
                            type="password"
                            value={values.confirm}
                            variant="outlined"
                            />
                        </div>
                    </form>
                    <div className={classes.portletFooter}>
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            Update
                        </Button>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles) (profile);
