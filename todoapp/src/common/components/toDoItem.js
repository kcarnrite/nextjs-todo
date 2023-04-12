
//TODO: Need to display ToDoItem and not just placeholder
export default function ToDoItem({title, isChecked }) {
    function handleCheck() {
        console.log(title + " checked? " + isChecked)
    }
    return (
        <div className="listItemContainer"> 
            <button onClick={handleCheck}>Complete</button>
            <p className="itemTitle"> {title}</p>
        </div>
    )
}