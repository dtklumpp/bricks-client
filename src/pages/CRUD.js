import {useState} from 'react';
import {useEffect} from 'react';
import HeaderBar from '../components/Header';


import {NavLink} from 'react-router-dom';

import { Button } from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';
import {Grid} from 'semantic-ui-react';
import {Header} from 'semantic-ui-react';
import {Form} from 'semantic-ui-react';
import {Divider} from 'semantic-ui-react';
import {Container} from 'semantic-ui-react';

import { DatePicker } from 'antd';


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
    const [newCont, setNewCont] = useState("");
    const [newGoal, setNewGoal] = useState("");



    const [editName, setEditName] = useState("");
    const [editImage, setEditImage] = useState("");
    const [editDesc, setEditDesc] = useState("");
    const [editCont, setEditCont] = useState("");
    const [editGoal, setEditGoal] = useState("");
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
        continent: "cloneCont",
        goal: "cloneGoal",
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
        cloneproj.continent = newCont;
        cloneproj.goal = newGoal;

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
            setNewCont("");
            setNewGoal("");
            getProjects();
        })
    }

    function editIt(event){
        const editProj = {};
        editProj.name = editName;
        editProj.image = editImage;
        editProj.description = editDesc;
        editProj.continent = editCont;
        editProj.goal = editGoal;

        fetch(URL6+"/"+editId, {
            method: 'PUT',
            headers: {
                "Content-Type": "application.json",
            },
            body: JSON.stringify(editProj),
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setEditName("");
            setEditImage("");
            setEditDesc("");
            setEditCont("");
            setEditGoal("");
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
            setEditCont(project.continent);
            setEditGoal(project.goal);
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

<HeaderBar/>


    <Container>
        {/* <h3>crud page</h3>        
        <h4>var1 is {var1}</h4>
        <button onClick={increaseVar1} className={"ui button"}>change</button><br/>
        <button onClick={fetchReply} className={"ui button"}>fetchit</button><br/>
        <button onClick={sendIt} className={"ui button"}>sendit</button><br/>
        <button onClick={makeIt} className={"ui button"}>create project</button><br/> */}

            <Segment inverted>
                <Header size="huge">CRUD a Revolution</Header>

            </Segment>


        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>

                    <Form>
                        <Grid columns={2}>
                            <Grid.Column>
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
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Input
                                    icon='globe'
                                    iconPosition='left'
                                    label='Continent'
                                    placeholder='continent'
                                    value={newCont}
                                    onChange={(e) => setNewCont(e.target.value)}
                                />
                                <Form.Input
                                    icon='bell'
                                    iconPosition='left'
                                    label='Funding Goal $$'
                                    placeholder='goal'
                                    value={newGoal}
                                    onChange={(e) => setNewGoal(e.target.value)}
                                />
                                <Form.Input
                                    label='Deadline'
                                >
                                    <DatePicker />
                                </Form.Input>
                            </Grid.Column>
                        </Grid>

                        <br/>

                        <Button content='Create Campaign' primary onClick={makeIt}/>
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

                        {canEdit ? <Button content='Edit Campaign' className={"orange"} onClick={editIt}/> : ""}
                        {!canEdit ? <Button content='Edit Campaign' className={"orange"} onClick={editIt} disabled/> : ""}
                        </Form>
                    </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
        </Segment>


            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2">My Campaigns:</Header>
                    {projectDisplay}
                </Grid.Column>
                <Grid.Column/>
            </Grid>


            <br/>
        <hr/>
        <br/>

            <button onClick={getProjects} className={"ui button"}>refresh list</button><br/>



        <br/>
        <hr/>
        <br/>

        <Header size="small">sitemap</Header>

        <Grid>
            <Grid.Column width={1}>
                <ul>
                    <li>
                        <NavLink to='/splash'>Splash</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/default'>Default</NavLink>
                    </li>
                    <li>
                        <NavLink to='/test'>Test</NavLink>
                    </li>
                </ul>
            </Grid.Column>
            <Grid.Column width={1}>
                <ul>
                    <li>
                        <NavLink to='/cats'>Cats</NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaders'>Leaders</NavLink>
                    </li>
                    <li>
                        <NavLink to='/map'>Map</NavLink>
                    </li>
                    <li>
                        <NavLink to='/project/1'>Project</NavLink>
                    </li>
                </ul>
            </Grid.Column>
            <Grid.Column width={1}>
                <ul>
                    <li>
                        <NavLink to='/visx'>Visx</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/treact'>Treact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/crud'>Crud</NavLink>
                    </li>
                </ul>
            </Grid.Column>

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
