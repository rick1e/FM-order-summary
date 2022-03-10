import './App.css';
import hero from './assets/illustration-hero.svg'
import music from './assets/icon-music.svg'

function App() {
  return (
    <div className="App">

      <div id="container">
        <div id="hero">
          <img src={hero} alt="HERO" />
        </div>
        <div id="summary-body">
          <div id="summary-text">
            <h2>Order Summary</h2>
            <p>
              You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like
            </p>
          </div>
          <div id="order-item">
            <div className="right-side">
              <div className="music-icon">
                <img src={music} alt="music" />
              </div>
              <div className="order-description">
                <h3>Annual Plan</h3>
                <p>$59.99/year</p>
              </div>


            </div>
            <div className="left-side">
              <a href="url">Change</a>
            </div>

          </div>

          <button className="primaryButton">
            Proceed to Payment
        </button>
          <button className="secondaryButton">
            Cancel Order
        </button>
        </div>


      </div>

    </div>
  );
}

export default App;
