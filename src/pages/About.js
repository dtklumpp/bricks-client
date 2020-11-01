// import "../holding/slick-carousel/slick/slick.css";
// import "../holding/slick-carousel/slick/slick-theme.css";

import 'antd/dist/antd.css';

// import './About.css';

import SimpleSlider from '../components/testing/Carousel';
// import SimpleSlider2 from '../components/testing/SimpleSlider';

import { DatePicker } from 'antd';
import { Carousel } from 'antd';

import {Container} from 'semantic-ui-react';
import {Grid} from "semantic-ui-react";

import SortableComponent from '../components/testing/SortableComponent';


export default About;


function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

function About() {
    return (<>
        <h3>About Page here</h3>

        <br/>
        <hr/>
        <br/>

        <DatePicker />

        <br/>
        <hr/>
        <br/>

<br/>
<hr/>
<br/>

<Container>

    <Grid>
        <Grid.Column width={9}>


  <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
        </Grid.Column>

    </Grid>
<br/>
<hr/>
<br/>

    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,



</Container>


<br/>
<hr/>
<br/>

        <SortableComponent/>

<br/>
<hr/>
<br/>



<br/>
<hr/>
<br/>

<SimpleSlider/>
        {/* <SimpleSlider2/> */}


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



    </>)
}
