import {useState} from 'react';
import {useEffect} from 'react';

import { Button } from 'semantic-ui-react';
// import { Accordion, Icon } from 'semantic-ui-react'

import { Progress } from 'semantic-ui-react';
import { Grid, Segment, Image } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

import { Divider, Header, Menu, Message, Table } from 'semantic-ui-react'


import AccordianExampleStandard from '../components/Accordian';



export default Test;

function Test() {

    const URL = "http://localhost:8000/home/"

    const [var1, setVar1] = useState(5);
    const [fetch1, setFetch1] = useState(4);

    function increaseVar1() {
        setVar1(var1 + 1);
    }

    useEffect(function(){
        setVar1(var1 + 6);
    }, [])

    function fetchReply() {
        fetch(URL)
        .then(res => res.json())
        .then(json => console.log(json));
    }

    return ( <> <Container>
        <h3>Test Page here-Ooho</h3>
        <h4>var1 is {var1}</h4>
        <button onClick={increaseVar1}>change</button><br/>
        <button onClick={fetchReply}>fetchit</button>
        <h4>fetch1 is {fetch1}</h4>
        <br/>
        <button class="ui button">Click Here</button>
        <Button>Click Here</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        {/* <Button basic>Standard</Button> */}
        {/* <Button.Group>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </Button.Group> */}
        <div><button class="ui primary button">Primary</button><button class="ui secondary button">Secondary</button></div>
        <button class="ui inverted button">Standard</button>
        <div class="ui buttons"><button class="ui button">One</button><button class="ui button">Two</button><button class="ui button">Three</button></div>

        <br/>
        <hr/>
        <br/>


{/* <div class="accordion ui"><div class="active title"><i aria-hidden="true" class="dropdown icon"></i>What is a dog?</div><div class="content active"><p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p></div><div class="title"><i aria-hidden="true" class="dropdown icon"></i>What kinds of dogs are there?</div><div class="content"><p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p></div><div class="title"><i aria-hidden="true" class="dropdown icon"></i>How do you acquire a dog?</div><div class="content"><p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p><p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p></div></div> */}

      <br/>
      <hr/>
      <br/>

      <AccordianExampleStandard />

      <br/>
      <hr/>
      <br/>


    <Progress percent={11} />




    {/* <div class="ui progress" data-percent="11"><div class="bar" ></div></div> */}
    <br/>
    <hr/>
    <br/>
    <Grid columns='equal' stackable>
    <Grid.Column>
      <Segment>1</Segment>
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>2</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>3</Segment>
    </Grid.Column>
  </Grid>

  <Grid>
    <Grid.Column width={4}>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>

  <br/>
    <hr/>
    <br/>

  <Grid stackable doubling celled columns={"equal"}>
      <Grid.Column>1</Grid.Column>
      <Grid.Column>2</Grid.Column>
      <Grid.Column>3</Grid.Column>
      <Grid.Column>4</Grid.Column>
      <Grid.Column>5</Grid.Column>
      <Grid.Column>6</Grid.Column>
      <Grid.Column>7</Grid.Column>
      <Grid.Column>8</Grid.Column>
      <Grid.Column>9</Grid.Column>
      <Grid.Column>10</Grid.Column>
      <Grid.Column>11</Grid.Column>
      <Grid.Column>12</Grid.Column>
      <Grid.Column>13</Grid.Column>
  </Grid>

    <br/>
    <hr/>
    <br/>

    <div className="ui grid stackable doubling celled">
        <div className="four wide column">One</div>
        <div className="four wide column">Two</div>
        <div className="four wide column">Three</div>
        <div className="four wide column">Four</div>
    </div>

    <br/>
    <hr/>
    <br/>


    <Divider section />

      <Menu attached='top' compact inverted widths={3}>
        <Menu.Item as='a'>Item</Menu.Item>
        <Menu.Item as='a'>Item</Menu.Item>
        <Menu.Item as='a'>Item</Menu.Item>
      </Menu>
      <Table attached inverted>
        <Table.Header>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Segment attached='bottom' inverted>
        Segment
      </Segment>


  </Container>
    </>
    )
}
