let todos = [];

const filters= {
    searchText: '',
    hideCompleted: false
}

const todosJSON = localStorage.getItem('todos');

// READ AND PARSE DATA WHEN APP STARTS
if(todosJSON !== null){
    todos = JSON.parse(todosJSON);
    
}
// STRIGIFY AND WRITE THE DATE WHEN NEW DATA IS ADDED

const renderTodo = function(todos, filters){
    todos.forEach(function(item){
        let p = document.createElement('p');
        p.textContent = item.text;
    
        document.querySelector('#todos').appendChild(p);
    });

    let filteredTodo = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#todos').innerHTML = '';

    filteredTodo.forEach(function(todo){
        let p = document.createElement('p');
        p.textContent=todo.text;

        document.querySelector('#todos').appendChild(p);
    });
}

renderTodo(todos,filters);

document.querySelector('#filter-todo').addEventListener('input', function(searchTerm){
    filters.searchText = searchTerm.target.value;
    renderTodo(todos, filters);
});

document.querySelector('#addtodo-form').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({
        text: e.target.elements.addtodo.value,
        isCompleted: false
    });
    console.log(JSON.stringify(todos));
    localStorage.setItem('todos', JSON.stringify(todos));

    e.target.elements.addtodo.value = '';
    renderTodo(todos, filters);
});

document.querySelector('#hideCompleted').addEventListener('change', function(e){
    let checkbox_state = e.target.checked;
    filters.hideCompleted = checkbox_state;

    const incomplete = todos.filter(function(item){
        return !item.isCompleted;
    });

    if(filters.hideCompleted){
        renderTodo(incomplete, filters);
    }
    else {
        renderTodo(todos, filters);
    }
});
