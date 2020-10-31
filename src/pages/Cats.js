import {Grid} from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';
import MenuVertical from '../components/MenuVertical';

export default Cats;

function Cats() {
    return <>
        <Grid celled>
            <Grid.Column width={1}>1</Grid.Column>


            <Grid.Column width={11}>
                <h2>11</h2>

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
                </Grid>

            </Grid.Column>


            <Grid.Column width={4}>
                <h2>3</h2>
                <MenuVertical/>
            </Grid.Column>

            {/* <Grid.Column width={1}>1</Grid.Column> */}

        </Grid>



    </>
}
