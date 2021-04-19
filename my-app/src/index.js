import React from "react";
import ReactDOM from "react-dom";
import fakeBookListData from './fakeData'
import BookList from './components/BookList/BookList'
import "./index.css";

class Rank extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bookList: []
        }

        // this.toBookDetail.bind(this);
    }

    toBookDetail(bookId) {
        console.log(1111111111, bookId)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                bookList: fakeBookListData
            })
        }, 200)
    }

    render() {
        const {
            bookList
        } = this.state;
        return (
            <BookList 
                bookList={bookList}
                onToBookDetail={this.toBookDetail}
            />
        )
    }
}


ReactDOM.render(<Rank />, document.getElementById("root"));

/**
 * 子组件内部数据有自己的数据 
 * 父组件触发更新
 * 
*/