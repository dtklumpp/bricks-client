import {useState} from 'react';
import {useEffect} from 'react';
import HeaderBar from '../components/Header';


import {Segment} from 'semantic-ui-react';

import {Grid, Row} from 'semantic-ui-react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Step } from 'semantic-ui-react';

import { Button, Comment, Form, Header } from 'semantic-ui-react'

import { Input, Label, Menu } from 'semantic-ui-react'

import MenuVertical from '../components/MenuVertical';

import {Modal} from 'semantic-ui-react';


export default Project;

function Project(props) {

    const URL3 = "http://localhost:8000/comments/"+props.match.params.id;
    const URL4 = "http://localhost:8000/comments/create/"+props.match.params.id;
    const URL5 = "http://localhost:8000/comments/delete/";
    const URL6 = "http://localhost:8000/projects/view/"+props.match.params.id;
    const URL7 = "http://localhost:8000/projects/pledge/"+props.match.params.id;



    const [commentArray, setCommentArray] = useState([]);
    const [commentDisplay, setCommentDisplay] = useState("");

    const [newName, setNewName] = useState("");
    const [newDesc, setNewDesc] = useState("");

    const [oneProject, setOneProject] = useState(null);

    const [activeItem, setActiveItem] = useState('inbox'); 

    const [pledge, setPledge] = useState(0);

    const [open, setOpen] = useState(false);


    function handleItemClick(e, {name}){
        setActiveItem(name);
    }
    // handleItemClick = (e, { name }) => setActiveItem(name);
  


    const newObj = {
        name: "",
        description: "",
    };
    
    useEffect(function(){
        getComments();
        getProject();
    }, [])

    function getProject() {
        fetch(URL6)
        .then(res => res.json())
        .then(json => {
            setOneProject(json.data);
            console.log('json.data:', json.data);
        })
    }

    function getComments() {
        fetch(URL3)
        .then(res => res.json())
        .then(json => {
            setCommentArray(json);
            console.log('json.data:', json.data);
            const displayvar = json.data.map(comment => {
                return <>
                    <Grid.Row key={comment.id}>
                        <Grid.Column width={13}>
                            <Comment key={comment.id}>
                                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                                <Comment.Content>
                                    <Comment.Author as='a'>{comment.name}</Comment.Author>
                                    <Comment.Text>{comment.description}</Comment.Text>
                                    <Comment.Actions>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <button onClick={removeIt} className={"ui button secondary"} value={comment.id}>X</button>
                        </Grid.Column>
                    </Grid.Row>

                </>
            })
            setCommentDisplay(displayvar);
        });
    }

    function makeIt() {
        newObj.name = newName;
        newObj.description = newDesc;
        fetch(URL4, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObj),
        })
        .then(res => res.json())
        .then(json => {
            setNewName("");
            setNewDesc("");
            getComments();
        })
    }

    function removeIt(event){
        fetch(URL5+event.target.value)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            getComments();
        })
    }

    function pledgeIt(event){
        setOpen(false)
        fetch(URL7, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({pledge: pledge}),
        })
        .then(res => res.json())
        .then(json => {
            console.log('json:', json);
            getProject();
        })

    }





















    return (<>

<HeaderBar/>

        
        <Grid celled>
            <Grid.Column width={1}>1</Grid.Column>
            <Grid.Column width={11}>
                <h2>9</h2>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content>
                </Card>

                <Step.Group fluid stackable>
                    <Step>
                    <Icon name='truck' />
                    <Step.Content>
                        <Step.Title>Shipping</Step.Title>
                        <Step.Description>Choose your shipping options</Step.Description>
                    </Step.Content>
                    </Step>

                    <Step active>
                    <Icon name='payment' />
                    <Step.Content>
                        <Step.Title>Billing</Step.Title>
                        <Step.Description>Enter billing information</Step.Description>
                    </Step.Content>
                    </Step>

                    <Step>
                    <Icon name='info' />
                    <Step.Content>
                        <Step.Title>Confirm Order</Step.Title>
                    </Step.Content>
                    </Step>
                </Step.Group>

                <button onClick={getComments} className={"ui button"}>comments</button><br/>
                <button onClick={getProject} className={"ui button"}>project</button><br/>


                <Comment.Group>
                    <Header as='h3' dividing>
                    Comments
                    </Header>

                    <Grid>
                        {commentDisplay}
                    </Grid>


                    <Form reply>
                        <Form.Input
                            label='Alias'
                            placeholder='alias'
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                        <Form.TextArea 
                            label=''
                            placeholder='comment'
                            value={newDesc}
                            onChange={(e) => setNewDesc(e.target.value)}
                        />
                        <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={makeIt}/>
                    </Form>
                </Comment.Group>

            </Grid.Column>


            <Grid.Column width={4}>
                <h2>5</h2>


                <Menu vertical>
                    <Menu.Item
                    name='inbox'
                    active={activeItem === 'inbox'}
                    onClick={handleItemClick}
                    >
                    <Label color='teal'>{oneProject ? "$"+(Math.floor(oneProject.goal/1000))+",000" : "..."}</Label>
                    Goal
                    </Menu.Item>

                    <Menu.Item
                    name='spam'
                    active={activeItem === 'spam'}
                    onClick={handleItemClick}
                    >
                    <Label>{oneProject ? (oneProject.funding/oneProject.goal * 100)+"%" : "..."}</Label>
                    Funding
                    </Menu.Item>

                    <Menu.Item
                    name='updates'
                    active={activeItem === 'updates'}
                    onClick={handleItemClick}
                    >
                    <Label>{oneProject ? oneProject.pledges : "..."}</Label>
                    Pledges
                    </Menu.Item>
                    <Menu.Item>
                        <Modal
                            size={'tiny'}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                            trigger={<Button color='red'>Make a Pledge</Button>}
                            >
                            <Modal.Header>Fund this Revolution</Modal.Header>
                            <Modal.Content>
                                <Segment>
                                    <Form>
                                        <Form.Input
                                            icon='user'
                                            iconPosition='left'
                                            label='Pledge Amount'
                                            placeholder='pledge'
                                            value={pledge ? pledge : ""}
                                            onChange={(e) => setPledge(e.target.value)}
                                        />

                                        <Form.Input
                                            icon='payment'
                                            iconPosition='left'
                                            label='Credit Card'
                                            placeholder='CC#'
                                        />

                                        <Header>Or..</Header>

                                        <Form.Input
                                            icon='question'
                                            iconPosition='left'
                                            label='Monero Escrow Address'
                                            value={"888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H"}
                                        />

                                        </Form>

                                </Segment>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button 
                                color='black' 
                                onClick={() => setOpen(false)}
                                >
                                Cancel
                                </Button>
                                <Button 
                                content='Make Pledge' 
                                positive 
                                onClick={pledgeIt}
                                labelPosition='right'
                                icon='checkmark'
                                />

                            </Modal.Actions>
                        </Modal>

                    </Menu.Item>
                </Menu>




            </Grid.Column>


        </Grid>
    
        <h3>ahoy</h3>
        <h3>{props.match.params.id}</h3>


    </>
    )
}

{/* <Comment.Avatar src='/images/avatar/small/matt.jpg' /> */}
