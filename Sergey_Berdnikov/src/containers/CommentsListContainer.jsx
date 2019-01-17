import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import CommentsList from 'components/CommentsList';
import { load as loadComments } from 'actions/comments';

class CommentsListContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;
        //вызов диспетчера
        load();
    }

    render() {
        const { comments, loading, load } = this.props;
        return (
            <Fragment>
                {comments.length === 0
                    ? 'Loading...'
                    : <CommentsList onLoadMore={load} comments={comments} loading={loading}/>}
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        comments: state.comments.entities,
        loading: state.comments.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadComments()),
    }
}

/**
 * Подписываемся на store
 * В первую часть передаем две функции которыми определяем какие данные нужны компоненту
 * mapStateToProp - оперделяет какие property мы передадим нашему компоненту
 * mapDispatchToProps - опеределяет какие сигналы, экшены и побочные эффекты передаем в качестве проперитис
 * Во вторую сам компонент который подписывается на store
 */
export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
