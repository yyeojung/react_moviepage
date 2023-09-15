
import {Link} from "react-router-dom"

function Header(props) {
    return (
        <header>
            <div className="header_top">
                <Link to ={`/`}><h1>HONGFLIX</h1></Link>
            </div>
            <nav className="header_btm" style={props.headerBtmStyle}>
                <ul>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header