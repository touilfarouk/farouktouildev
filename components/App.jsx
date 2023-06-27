const { BrowserRouter, Route, Link, Routes, useLocation, Outlet, useParams } = ReactRouterDOM;
import Header from "./Header";
import Aside from "./Aside";
const App = () => {
  return (
    <BrowserRouter>

      <div id="main">
        <Header />
        <Aside />

        <div id="wrapper">
          <div className="nav-holder">
            <div className="nav-holder-wrap but-hol">
              <div className="nav-container fl-wrap">

                <nav className="nav-inner" id="menu">
                  <li>
                    <a href="#" className="act-link">Home</a>

                    <ul>
                      <li><a href="index.html" className="ajax">Slider</a></li>
                      <li><a href="index2.html" className="ajax">Carousel</a></li>
                      <li><a href="index3.html" className="ajax">Slideshow</a></li>
                      <li><a href="index4.html" className="ajax">Video</a></li>
                      <li><a href="index5.html" className="ajax">Image</a></li>
                    </ul>

                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App;
