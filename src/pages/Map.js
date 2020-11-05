import {useState} from 'react';
import {useEffect} from 'react';
import HeaderBar from '../components/Header';



import {Grid} from 'semantic-ui-react';
import MenuVertical from '../components/MenuVertical';

import {Menu, Label} from 'semantic-ui-react';

import {Segment, Header} from 'semantic-ui-react';

// import Example from '../components/visx/Example.tsx';
import Map2 from '../components/visx/Map2.tsx';

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
    const URL2 = "http://localhost:8000/projects/location/"


    const [projectDisplay, setProjectDisplay] = useState("");

    const [activeItem, setActiveItem] = useState('inbox'); 

    const [contList, setContList] = useState(['first']);

    const [continent, setContinent] = useState(['Continent'])

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

    function filterProjects(data) {
        fetch(URL2+data)
        .then(res => res.json())
        .then(json => {
            console.log('json.data:', json.data);
            setProjectDisplay(mapProjects(json.data));
            setContinent(findContinent(data));
        })
    }

    function findContinent(country) {

        let location = "";

        const nam_cont = ["USA", "MEX", "CAN", "CUB", "GTM", "HND", "NIC", "CRI", "PAN", "HTI", "DOM"]
        const sam_cont = ["BRA", "FRA", "SUR", "GUY", "VEN", "COL", "ECU", "PER", "BOL", "PRY", "ARG", "URY", "CHL"]
        const eur_cont = ["GRC", "ALB", "MKD", "BGR", "XKX", "MNE", "BIH", "SRB", "ROU", "HRV", "HUN", "SVN", "AUT", "CZE", "SVK", "UKR", "MDA", "TUR", "BLR", "POL", "EST", "LVA", "LTU", "CZE", "CHE", "ITA", "PRT", "ESP", "FRA", "BEL", "NLD", "LUX", "DEU", "DNK", "IRL", "GBR", "NOR", "SWE", "FIN"]
        const aus_cont = ["AUS"]
        const azn_cont = ["USA", "RUS", "CHN", "AUS", "NZL", "AUS", "PNG", "IDN", "IDN", "IDN", "IDN", "PHL", "MYS", "MYS", "JPN", "KOR", "PRK", "TWN", "CHN", "VNM", "KHM", "MYS", "THA", "THA", "LAO", "MMR", "IND", "CHN", "MNG", "RUS", "BTN", "BGD", "NPL", "IND", "IND", "PAK", "AFG", "TJK", "KGZ", "UZB", "TKM", "KAZ", "IRN", "AZE", "GEO", "ARM", "RUS", "SYR", "IRQ", "JOR", "SAU", "OMN", "YEM", "ARE", "ISR"]
        const afr_cont = ["COD", "GAB", "COG", "GNQ", "CMR", "CAF", "TCD", "NER", "NGA", "BEN", "BFA", "TGO", "GHA", "CIV", "LBR", "SLE", "GIN", "MLI", "GNB", "SEN", "SEN", "MRT", "ESH", "MAR", "ESH", "DZA", "TUN", "LBY", "EGY", "SDN", "SSD", "ETH", "ERI", "SOL", "SOM", "KEN", "UGA", "TZA", "BDI", "RWA", "MDG", "MOZ", "MWI", "MWI", "MWI", "ZMB", "MOZ", "ZWE", "ZAF", "SWZ", "LSO", "BWA", "NAM", "AGO", "AGO", "ZMB"]
    
        if (nam_cont.includes(country)){
            location = "North America"
        }
        else if (sam_cont.includes(country)){
            location = "South America"
        }
        else if (eur_cont.includes(country)){
            location = "Europe"
        }
        else if (aus_cont.includes(country)){
            location = "Australia"
        }
        else if (azn_cont.includes(country)){
            location = "Asia"
        }
        else if (afr_cont.includes(country)){
            location = "Africa"
        }
        else{
            location = "North America";
        }

        return location;

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


    function appendContList(str){
        setContList(contList.concat([str]));
        console.log('contList:', contList, [str]);
    }



    return <>

<HeaderBar/>


        {/* <button onClick={filterProjects} className={"ui button"}>filter</button><br/> */}


        <Grid>
            {/* <Grid.Column width={1}>1</Grid.Column> */}
            <Grid.Column width={13}>


            <Segment inverted>
                <Header size="huge">Where do you wish to fund revolutions?</Header>

            </Segment>

                <Map2 width={1150} height={550} events={true} filter={filterProjects} add={appendContList}/>
                {/* <Example width={1000} height={500} events={true} filter={filterProjects}/> */}

                {/* <GeoCustom/> */}
            </Grid.Column>
            <Grid.Column width={2}>

            <Header>{continent}:</Header>


                <Menu inverted vertical>
                    {projectDisplay}
                </Menu>
                
            </Grid.Column>

        </Grid>



    </>
}
