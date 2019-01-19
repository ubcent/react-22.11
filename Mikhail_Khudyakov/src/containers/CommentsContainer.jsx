import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Comments from 'components/Comments';
import {load as loadComments} from 'actions/comments';
import {Delete} from 'actions/deletepage';

class CommentsContainer extends PureComponent {
    componentDidMount() {
        const {load} = this.props;
        load();
    }

    componentWillUnmount() {
        const {Delete, entities} = this.props;
        entities.splice(0, entities.length);
        Delete();
    }

    render() {
        const {entities, loading, load} = this.props;
        return (
            <div>
                {entities.length === 0 ? <h4 className="mt-4">Loading...</h4> :
                    <Comments onLoadMore={load} comments={entities} loading={loading}/>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        entities: state.comments.entities,
        loading: state.comments.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: () => dispatch(loadComments()),
        Delete: () => dispatch(Delete()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
