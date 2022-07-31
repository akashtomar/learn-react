//import React from 'react';

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>{
        return <li key={number.toString()}>{number}</li>
    });
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}

function SampleList(){
    const list = [1, 2, 3, 4, 5];
    return (
        <NumberList numbers={list}/>
    );
}

export default SampleList;