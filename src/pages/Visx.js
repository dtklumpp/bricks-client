import ParentSize from '@visx/responsive/lib/components/ParentSize';

import Example from '../components/visx/Example.tsx';
import '../components/visx/sandbox-styles.css';

import {Container} from 'semantic-ui-react';

export default Visx;

function Visx() {
    return (<>
        <Container>
            <Example width={1000} height={500} events={true}/>
        </Container>
        {/* <ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize> */}
    </>)
}
