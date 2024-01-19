import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [isEditing, setIsEditing] = useState(false);
  console.log("EditableTodo state -> isEditing: ", isEditing);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(e => !e);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update({ id: todo.id, ...formData });
    setIsEditing(false);

    //this indicates that we do not need to depend on the previous state
    // as the previous state should always be true in this moment.
  }

  return (
    <div className="EditableTodo">
      {isEditing
        ? <TodoForm initialFormData={todo} handleSave={handleSave}/>
        : (<div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo todo={todo}/>
        </div>
        )
      }
    </div>
  );
}

export default EditableTodo;
