import { blue } from "@material-ui/core/colors";

export default theme => ({
    grow: {
        flexGrow: 1,
      },
    signOutButton: {
        marginLeft: theme.spacing.unit,
      },
    sidebar: {
        width: '270px'
    },
    content: {
      paddingTop: '50px',
      paddingLeft: '150px'
      // paddingLeft: '150px'
      // transition: theme.transitions.create('margin', {
      //   easing: theme.transitions.easing.sharp,
      //   duration: theme.transitions.duration.leavingScreen
      // })
    },
    mobcontent: {
      marginTop: '64px',
    },
    contentShift: {
      marginLeft: '270px'
    },
    drawerPaper: {
      zIndex: 1200,
      width: '200px',
      marginTop: '66px',

    },
    profile: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'fit-content',
      paddingTop: '50px'
    },
    avatar: {
      width: '100px',
      height: '100px',
      color: '#3f51bf'
    },
    nameText: {
      marginTop: theme.spacing.unit * 2,
      color: '#3f51bf'
    },
    bioText:{
      color: '#3f51bf'
    },
    profileDivider: {
      marginBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2
    },
    listItem: {
      marginTop: theme.spacing.unit,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#F6F9FD',
        borderLeft: `4px solid ${'#3f51bf'}`,
        borderRadius: '4px',
        '& $listItemIcon': {
          color: '#3f51bf',
          marginLeft: '-4px'
        }
      },
    },
    activeListItem: {
      marginTop: theme.spacing.unit,
      borderLeft: `4px solid ${'#3f51bf'}`,
      borderRadius: '4px',
      backgroundColor: '#F6F9FD',
      '& $listItemText': {
        color: '#12161B'
      },
      '& $listItemIcon': {
        color: '#3f51bf',
        marginLeft: '-4px'
      }
    },
    listItemIcon: {
      marginRight: 0
    },
    listItemText: {
      fontWeight: 500,
      color: '#66788A'
    },
    listDivider: {
      marginBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2
    }  
})