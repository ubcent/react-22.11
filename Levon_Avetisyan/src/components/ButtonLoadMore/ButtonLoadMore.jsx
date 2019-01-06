import './ButtonLoadMore.css'
import React, {PureComponent} from 'react';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class ButtonLoadMore extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, onLoadMore, loading } = this.props;
        return (
            <div className="ButtonLoadMore">
                <Button onClick={onLoadMore} disabled={loading} variant="contained" className={classes.button}>
                    Load more posts
                </Button>
            </div>
        )
    }
}

ButtonLoadMore.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonLoadMore);