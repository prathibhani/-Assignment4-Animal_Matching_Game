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

}

}
