
import {BreadcrumbDivider, Grid} from 'semantic-ui-react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Step } from 'semantic-ui-react';

import { Button, Comment, Form, Header } from 'semantic-ui-react'


import MenuVertical from '../components/MenuVertical';

export default Project;

function Project(props) {
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


                <Comment.Group>
                    <Header as='h3' dividing>
                    Comments
                    </Header>

                    <Comment>
                    <Comment.Avatar src='/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>Anonymous</Comment.Author>
                        <Comment.Text>How artistic!</Comment.Text>
                        <Comment.Actions>
                        </Comment.Actions>
                    </Comment.Content>
                    </Comment>


                    <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
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
