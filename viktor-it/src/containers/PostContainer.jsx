import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import Post from 'components/Post';
import {load as loadPosts} from 'actions/posts';

class PostContainer extends PureComponent {
  componentDidMount(){
    const {load} = this.props;
    load();
  };

  render(){
  	const {postsArr, loading, load} = this.props;
  	return(
  	  <Fragment>
  	    {postsArr.length === 0 ? 'loading...' : <Post onLoadMore={load} postsArr={postsArr} loading={loading} />}
  	  </Fragment>
  	);
  };
};

function mapStateToProps(state, props){
  return{
    loading: state.posts.loading,
    postsArr: state.posts.postsArr,
  };
};

function mapDispatchToProps(dispatch, props) {
  return {
    load: () => dispatch(loadPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);