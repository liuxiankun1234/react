import React from 'react';
import styles from '../../styles.css';
console.log('styles----------->', styles.bookInfo)
class BookListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            bookId,
            bookName,
            bookDetail,
            pic,
            onToBookDetail
        } = this.props;

        return (
            <div className={styles.bookInfo} onClick={onToBookDetail.bind(this, bookId)}>
                <div className={styles.avatarGroup}>
                    <img src={pic} />
                </div>
                <div className={styles.bookInfo} >
                    <h3 className={styles.bookName}>{bookName}</h3>
                    <div className={styles.bookDetail}>{bookDetail}</div>
                    <div className="tro">
                    </div>
                </div>
            </div>
        )
    }
}

export default BookListItem;