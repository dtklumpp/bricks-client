import {useState} from 'react';
import {useEffect} from 'react';


import {Grid} from 'semantic-ui-react';
import MenuVertical from '../components/MenuVertical';

import {Menu, Label} from 'semantic-ui-react';

import Example from '../components/visx/Example.tsx';
import '../components/visx/sandbox-styles.css';


// import GeoCustom from '../components/testing/Map1';

export default Map;

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


function Map(props) {

    const URL = "http://localhost:8000/projects/"
    const URL2 = "http://localhost:8000/projects/location/USA"


    const [projectDisplay, setProjectDisplay] = useState("");

    const [activeItem, setActiveItem] = useState('inbox'); 

    function handleItemClick(e, {name}){
        setActiveItem(name);
        props.history.push('/project/'+name);
    }


    useEffect(function(){
        getProjects();
    }, [])


    function getProjects() {
        fetch(URL)
        .then(res => res.json())
        .then(json => {
            console.log('json.data:', json.data);
            const displayvar = json.data.map(project => {
                return <Menu.Item key={project.id}
                    name={project.id}
                    active={activeItem === project.id}
                    onClick={handleItemClick}
                    value={project.id}
                    >
                    <Label color='blue' value={project.id}>Go</Label>
                    {project.name}
                    {/* <Button primary onClick={handleItemClick} value={project.id}>Goto</Button> */}
                </Menu.Item>
            })
            setProjectDisplay(displayvar);
        });
    }

    function filterProjects(event, data) {
        fetch(URL2)
        .then(res => res.json())
        .then(json => {
            console.log('json.data:', json.data);
            setProjectDisplay(mapProjects(json.data));
        })
    }


    function mapProjects(data){
        return data.map(project => {
            return <Menu.Item key={project.id}
                name={project.id}
                active={activeItem === project.id}
                onClick={handleItemClick}
                value={project.id}
                >
                <Label color='blue' value={project.id}>Go</Label>
                {project.name}
                {/* <Button primary onClick={handleItemClick} value={project.id}>Goto</Button> */}
            </Menu.Item>
        })
    }





    return <>

        <button onClick={filterProjects} className={"ui button"}>filter</button><br/>


        <Grid>
            <Grid.Column width={1}>1</Grid.Column>
            <Grid.Column width={12}>
                <h2>12</h2>
                <h2>map</h2>
                <Example width={1000} height={500} events={true} filter={filterProjects}/>

                {/* <GeoCustom/> */}
            </Grid.Column>
            <Grid.Column width={2}>
                <h2>2</h2>

                <Menu vertical>
                    {projectDisplay}
                </Menu>
                
            </Grid.Column>

        </Grid>



    </>
}
