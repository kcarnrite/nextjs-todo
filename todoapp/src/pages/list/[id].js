import { useRouter } from "next/router";
import ListContainer from "@/common/components/listOfItems";
import getListItems from "@/common/data/getListItems";
import ToDoItem from "@/common/components/toDoItem";

export default function List() {
    const router = useRouter();
    const {id} = router.query;
    const todoItems = getListItems(id);
    

    return (
        <ListContainer>
            {todoItems.map(item => {
                return (
                    <ToDoItem title={item.title}/>
                )
            })}
        </ListContainer>
    )
}