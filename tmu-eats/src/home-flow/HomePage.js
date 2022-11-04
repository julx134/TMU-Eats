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
import {db} from "../api/Firebase";
import { collection, getDocs} from "firebase/firestore";


const HomePage = () => {
  const menuitems=[]
  const cartitems=[]


  async function handleClick(name) {
    
    document.getElementById("rest-name").innerHTML=name;
    
    const querySnapshot = await getDocs(collection(db, "restaurants"));
    querySnapshot.forEach((doc) => {
      if(doc.id==name){
        let json = doc.data();
        let menuarray = Object.keys(json);
        
        console.log("Menu Array: "+menuarray)
        for(let k in menuarray){
          if (menuarray[k]!="Cuisine"  && menuarray[k]!="Delivery Time"){
            menuitems.push(menuarray[k]);
          }
        }
      }
    });
    for (let x in menuitems){
      var restaurantid="rest-item-"+x;
      document.getElementById(restaurantid).innerHTML=menuitems[x];
    }
    
    
    // Get the modal
    var modal = document.getElementById("menuModal");

    // Get the button that opens the modal
    //var restID = document.getElementById("1");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the img, open the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  function addToCart(){
    var box1= document.getElementById("selected1");
    var box2= document.getElementById("selected2");
    var box3= document.getElementById("selected3");
    if(box1.checked){
      cartitems.push(menuitems[0]);

    }
    if(box2.checked){
      cartitems.push(menuitems[1]);


    }
    if(box3.checked){
      cartitems.push(menuitems[2]);
    }
    console.log(cartitems);

  }

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
          
          <div class="categories">
            <a href="#" class="nav1">Italian</a>
            <a href="#" class="nav2">Chinese</a>
            <a href="#" class="nav3">Indian</a>
            <a href="#" class="nav4">Korean</a>
            <a href="#" class="nav5">Fast Food</a>
          </div>
        </div>

        <section class="carousel" aria-label="Gallery">
            <ol  class="carousel__viewport">
              <li id="carousel__slide1"c tabindex="0" class="carousel__slide">
                <div class="carousel__snapper">
                  <img onClick={() => handleClick("Subway")} src={subway} alt="Subway Logo" width="350" height="200"/>
                  <div class="time_container">
                    <h3>Estimated Time: 10 min</h3>
                  </div>
                </div>
                  <a href="#carousel__slide8"
                    class="carousel__prev">Go to last slide</a>
                  <a href="#carousel__slide2"
                    class="carousel__next">Go to next slide</a>
              </li>

              <li id="carousel__slide2" tabindex="0" class="carousel__slide">
                <div class="carousel__snapper">
                  <img onClick={() => handleClick("McDonald's")} src={mcd} alt="McDonald Logo" width="350" height="200"/>
                  <div class="time_container">
                    <h3>Estimated Time: 15 min</h3>
                  </div>
                </div>
                <a href="#carousel__slide1"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide3"
                  class="carousel__next">Go to next slide</a>
              </li>

              <li id="carousel__slide3"tabindex="0"class="carousel__slide">
                <div class="carousel__snapper">
                  <img onClick={() => handleClick("Tim Hortons")} src={timhorton} alt="Tim Hortons Logo" width="350" height="200"/>
                  <div class="time_container">
                    <h3>Estimated Time: 5 min</h3>
                  </div>
                </div>
                <a href="#carousel__slide2"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide4"
                  class="carousel__next">Go to next slide</a>
              </li>

              <li id="carousel__slide4" tabindex="0"class="carousel__slide">
                <div class="carousel__snapper">
                  <img onClick={() => handleClick("Salad King")} src={saladking} alt="Salad King Logo" width="300" height="200"/>
                  <div class="time_container">
                    <h3>Estimated Time: 20 min</h3>
                  </div>
                </div>
                <a href="#carousel__slide3"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide5"
                  class="carousel__next">Go to first slide</a>
              </li>

              <li id="carousel__slide5" tabindex="0"class="carousel__slide">
              <div class="carousel__snapper">
                <img onClick={() => handleClick("Blaze Pizza")} src={blaze} alt="Blaze Pizza Logo" width="300" height="200"/>
                <div class="time_container">
                  <h3>Estimated Time: 20 min</h3>
                </div>
              </div>
              <a href="#carousel__slide4"
                  class="carousel__prev">Go to previous slide</a>
              <a href="#carousel__slide6"
                class="carousel__next">Go to first slide</a>
              </li>

              <li id="carousel__slide6" tabindex="0"class="carousel__slide">
                <div class="carousel__snapper">
                  <img onClick={() => handleClick("Burrito Boyz")} src={burritoboyz} alt="Burrito Boyz Logo" width="300" height="200"/>
                  <div class="time_container">
                    <h3>Estimated Time: 20 min</h3>
                  </div>
                </div>
                <a href="#carousel__slide5"
                    class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide7"
                  class="carousel__next">Go to first slide</a>
              </li>

              <li id="carousel__slide7" tabindex="0"class="carousel__slide">
                <div class="carousel__snapper">
                  <img onClick={() => handleClick("Spring Sushi")} src={springsushi} alt="Spring Sushi Logo" width="300" height="200"/>
                  <div class="time_container">
                    <h3>Estimated Time: 20 min</h3>
                  </div>
                </div>
                <a href="#carousel__slide6"
                  class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide8"
                  class="carousel__next">Go to first slide</a>
              </li>

              <li id="carousel__slide8" tabindex="0"class="carousel__slide">
                <div class="carousel__snapper">
                  <img onClick={() => handleClick("Villa Madina")} src={villamadina} alt="Villa Madina Logo" width="300" height="200"/>
                  <div class="time_container">
                    <h3>Estimated Time: 20 min</h3>
                  </div>
                </div>
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

        <div id="menuModal" class="modal">
          <div class="menu-content">
            <span class="close">&times;</span>
            <h1 id="rest-name">Restaurant Name</h1>
            <ul class="menu-items">
              <li id="rest-item-0">Item 1 </li> <input id="selected1" type="checkbox"/>
              <li id="rest-item-1">Item 2</li> <input id ="selected2" type="checkbox"/>
              <li id="rest-item-2">Item 3</li> <input id="selected3" type="checkbox"/>
            </ul>
            <button onClick={()=>addToCart()} >Add to Cart</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
