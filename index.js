document.querySelector('form').addEventListener('submit', addTodo)

function addTodo(event){
     //preventing the default form action from running
    event.preventDefault()

    // create a new list item
    const item = document.createElement('li')

    // set the text of the newly created list item to the value of the input with an id of "item"
    item.innerText = document.getElementById('item').value

    // add completeTodo function to each item to grey out item on click
    item.addEventListener('click', completeTodo)

    // create a new button element
    const button = document.createElement('button')

    // adding an 'X' to the inside of button
    button.innerText = 'X'

    // add an event listener to see if button has been clicked, if so run the removeTodo function
    button.addEventListener('click', removeTodo)

    // add the remove button to new newly created list item
    item.appendChild(button);

    // select the unordered list that will hold the newly created li
    const list = document.querySelector('ul')
    
    // attach the newly created li to the unordered list
    list.appendChild(item)

    // clear input out after submission
    document.getElementById('item').value = ''
}

function removeTodo(event){
    event.target.parentNode.remove();
}

function completeTodo(event){
    // value of the "aria-check" attribute list item that was clicked
    const value = event.target.getAttribute('aria-checked')

    // if the value is 'false' set it to 'true'
    if(value !== 'true'){
        event.target.setAttribute('aria-checked', 'true')
    } else {
        event.target.setAttribute('aria-checked', 'false');
    }
}


