import {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [food,setFood]=useState('');
  const [shoppingList,setShoppingList]= useState([]);
  const [bucketList,setbucketList]= useState([]);

  const handleInput=(e)=>{
    console.log(e.target.value);
    setFood(e.target.value);
  }

  const handleShoppingList=(e)=>{
    const idx=e.target.getAttribute('data-id');
    if(idx){
      const obj={
        id:Date.now(),
        data:shoppingList[idx],
        isDone:false
      }
      const copyBucketList=[...bucketList];
      copyBucketList.push(obj);
      setbucketList(copyBucketList);
    }
    setFood('')
  }


  const handleDelete=(id)=>{
    const copyBucketList=[...bucketList];
    const newList =copyBucketList.filter((item)=>item.id!=id);
    setbucketList(newList);
  }

  const handleRightClick=(id)=>{
    const copyBucketList=[...bucketList];
    const newBucketList=copyBucketList.map((item)=>{
      if(item.id==id){
        item.isDone=!item.isDone;
      }
      return item;
    });
    setbucketList(newBucketList);
  }

  console.log(bucketList);

  const fetchItem=async(food)=>{
    const url=  `https://api.frontendeval.com/fake/food/${food}`;
    const result =await fetch(url);
    console.log(result);
    const data= await result.json();
    setShoppingList(data);
  }
  console.log(shoppingList);

  useEffect( ()=>{
    if(food.length>=2){
     fetchItem(food);
    }
  },[food])

  return (
    <div className="App">
      <h1>My Shopping List</h1>
      <div>
        <input
        value={food}
        onChange={handleInput}
        />
      </div>

{
  food.length>=2 ? 
  <div 
  onClick={handleShoppingList}
  className='shopping-list'>
  {
    shoppingList.map((item,index)=>{
      return <div
      data-id={index}
      className='product'>
        {item}
        </div>
    })
  }
  </div>:null
}

      <div className='bucket'>
       {
        bucketList.map((item)=>{
          return <div className='shopping-item'>
            <button
            onClick={()=>handleRightClick(item.id)}
            >✓</button>
            <div
            className={item.isDone?'strik':''}
            >{item.data}</div>
            <button
            onClick={()=>handleDelete(item.id)}
            >X</button>
            </div>
        })
       }
      </div>
    </div>
  );
}

export default App;
