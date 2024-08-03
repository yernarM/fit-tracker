const input = document.querySelector('.record')
const button = document.querySelector('.add')
const tbody = document.querySelector('.records')
const actionCell = tbody.querySelector('.actions')

button.addEventListener('click', add)

function add() {
    const record = input.value.trim()
    const cell = tbody.insertRow().insertCell()

    cell.append(record)
    cell.after(actionCell.cloneNode(true))

    input.value = ''
}