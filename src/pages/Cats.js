import { OmitProps } from 'antd/lib/transfer/ListBody';
import {useState} from 'react';
import {useEffect} from 'react';

import {Segment} from 'semantic-ui-react';
import {Header} from 'semantic-ui-react';
import {Rail} from 'semantic-ui-react';

import {Button} from 'semantic-ui-react';

import {Menu, Label} from 'semantic-ui-react';


import {Grid} from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';
import MenuVertical from '../components/MenuVertical';

export default Cats;

function Cats(props) {

    const [categoryDisplay, setCategoryDisplay] = useState("");

    const [activeItem, setActiveItem] = useState('inbox'); 

    const [projectDisplay, setProjectDisplay] = useState("");


    const URL = "http://localhost:8000/categories/"
    const URL2 = "http://localhost:8000/projects/"
    const URL3 = "http://localhost:8000/projects/filter/"



    useEffect(function(){
        getCategories();
        getProjects();
    }, [])

    function getCategories() {
        fetch(URL)
        .then(res => res.json())
        .then(json => {
            console.log('json.data:', json.data);
            const displayvar = json.data.map(category => {
                return <Grid.Column key={category.id} value={category.id} name={category.id}>
                    <div value={category.id} name={category.id} onClick={filterProjects}>
                        <Image src={category.image ? category.image : 'https://react.semantic-ui.com/images/wireframe/image.png'} fluid/>
                        <Rail inverted size='mini' attached internal position='left' value={category.id} name={category.id}>
                            {/* <Segment inverted size='big' value={category.id} name={category.id} onClick={filterProjects}>{category.name}</Segment> */}
                            <Button size={'huge'} color="orange" onClick={filterProjects} value={category.id}>{category.name}</Button>
                        </Rail>
                    </div>
                </Grid.Column>

            })
            setCategoryDisplay(displayvar);
        });
    }

    function handleItemClick(e, {name}){
        setActiveItem(name);
        props.history.push('/project/'+name);
    }

    function getProjects() {
        fetch(URL2)
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
        // event.stopPropagation();
        // console.log('event.target:', event.target);
        // console.log('event.currentTarget:', event.currentTarget);
        // const value = event.currentTarget.name;
        // console.log('value:', value);
        // console.log('data:', data);
        fetch(URL3+event.target.value)
        .then(res => res.json())
        .then(json => {
            console.log('json.data:', json.data);
            setProjectDisplay(mapProjects(json.data));
        })

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

        // console.log('event.target.value:', event.target.value);
        // console.log('event.target:', event.target);
        // console.log('data:', data);
    }




    return <>
        <Grid>
            <Grid.Column width={1}>1</Grid.Column>


            <Grid.Column width={12}>
                <h2>12</h2>

                <Grid columns={3}>
                    {categoryDisplay}
                </Grid>



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



{/* <Grid columns={3}>
<Grid.Column>
    <div>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid/>
        <Rail attached internal position='left'>
            <Segment size='huge' primary>Left Rail Content</Segment>
        </Rail>
    </div>
</Grid.Column>
<Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png'>
        <Rail internal position='left'>
            <Segment>Left Rail Content</Segment>
        </Rail>
    </Image>
</Grid.Column>
<Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
</Grid>


<Grid>
<Grid.Row columns={3}>
<Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
</Grid.Row>
</Grid>

<Grid relaxed='very' columns={4}>
<Grid.Column>
<Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
<Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
<Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
<Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
</Grid.Column>
</Grid> */}