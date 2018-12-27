import React, {PureComponent, Fragment} from 'react';
import CommentsList from 'components/CommentsList';

export default class CommentListContainer extends PureComponent {
  constructor(props){
  	super(props);

  	this.state = {
  	  loading: false,
  	  comments:[],
  	  page: 0,
  	}; 
  };

  componentDidMount(){
    this.fetchData();
  };

  fetchData = ()=>{
  	const {page} = this.state;
  	this.setState({loading: true});
  	fetch(`http://jsonplaceholder.typicode.com/comments?_limit=10_page=${page}`)
  	.then((response) => response.json())
  	.then((_comments) => {
  	  this.setState((prevState) => ({
  	  	...prevState,
  	  	loading: false,
  	  	comments: prevState.comments.concat(_comments),
  	  	page: prevState.page + 1,
  	  }))
  	})
  };

  render(){
  	const {comments, loading} = this.state;
  	return(
  	  <Fragment>
  	  	{comments.length === 0 ? 'loading...' : <CommentsList onLoadMore={this.fetchData} comments={comments} loading={loading} />}
  	  </Fragment>
  	);
  };
};