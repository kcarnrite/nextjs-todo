
//TODO: Need to display ToDoItem and not just placeholder
export default function ToDoItem({ item, handleCheckClick }) {
    function handleCheck() {
        console.log(title + " checked? " + isChecked)
    }
    return (
        <div className="listItemContainer"> 
            <button onClick={() => handleCheckClick(item.id)}>Complete</button>
            {item.isChecked ? 
                <s><p className="itemTitle"> {item.title}</p></s> :
                <p className="itemTitle"> {item.title}</p>
            }
        </div>
    )
}