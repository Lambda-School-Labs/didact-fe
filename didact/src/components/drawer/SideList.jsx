import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import { SideListWrapper } from "./SideListStyles";

const SideList = ({ props }) => {
  const drawerStyles = makeStyles(theme => ({
    activeTab: {
      backgroundColor: "#ffffff",
      borderRadius: "0 20px 20px 0",
      width: "225px",
      color: "white",
      height: "50px",
      margin: "10px 0px"
    },
    arrow: {
      textAlign: "right",
      marginRight: "10px",
      width: "100%",
      fontSize: "2rem",
      color: "#5b5b5b"
    },
    list: {
      display: "flex",
      flexDirection: "column",
      margin: "10px 0px",
      padding: 0
    },
    listItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "225px"
    },

    navigationLinks: {
      display: "flex",
      flexDirection: "column",
      paddingRight: "15%",
      paddingTop: "10%"
    },

    iconImageProfile: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      // marginTop: '20px',
      objectFit: "cover"
    },

    root: {
      display: "flex"
    },
    paper: {
      marginRight: theme.spacing(2)
    },

    menuLister: {
      background: "#eeeeee",
      border: "none",
      width: "225px"
    }
  }));

  const classes = drawerStyles();

  const userName = useSelector(state => state.onboardingReducer.user);

  const handleLogOut = () => {
    localStorage.clear("token");
    props.props.history.push("/login");
  };

  const firstName = userName.first_name
    ? userName.first_name.substring(0, 1).toUpperCase() +
      userName.first_name.substring(1)
    : null;
  const lastName = userName.last_name
    ? userName.last_name.substring(0, 1).toUpperCase() +
      userName.last_name.substring(1)
    : null;

  // state for dropdown links
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <SideListWrapper>
      <ul className={classes.list}>
        <NavLink
          exact
          to="/"
          style={{
            textDecoration: "none",
            color: "#5b5b5b",
            outline: "none !important"
          }}
          activeStyle={{ color: "black" }}
          activeClassName={classes.activeTab}
          className={classes.listItem}
          key="Dashboard"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              outline: "none !important"
            }}
          >
            <DashboardIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
            <p style={{ marginLeft: "25px", fontWeight: "bold" }}>Dashboard</p>
            {props.props.location.pathname === "/" ? (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{ fontSize: "2.4rem", marginTop: "6px" }}
                />
              </p>
            ) : (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{
                    fontSize: "2.4rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                />
              </p>
            )}
          </div>
        </NavLink>
        <NavLink
          to="/courses"
          style={{
            textDecoration: "none",
            color: "#5b5b5b",
            outline: "none !important"
          }}
          activeStyle={{ color: "black" }}
          activeClassName={classes.activeTab}
          className={classes.listItem}
          key="Add Course"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center"
            }}
          >
            <FolderOpenIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
            <p style={{ marginLeft: "25px", fontWeight: "bold" }}>Courses</p>
            {props.props.match.path.includes("/courses") ? (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{ fontSize: "2.4rem", marginTop: "6px" }}
                />
              </p>
            ) : (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{
                    fontSize: "2.4rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                />
              </p>
            )}
          </div>
        </NavLink>
        <NavLink
          to="/learning-paths"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{
            textDecoration: "none",
            color: "#5b5b5b",
            outline: "none !important"
          }}
          activeStyle={{ color: "black" }}
          activeClassName={classes.activeTab}
          className={classes.listItem}
          key="Learning Paths"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center"
            }}
          >
            <InboxIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
            <p style={{ marginLeft: "25px", fontWeight: "bold" }}>
              Learning Paths
            </p>

            {props.props.match.path.includes("/learning-paths") ? (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{ fontSize: "2.4rem", marginTop: "6px" }}
                />
              </p>
            ) : (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{
                    fontSize: "2.4rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                />
              </p>
            )}
          </div>
        </NavLink>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <div className={classes.menuLister}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem>
                        <NavLink
                          to="/current"
                          style={{
                            textDecoration: "none",
                            color: "#5b5b5b",

                            fontFamily: "sans-serif",
                            fontWeight: "semi bold"
                          }}
                        >
                          Current
                        </NavLink>
                      </MenuItem>
                      <MenuItem>
                        <NavLink
                          to="/create"
                          style={{
                            textDecoration: "none",
                            color: "#5b5b5b",

                            fontFamily: "sans-serif",
                            fontWeight: "semi bold"
                          }}
                        >
                          Create
                        </NavLink>
                      </MenuItem>
                      <MenuItem>Join</MenuItem>
                    </MenuList>
                  </div>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <NavLink
          to="/about"
          style={{
            textDecoration: "none",
            color: "#5b5b5b",
            outline: "none !important"
          }}
          activeStyle={{ color: "black" }}
          activeClassName={classes.activeTab}
          className={classes.listItem}
          key="Resources"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center"
            }}
          >
            <SettingsIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
            <p style={{ marginLeft: "25px", fontWeight: "bold" }}>Resources</p>
            {props.props.match.path.includes("/learning-paths") ? (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{ fontSize: "2.4rem", marginTop: "6px" }}
                />
              </p>
            ) : (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{
                    fontSize: "2.4rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                />
              </p>
            )}
          </div>
        </NavLink>
        <div className={classes.navigationLinks}>
          <Link
            to="/about"
            style={{
              color: "black",
              textDecoration: "none",
              fontFamily: "sans-serif",
              fontWeight: "semi bold"
            }}
          >
            <p>About</p>
          </Link>
          <Link
            to="/contact"
            style={{
              color: "black",
              textDecoration: "none",
              fontFamily: "sans-serif",
              fontWeight: "semi bold"
            }}
          >
            <p>Contact</p>
          </Link>
        </div>
      </ul>

      <div className="profileSection">
        {userName.photo ? (
          <img
            src={userName.photo}
            alt="Profile"
            className={classes.iconImageProfile}
          />
        ) : (
          <PermIdentityIcon className={classes.iconImageProfile} />
        )}
        <p>{firstName + " " + lastName}</p>
        <p onClick={handleLogOut} className="logout">
          Log Out
        </p>
      </div>

      {/* <List >
                <ListItem button key="Activity" className = {classes.hoverTab}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Activity" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List> */}
      {/* <List >
                <ListItem
                    button
                    component={NavLink}
                    to="/courses"
                    style={{ textDecoration: "none" }}
                    activeClassName={classes.activeTab}
                    key="Add Course">
                    <ListItemIcon>
                        <FolderOpenIcon style={{paddingLeft: "4px", fontSize: "32px"}}/>
                    </ListItemIcon>
                    <p>Courses</p>
                    <p className={classes.arrow}>></p>
                </ListItem>
            </List>

            <List >
                <ListItem
                    button
                    component={NavLink}
                    to="/learning-paths"
                    style={{ textDecoration: "none" }}
                    activeClassName={classes.activeTab}
                    key="Learning Paths">
                    <ListItemIcon>
                        <InboxIcon style={{paddingLeft: "4px", fontSize: "32px"}}/>
                    </ListItemIcon>
                    <p>Learning Paths</p>
                    <p className={classes.arrow}>></p>
                </ListItem>
            </List> */}
      {/*<List >
                <ListItem className = {classes.hoverTab} button key="Tasks">
                    <ListItemIcon>
                        <DoneAllIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tasks" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            <List >
                <ListItem className = {classes.hoverTab} button key="Calendar">
                    <ListItemIcon>
                        <EventIcon />
                    </ListItemIcon>
                    <ListItemText primary="Calendar" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            <List >
                <ListItem className = {classes.hoverTab} button key="Tools">
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tools" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List>
            <List >
                <ListItem className = {classes.hoverTab} button key="Profile">
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    <ListItemText className={classes.arrow} primary=">" />
                </ListItem>
            </List> */}
    </SideListWrapper>
  );
};

export default SideList;
