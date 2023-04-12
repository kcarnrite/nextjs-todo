
//TODO: Need to display ToDoItem and not just placeholder
export default function ToDoItem({title, isChecked }) {
    function handleCheck() {
        console.log(title + " checked? " + isChecked)
    }
    return (
        <div className="listItemContainer"> 
            <button onClick={handleCheck}>Complete</button>
            {isChecked ? 
                <s><p className="itemTitle"> {title}</p></s> :
                <p className="itemTitle"> {title}</p>
            }

        </div>
    )
}