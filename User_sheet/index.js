import React, { Component, Fragment } from 'react';

import Sidebar from './Sidebar';
import compose from 'recompose/compose';

import PropTypes from 'prop-types';
import SelectionGrid from '../Service_Sheet/SelectionGrid';
import AccountSheet  from './Account_sheet';
// Component styles
import styles from './styles';

// Material helpers
import { AppBar, 
         Typography,
         withStyles,
         withWidth,
         Toolbar,
         IconButton,
         Tooltip,
         Drawer } from '@material-ui/core';


import { Input as InputIcon,
         Menu as MenuIcon,
         Close as CloseIcon,} from '@material-ui/icons';

class index extends Component {
    constructor(props) {
        super(props); 
        const isMobile = ['xs', 'sm', 'md'].includes(props.width);
        this.state = {
          isOpen: !isMobile,
          title: 'Dashboard'
        };
        this.gettitle = this.gettitle.bind(this);
    };
    gettitle = (titlevalue) => {
      if (titlevalue){
        this.setState({title: titlevalue});
      }
    }

    handleSignOut= () => {
        const {history} = this.props;
        history.push('/login');
    }
    handleClose = () => {
        this.setState({ isOpen: false });
      };
    handleToggleOpen = () => {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
    };
    renderSwitch(title) {
      switch (title) {
        case "Dashboard":
          return <SelectionGrid />;
          break;       
        case "Account":
          return <AccountSheet />;
          break;
        default:
          return <div>Sorry Unable to fetch data</div>;
          break;
      }
    }
  

    render() {
        const {classes,width} = this.props;
        const { isOpen } = this.state;
        const isMobile = ['xs', 'sm', 'md'].includes(width);
        return (
          <Fragment>
            <AppBar position="static" style = {{  background: " #ffff"}} >
               <Toolbar align= "center"  >
                  {isMobile &&
                    <IconButton  onClick={this.handleToggleOpen}>
                        {this.state.isOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                  }
                  {!isMobile &&
                    <a id="olympus-logo" title="Olympus" aria-label="Olympus Corporate Logo" href="/"></a>
                  }
                  <Typography variant="h5" color= 'primary' className={classes.grow} >
                     Olympus RU Billing
                  </Typography>
                  <Tooltip title="Log out" placement="right-end">
                    <IconButton className={classes.signOutButton} onClick={this.handleSignOut}>
                      <InputIcon style={{color: "#3F51BF"}} />
                    </IconButton>
                   </Tooltip>
               </Toolbar>
           </AppBar>
           <Drawer anchor="left"
                   onClose={this.handleClose}
                   classes={{ paper: classes.drawerPaper }} 
                   onClose={this.handleClose}
                   variant={isMobile ? 'temporary' : 'permanent'}
                   open={isOpen}>
                <Sidebar className={classes.sidebar}  onChangetitle={this.gettitle} />
            </Drawer>
            <main className={isMobile ? classes.mobcontent:classes.content} >
              <div>
                {this.renderSwitch(this.state.title)}
              </div>
            </main>
        </Fragment>
        )
    }
};

export default compose (withStyles(styles),withWidth()) (index);
