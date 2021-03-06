import {useState} from 'react';
import {useEffect} from 'react';

import HeaderBar from '../components/Header';


import {Segment} from 'semantic-ui-react';
import {Header} from 'semantic-ui-react';
import {Rail} from 'semantic-ui-react';

import {Menu, Label} from 'semantic-ui-react';


import {Grid} from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';

export default Cats;

function Cats(props) {

    const [categoryDisplay, setCategoryDisplay] = useState("");

    const [activeItem, setActiveItem] = useState('inbox'); 

    const [projectDisplay, setProjectDisplay] = useState("");

    const [filterCat, setFilterCat] = useState("Filter");
    const [filterId, setFilterId] = useState(1);





    const URL = "http://localhost:8000/categories/"
    const URL2 = "http://localhost:8000/projects/"
    const URL3 = "http://localhost:8000/projects/filter/"



    useEffect(function(){
        getCategories();
        if(localStorage.cat_id && localStorage.cat_name){
            let catId = localStorage.cat_id;
            let catName = localStorage.cat_name;
            setFilterId(catId)
            setFilterCat(catName)
            filterByCat(catId, catName);
        }
        else{            
            filterByCat(filterId, filterCat);
        }
    }, [])

    function clearPrefs(){
        localStorage.clear();
    }

    function getCategories() {
        fetch(URL)
        .then(res => res.json())
        .then(json => {
            console.log('json.data:', json.data);
            const array = json.data.reverse();
            array.sort((a, b) => (a.id > b.id) ? 1 : -1);
            const displayvar = array.map(category => {
                return <Grid.Column key={category.id}>
                    <div onClick={() => filterByCat(category.id, category.name)} className={"dtk dtk-tiles"}>
                        <Image src={category.image ? category.image : 'https://react.semantic-ui.com/images/wireframe/image.png'} fluid className={"dtk-cover"}/>
                        {/* <Label attached='bottom left'>CSS</Label> */}
                        <Rail attached internal position='bottom-left'>
                            <Segment inverted size='medium'>
                                <Header>
                                    {category.name}
                                </Header>
                            </Segment>
                            {/* <Button size={'huge'} color="orange" onClick={filterProjects} value={category.id}>{category.name}</Button> */}
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

    // function getProjects() {
    //     fetch(URL2)
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log('json.data:', json.data);
    //         setProjectDisplay(mapProjects(json.data));
    //     });
    // }

    // function filterProjects(event, data) {
    //     // event.stopPropagation();
    //     // console.log('event.target:', event.target);
    //     // console.log('event.currentTarget:', event.currentTarget);
    //     // const value = event.currentTarget.name;
    //     // console.log('value:', value);
    //     // console.log('data:', data);
    //     fetch(URL3+event.target.value)
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log('json.data:', json.data);
    //         setProjectDisplay(mapProjects(json.data));
    //     })
    // }

    function filterByCat(name, word) {
        // event.stopPropagation();
        // console.log('event.target:', event.target);
        // console.log('event.currentTarget:', event.currentTarget);
        // const value = event.currentTarget.name;
        // console.log('value:', value);
        // console.log('data:', data);
        fetch(URL3+name)
        .then(res => res.json())
        .then(json => {
            console.log('json.data:', json.data);
            setProjectDisplay(mapProjects(json.data));
            setFilterCat(word);
            localStorage.setItem("cat_id", name);
            localStorage.setItem("cat_name", word);
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

        // console.log('event.target.value:', event.target.value);
        // console.log('event.target:', event.target);
        // console.log('data:', data);
    




    return <>
            <HeaderBar/>


        <Grid>

            


            <Grid.Column width={1}></Grid.Column>


            <Grid.Column width={12}>

            <Segment inverted>
                <Header size="huge">What Type of Revolution Do You Wish To Fund?</Header>

            </Segment>




                <Grid columns={3}>
                    {categoryDisplay}
                </Grid>



            </Grid.Column>


            <Grid.Column width={2}>
                <Header>{filterCat}:</Header>

                <Menu inverted vertical>
                    {projectDisplay}
                </Menu>

                <button onClick={clearPrefs} className={"ui button orange"}>clear prefs</button><br/>


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