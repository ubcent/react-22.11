import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { load as loadPosts } from 'actions/posts';
import Posts from 'components/Posts';

class PostsContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;
        //вызов диспетчера
        load();
    }

    render() {
        const { text, loading, load } = this.props;
        return (
            <Fragment>
                {text.length === 0
                    ? 'Loading blog...'
                    : <Posts onLoadMore={load} blogs={text} loading={loading}/>
                }
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        text: state.posts.entities,
        loading: state.posts.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadPosts()),
    }
}

/**
 * Подписываемся на store
 * В первую часть передаем две функции которыми определяем какие данные нужны компоненту
 * mapStateToProp - оперделяет какие property мы передадим нашему компоненту
 * mapDispatchToProps - опеределяет какие сигналы, экшены и побочные эффекты передаем в качестве проперитис
 * Во вторую сам компонент который подписывается на store
 */
export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
