import '../App.css'

const HomePage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="fixed-header">
                    <img src="../TMU-logo.png" alt ="TMU Logo" width="200" height="100"/>
                    <h1>Eats</h1>
                </div>
                <div className="category-bar">
                    
                    <a href="#" class="">Italian</a>
                    <a href="#" class="">Chinese</a>
                    <a href="#" class="">Indian</a>
                    <a href="#" class="">Korean</a>
                    <a href="#" class="">Fast Food</a>
                </div>
            </header>
        </div>
    );

};


export default HomePage