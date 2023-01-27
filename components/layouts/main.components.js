import React, { useEffect } from 'react';
import Nav from './nav.component';

const MainLayout = (props) => {  
   
    useEffect(() => {
        console.log(props)

        var $header = $(".header-default, .header-personal nav, .header-classic .header-bottom"),
        $clone = $header.before($header.clone().addClass("clone"));

        $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
        $('body').toggleClass("down", (fromTop > 300));
        });

        $("button.search").on( 'click', function() {
            $(".search-popup").addClass("visible");
          });
      
          $(".search-popup .btn-close").on( 'click', function() {
            $(".search-popup").removeClass("visible");
          });
      
          $(document).keyup(function(e) {
                if (e.key === "Escape") { // escape key maps to keycode `27`
                  $(".search-popup").removeClass("visible");
              }
          });

    }, []);

  return(
    <React.Fragment>
      <div className="site-wrapper">
        <div className="main-overlay"></div>
        <header className="header-default">
            <nav className="navbar navbar-expand-lg">
                <div className="container-xl">
                    <a className="navbar-brand" href="/"><img src="/images/logo.svg" alt="logo" /></a> 
                <div className="collapse navbar-collapse">
                    <Nav/>
                </div>
                {/* header right section */}
                <div className="header-right">
                    {/* social icons */}
                    {/* <ul className="social-icons list-unstyled list-inline mb-0">
                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-medium" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-youtube" /></a></li>
                    </ul> */}
                    {/* header buttons */}
                    <div className="header-buttons">
                        <button className="search icon-button">
                            <i className="icon-magnifier" />
                        </button>
                        {/* <button className="burger-menu icon-button">
                            <span className="burger-icon" />
                        </button> */}
                    </div>
                </div>
                </div>
            </nav>
        </header>

        <>{props.children}</>
        <footer>
            <div className="container-xl">
                <div className="footer-inner">
                <div className="row d-flex align-items-center gy-4">
                    {/* copyright text */}
                    <div className="col-md-4">
                    <span className="copyright">© {new Date().getFullYear()} myvisa.org.in</span>
                    </div>
                    {/* social icons */}
                    <div className="col-md-4 text-center">
                    <ul className="social-icons list-unstyled list-inline mb-0">
                        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-medium" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-youtube" /></a></li>
                    </ul>
                    </div>
                    {/* go to top button */}
                    <div className="col-md-4">
                    <a href="#" id="return-to-top" className="float-md-end"><i className="icon-arrow-up" />Back to Top</a>
                    </div>
                </div>
                </div>
            </div>
        </footer>

      </div>

      <div className="search-popup">
            {/* close button */}
            <button type="button" className="btn-close" aria-label="Close" />
            {/* content */}
            <div className="search-content">
                <div className="text-center">
                <h3 className="mb-4 mt-0">Press ESC to close</h3>
                </div>
                {/* form */}
                <form className="d-flex search-form">
                <input className="form-control me-2" type="search" placeholder="Search and press enter ..." aria-label="Search" />
                <button className="btn btn-default btn-lg" type="submit"><i className="icon-magnifier" /></button>
                </form>
            </div>
        </div>

        <div className="canvas-menu d-flex align-items-end flex-column">
            {/* close button */}
            <button type="button" className="btn-close" aria-label="Close" />
            {/* logo */}
            <div className="logo">
                <img src="/images/logo.svg" alt="Katen" />
            </div>
            {/* menu */}
            <nav> 
                <Nav/>
            </nav>
            {/* social icons */}
            {/* <ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-medium" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-youtube" /></a></li>
            </ul> */}
        </div>
    </React.Fragment>
  )
}


export default MainLayout;
 
