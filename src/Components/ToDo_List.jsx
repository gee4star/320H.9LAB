import React, {useState} from 'react';

export const initialListItems = [
     "Do this first"
]

    

function ToDo_List() {
    const [todos, createTodos] = useState(initialListItems);

    // Adapted from a PlainEnglish blog: https://plainenglish.io/blog/how-to-push-or-append-an-element-to-a-state-array-with-react-hooks-32e75c090040
   
    return(
    <div>
        <div>
            <input
                type="text"
                aria-label="Field name"
                id="input"
            />
              
            <button 
                onClick={() => 
                    createTodos((array) => array.concat(document.getElementById("input").value))}
            >create</button>
            {todos.map((item, i) => (
          <p key={i}>  <input type="checkbox" style={{textDecoration: "line-through"}}/>{item }<button>edit</button>
          <button onClick={() => 
          createTodos((todos) => todos.filter((_, index) => index !== i))
          }
          >delete</button></p>
        ))}
            
        </div>
    </div>
    )
}

export default ToDo_List