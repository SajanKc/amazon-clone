import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

                <div className="home__row">
                    <Product
                        title="BaoFeng UV-5R Dual Band Two Way Radio (Black)"
                        price={11.85}
                        image="https://m.media-amazon.com/images/I/610BMG9oV7L._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4} />
                    <Product
                        title="ASUS VivoBook L203MA Laptop, 11.6” HD Display, Intel Celeron Dual Core CPU, 4GB RAM, 64GB Storage"
                        price={249.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51svyK3ruYL._AC_US240_FMwebp_QL65_.jpg"
                        rating={5} />
                </div>
                <div className="home__row">
                    <Product
                        title="Power Theory iPhone X/iPhone Xs Glass Screen Protector [2-Pack] with Easy Install Kit [Premium Tempered Glass] "
                        price={41.75}
                        image="https://images-na.ssl-images-amazon.com/images/I/81wdDf6o-QL._AC_SL1500_.jpg"
                        rating={2} />
                    <Product
                        title="1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light"
                        price={34.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41QyeCl1kGL._AC_US240_FMwebp_QL65_.jpg"
                        rating={4} />
                    <Product
                        title=" 49.2FT LED Strip Lights, QZYL Lights Strip Music Sync, App Control with Remote, 5050 RGB LED Light Strip Color Changing 24-Key Remote, Sensitive Built-in Mic, LED Lights Rope Lights for Home TV Party"
                        price={13.76}
                        image="https://images-na.ssl-images-amazon.com/images/I/81lmAL14poL._AC_SL1500_.jpg"
                        rating={3} />
                </div>
                <div className="home__row">
                    <Product
                        title=" Sceptre 30-Inch 21: 9 Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI DisplayPort Up to 85Hz Mprt 1ms FPS-RTS Build-in Speakers, Machine Black 2020"
                        price={228.87}
                        image="https://images-na.ssl-images-amazon.com/images/I/81uNJ%2B-LyJL._AC_SL1500_.jpg"
                        rating={5} />
                </div>
            </div>
        </div>
    );
}

export default Home;
