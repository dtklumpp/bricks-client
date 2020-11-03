import {useState} from 'react';
import {useEffect} from 'react';

import {NavLink} from 'react-router-dom';

import { Button } from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';
import {Grid} from 'semantic-ui-react';
import {Header} from 'semantic-ui-react';
import {Form} from 'semantic-ui-react';
import {Divider} from 'semantic-ui-react';
import {Container} from 'semantic-ui-react';


export default Crud;

function Crud() {

    const URL = "http://localhost:8000/home/"
    const URL2 = "http://localhost:8000/homer/"
    const URL3 = "http://localhost:8000/projects/"
    const URL4 = "http://localhost:8000/projects/create"
    const URL5 = "http://localhost:8000/projects/delete"
    const URL6 = "http://localhost:8000/projects/edit"


    const [var1, setVar1] = useState(5);
    const [fetch1, setFetch1] = useState(4);

    const [projectArray, setProjectArray] = useState([]);
    const [projectDisplay, setProjectDisplay] = useState("");

    const [newName, setNewName] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newDesc, setNewDesc] = useState("");

    const [editName, setEditName] = useState("");
    const [editImage, setEditImage] = useState("");
    const [editDesc, setEditDesc] = useState("");
    const [editId, setEditId] = useState("");


    const [canEdit, setCanEdit] = useState(false);

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
            // console.log(json);
            setVar1(var1 + 1);
            setProjectArray(json);
            console.log(projectArray);
            const displayvar = json.data.map(project => {
                return <Segment>
                    <Grid>
                        <Grid.Column width={9}>
                            <Header as="h3" key={project.id}>{project.name}</Header>
                        </Grid.Column>

                        <Grid.Column width={2}>
                            <NavLink to={'/project/'+project.id} className={"ui button primary"}>Go</NavLink>
                        </Grid.Column>


                        <Grid.Column width={2}>
                            <button onClick={prepEdit} className={"ui button orange"} value={project.id}>edit</button>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <button onClick={removeIt} className={"ui button secondary"} value={project.id}>X</button>
                        </Grid.Column>
                    </Grid>
                </Segment>
            })
            setProjectDisplay(displayvar);
        });
    }

    // useEffect(function(){
    //     console.log('projectArray:', projectArray);
    // }, [projectArray])

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

    function editIt(event){
        cloneproj.name = editName;
        cloneproj.image = editImage;
        cloneproj.description = editDesc;

        fetch(URL6+"/"+editId, {
            method: 'PUT',
            headers: {
                "Content-Type": "application.json",
            },
            body: JSON.stringify(cloneproj),
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setEditName("");
            setEditImage("");
            setEditDesc("");
            setEditId("");
        })
        setCanEdit(false);
    }

    function prepEdit(event){
        const projId = event.target.value;
        setEditId(projId);
        console.log('projectArray:', projectArray);
        // const project = {...projectArray};
        // console.log('project:', project);
        fetch(URL3)
        .then(res => res.json())
        .then(json => {
            console.log('json:', json);
            let project = JSON.parse(JSON.stringify(json.data));
            console.log('project:', project)
            console.log('projId:', projId)
            project = project.filter(obj => {
                return obj.id == projId 
                // loose because it's integer vs string i think
            })
            project = project[0];
            console.log('project:', project);
            setEditName(project.name);
            setEditImage(project.image);
            setEditDesc(project.description);
            setCanEdit(true);
            getProjects();
        });
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

    <Container>
        <h3>crud page</h3>        
        <h4>var1 is {var1}</h4>
        <button onClick={increaseVar1} className={"ui button"}>change</button><br/>
        <button onClick={fetchReply} className={"ui button"}>fetchit</button><br/>
        <button onClick={sendIt} className={"ui button"}>sendit</button><br/>
        <button onClick={getProjects} className={"ui button"}>projects</button><br/>
        <button onClick={makeIt} className={"ui button"}>create project</button><br/>


        <br/>

        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
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
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Form>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            label='Project Name'
                            placeholder='name'
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                        />
                        <Form.Input
                            icon='save'
                            iconPosition='left'
                            label='Image Link'
                            placeholder='image'
                            value={editImage}
                            onChange={(e) => setEditImage(e.target.value)}
                        />
                        <Form.Input
                            icon='indent'
                            iconPosition='left'
                            label='Description'
                            placeholder='description'
                            value={editDesc}
                            onChange={(e) => setEditDesc(e.target.value)}
                        />

                        {canEdit ? <Button content='Edit Project' className={"orange"} onClick={editIt}/> : ""}
                        {!canEdit ? <Button content='Edit Project' className={"orange"} onClick={editIt} disabled/> : ""}
                        </Form>
                    </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
        </Segment>

        <br/>
        <hr/>
        <br/>

        <h4>fetch1 is {fetch1}</h4>

        <br/>
        <hr/>
        <br/>

            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2">My Projects:</Header>
                    {projectDisplay}
                </Grid.Column>
                <Grid.Column/>
            </Grid>


        <br/>
        <hr/>
        <br/>

    </Container>
        {/* <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Segment placeholder>
                    <Form>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='Project Name'
                        placeholder='name'
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                    <Form.Input
                        icon='save'
                        iconPosition='left'
                        label='Image Link'
                        placeholder='image'
                        value={editImage}
                        onChange={(e) => setEditImage(e.target.value)}
                    />
                    <Form.Input
                        icon='indent'
                        iconPosition='left'
                        label='Description'
                        placeholder='description'
                        value={editDesc}
                        onChange={(e) => setEditDesc(e.target.value)}
                    />

                    {canEdit ? <Button content='Edit Project' className={"orange"} onClick={editIt}/> : ""}
                    {!canEdit ? <Button content='Edit Project' className={"orange"} onClick={editIt} disabled/> : ""}
                    </Form>
                </Segment>
            </Grid.Column>
            <Grid.Column></Grid.Column>
        </Grid>


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
        </Grid> */}






    </>)
}
