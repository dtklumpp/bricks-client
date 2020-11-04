import {useState} from 'react';
import {useEffect} from 'react';

import { Button } from 'semantic-ui-react';
// import { Accordion, Icon } from 'semantic-ui-react'

import { Progress } from 'semantic-ui-react';
import { Grid, Segment, Image } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

import { Divider, Header, Menu, Message, Table } from 'semantic-ui-react';

import { Icon } from 'semantic-ui-react';

import { Input } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import { Search } from 'semantic-ui-react';
import { Step } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Image as ImageComponent, Item } from 'semantic-ui-react';
import { Label } from 'semantic-ui-react';

import {Modal} from 'semantic-ui-react';



import AccordianExampleStandard from '../components/Accordian';
import AccordianFluid from '../components/AccordianFluid';
import Portal from '../components/testing/Portal';
import Remote from '../components/testing/Remote';
import CheckboxRemote from '../components/testing/Checkbox';

export default Test;

const src = 'https://react.semantic-ui.com/images/wireframe/image.png'
const paragraph = <ImageComponent src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />



function Test() {

    const URL = "http://localhost:8000/home/"
    const URL2 = "http://localhost:8000/homer/"
    const URL3 = "http://localhost:8000/projects/"
    const URL4 = "http://localhost:8000/projects/create"



    const [var1, setVar1] = useState(5);
    const [fetch1, setFetch1] = useState(4);

    const [local, setLocal] = useState(2);

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

    const msg = {message: "ahoy-hoy"};
    const cloneproj = {
        name: "cloneName",
        image: "cloneImage",
        description: "cloneDescription",
    };

    function sendIt() {
        fetch(URL2, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(msg),
        })
        .then(res => res.json())
        .then(json => console.log(json));
    }

    function getProjects() {
        fetch(URL3)
        .then(res => res.json())
        .then(json => console.log(json));
    }

    function makeIt() {
        fetch(URL4, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cloneproj),
        })
        .then(res => res.json())
        .then(json => console.log(json));
    }






    function localSet() {
        localStorage.setItem("dkf", 5);
    }

    function localGet() {
        setLocal(localStorage.dkf);
    }

    function localClear() {
        localStorage.clear();
    }







    // for modal
    const [open, setOpen] = useState(false);


    return ( <> <Container>
        <h3>Test Page here-Ooho</h3>
        <h4>var1 is {var1}</h4>
        <button onClick={increaseVar1} className={"ui button"}>change</button><br/>
        <button onClick={fetchReply} className={"ui button"}>fetchit</button><br/>
        <button onClick={sendIt} className={"ui button"}>sendit</button><br/>
        <button onClick={getProjects} className={"ui button"}>projects</button><br/>
        <button onClick={makeIt} className={"ui button"}>create project</button><br/>

        <br/>
<hr/>
<br/>

<button onClick={localSet} className={"ui button"}>local set</button><br/>
<button onClick={localGet} className={"ui button"}>local get</button><br/>
<button onClick={localClear} className={"ui button"}>local clear</button><br/>


<br/>
<hr/>
<br/>

        <h3>local is {local}</h3>
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



<br/>
<hr/>
<br/>



<br/>
<hr/>
<br/>



<br/>
<hr/>
<br/>

<Grid.Column style={{ position: "relative", display: "flex"}}>
    <div style={{position: "absolute",bottom: 20}}>
      Name : City
    </div>
    <Image src={src} size="medium"/>
  </Grid.Column>


<br/>
<hr/>
<br/>

<div class="ui modal">
  <div class="header">Header</div>
  <div class="scrolling content">
    <p>Very long content goes here</p>
  </div>
</div>


<br/>
<hr/>
<br/>

<Segment style={{overflow: 'auto', maxHeight: 200 }}>
  </Segment>

  <Segment color="teal" raised style={{ overflow: 'auto', maxHeight: '27em' }}>
      </Segment>

  <Segment style={{ overflow: 'auto', maxHeight: '50vh' }}>
  <Segment.Group horizontal>
    <Segment style={{ overflow: 'auto' }}> segment 1 </Segment>
    <Segment style={{ overflow: 'auto' }}> segment 2 </Segment>
    <Segment style={{ overflow: 'auto' }}> segment 3 </Segment>
  </Segment.Group>
</Segment>



<br/>
<hr/>
<br/>

<div>
    <Message
      attached
      header='Welcome to our site!'
      content='Fill out the form below to sign-up for a new account'
    />
    <Form className='attached fluid segment'>
      <Form.Group widths='equal'>
        <Form.Input
          fluid
          label='First Name'
          placeholder='First Name'
          type='text'
        />
        <Form.Input
          fluid
          label='Last Name'
          placeholder='Last Name'
          type='text'
        />
      </Form.Group>
      <Form.Input label='Username' placeholder='Username' type='text' />
      <Form.Input label='Password' type='password' />
      <Form.Checkbox inline label='I agree to the terms and conditions' />
      <Button color='blue'>Submit</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
    </Message>
  </div>

<br/>
<hr/>
<br/>

<Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Date Joined</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Called</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

<br/>
<hr/>
<br/>

        <CheckboxRemote/>

<br/>
<hr/>
<br/>

<Item.Group divided>
    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>My Neighbor Totoro</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC Cinema</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Watchmen</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>

<br/>
<hr/>
<br/>

<Item.Group link>
    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />

      <Item.Content>
        <Item.Header>Stevie Feliciano</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/veronika.jpg' />

      <Item.Content>
        <Item.Header>Veronika Ossi</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />

      <Item.Content>
        <Item.Header>Jenny Hess</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>

<br/>
<hr/>
<br/>

        <Remote/>

<br/>
<hr/>
<br/>

        <Portal/>

<br/>
<hr/>
<br/>

<div>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>Sign-up for a Pro account</Button.Content>
      <Button.Content hidden>$12.99 a month</Button.Content>
    </Button>
  </div>

<br/>
<hr/>
<br/>

<div>
    <Button color='red'>Red</Button>
    <Button color='orange'>Orange</Button>
    <Button color='yellow'>Yellow</Button>
    <Button color='olive'>Olive</Button>
    <Button color='green'>Green</Button>
    <Button color='teal'>Teal</Button>
    <Button color='blue'>Blue</Button>
    <Button color='violet'>Violet</Button>
    <Button color='purple'>Purple</Button>
    <Button color='pink'>Pink</Button>
    <Button color='brown'>Brown</Button>
    <Button color='grey'>Grey</Button>
    <Button color='black'>Black</Button>
  </div>

<br/>
<hr/>
<br/>

<div>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='google plus'>
      <Icon name='google plus' /> Google Plus
    </Button>
    <Button color='vk'>
      <Icon name='vk' /> VK
    </Button>
    <Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
    <Button color='youtube'>
      <Icon name='youtube' /> YouTube
    </Button>
  </div>

<br/>
<hr/>
<br/>

<Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>

<br/>
<hr/>
<br/>

<Step.Group>
    <Step link>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step link>
      <Icon name='credit card' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>

<br/>
<hr/>
<br/>

<Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Find Country
          </Header>

          <Search placeholder='Search countries...' />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='world' />
            Add New Country
          </Header>
          <Button primary>Create</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>

        <br/>
        <hr/>
        <br/>


{/* <div class="accordion ui"><div class="active title"><i aria-hidden="true" class="dropdown icon"></i>What is a dog?</div><div class="content active"><p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p></div><div class="title"><i aria-hidden="true" class="dropdown icon"></i>What kinds of dogs are there?</div><div class="content"><p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p></div><div class="title"><i aria-hidden="true" class="dropdown icon"></i>How do you acquire a dog?</div><div class="content"><p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p><p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p></div></div> */}

      <br/>
      <hr/>
      <br/>
        <Container>

      <AccordianExampleStandard />
        </Container>

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



      <br/>
    <hr/>
    <br/>

    <Header as='h2' icon>
    <Icon name='settings' />
    Account Settings
    <Header.Subheader>
      Manage your account settings and set e-mail preferences.
    </Header.Subheader>
  </Header>



<br/>
<hr/>
<br/>

        <AccordianFluid/>

<br/>
<hr/>
<br/>
<div>
    <Image src={src} size='mini' />
    <Divider hidden />
    <Image src={src} size='tiny' />
    <Divider hidden />
    <Image src={src} size='small' />
    <Divider hidden />
    <Image src={src} size='medium' />
    <Divider hidden />
    <Image src={src} size='large' />
    <Divider hidden />
  </div>


<br/>
<hr/>
<br/>

    <div>
        <Input list='languages' placeholder='Choose language...' />
        <datalist id='languages'>
        <option value='English'>English</option>
        <option value='Chinese'>Chinese</option>
        <option value='Dutch'>Dutch</option>
        </datalist>
    </div>

<br/>
<hr/>
<br/>

<List link>
    <List.Item active>Home</List.Item>
    <List.Item as='a'>About</List.Item>
    <List.Item as='a'>Jobs</List.Item>
    <List.Item as='a'>Team</List.Item>
  </List>

<br/>
<hr/>
<br/>



<br/>
<hr/>
<br/>

<Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>

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




  </Container>
    </>
    )
}
