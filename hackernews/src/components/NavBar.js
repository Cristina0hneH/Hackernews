import './NavBar.css';

export default function NavBar() {
    return(
        <div className="navbar">
            <div className="navLogos">
               <img className="logo" src="../public/HN.png" />
               <h1 className="brand">HACKERNEWS</h1>
            </div>
            <div>
                <ul className="navList">
                    <li>Home</li>
                    <li>About</li>
                    <li>Post</li>
                    <li>Contact Us</li>
                </ul>

            </div>

        </div>
    )
};