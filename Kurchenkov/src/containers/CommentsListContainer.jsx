import React, { PureComponent, Fragment } from 'react';
import CommentsList from 'components/CommentsList';

export default class CommentsListContainer extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            //флаг загрузки компонента
            loading: false,
            //комментарии, которые загружаем с сервера
            comments: [],
            //номер страницы для пагинации
            page: 0,
        }
    }

    componentDidMount() {
        //когда компонент загружается, запрашиваем данные
        this.fetchData();
    }

    //функция, которая отправляет запрос и обрабатывает результат
    fetchData = () => {
        const { page } = this.state;
        //загрузка началась
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=5&_page=${page}`)
        .then((response) => response.json())
        .then((_comments) => {
            this.setState((prevState) => ({
                ...prevState,
                //загрузка закончена
                loading: false,
                //в комментарии записываем данные
                comments: prevState.comments.concat(_comments),
                page: prevState.page + 1,
            }))
        });

    }

    render() {
        const { comments, loading } = this.state;
        return(
            <Fragment>
                {comments.length === 0 ? 'Loading...' : <CommentsList onLoadMore={this.fetchData} comments={comments} loading={loading} />}
            </Fragment>
        );
    }  
}
