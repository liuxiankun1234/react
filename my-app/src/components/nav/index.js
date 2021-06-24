import React from 'react';
import styles from '../../styles.css';
console.log('styles----------->', styles.bookInfo)
class Nav extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log('Nav componentWillReceiveProps------------------->', nextProps)
    }
    render() {
        const { nav } = this.props;
        console.log('Nav render------------------------>', this.props)
        return (
            <div >
                {nav}
            </div>
        )
    }
}

export default Nav;