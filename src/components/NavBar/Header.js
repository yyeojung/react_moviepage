
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

function Header(props) {
    const [Scroll,setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 55) {
            setScroll(true);
        } else {
            setScroll(false)
        }
    }

    const headerClass = Scroll ? 'scroll' : '';
    return (
        <header className={headerClass}>
            <div className="header_top">
                <Link to ={`/`}><h1>HONGFLIX</h1></Link>
            </div>
        </header>
    )
}
export default Header