import {useState,useEffect} from 'react';
import axios from 'axios';

function App(){
  const [data,setData] = useState([]);
  const [editId,setEditId] = useState(0);
  const [editdata,setEditdata] = useState({id:'',name:'',email:''});
  const [formdata,setFormdata] = useState({id:'',name:'',email:''});
  const [load,setLoad] = useState(true);
  const [error,setError] = useState('');
  const apiURL = "http://jsonplaceholder.typicode.com/users";
  async function fetchDetails(){
    try{
      const res = await axios.get(apiURL);
      if(res){
        setData(res.data);
        setLoad(false);
      } 
    }catch(e){
      console.log("Error: ",e);
      setLoad(false);
      setError(e.message);
    }
  }
  useEffect(()=>{fetchDetails()},[]);
  const submitHandler = async (e)=>{
    e.preventDefault();
    try{
      const res = await axios.post(apiURL,formdata);
      const len = data.length;
      res.data["id"]=len+1;
      setData([...data,res.data]);
      setFormdata({id:'',name:'',email:''});
    }catch(e){
      setError(e.message);
    }
  } 
  async function Update(id){
    try{
      const res = await axios.put(`${apiURL}/${id}`,editdata);
      setData(data.map(d => d.id===id ? res.data : d));
      setEditdata({id:'',name:'',email:''});
      setEditId(0);
    }catch(e){
      setError(e.message);
    }
  }
  const Delete = async (id)=>{
    await axios.delete(`${apiURL}/${id}`)
    .then(res=>setData(data.filter(d => id !== d.id)))
    .catch(e=> setError(e.message));
    
  }
  return(
    <>
    <h1>Hello React!</h1>
    <form onSubmit={submitHandler}>
      <input type="text" name="name" value={formdata.name} placeholder="Enter name" onChange={e=>setFormdata({...formdata,["name"]:e.target.value})}/>
      <input type="email" name="email" value={formdata.email} placeholder="Enter email" onChange={e=>setFormdata({...formdata,[e.target.name]:e.target.value})}/>
      <button>Submit</button>
    </form>
    {load? (<p>Site is loading</p>) :
    (error? (<p>There is an error: {error}</p>)
    : (<ul>
      {data.map((d)=>( editId===d.id ? (
        <div>
          <input type="text" name="name" value={editdata.name} placeholder="Enter name" onChange={e=>setEditdata({...editdata,["name"]:e.target.value})}/>
          <input type="email" name="email" value={editdata.email} placeholder="Enter email" onChange={e=>setEditdata({...editdata,[e.target.name]:e.target.value})}/>
          <button onClick={()=>setEditId(0)}>Cancel</button>
          <button onClick={()=>Update(editId)}>Save</button>
        </div>
      ): 
      (<li key={d.id}>{d.name} --- {d.email}
          <button onClick={()=>setEditId(d.id)}>Edit</button>
          <button onClick={()=>Delete(d.id)}>Delete</button>
          </li>
         )
        ))}
      </ul>))}
    </>
  )
}

export default App;