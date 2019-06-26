import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class AccountProfile extends Component {
    render() {
        return (
            <React.Fragment>
                 <Typography component="p" variant="h4">
                    $3,024.00
                 </Typography>
                 <Typography color="textSecondary">
                    on 15 March, 2019
                 </Typography>
            </React.Fragment>
        )
    }
}
