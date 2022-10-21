import '../App.css'

const HomePage = () => {
    return (    
        <div className="App">
            <header className="App-header">
                <div className="banner">
                    <img src="../TMU-logo.png" alt ="TMU Logo" width="250" height="100"/>
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
                    <div className="quizbox">
                        <span class="span_topleft">Can't Decide?</span>
                        <span class="span_center">Take Our Food Quiz! &#x2794;</span>
                    </div>
                    <div class="categories">
                        <a href="#" class="nav1">Italian</a>
                        <a href="#" class="nav2">Chinese</a>
                        <a href="#" class="nav3">Indian</a>
                        <a href="#" class="nav4">Korean</a>
                        <a href="#" class="nav5">Fast Food</a>
                    </div> 
                </div>
            </header>
        </div>
    );

};

export default HomePage