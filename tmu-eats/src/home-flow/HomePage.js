import '../App.css'
//import { Header } from "./header/Header.js"

const HomePage = () => {
    return (
        <div>
            <div className="banner">
                <img src="../TMU-logo.png" alt ="TMU Logo" width="250" height="100"/>
                <h1>Eats</h1>
            </div>
            <div className="navbar">
                <div class="dropdown">
                    <button class="dropdown-btn">Filters</button>
                    <div class="dropdown-content">
                        <a href="#">Best Rated</a>
                        <a href="#">Offers</a>
                        <a href="#">Fastest Near Me</a>
                    </div>
                </div>
                <div class="categories">
                    <a href="#" class="nav1">Italian</a>
                    <a href="#" class="nav2">Chinese</a>
                    <a href="#" class="nav3">Indian</a>
                    <a href="#" class="nav4">Korean</a>
                    <a href="#" class="nav5">Fast Food</a>
                </div> 
            </div>
        </div>
    );

};

export default HomePage