import {Grid} from 'semantic-ui-react';
import MenuVertical from '../components/MenuVertical';

// import GeoCustom from '../components/testing/Map1';

export default Map;

function Map() {
    return <>
        <Grid celled>
            <Grid.Column width={1}>1</Grid.Column>
            <Grid.Column width={5}>
                <h2>5</h2>
                <MenuVertical/>
            </Grid.Column>
            <Grid.Column width={9}>
                <h2>9</h2>
                <h2>map</h2>
                {/* <GeoCustom/> */}
            </Grid.Column>
            <Grid.Column width={1}>1</Grid.Column>

        </Grid>



    </>
}
