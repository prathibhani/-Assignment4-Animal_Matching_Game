import React,{useEffect,useState} from 'react';
import {animals} from '../data/AnimalsDb';
import '../assests/css/compo.css';

function AnimalTable(props){
    const [randomAnimal,setRandomAimal]=useState(null);
    const[result,setResult]=useState('');

useEffect(()=>{
    generateRandomAnimal();
},[]);

const generateRandomAnimal =()=>{
   const randomIndex=Math.floor(Math.random()*10)+1;
    setRandomAnimal(animals[randomIndex]);
    setResult('');
}
const handleAnimalClick=(selectedAnimal)=>{
  if(selectedAnimal === randomAnimal.name){
    setResult('WIN');
  }  else{
    setResult('LOSE');
  }
    setTimeout(()=>{
        generateRandomAnimal();
    },1000);
};
if (!randomAnimal){
    return <div className="loading">Loading...</div>

}
return(
    <div className='gameContainer'>
        <table className='game-table'>
            <thead>
                <tr>
                    <th colSpan="3"><h2>Animal Matching Game</h2></th>
                </tr>
                <tr>
                    <th><h3>Result</h3></th>
                    <th><h3>Animal Name</h3></th>
                    <th><h3>Select the Animal</h3></th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td  className='result-col' width="10%"></td>
                </tr>
            </tbody>
        </table>
    </div>
)
}
