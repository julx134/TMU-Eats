import "../App.css";
import mcd from "./assets/mcd.png";
import timhorton from "./assets/TimHorton.png";
import subway from "./assets/subway.png";
import saladking from "./assets/saladking2.png";
import blaze from "./assets/blazepizza.jpg";
import burritoboyz from "./assets/burritoboyz.png";
import springsushi from "./assets/springsushi.png";
import villamadina from "./assets/villamadina.JPG";
import "./assets/Carousel.css";

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <img src="../TMU-logo.png" alt="TMU Logo" width="250" height="100" />
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
          
          <section class="carousel" aria-label="Gallery">
            <ol class="carousel__viewport">

              <li id="carousel__slide1"
                  tabindex="0"
                  class="carousel__slide">
                    <img src={subway} alt="Subway Logo" width="350" height="200"/>
                    <div class="time_container">
                    <h3>Estimated TIme: 10 min</h3>
                    </div>
                <div class="carousel__snapper">
                  <a href="#carousel__slide8"
                    class="carousel__prev">Go to last slide</a>
                  <a href="#carousel__slide2"
                    class="carousel__next">Go to next slide</a>
                </div>
              </li>

              <li id="carousel__slide2"
                  tabindex="0"
                  class="carousel__slide">
                    <img src={mcd} alt="McDonald Logo" width="350" height="200"/>
                    <div class="time_container">
                    <h3>Estimated TIme: 15 min</h3>
                    </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide1"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide3"
                  class="carousel__next">Go to next slide</a>
              </li>

              <li id="carousel__slide3"tabindex="0"class="carousel__slide">
              <img src={timhorton} alt="Tim Hortons Logo" width="350" height="200"/>
              <div class="time_container">
                    <h3>Estimated TIme: 5 min</h3>
                    </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide2"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide4"
                  class="carousel__next">Go to next slide</a>
              </li>

              <li id="carousel__slide4" tabindex="0"class="carousel__slide">
              <img src={saladking} alt="Salad King Logo" width="300" height="200"/>
              <div class="time_container">
                    <h3>Estimated TIme: 20 min</h3>
                    </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide3"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide5"
                  class="carousel__next">Go to first slide</a>
              </li>

              <li id="carousel__slide5" tabindex="0"class="carousel__slide">
              <img src={blaze} alt="Blaze Pizza Logo" width="300" height="200"/>
              <div class="time_container">
                    <h3>Estimated TIme: 20 min</h3>
                    </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide4"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide6"
                  class="carousel__next">Go to first slide</a>
              </li>

              <li id="carousel__slide6" tabindex="0"class="carousel__slide">
              <img src={burritoboyz} alt="Burrito Boyz Logo" width="300" height="200"/>
              <div class="time_container">
                    <h3>Estimated TIme: 20 min</h3>
                    </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide5"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide7"
                  class="carousel__next">Go to first slide</a>
              </li>

              <li id="carousel__slide7" tabindex="0"class="carousel__slide">
              <img src={springsushi} alt="Spring Sushi Logo" width="300" height="200"/>
              <div class="time_container">
                    <h3>Estimated TIme: 20 min</h3>
                    </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide6"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide8"
                  class="carousel__next">Go to first slide</a>
              </li>

              <li id="carousel__slide8" tabindex="0"class="carousel__slide">
              <img src={villamadina} alt="Villa Madina Logo" width="300" height="200"/>
              <div class="time_container">
                    <h3>Estimated TIme: 20 min</h3>
                    </div>
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide7"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide1"
                  class="carousel__next">Go to first slide</a>
              </li>


            </ol>
            <aside class="carousel__navigation">
              <ol class="carousel__navigation-list">
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide1"
                    class="carousel__navigation-button">Go to slide 1</a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide2"
                    class="carousel__navigation-button">Go to slide 2</a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide3"
                    class="carousel__navigation-button">Go to slide 3</a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide4"
                    class="carousel__navigation-button">Go to slide 4</a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide5"
                    class="carousel__navigation-button">Go to slide 5</a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide6"
                    class="carousel__navigation-button">Go to slide 6</a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide7"
                    class="carousel__navigation-button">Go to slide 7</a>
                </li>
                  <li class="carousel__navigation-item">
                  <a href="#carousel__slide8"
                    class="carousel__navigation-button">Go to slide 8</a>
                </li>
              </ol>
            </aside>
          </section>

          <div class="categories">
            <a href="#" class="nav1">
              Italian
            </a>
            <a href="#" class="nav2">
              Chinese
            </a>
            <a href="#" class="nav3">
              Indian
            </a>
            <a href="#" class="nav4">
              Korean
            </a>
            <a href="#" class="nav5">
              Fast Food
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
