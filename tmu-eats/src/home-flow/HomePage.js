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
import React, { useState } from "react";
import { db } from "../api/Firebase";
import { collection, getDocs } from "firebase/firestore";

const HomePage = () => {
  const [restaurantModalName, setModalRestaurantName] = useState("");
  const [modalMenuItems, setModalMenuItems] = useState([]);
  const [menuPrices, setMenuPrices] = useState([]);
  const [modalFilterRestaurants, setModalFilterRestaurants] = useState([]);
  const [modalCartItems, setModalCartItems] = useState([]);
  const menuitems = [];
  const menuprices = [];
  const filterRestaurants = [];
  let cartitems = [];
  //Dictionary Mapping DB Restaurant Names to Image Names
  const dbDict = {};
  dbDict["Subway"] = subway;
  dbDict["McDonald's"]= mcd;
  dbDict["Salad King"] = saladking;
  dbDict[" Blaze Pizza"] = blaze; //Extra Space in front is necessary cause it looks like this in the DB for some reason
  dbDict["Burrito Boyz"] = burritoboyz;
  dbDict["Spring Sushi"] = springsushi;
  dbDict["Villa Madina"] = villamadina;
  dbDict["Tim Hortons"] = timhorton;

  async function handleClick(name) {
    setModalRestaurantName(name);

    const querySnapshot = await getDocs(collection(db, "restaurants"));
    querySnapshot.forEach((doc) => {
      if (doc.id == name) {
        let json = doc.data();
        let menuarray = Object.keys(json);

        console.log("Menu Array: " + menuarray);
        for (let k in menuarray) {
          if (menuarray[k] != "Cuisine" && menuarray[k] != "Delivery Time") {
            menuitems.push(menuarray[k]);
            menuprices.push(doc.get(menuarray[k]));
          }
        }
      }
    });

    setModalMenuItems(menuitems);
    setMenuPrices(menuprices);

    // Get the modal
    var modal = document.getElementById("menuModal");

    // Get the button that opens the modal
    //var restID = document.getElementById("1");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the img, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

    /**
     * Retrieves restaurants matching the cusisine and retrieves the modal
     * @param {*} cuisine 
     */
    async function handleFilterOnClick(cuisine) {

      const querySnapshot = await getDocs(collection(db, "restaurants"));
      querySnapshot.forEach((doc) => {
        if (doc.data().Cuisine == cuisine) {
          filterRestaurants.push(doc.id)
        }
      });
      console.log("Restaurants: Array: " + filterRestaurants);

      setModalFilterRestaurants(filterRestaurants); 
  
      // Get the modal
      var modal = document.getElementById("filterModal");

  
      // Get the button that opens the modal
      var span = document.getElementsByClassName("close")[0];
  
      // When the user clicks the img, open the modal
      modal.style.display = "block";
  
      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };
  
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }

    /**
     * Closes the filter modal and opens the corresponding restaurant modal
     * @param {*} restaurant 
     */
    async function modalRestaurantClick(restaurant) {
      handleClick(restaurant);
      var modal = document.getElementById("filterModal");
      modal.style.display = "none";
      //<li onClick={() => modalRestaurantClick("Tim Hortons")}>{item}</li> Used for testing
    }

  function addToCart() {
    //clear cartItems
    cartitems = [];
    modalMenuItems.forEach((item, index) => {
      let itemCheckbox = document.getElementById("menuItem" + index);
      if (itemCheckbox.checked) {
        cartitems.push(item);
      }
    });

    console.log(`Items added: ${cartitems}`);
    setModalCartItems(cartitems);
    var collection = document.getElementsByClassName("cartCheckbox");
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].checked) collection[i].checked = false;
    }
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
          </div>
          <div className="quizbox">
            <span class="span_topleft">Can't Decide?</span>
            <span class="span_center">Take Our Food Quiz! &#x2794;</span>
          </div>

          <div class="categories">
            <a href="#" class="nav1" onClick={() => handleFilterOnClick("Italian")}>
              Italian
            </a>
            <a href="#" class="nav2" onClick={() => handleFilterOnClick("Fast Food")}>
              Fast Food
            </a>
            <a href="#" class="nav3" onClick={() => handleFilterOnClick("Japanese")}>
              Japanese
            </a>
            <a href="#" class="nav4" onClick={() => handleFilterOnClick("Mexican")}>
              Mexican
            </a>
            <a href="#" class="nav5" onClick={() => handleFilterOnClick("Middle Eastern")}>
              Middle Eastern
            </a>
          </div>
        </div>
        <section class="carousel" aria-label="Gallery">
          <ol class="carousel__viewport">
            <li id="carousel__slide1" c tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <img
                  onClick={() => handleClick("Subway")}
                  src={subway}
                  alt="Subway Logo"
                  width="350"
                  height="200"
                />
                <div class="time_container">
                  <h3>Estimated Time: 10 min</h3>
                </div>
              </div>
              <a href="#carousel__slide8" class="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" class="carousel__next">
                Go to next slide
              </a>
            </li>

            <li id="carousel__slide2" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <img
                  onClick={() => handleClick("McDonald's")}
                  src={mcd}
                  alt="McDonald Logo"
                  width="350"
                  height="200"
                />
                <div class="time_container">
                  <h3>Estimated Time: 15 min</h3>
                </div>
              </div>
              <a href="#carousel__slide1" class="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide3" class="carousel__next">
                Go to next slide
              </a>
            </li>

            <li id="carousel__slide3" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <img
                  onClick={() => handleClick("Tim Hortons")}
                  src={timhorton}
                  alt="Tim Hortons Logo"
                  width="350"
                  height="200"
                />
                <div class="time_container">
                  <h3>Estimated Time: 5 min</h3>
                </div>
              </div>
              <a href="#carousel__slide2" class="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide4" class="carousel__next">
                Go to next slide
              </a>
            </li>

            <li id="carousel__slide4" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <img
                  onClick={() => handleClick("Salad King")}
                  src={saladking}
                  alt="Salad King Logo"
                  width="300"
                  height="200"
                />
                <div class="time_container">
                  <h3>Estimated Time: 20 min</h3>
                </div>
              </div>
              <a href="#carousel__slide3" class="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide5" class="carousel__next">
                Go to first slide
              </a>
            </li>

            <li id="carousel__slide5" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <img
                  onClick={() => handleClick(" Blaze Pizza")}
                  src={blaze}
                  alt="Blaze Pizza Logo"
                  width="300"
                  height="200"
                />
                <div class="time_container">
                  <h3>Estimated Time: 20 min</h3>
                </div>
              </div>
              <a href="#carousel__slide4" class="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide6" class="carousel__next">
                Go to first slide
              </a>
            </li>

            <li id="carousel__slide6" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <img
                  onClick={() => handleClick("Burrito Boyz")}
                  src={burritoboyz}
                  alt="Burrito Boyz Logo"
                  width="300"
                  height="200"
                />
                <div class="time_container">
                  <h3>Estimated Time: 5 min</h3>
                </div>
              </div>
              <a href="#carousel__slide5" class="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide7" class="carousel__next">
                Go to first slide
              </a>
            </li>

            <li id="carousel__slide7" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <img
                  onClick={() => handleClick("Spring Sushi")}
                  src={springsushi}
                  alt="Spring Sushi Logo"
                  width="300"
                  height="200"
                />
                <div class="time_container">
                  <h3>Estimated Time: 20 min</h3>
                </div>
              </div>
              <a href="#carousel__slide6" class="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide8" class="carousel__next">
                Go to first slide
              </a>
            </li>

            <li id="carousel__slide8" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <img
                  onClick={() => handleClick("Villa Madina")}
                  src={villamadina}
                  alt="Villa Madina Logo"
                  width="300"
                  height="200"
                />
                <div class="time_container">
                  <h3>Estimated Time: 10 min</h3>
                </div>
              </div>
              <a href="#carousel__slide7" class="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide1" class="carousel__next">
                Go to first slide
              </a>
            </li>
          </ol>
          <aside class="carousel__navigation">
            <ol class="carousel__navigation-list">
              <li class="carousel__navigation-item">
                <a href="#carousel__slide1" class="carousel__navigation-button">
                  Go to slide 1
                </a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide2" class="carousel__navigation-button">
                  Go to slide 2
                </a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide3" class="carousel__navigation-button">
                  Go to slide 3
                </a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide4" class="carousel__navigation-button">
                  Go to slide 4
                </a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide5" class="carousel__navigation-button">
                  Go to slide 5
                </a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide6" class="carousel__navigation-button">
                  Go to slide 6
                </a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide7" class="carousel__navigation-button">
                  Go to slide 7
                </a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide8" class="carousel__navigation-button">
                  Go to slide 8
                </a>
              </li>
            </ol>
          </aside>
        </section>
        
        <div id="filterModal" class="modal">
        <div class="filter-content">
            <span class="close">&times;</span>
            <h1 id="filter"></h1>
              Applicable Restaurants
            <ul class="filter-items">
              {modalFilterRestaurants.map((item, index) => (
                <div>
                <img
                  onClick={() => modalRestaurantClick(item)}
                  src={dbDict[item]}
                  alt="Logo"
                  width="350"
                  height="200"
                />
                </div>
              ))}
            </ul>
          </div>
        </div>


        <div id="menuModal" class="modal">
          <div class="menu-content">
            <span class="close">&times;</span>
            <h1 id="rest-name">{restaurantModalName}</h1>
            <ul class="menu-items">
              {modalMenuItems.map((item, index) => (
                <div>
                  <li>{item}</li>
                  <li>{"$".concat(menuPrices[index])}</li>
                  <input
                    id={"menuItem" + index}
                    type="checkbox"
                    class="cartCheckbox"
                  />
                </div>
              ))}
            </ul>
            <button onClick={() => addToCart()}>Add to Cart</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
