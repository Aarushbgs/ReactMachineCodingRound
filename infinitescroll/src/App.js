import { useEffect, useState ,useRef, useCallback} from 'react';
import './App.css';


function App() {
  // https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9
  const [page ,setPage]=useState(2);
  const [images, setimages] = useState([]);
  const loadRef= useRef();
  const [loading,setLoading]=useState(false);

  const fetchImages = async (index) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9`
      const result = await fetch(url);
      const data = await result.json();
      return data;
    } catch (err) {
      console.log('Error', err);
    }
  }

  const fetchFirstPage = async () => {
    const data = await fetchImages(1);
    setimages(data);
  }

const getData=useCallback(async()=>{
  if(loading)return
  setLoading(true);
  const data =await fetchImages(page);
  setimages((prevImage)=>[...prevImage,...data]);

  setTimeout(()=>{
    setLoading(false);
  },3000)

  setPage((prevPage)=>prevPage+1); 
},[page,loading])

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
       const target=entries[0];
       if(target.isIntersecting){
           getData();
       }
    });

    if(loadRef.current){
      observer.observe(loadRef.current)
    }

    return ()=>{
      if(loadRef.current){
      observer.unobserve(loadRef.current);
      }
    }
  },[getData])

  useEffect(() => {
    fetchFirstPage();
  }, []);

  console.log('images, ', images);
  return (
    <div className="App">
      <h1>Infinite Scroll</h1>
      {
        images?.map((image, index) => (
          <img
            key={index}
            alt={image.title}
            src='data:image/jpeg;base64,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'
          />
        ))
      }

      <div ref={loadRef}>
        {
          loading&&<div>Loading... </div>
        }
      </div>
    </div>
  );
}

export default App;
