import {useState} from 'react';
import {useEffect} from 'react';

export default Test;

function Test() {

    const [var1, setVar1] = useState(5);

    function increaseVar1() {
        setVar1(var1 + 1);
    }

    useEffect(function(){
        setVar1(var1 + 6);
    }, [])

    return (
        <>
            <h3>Test Page here</h3>
            <h4>var1 is {var1}</h4>
            <button onClick={increaseVar1}>change</button>
        </>
    )
}
