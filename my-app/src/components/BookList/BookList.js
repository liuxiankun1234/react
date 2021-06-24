import React from 'react';
import BookListItem from './BookListItem';
import Nav from '../nav/index'
import NavBar from '../nav/navBar'
  
class BookList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nav: '',
            navBar: ''
        }
    }
    renderNav() {
        this.setState({
            nav: 'A'
        })
        setTimeout(() => {
            this.setState({
                nav: 'C'
            })
        })
    }
    render() {
        const {
            bookList,
            onToBookDetail
        } = this.props;

        const {nav, navBar} = this.state;

        const bookListItems = bookList.map(bookInfo => {
            const { bookId, bookName, pic, bookDetail } = bookInfo
            
            return (
                <BookListItem
                    key={bookId}
                    bookId={bookId}
                    bookName={bookName}
                    bookDetail={bookDetail}
                    pic={pic}
                    onToBookDetail={onToBookDetail}
                />  
            )
        })

        return (
            <div>
                <button 
                    onClick={this.renderNav.bind(this)}
                >按钮 </button>
                <Nav nav={nav}/>
                <NavBar navBar={navBar}/>
                {bookListItems}
            </div>
        )
    }
}
export default BookList;