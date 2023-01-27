import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layouts/main.components'

export default function Home() {
  return (
    <MainLayout> 
        <section id="hero">
            <div className="container-xl">
                <div className="row gy-4">
                <div className="col-lg-8">
                    {/* featured post large */}
                    <div className="post featured-post-lg">
                    <div className="details clearfix">
                        <a href="category.html" className="category-badge">Inspiration</a>
                        <h2 className="post-title"><a href="blog-single.html">5 Easy Ways You Can Turn Future Into Success</a></h2>
                        <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                        </ul>
                    </div>
                    <a href="blog-single.html">
                        <div className="thumb rounded">
                        <div className="inner data-bg-image" data-bg-image="/images/posts/featured-lg.jpg" />
                        </div>
                    </a>
                    </div>
                </div>
                <div className="col-lg-4">
                    {/* post tabs */}
                    <div className="post-tabs rounded bordered">
                    {/* tab navs */}
                    <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                        <li className="nav-item" role="presentation"><button aria-controls="popular" aria-selected="true" className="nav-link active" data-bs-target="#popular" data-bs-toggle="tab" id="popular-tab" role="tab" type="button">Popular</button></li>
                        <li className="nav-item" role="presentation"><button aria-controls="recent" aria-selected="false" className="nav-link" data-bs-target="#recent" data-bs-toggle="tab" id="recent-tab" role="tab" type="button">Recent</button></li>
                    </ul>
                    {/* tab contents */}
                    <div className="tab-content" id="postsTabContent">
                        {/* loader */}
                        <div className="lds-dual-ring" />
                        {/* popular posts */}
                        <div aria-labelledby="popular-tab" className="tab-pane fade show active" id="popular" role="tabpanel">
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-1.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">3 Easy Ways To Make Your iPhone Faster</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-2.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">An Incredibly Easy Method That Works For All</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-3.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">10 Ways To Immediately Start Selling Furniture</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-4.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">15 Unheard Ways To Achieve Greater Walker</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        {/* recent posts */}
                        <div aria-labelledby="recent-tab" className="tab-pane fade" id="recent" role="tabpanel">
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-2.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">An Incredibly Easy Method That Works For All</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-1.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">3 Easy Ways To Make Your iPhone Faster</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-4.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">15 Unheard Ways To Achieve Greater Walker</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-3.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">10 Ways To Immediately Start Selling Furniture</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="main-content">
            <div className="container-xl">
                <div className="row gy-4">
                <div className="col-lg-8">
                    {/* section header */}
                    <div className="section-header">
                    <h3 className="section-title">Editor’s Pick</h3>
                    <img src="images/wave.svg" className="wave" alt="wave" />
                    </div>
                    <div className="padding-30 rounded bordered">
                    <div className="row gy-5">
                        <div className="col-sm-6">
                        {/* post */}
                        <div className="post">
                            <div className="thumb rounded">
                            <a href="category.html" className="category-badge position-absolute">Lifestyle</a>
                            <span className="post-format">
                                <i className="icon-picture" />
                            </span>
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/editor-lg.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <ul className="meta list-inline mt-4 mb-0">
                            <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3"><a href="blog-single.html">15 Unheard Ways To Achieve Greater Walker</a></h5>
                            <p className="excerpt mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy</p>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        {/* post */}
                        <div className="post post-list-sm square">
                            <div className="thumb rounded">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/editor-sm-1.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">3 Easy Ways To Make Your iPhone Faster</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm square">
                            <div className="thumb rounded">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/editor-sm-2.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">An Incredibly Easy Method That Works For All</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm square">
                            <div className="thumb rounded">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/editor-sm-3.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">10 Ways To Immediately Start Selling Furniture</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm square">
                            <div className="thumb rounded">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/editor-sm-4.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">15 Unheard Ways To Achieve Greater Walker</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="spacer" data-height={50} />
                    {/* horizontal ads */}
                    <div className="ads-horizontal text-md-center">
                    <span className="ads-title">- Sponsored Ad -</span>
                    <a href="#">
                        <img src="images/ads/ad-750.png" alt="Advertisement" />
                    </a>
                    </div>
                    <div className="spacer" data-height={50} />
                    {/* section header */}
                    <div className="section-header">
                    <h3 className="section-title">Trending</h3>
                    <img src="images/wave.svg" className="wave" alt="wave" />
                    </div>
                    <div className="padding-30 rounded bordered">
                    <div className="row gy-5">
                        <div className="col-sm-6">
                        {/* post large */}
                        <div className="post">
                            <div className="thumb rounded">
                            <a href="category.html" className="category-badge position-absolute">Culture</a>
                            <span className="post-format">
                                <i className="icon-picture" />
                            </span>
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/trending-lg-1.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <ul className="meta list-inline mt-4 mb-0">
                            <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3"><a href="blog-single.html">Facts About Business That Will Help You Success</a></h5>
                            <p className="excerpt mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy</p>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm square before-seperator">
                            <div className="thumb rounded">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/trending-sm-1.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">3 Easy Ways To Make Your iPhone Faster</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm square before-seperator">
                            <div className="thumb rounded">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/trending-sm-2.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">An Incredibly Easy Method That Works For All</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        {/* post large */}
                        <div className="post">
                            <div className="thumb rounded">
                            <a href="category.html" className="category-badge position-absolute">Inspiration</a>
                            <span className="post-format">
                                <i className="icon-earphones" />
                            </span>
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/trending-lg-2.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <ul className="meta list-inline mt-4 mb-0">
                            <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3"><a href="blog-single.html">5 Easy Ways You Can Turn Future Into Success</a></h5>
                            <p className="excerpt mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy</p>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm square before-seperator">
                            <div className="thumb rounded">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/trending-sm-3.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">Here Are 8 Ways To Success Faster</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm square before-seperator">
                            <div className="thumb rounded">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/trending-sm-4.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">Master The Art Of Nature With These 7 Tips</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="spacer" data-height={50} />
                    {/* section header */}
                    <div className="section-header">
                    <h3 className="section-title">Inspiration</h3>
                    <img src="images/wave.svg" className="wave" alt="wave" />
                    <div className="slick-arrows-top">
                        <button type="button" data-role="none" className="carousel-topNav-prev slick-custom-buttons" aria-label="Previous"><i className="icon-arrow-left" /></button>
                        <button type="button" data-role="none" className="carousel-topNav-next slick-custom-buttons" aria-label="Next"><i className="icon-arrow-right" /></button>
                    </div>
                    </div>
                    <div className="row post-carousel-twoCol post-carousel">
                    {/* post */}
                    <div className="post post-over-content col-md-6">
                        <div className="details clearfix">
                        <a href="category.html" className="category-badge">Inspiration</a>
                        <h4 className="post-title"><a href="blog-single.html">Want To Have A More Appealing Tattoo?</a></h4>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        </div>
                        <a href="blog-single.html">
                        <div className="thumb rounded">
                            <div className="inner">
                            <img src="images/posts/inspiration-1.jpg" alt="thumb" />
                            </div>
                        </div>
                        </a>
                    </div>
                    {/* post */}
                    <div className="post post-over-content col-md-6">
                        <div className="details clearfix">
                        <a href="category.html" className="category-badge">Inspiration</a>
                        <h4 className="post-title"><a href="blog-single.html">Feel Like A Pro With The Help Of These 7 Tips</a></h4>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        </div>
                        <a href="blog-single.html">
                        <div className="thumb rounded">
                            <div className="inner">
                            <img src="images/posts/inspiration-2.jpg" alt="thumb" />
                            </div>
                        </div>
                        </a>
                    </div>
                    {/* post */}
                    <div className="post post-over-content col-md-6">
                        <div className="details clearfix">
                        <a href="category.html" className="category-badge">Inspiration</a>
                        <h4 className="post-title"><a href="blog-single.html">Your Light Is About To Stop Being Relevant</a></h4>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                        </ul>
                        </div>
                        <a href="blog-single.html">
                        <div className="thumb rounded">
                            <div className="inner">
                            <img src="images/posts/inspiration-3.jpg" alt="thumb" />
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                    <div className="spacer" data-height={50} />
                    {/* section header */}
                    <div className="section-header">
                    <h3 className="section-title">Latest Posts</h3>
                    <img src="images/wave.svg" className="wave" alt="wave" />
                    </div>
                    <div className="padding-30 rounded bordered">
                    <div className="row">
                        <div className="col-md-12 col-sm-6">
                        {/* post */}
                        <div className="post post-list clearfix">
                            <div className="thumb rounded">
                            <span className="post-format-sm">
                                <i className="icon-picture" />
                            </span>
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/latest-sm-1.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details">
                            <ul className="meta list-inline mb-3">
                                <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
                                <li className="list-inline-item"><a href="#">Trending</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title"><a href="blog-single.html">The Next 60 Things To Immediately Do About Building</a></h5>
                            <p className="excerpt mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings</p>
                            <div className="post-bottom clearfix d-flex align-items-center">
                                <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="far fa-envelope" /></a></li>
                                </ul>
                                </div>
                                <div className="more-button float-end">
                                <a href="blog-single.html"><span className="icon-options" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12 col-sm-6">
                        {/* post */}
                        <div className="post post-list clearfix">
                            <div className="thumb rounded">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/latest-sm-2.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details">
                            <ul className="meta list-inline mb-3">
                                <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
                                <li className="list-inline-item"><a href="#">Lifestyle</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title"><a href="blog-single.html">Master The Art Of Nature With These 7 Tips</a></h5>
                            <p className="excerpt mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings</p>
                            <div className="post-bottom clearfix d-flex align-items-center">
                                <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="far fa-envelope" /></a></li>
                                </ul>
                                </div>
                                <div className="more-button float-end">
                                <a href="blog-single.html"><span className="icon-options" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12 col-sm-6">
                        {/* post */}
                        <div className="post post-list clearfix">
                            <div className="thumb rounded">
                            <span className="post-format-sm">
                                <i className="icon-camrecorder" />
                            </span>
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/latest-sm-3.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details">
                            <ul className="meta list-inline mb-3">
                                <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
                                <li className="list-inline-item"><a href="#">Fashion</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title"><a href="blog-single.html">Facts About Business That Will Help You Success</a></h5>
                            <p className="excerpt mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings</p>
                            <div className="post-bottom clearfix d-flex align-items-center">
                                <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="far fa-envelope" /></a></li>
                                </ul>
                                </div>
                                <div className="more-button float-end">
                                <a href="blog-single.html"><span className="icon-options" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12 col-sm-6">
                        {/* post */}
                        <div className="post post-list clearfix">
                            <div className="thumb rounded">
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/latest-sm-4.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details">
                            <ul className="meta list-inline mb-3">
                                <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author" />Katen Doe</a></li>
                                <li className="list-inline-item"><a href="#">Politic</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title"><a href="blog-single.html">Your Light Is About To Stop Being Relevant</a></h5>
                            <p className="excerpt mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings</p>
                            <div className="post-bottom clearfix d-flex align-items-center">
                                <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane" /></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="far fa-envelope" /></a></li>
                                </ul>
                                </div>
                                <div className="more-button float-end">
                                <a href="blog-single.html"><span className="icon-options" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* load more button */}
                    <div className="text-center">
                        <button className="btn btn-simple">Load More</button>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    {/* sidebar */}
                    <div className="sidebar">
                    {/* widget about */}
                    <div className="widget rounded">
                        <div className="widget-about data-bg-image text-center" data-bg-image="images/map-bg.png">
                        <img src="/images/logo.svg" alt="logo" className="mb-4" />
                        <p className="mb-4">Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.</p>
                        <ul className="social-icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-medium" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-youtube" /></a></li>
                        </ul>
                        </div>
                    </div>
                    {/* widget popular posts */}
                    <div className="widget rounded">
                        <div className="widget-header text-center">
                        <h3 className="widget-title">Popular Posts</h3>
                        <img src="images/wave.svg" className="wave" alt="wave" />
                        </div>
                        <div className="widget-content">
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <span className="number">1</span>
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-1.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">3 Easy Ways To Make Your iPhone Faster</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <span className="number">2</span>
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-2.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">An Incredibly Easy Method That Works For All</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* post */}
                        <div className="post post-list-sm circle">
                            <div className="thumb circle">
                            <span className="number">3</span>
                            <a href="blog-single.html">
                                <div className="inner">
                                <img src="images/posts/tabs-3.jpg" alt="post-title" />
                                </div>
                            </a>
                            </div>
                            <div className="details clearfix">
                            <h6 className="post-title my-0"><a href="blog-single.html">10 Ways To Immediately Start Selling Furniture</a></h6>
                            <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        </div>		
                    </div>
                    {/* widget categories */}
                    <div className="widget rounded">
                        <div className="widget-header text-center">
                        <h3 className="widget-title">Explore Topics</h3>
                        <img src="images/wave.svg" className="wave" alt="wave" />
                        </div>
                        <div className="widget-content">
                        <ul className="list">
                            <li><a href="#">Lifestyle</a><span>(5)</span></li>
                            <li><a href="#">Inspiration</a><span>(2)</span></li>
                            <li><a href="#">Fashion</a><span>(4)</span></li>
                            <li><a href="#">Politic</a><span>(1)</span></li>
                            <li><a href="#">Trending</a><span>(7)</span></li>
                            <li><a href="#">Culture</a><span>(3)</span></li>
                        </ul>
                        </div>
                    </div>
                    {/* widget newsletter */}
                    <div className="widget rounded">
                        <div className="widget-header text-center">
                        <h3 className="widget-title">Newsletter</h3>
                        <img src="images/wave.svg" className="wave" alt="wave" />
                        </div>
                        <div className="widget-content">
                        <span className="newsletter-headline text-center mb-3">Join 70,000 subscribers!</span>
                        <form>
                            <div className="mb-2">
                            <input className="form-control w-100 text-center" placeholder="Email address…" type="email" />
                            </div>
                            <button className="btn btn-default btn-full" type="submit">Sign Up</button>
                        </form>
                        <span className="newsletter-privacy text-center mt-3">By signing up, you agree to our <a href="#">Privacy Policy</a></span>
                        </div>		
                    </div>
                    {/* widget post carousel */}
                    <div className="widget rounded">
                        <div className="widget-header text-center">
                        <h3 className="widget-title">Celebration</h3>
                        <img src="images/wave.svg" className="wave" alt="wave" />
                        </div>
                        <div className="widget-content">
                        <div className="post-carousel-widget">
                            {/* post */}
                            <div className="post post-carousel">
                            <div className="thumb rounded">
                                <a href="category.html" className="category-badge position-absolute">How to</a>
                                <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/widgets/widget-carousel-1.jpg" alt="post-title" />
                                </div>
                                </a>
                            </div>
                            <h5 className="post-title mb-0 mt-4"><a href="blog-single.html">5 Easy Ways You Can Turn Future Into Success</a></h5>
                            <ul className="meta list-inline mt-2 mb-0">
                                <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                            {/* post */}
                            <div className="post post-carousel">
                            <div className="thumb rounded">
                                <a href="category.html" className="category-badge position-absolute">Trending</a>
                                <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/widgets/widget-carousel-2.jpg" alt="post-title" />
                                </div>
                                </a>
                            </div>
                            <h5 className="post-title mb-0 mt-4"><a href="blog-single.html">Master The Art Of Nature With These 7 Tips</a></h5>
                            <ul className="meta list-inline mt-2 mb-0">
                                <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                            {/* post */}
                            <div className="post post-carousel">
                            <div className="thumb rounded">
                                <a href="category.html" className="category-badge position-absolute">How to</a>
                                <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/widgets/widget-carousel-1.jpg" alt="post-title" />
                                </div>
                                </a>
                            </div>
                            <h5 className="post-title mb-0 mt-4"><a href="blog-single.html">5 Easy Ways You Can Turn Future Into Success</a></h5>
                            <ul className="meta list-inline mt-2 mb-0">
                                <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            </div>
                        </div>
                        {/* carousel arrows */}
                        <div className="slick-arrows-bot">
                            <button type="button" data-role="none" className="carousel-botNav-prev slick-custom-buttons" aria-label="Previous"><i className="icon-arrow-left" /></button>
                            <button type="button" data-role="none" className="carousel-botNav-next slick-custom-buttons" aria-label="Next"><i className="icon-arrow-right" /></button>
                        </div>
                        </div>		
                    </div>
                    {/* widget advertisement */}
                    <div className="widget no-container rounded text-md-center">
                        <span className="ads-title">- Sponsored Ad -</span>
                        <a href="#" className="widget-ads">
                        <img src="images/ads/ad-360.png" alt="Advertisement" />	
                        </a>
                    </div>
                    {/* widget tags */}
                    <div className="widget rounded">
                        <div className="widget-header text-center">
                        <h3 className="widget-title">Tag Clouds</h3>
                        <img src="images/wave.svg" className="wave" alt="wave" />
                        </div>
                        <div className="widget-content">
                        <a href="#" className="tag">#Trending</a>
                        <a href="#" className="tag">#Video</a>
                        <a href="#" className="tag">#Featured</a>
                        <a href="#" className="tag">#Gallery</a>
                        <a href="#" className="tag">#Celebrities</a>
                        </div>		
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>


    </MainLayout>
  )
}