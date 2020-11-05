import {useState} from 'react';
import {useEffect} from 'react';
import HeaderBar from '../components/Header';


import {Segment} from 'semantic-ui-react';

import {Grid} from 'semantic-ui-react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Step } from 'semantic-ui-react';

import { Button, Comment, Form, Header } from 'semantic-ui-react'

import { Label, Menu } from 'semantic-ui-react'


import {Modal} from 'semantic-ui-react';

import {Progress} from 'semantic-ui-react';
import {Container} from 'semantic-ui-react';

import LineChartSample from '../components/recharts/LineChart';





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

    const [oneProject, setOneProject] = useState({});

    const [activeItem, setActiveItem] = useState(''); 

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
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Column width={10}>
                        <Card fluid>
                            <Image src={oneProject.image} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>{oneProject.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>begun in 2020</span>
                            </Card.Meta>
                            <Card.Description>
                                {oneProject.description}
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='globe' />
                                out of {oneProject.continent}
                            </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={5}>
                    </Grid.Column>


                </Grid>

                <Step.Group fluid stackable>
                    <Step>
                    <Icon name='binoculars' />
                    <Step.Content>
                        <Step.Title>Attention</Step.Title>
                        <Step.Description>Review campaign details</Step.Description>
                    </Step.Content>
                    </Step>

                    <Step>
                    <Icon name='payment' />
                    <Step.Content>
                        <Step.Title>Decision</Step.Title>
                        <Step.Description>Enter funding information</Step.Description>
                    </Step.Content>
                    </Step>

                    <Step>
                    <Icon name='fire' />
                    <Step.Content>
                        <Step.Title>Action</Step.Title>
                        <Step.Description>Change the world (if applicable)</Step.Description>
                    </Step.Content>
                    </Step>
                </Step.Group>


            <Header>Pledge Rates:</Header>
            <LineChartSample/>

                {/* <button onClick={getComments} className={"ui button"}>comments</button><br/> */}
                {/* <button onClick={getProject} className={"ui button"}>project</button><br/> */}


                <Comment.Group>
                    <Header as='h3' dividing>
                    Comments
                    </Header>

                    <Grid>
                        {commentDisplay}
                    </Grid>


                    <Form reply>
                        <Form.Input
                            label='New Comment'
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
                <Header>Campaign Metrics:</Header>


                <Menu vertical size="big">
                    <Menu.Item
                    name='inbox'
                    active={activeItem === 'inbox'}
                    onClick={handleItemClick}
                    >
                    <Label size="big" color='teal'>{oneProject ? "$"+(Math.floor(oneProject.goal/1000))+",000" : "..."}</Label>
                    Goal
                    </Menu.Item>

                    <Menu.Item
                    name='spam'
                    active={activeItem === 'spam'}
                    onClick={handleItemClick}
                    >
                    <Label size="big">{oneProject ? (Math.floor(oneProject.funding/oneProject.goal * 100))+"%" : "..."}</Label>
                    Funding
                    </Menu.Item>

                    <Menu.Item
                    name='updates'
                    active={activeItem === 'updates'}
                    onClick={handleItemClick}
                    >
                    <Label size="big">{oneProject ? oneProject.pledges : "..."}</Label>
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
                                            icon='user'
                                            iconPosition='left'
                                            label='Email Address'
                                            placeholder='optional'
                                        />

                                        <Grid columns={2}>
                                            <Grid.Column>
                                                <Form.Input
                                                    icon='payment'
                                                    iconPosition='left'
                                                    label='Credit Card'
                                                    placeholder='CC#'
                                                />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Form.Input
                                                    icon='payment'
                                                    iconPosition='left'
                                                    label='security code'
                                                    placeholder='###'
                                                />
                                            </Grid.Column>
                                        </Grid>

                                        <Header>Or..</Header>

                                        <Form.Input
                                            icon='question'
                                            iconPosition='left'
                                            label='Monero Escrow Address'
                                            value={"888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H"}
                                        />


                                        <Form.Input
                                            icon='payment'
                                            iconPosition='left'
                                            label='Monero Transaction ID'
                                            placeholder='include trailng 0s'
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
                <Container className={"dtk"}>
                    <Segment>
                        <Progress color="blue" percent={oneProject.funding/oneProject.goal * 100} size="small"/>
                    </Segment>
                </Container>
                </Menu>





            </Grid.Column>


        </Grid>
    


    </>
    )
}

{/* <Comment.Avatar src='/images/avatar/small/matt.jpg' /> */}
