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
    isCompleted: true
}];

const filters= {
    searchText: ''
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

document.querySelector('#new-todo').addEventListener('input', function(searchTerm){
    filters.searchText = searchTerm.target.value;
    renderTodo(todos, filters);
});

