import React, { PureComponent, Fragment } from 'react';

import TopBlogers from "components/TopBlogers";
import {load as loadFetchData} from "actions/fetchData";
import {connect} from "react-redux";

class TopBlogersContainer extends PureComponent {

  componentDidMount() {
    const {load, blogers} = this.props;
    if (blogers.length === 0) {
      load();
    }
  }

  render() {
    const { blogers, loading, load} = this.props;
    return (
      <Fragment>
        {blogers.length === 0 ? 'Loading' : <TopBlogers onLoadMore={load} blogers={blogers} loading={loading}/>}
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    blogers: state.connection.entities,
    loading: state.connection.loading,
  }
}

function mapDispatchToProps (dispatch, props) {
  return {
    load: () => dispatch(loadFetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBlogersContainer);