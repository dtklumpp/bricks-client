import {Grid} from 'semantic-ui-react';
import MenuVertical from '../components/MenuVertical';


export default Leaders;

function Leaders() {
    return <>
        <Grid celled>
            <Grid.Column width={1}>1</Grid.Column>
            <Grid.Column width={5}>
                <h2>5</h2>
                <MenuVertical/>
            </Grid.Column>
            <Grid.Column width={9}>
                <h2>9</h2>
                <h2>carousel</h2>
            </Grid.Column>
            <Grid.Column width={1}>1</Grid.Column>

        </Grid>



    </>
}
