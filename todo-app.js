const todos = [{
    text: 'Cook bacon',
    isCompleted: false
},{
    text: 'Send mail',
    isCompleted: true
},{
    text: 'Watch Netflix',
    isCompleted: false
},{
    text: 'Go to Verizon',
    isCompleted: true
},{
    text: 'Pay ticket',
    isCompleted: false
}];

const filters= {
    searchText: '',
    hideCompleted: false
}

const renderTodo = function(todos, filters){
    todos.forEach(function(item){
        let p = document.createElement('p');
        p.textContent = item.text;
    
        document.querySelector('#todos').appendChild(p);
    });

    const filteredTodo = todos.filter(function(todo){
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
    e.target.elements.addtodo.value = '';
    renderTodo(todos, filters);
});

document.querySelector('#hideCompleted').addEventListener('change', function(e){
    let checkbox_state = e.target.checked;
    filters.hideCompleted = checkbox_state;

    const completed = todos.filter(function(item){
        return !item.isCompleted;
    });

    if(filters.hideCompleted){
        renderTodo(completed, filters);
    }
    else {
        renderTodo(todos, filters);
    }
});
