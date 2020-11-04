import React from "react";

import "style.css";
import "tailwindcss/dist/base.css";

import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/FullWidthWithImage";
import Footer from "components/footers/FiveColumnDark";
import SimpleSubscribe from 'components/forms/SimpleSubscribeNewsletter';
import GridFeatured from 'components/blogs/GridWithFeaturedPost';
import TabCardGrid from 'components/cards/TabCardGrid';
import ThreeColumn from 'components/features/ThreeColSimple';
import BetterHero from 'components/hero/BackgroundAsImageWithCenteredContent';

export default TreactPage;

function TreactPage() {
    return (<>
        <br/>
        <br/>
        <AnimationRevealPage disabled>
            <Hero />
    
    <br/>
    <hr/>
    <br/>
            <Footer/>

    
<br/>
<hr/>
<br/>

        <SimpleSubscribe/>

<br/>
<hr/>
<br/>

        <GridFeatured/>

<br/>
<hr/>
<br/>

        <TabCardGrid/>

<br/>
<hr/>
<br/>

        <ThreeColumn/>

<br/>
<hr/>
<br/>

        <BetterHero/>

<br/>
<hr/>
<br/>



<br/>
<hr/>
<br/>



<br/>
<hr/>
<br/>



<br/>
<hr/>
<br/>



<br/>
<hr/>
<br/>



<br/>
<hr/>
<br/>
         </AnimationRevealPage>

        

    
    </>)

}
