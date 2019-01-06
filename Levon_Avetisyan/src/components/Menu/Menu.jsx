import './Menu.css'
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Menu extends PureComponent {
    static defaultProps = {};

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const {classes} = this.props;
        console.log(classes);
        return (
            <div className="Menu">
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                Blog by Avetisyan
                            </Typography>
                            <Button color="inherit">Main</Button>
                            <Button color="inherit">Blogs</Button>
                            <Button color="inherit">Comments</Button>
                            <Button color="inherit">Users</Button>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Menu);