import {useState} from 'react';
import {useEffect} from 'react';
import HeaderBar from '../components/Header';



import {Grid} from 'semantic-ui-react';
import MenuVertical from '../components/MenuVertical';

import {Menu, Label} from 'semantic-ui-react';

import {Image} from 'semantic-ui-react';
import {Container} from 'semantic-ui-react';

import { Carousel } from 'antd';
import {Header} from 'semantic-ui-react';
import {Rail, Segment} from 'semantic-ui-react';


export default Leaders;

function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  const contentStyle = {
    height: '480px',
    color: '#fff',
    lineHeight: '480px',
    textAlign: 'center',
    background: '#364d79',
  };




function Leaders(props) {

    const URL = "http://localhost:8000/projects/truncate/5"

    const [projectDisplay, setProjectDisplay] = useState("");
    const [rotaryDisplay, setRotaryDisplay] = useState("");


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
            setProjectDisplay(mapProjects(json.data));
            setRotaryDisplay(rotateProjects(json.data));
            console.log('projectDisplay:', projectDisplay);
            console.log('rotaryDisplay:', rotaryDisplay)
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

    function rotateProjects(data){
        return data.map(project => {
            return <div className={"dtk-centered"}>
                <Image src={project.image ? project.image : 'https://react.semantic-ui.com/images/wireframe/image.png'} style={contentStyle}/>
                <Rail attached internal position='bottom-left'>
                            <Segment inverted size='medium'>
                                <Header>
                                    {project.name}
                                </Header>
                            </Segment>
                            {/* <Button size={'huge'} color="orange" onClick={filterProjects} value={category.id}>{category.name}</Button> */}
                </Rail>
            </div>
        })
    }


    return <>
            <HeaderBar/>

        <Grid>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={11}>


            <Segment inverted>
                <Header size="huge">Trending Revolutions</Header>

            </Segment>

                <Carousel afterChange={onChange}>
                    {rotaryDisplay}
                </Carousel>

            </Grid.Column>

            <Grid.Column width={3}>
                <Header>Links:</Header>

                <Menu inverted vertical>
                    {projectDisplay}
                </Menu>

            </Grid.Column>


        </Grid>



    </>
}
