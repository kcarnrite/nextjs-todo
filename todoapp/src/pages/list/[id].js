import { useRouter } from "next/router";
import ListContainer from "@/common/components/listOfItems";
import getListItems from "@/common/data/getListItems";
import ToDoItem from "@/common/components/toDoItem";
import { useState } from "react";

export default function List() {
    const router = useRouter();
    const {id} = router.query;
    const[todoItems, setTodoItems] = useState(getListItems(id));

    function updateChecked(id) {
        const newArr = todoItems.map(item => {
            if(item.id === id) {
                return {...item, isChecked: !item.isChecked};
            } 
            else {
                return item;
            }
        })
        setTodoItems(newArr);
    }
    

    return (
        <ListContainer>
            {todoItems.map(item => {
                return (
                    <ToDoItem 
                        item = {item}
                        handleCheckClick={id => updateChecked(id)}
                     />
                )
            })}
        </ListContainer>
    )
}