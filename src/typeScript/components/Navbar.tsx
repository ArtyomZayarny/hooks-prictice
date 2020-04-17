import React from 'react'

const Navbar:React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Sass</a></li>
                <li><a href="/">Components</a></li>
                <li><a href="/">JavaScript</a></li>
            </ul>
            </div>
        </nav>
    )
}
export default Navbar