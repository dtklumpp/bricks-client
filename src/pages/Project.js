import {useState} from 'react';
import {useEffect} from 'react';

import {Segment} from 'semantic-ui-react';

import {Grid, Row} from 'semantic-ui-react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Step } from 'semantic-ui-react';

import { Button, Comment, Form, Header } from 'semantic-ui-react'


import MenuVertical from '../components/MenuVertical';

export default Project;

function Project(props) {

    const URL3 = "http://localhost:8000/comments/"+props.match.params.id;
    const URL4 = "http://localhost:8000/comments/create/"+props.match.params.id;
    const URL5 = "http://localhost:8000/comments/delete/";

    const [commentArray, setCommentArray] = useState([]);
    const [commentDisplay, setCommentDisplay] = useState("");

    const [newName, setNewName] = useState("");
    const [newDesc, setNewDesc] = useState("");

    const newObj = {
        name: "",
        description: "",
    };
    
    useEffect(function(){
        getComments();
    }, [])

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



    return (<>
        
        <Grid celled>
            <Grid.Column width={1}>1</Grid.Column>
            <Grid.Column width={9}>
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

                <Step.Group>
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

                    <Step disabled>
                    <Icon name='info' />
                    <Step.Content>
                        <Step.Title>Confirm Order</Step.Title>
                    </Step.Content>
                    </Step>
                </Step.Group>

                <button onClick={getComments} className={"ui button"}>comments</button><br/>

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


            <Grid.Column width={5}>
                <h2>5</h2>
                <MenuVertical/>
            </Grid.Column>

            <Grid.Column width={1}>1</Grid.Column>

        </Grid>
    
        <h3>ahoy</h3>
        <h3>{props.match.params.id}</h3>


    </>
    )
}

{/* <Comment.Avatar src='/images/avatar/small/matt.jpg' /> */}
