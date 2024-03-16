import React, {useState} from 'react';

const initialListItems = [
     "Do this first"
]


function ToDo_List() {
    
    const [todos, createTodos] = useState(initialListItems);
    // const addItem = obj => {
    //     setTodos(current => [...current, obj]);
    //   };
    // const input = document.getElementById("input")  

    //   function addItems() {
        //                 setTodos([
        //       ...todos,
        //       { id: ids++, name: name }
        //     ]);
        //   }
    return(
    <div>
        <div>
            <input
                type="text"
                aria-label="Field name"
                id="input"
                // onChange={}
                // value={value}
                // onChange={onChange}
            />
              {/* const handleAdd = (todo) => {
                const newTodos = todos.slice();
                newTodos.push(todo);
                setTodos(newTodos);
                } */}
            <button 
                onClick={() => 
                    createTodos((array) => array.concat(document.getElementById("input").value))}
                //     addItem({
                //       id: Math.random(),
                //       name: input
                //     })
                //   }
            >create</button>
            {todos.map((a, i) => (
          <p key={i}>{a}</p>
        ))}
           



            <input type="checkbox"/>
            <button>edit</button>
            <button>delete</button>
        </div>
    </div>
    )
}

export default ToDo_List