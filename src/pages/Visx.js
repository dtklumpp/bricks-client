import ParentSize from '@visx/responsive/lib/components/ParentSize';

import Example from '../components/visx/Example.tsx';
import '../components/visx/sandbox-styles.css';

import {Container} from 'semantic-ui-react';

import LineChartSample from '../components/recharts/LineChart';

import { Resizable, ResizableBox } from 'react-resizable';

import './Resizable.css';


export default Visx;

function Visx() {
    return (<>
        <Container>
            <Example width={1000} height={500} events={true}/>
        </Container>
        {/* <ParentSize>{({ width, height }) => <Example width={width} height={height} />}</ParentSize> */}
        <br/>
        <hr/>
        <br/>
        <LineChartSample/>
        <br/>
        <hr/>
        <br/>
        <ResizableBox width={200} height={200} 
            minConstraints={[100, 100]} maxConstraints={[300, 300]}>
            <span>Contents</span>
        </ResizableBox>
        <br/>
        <hr/>
        <br/>
    </>)
}
