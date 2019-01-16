import React, { PureComponent, Fragment } from 'react';

import TopBlogers from "components/TopBlogers";

export default class TopBlogersContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      blogers: [],
      page: 0,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const { page } = this.state;
    this.setState({loading: true});
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=10&_page=${page}`)
      .then((response) => response.json())
      .then((_users) => {this.setState((prevState) => ({
        ...prevState,
        loading: false,
        blogers: prevState.blogers.concat(_users),
        page: prevState.page + 1,
      }))
      });
  };

  render() {
    const { blogers, loading} = this.state;
    return (
      <Fragment>
        {blogers.length === 0 ? 'Loading' : <TopBlogers onLoadMore={this.fetchData} blogers={blogers} loading={loading}/>}
      </Fragment>
    )
  }
}