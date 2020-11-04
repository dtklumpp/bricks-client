import {useState} from 'react';
import {useEffect} from 'react';


import {Grid} from 'semantic-ui-react';
import MenuVertical from '../components/MenuVertical';

import {Menu, Label} from 'semantic-ui-react';

import { Carousel } from 'antd';


export default Leaders;

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




function Leaders(props) {

    const URL = "http://localhost:8000/projects/truncate/5"

    const [projectDisplay, setProjectDisplay] = useState("");

    const [activeItem, setActiveItem] = useState('inbox'); 

    function handleItemClick(e, {name}){
        setActiveItem(name);
        props.history.push('/project/'+name);
    }


    useEffect(function(){
        getTruncatedProjects();
    }, [])


    function getTruncatedProjects() {
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
        <Grid>
            <Grid.Column width={1}>1</Grid.Column>
            <Grid.Column width={12}>
                <h2>9</h2>
                <h2>carousel</h2>
                <Carousel afterChange={onChange}>
                    <div>
                    <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>

            </Grid.Column>

            <Grid.Column width={2}>
                <h2>5</h2>

                <Menu vertical>
                    {projectDisplay}
                </Menu>

            </Grid.Column>


        </Grid>



    </>
}
