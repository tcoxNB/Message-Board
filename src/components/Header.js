import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="narbar-item" href="https://www.kbb.com" target="_blank" rel="noopener noreferrer">
                        {this.props.title}
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;