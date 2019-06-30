import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

//Component styles
import styles from './styles';

//material components
import { Avatar,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography,
            } from '@material-ui/core';
//material helpers
import { withStyles
} from '@material-ui/core';

// Material icons
import {
    DashboardOutlined as DashboardIcon,
    PeopleOutlined as PeopleIcon,
    ShoppingBasketOutlined as ShoppingBasketIcon,
    LockOpenOutlined as LockOpenIcon,
    TextFields as TextFieldsIcon,
    ImageOutlined as ImageIcon,
    InfoOutlined as InfoIcon,
    AccountBoxOutlined as AccountBoxIcon,
    SettingsOutlined as SettingsIcon
  } from '@material-ui/icons';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false],
        };
        this.handleListItemClick= this.handleListItemClick.bind(this);
    }
    handleListItemClick = (index) => {
        switch (index) {
            case 1:
                this.setState({activeClasses:[true, true, false]});
                 this.gettitle("Account");
                 break;
            case 2:
                this.setState({activeClasses:[true, false, true]});
                this.gettitle("Raw info");
                break; 
            default:
                this.setState({activeClasses:[false, false, false]});
                this.gettitle("Dashboard");
                break; 
        }
    };
    gettitle = (titlevalue) => {
        // var titlevalue = this.state.titlename;
        this.props.onChangetitle(titlevalue);            
    }

    render() {
        const {classes} = this.props;
        const titlename = this.props.title;
        return (
            <div>
                <div className={classes.profile}>
                    <Avatar
                      alt="Ulrich Duering"
                      className={classes.avatar}
                      src="https://www.freeiconspng.com/uploads/user-icon-png-person-user-profile-icon-20.png" 
                    />
                    <Typography
                        className={classes.nameText}
                        variant="h6"
                    >
                        Ulrich Duering
                    </Typography>
                    <Typography
                        className={classes.bioText}
                        variant="caption"
                    >
                        Team Member
                    </Typography>
                </div>
                <Divider className={classes.profileDivider} />
                <List>
                    <ListItem
                        className={ (titlename === 'Dashboard')  ? classes.activeListItem : classes.listItem} 
                        onClick={() => this.handleListItemClick(0)}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                        <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="Dashboard"
                        />
                    </ListItem>
                    <ListItem
                        className={ (titlename === 'Account') ? classes.activeListItem : classes.listItem}
                        onClick={() => this.handleListItemClick(1)}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                        <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="Account"
                        />
                    </ListItem>
                    <ListItem
                        className={ this.state.activeClasses[2] ? classes.activeListItem : classes.listItem}
                        onClick={() => this.handleListItemClick(2)}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                        <InfoIcon />
                        </ListItemIcon>
                        <ListItemText
                        classes={{ primary: classes.listItemText }}
                        primary="Raw info"
                        />
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default withStyles(styles)(Sidebar);
