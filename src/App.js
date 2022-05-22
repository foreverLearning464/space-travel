
import PrimaryHeader from './components/PrimaryHeader';
import './custom-properties.css';
import './reset.css';
import './utility-classes.css';
import './large-button.css';
import './page-specific-background.css';
import './primary-header.css';
import './indicators.css';


function App() {
  return (
         <body className="home">
            <PrimaryHeader />
            <main className="grid-container grid-container--home">
                <div>
                    <h1 className="text-accent fs-600"> So, you want to travel to
                    <span className="d-block fs-900 uppercase ff-serif text-white"> Space</span>
                    </h1>
                    <p className="text-accent fs-300"> Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!</p>
                </div>
        
                <div>
                    <a className="large-button ff-serif uppercase bg-white text-dark">Explore</a>
                </div>

            </main>
      </body>    

  );
}

export default App;
