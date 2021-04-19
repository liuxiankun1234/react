import React from 'react';
import BookListItem from './BookListItem';
  
class BookList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            bookList,
            onToBookDetail
        } = this.props;

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
            bookListItems
        )
    }
}
export default BookList;