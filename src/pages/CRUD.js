import {useState} from 'react';
import {useEffect} from 'react';

import { Button } from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';
import {Grid} from 'semantic-ui-react';
import {Header} from 'semantic-ui-react';
import {Form} from 'semantic-ui-react';


export default Crud;

function Crud() {

    const URL = "http://localhost:8000/home/"
    const URL2 = "http://localhost:8000/homer/"
    const URL3 = "http://localhost:8000/projects/"
    const URL4 = "http://localhost:8000/projects/create"
    const URL5 = "http://localhost:8000/projects/delete"


    const [var1, setVar1] = useState(5);
    const [fetch1, setFetch1] = useState(4);

    const [projectArray, setProjectArray] = useState([]);
    const [projectDisplay, setProjectDisplay] = useState("");

    const [newName, setNewName] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newDesc, setNewDesc] = useState("");

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
        .then(json => {
            console.log(json);
            setVar1(var1 + 1);
            setProjectArray(json);
            console.log(projectArray);
            const displayvar = json.data.map(project => {
                return <Segment>
                    <Grid>
                        <Grid.Column width={13}>
                            <Header as="h3" key={project.id}>{project.name}</Header>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <button onClick={removeIt} className={"ui button secondary"} value={project.id}>X</button>
                        </Grid.Column>
                    </Grid>
                </Segment>
            })
            setProjectDisplay(displayvar);
        });
    }

    useEffect(function(){
        console.log('projectArray:', projectArray);
    }, [projectArray])

    useEffect(function(){
        getProjects();
    }, [])

    function makeIt() {
        cloneproj.name = newName;
        cloneproj.image = newImage;
        cloneproj.description = newDesc;
        // cloneproj = {
        //     name: newName,
        //     image: newImage,
        //     description: newDesc,
        // }
        fetch(URL4, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cloneproj),
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setNewName("");
            setNewImage("");
            setNewDesc("");
            getProjects();
        })
    }

    function removeIt(event){
        fetch(URL5+"/"+event.target.value)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            getProjects();
        })
    }


    return (<>
        <h3>crud page</h3>        
        <h4>var1 is {var1}</h4>
        <button onClick={increaseVar1} className={"ui button"}>change</button><br/>
        <button onClick={fetchReply} className={"ui button"}>fetchit</button><br/>
        <button onClick={sendIt} className={"ui button"}>sendit</button><br/>
        <button onClick={getProjects} className={"ui button"}>projects</button><br/>
        <button onClick={makeIt} className={"ui button"}>create project</button><br/>


        <br/>

        <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Segment placeholder>
                    <Form>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='Project Name'
                        placeholder='name'
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <Form.Input
                        icon='save'
                        iconPosition='left'
                        label='Image Link'
                        placeholder='image'
                        value={newImage}
                        onChange={(e) => setNewImage(e.target.value)}
                    />
                    <Form.Input
                        icon='indent'
                        iconPosition='left'
                        label='Description'
                        placeholder='description'
                        value={newDesc}
                        onChange={(e) => setNewDesc(e.target.value)}
                    />

                    <Button content='Create Project' primary onClick={makeIt}/>
                    </Form>
                </Segment>
            </Grid.Column>
            <Grid.Column></Grid.Column>
        </Grid>

        <br/>
        <hr/>
        <br/>

        <h4>fetch1 is {fetch1}</h4>

        <br/>
        <hr/>
        <br/>

            <Grid centered columns={3}>
                <Grid.Column>
                    <Header as="h2">Projects:</Header>
                    {projectDisplay}
                </Grid.Column>
                <Grid.Column/>
                <Grid.Column/>
            </Grid>

    </>)
}
