
import React, { useState } from "react";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialItems = [
  { id: "1", name: "Item One" },
  { id: "2", name: "Item Two" },
  { id: "3", name: "Item Three" },
];

function SelectedItemList() {
  const [items, setItems] = useState(initialItems);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(items);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setItems(reordered);
  };

  return (
    <div
  draggable="true"
  class="w-40 h-20 bg-blue-500 text-white flex items-center justify-center rounded cursor-move"
>
  Drag Me
</div>
  );
}

export default SelectedItemList;
