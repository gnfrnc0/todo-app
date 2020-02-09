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

// USING IF STATEMENT
// todos.forEach(function(item){
//     if(!item.isCompleted){
//         let p = document.createElement('p');
//         p.textContent = item.text;
    
//         document.querySelector('body').appendChild(p);
//     }
// });

// USING FILTER METHOD
const incompleteTodos = todos.filter(function(item){
    return !item.isCompleted;
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left!`;

document.querySelector('body').appendChild(summary);

incompleteTodos.forEach(function(item){
    let p = document.createElement('p');
    p.textContent = item.text;

    document.querySelector('body').appendChild(p);
});

document.querySelector('button').addEventListener('click', function(){
    console.log('Button is pressed');
});

// const todosLeftText = document.createElement('p');

// const incompleteTodos = todos.filter(function(todo){
//     return !todo.isCompleted;
// });
// todosLeftText.textContent = `You have ${incompleteTodos.length} todos left`;
// document.querySelector('body').append(todosLeftText);

// todos.forEach(function(todo){
//     let todoList = document.createElement('p');
//     todoList.textContent = todo.text;
//     document.querySelector('body').appendChild(todoList);
// });

// const paras = document.querySelectorAll('p');

// // const paras_update = paras.filter(function(item){
// //     return !item.textContent.includes('the');
// // });

// paras.forEach(function(item){
//     if(item.textContent.includes('the')){
//         item.remove();
//     }
// });

// console.log(paras);

