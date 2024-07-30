var addBtn = document.getElementById('add');

const add = (event) => {
    event.preventDefault(); 
    const type = document.getElementById('options').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    console.log(type, name, amount);
    const wrapper = document.getElementById('row-wrapper');
    const element = document.createElement('tr');
    
    element.innerHTML = `<td>${type}</td><td>${name}</td><td>${amount}</td><td><button id='delBtn' class='btn btn-danger'>Delete</button></td>`;
    wrapper.appendChild(element);

    var delBtn = document.getElementById('delBtn');
    delBtn.addEventListener(('click'), () => {
        console.log('works')
        wrapper.removeChild(element)
    })
}

addBtn.addEventListener('click', add);