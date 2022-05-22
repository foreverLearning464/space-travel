import logo from "../assets/shared/logo.svg"



function PrimaryHeader() {
    return(
        <div className="primary-header flex">
         
          <div>
            <img src={logo} className="logo" alt="logo" />
          </div>

        

        
          
          <button className="mobile-nav-toggle" data-is-open="false"  aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span></button>
          
          <nav style={{'order': '2'}}>
            <ul className="primary-navigation fs-200 underline-indicators flex" data-visible='false'>
                <li><a href="#" className="letter-spacing-2 text-white uppercase"><span className="numbered-link" aria-hidden='true'>00</span> Home</a></li>
                <li><a href="#" className="letter-spacing-2 text-white uppercase"><span className="numbered-link" aria-hidden='true'>01</span> Destination</a></li>
                <li><a href="#" className="letter-spacing-2 text-white uppercase"><span className="numbered-link" aria-hidden='true'>02</span> Crew</a></li>
                <li><a href="#" className="letter-spacing-2 text-white uppercase"><span className="numbered-link" aria-hidden='true'>03</span> Technology</a></li>     
            </ul>
          </nav>
        
        </div>
    );
}

export default PrimaryHeader;