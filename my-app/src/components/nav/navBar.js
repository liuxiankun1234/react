import React from 'react';
import styles from '../../styles.css';
console.log('styles----------->', styles.bookInfo)
class NavBar extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log('navBar componentWillReceiveProps------------------->', nextProps)
    }
    render() {
        const { navBar } = this.props;
        console.log('navBar render------------------------>', this.props)
        return (
            <div >
                {navBar}
            </div>
        )
    }
}

export default NavBar;