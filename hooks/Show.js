import React ,{useState}from 'react'



function Show() {

  const [input,setinput]=useState({
    id:'',
    text:''
  })
  const[lists,setlists]=useState([])
  const [edit,setedit]=useState({
    id:'',
    isEditing:false
  })

  const changeInput=(e)=>{
           e.preventDefault()
           setinput({
            text:e.target.value
           })
  }




  const addtodo=(e)=>{
        e.preventDefault();
        const newTodo= {
          text:input.text,
          id:new Date()
        }
        console.log(newTodo)
        setlists([...lists,newTodo])
        setinput({
          ...input,
          text:''
        })
       
       
  }
   
  const handleDelete= (id)=>{
      const newLists=    lists.filter((list)=>{
            return list.id !== id
          })
          setlists(newLists)
  }


  const handleEdit=(id)=>{
    
 
    setedit({
      ...edit,
      id:id,
      isEditing:true
    })

    let filtered=lists.find((list)=>{
       return list.id===id
    })
    setinput({
      ...input,
      id:filtered.id,
      text:filtered.text
    })


  }

 
  const doneedit=(e)=>{
             e.preventDefault()

         let newTodos=lists.map((list)=>{
          if(list.id===edit.id){
            return{
              
                   
              
                text:input.text,
                id:edit.id
              
            }
          }
          else{
                  return list
          }
         })
         setlists(newTodos)
         setedit({
          ...edit,
          isEditing:false
         })
         setinput({
          ...input,
          text:''
         })
         
  }
  
  
    return(
      <>
      <div>
      <form>
       <input type='text' name='gopi' value={input.text} placeholder='enter text' onChange={changeInput}/>
      
      
      {
             edit.isEditing ?(<button onClick={doneedit}>edit</button>) :(<button onClick={addtodo}>add</button>)
      } 
       
       </form>
       {lists.length===0 && <h3> there is  no items in lists</h3>}
    <ul>
       {lists.map((list)=>{
           const {text,id}=list
           return ( 
           <li key={id}>
            <span>{text}</span>
            <button onClick={()=>handleEdit(id)}>edit </button>
            <button onClick={()=>handleDelete(id)}>delete</button>
           </li>
      )
       })}
       </ul>
       </div>
       </>
  )

}

export default Show;