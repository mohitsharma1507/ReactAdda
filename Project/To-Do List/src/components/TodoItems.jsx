import TodoItem from "./TodoItem";
const TodoItems = ({ todoitems, onDeleteClick }) => {
  return (
    <div className="item-container">
      {todoitems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
