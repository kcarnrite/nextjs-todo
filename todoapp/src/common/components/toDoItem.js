
//TODO: Need to display ToDoItem and not just placeholder
export default function ToDoItem({title }) {
    return (
        <div className="listItemContainer"> 
            <p className="itemTitle"> {title}</p>
        </div>
    )
}