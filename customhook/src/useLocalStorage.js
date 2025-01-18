import {useState} from 'react';

const useLocalStorage =(key, defaultValue)=>{
   const [localStoragevalue ,setLocalStoragrValue]=useState(()=>{
     try {
        const val= localStorage.getItem(key);
        if(val){
            return JSON.parse(val);
        }else{
            localStorage.setItem(key,JSON.stringify(defaultValue));
            return defaultValue;
        }
     } catch (err) {
        localStorage.setItem(key,JSON.stringify(defaultValue));
        return defaultValue;
     }
   })

   const setLocalStorage= (valueORFunc)=>{
      let newValue;
      if(typeof valueORFunc ==='function'){
        newValue =valueORFunc(localStoragevalue);
      }else{
        newValue=valueORFunc;
      }
      localStorage.setItem(key,JSON.stringify(newValue));
      setLocalStoragrValue(newValue)
   }

    return[
    localStoragevalue,
    setLocalStorage
    ]
}

export default useLocalStorage;