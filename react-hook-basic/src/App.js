import { useState, useEffect } from 'react';
import './App.scss';
import queryString from 'query-string'
import FetchData from './Components/fetchData/FetchData';
import Pagination from './Components/pagination/Pagination';
import ToDoForm from './Components/toDoForm/ToDoForm';
//import ColorSquare from './Components/ColorSquare/colorSquare';
import ToDoList from './Components/toDoList/ToDoList';

function App() {
  const toDoList = [
    {
      id: 1,
      title: "Go Shopping"
    },
    {
      id: 2,
      title: "Go to supermarket"
    },
    {
      id: 3,
      title: "Cooking"
    },
    {
      id: 4,
      title: "Watching movies"
    },
  ]
  const [todolist, setTodolist] = useState(toDoList)
  
  function handleToDoList(item){
    //console.log("inonclick",item) // a given element of an array
    const newListToDo = [...todolist].filter(action => action.id !== item.id)
    setTodolist(newListToDo)
  }

  function handleToDoForm(newItem){
    //console.log("App",newItem)
    // setting the new one as each element existed in an array
    const newToDo = {
      // simple way to create new id, but it is not a good idea. It will be met error when we delete default value
      id: todolist.length + 1,
      ...newItem
    }
    //clone from todolist array
    const newList = [...todolist]
    newList.push(newToDo)
    setTodolist(newList)
  }

  const [postList, setPostList] = useState([])
  // fetching data once as first
  // useEffect(() => {
  //   async function fetchData(){
  //     //const url = "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"
  //     try{
  //       const resUrl = await fetch("http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1")
  //       const resJson = await resUrl.json()
  //       //console.log(data["data"])
  //       //const data = resJson["data"]
  //       const {data} = resJson
  //       setPostList(data)
  //     }
  //     catch(error){
  //       console.log(error)
  //     }
  //   }  
  //   // Remember to call fetchData()
  //   fetchData()
  // },[])

  
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  })
 
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  })
 
  useEffect(() => {
    async function fetchData(){
      try{
        const paramString = queryString.stringify(filters)
        console.log("param", paramString, filters)
        const resUrl = await fetch(`http://js-post-api.herokuapp.com/api/posts?${paramString}`)
        const resJson = await resUrl.json()
        //console.log(data["data"])
        //const data = resJson["data"]
        const {data, pagination} = resJson
        //console.log("Update data", pagination, data)
        setPostList(data)
        setPagination(pagination)
      }
      catch(error){
        console.log(error)
      }
    }  
    fetchData()
  },[filters])

  function handleSelectedPage(newPage){
    //console.log("app", newPage)
    setFilters({
      ...filters,
      _page: newPage,
    })
  }
  //console.log(pagination, filters)
  return ( 
    <div>
      <Pagination onSelectChange={handleSelectedPage} data={postList} pagination={pagination}/>
      {/*<FetchData data={postList}/>
        <ToDoForm onSubmit={handleToDoForm}/>
        <ToDoList todolist={todolist} onToDoClick={handleToDoList}/>
    */}
    </div>
  );
}

export default App;