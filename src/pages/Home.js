import {useState} from 'react';
import {useEffect} from 'react';

import "style.css";
import "tailwindcss/dist/base.css";

import '../App.css';

import BetterHero from 'components/hero/BackgroundAsImageWithCenteredContent';
import ThreeColumn from 'components/features/ThreeColSimple';
import GridFeatured from 'components/blogs/GridWithFeaturedPost';
import Footer from "components/footers/FiveColumnDark";
import SimpleSubscribe from 'components/forms/SimpleSubscribeNewsletter';




export default Home;

function Home() {

    return (
        <>
            <h3 class="dtk">Home Page here</h3>
            <h3>unformat-O!</h3>

            <br/>
            <hr/>
            <br/>

                    <BetterHero/>

            <br/>
            <hr/>
            <br/>

            <ThreeColumn/>


            <br/>
            <hr/>
            <br/>

            <GridFeatured/>

            <br/>
            <hr/>
            <br/>

            <SimpleSubscribe/>


            <br/>
            <hr/>
            <br/>

            <Footer/>


            <br/>
            <hr/>
            <br/>


        </>
    )
}
