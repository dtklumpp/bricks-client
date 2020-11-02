import {useState} from 'react';
import {useEffect} from 'react';

import { Button } from 'semantic-ui-react';


export default Crud;

function Crud() {

    const URL = "http://localhost:8000/home/"
    const URL2 = "http://localhost:8000/homer/"
    const URL3 = "http://localhost:8000/projects/"
    const URL4 = "http://localhost:8000/projects/create"

    const [var1, setVar1] = useState(5);
    const [fetch1, setFetch1] = useState(4);

    function increaseVar1() {
        setVar1(var1 + 1);
    }

    useEffect(function(){
        setVar1(var1 + 6);
    }, [])

    function fetchReply() {
        fetch(URL)
        .then(res => res.json())
        .then(json => console.log(json));
    }

    const msg = {message: "ahoy-hoy"};
    const cloneproj = {
        name: "cloneName",
        image: "cloneImage",
        description: "cloneDescription",
    };

    function sendIt() {
        fetch(URL2, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(msg),
        })
        .then(res => res.json())
        .then(json => console.log(json));
    }

    function getProjects() {
        fetch(URL3)
        .then(res => res.json())
        .then(json => console.log(json));
    }

    function makeIt() {
        fetch(URL4, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cloneproj),
        })
        .then(res => res.json())
        .then(json => console.log(json));
    }


    return (<>
        <h3>crud page</h3>        
        <h4>var1 is {var1}</h4>
        <button onClick={increaseVar1} className={"ui button"}>change</button><br/>
        <button onClick={fetchReply} className={"ui button"}>fetchit</button><br/>
        <button onClick={sendIt} className={"ui button"}>sendit</button><br/>
        <button onClick={getProjects} className={"ui button"}>projects</button><br/>
        <button onClick={makeIt} className={"ui button"}>create project</button><br/>

        <h4>fetch1 is {fetch1}</h4>

    </>)
}
