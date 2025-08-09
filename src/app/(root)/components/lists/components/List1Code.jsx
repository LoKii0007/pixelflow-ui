export const List1Code = `
import React from "react";
import { useState } from "react";
import { Trash } from "lucide-react";
import { motion } from "framer-motion";

const demo = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Jim Beam", age: 35 },
  { id: 4, name: "John Doe", age: 25 },
  { id: 5, name: "John Doe", age: 25 },
];

const List1CodeComponent = () => {
  const [filteredDemo, setFilteredDemo] = useState(demo);
  const [deletingId, setDeletingId] = useState(null);
  const [deletedIndex, setDeletedIndex] = useState(null);
  const [height, setHeight] = useState(44);
  const GAP = 6;

  const handleDelete = (id) => {
    const index = filteredDemo.findIndex((item) => item.id === id);
    setDeletingId(id);
    setDeletedIndex(index);

    setTimeout(() => {
      setFilteredDemo((prev) => prev.filter((p) => p.id !== id));
      setDeletingId(null);
      setDeletedIndex(null);
    }, 600);
  };

  return (
    <div className="w-full h-full p-4 flex justify-center items-center overflow-x-hidden">
      <div className="w-full h-full flex flex-col relative">
        {filteredDemo.map((item, index) => {
          const isDeleting = deletingId === item.id;
          const shouldShiftUp = deletedIndex !== null && index > deletedIndex;
          const top = index * (height + GAP);

          return (
            <motion.div
              key={item.id}
              initial={{
                opacity: 1,
                left: 0,
                top: \`\${top}px\`,
              }}
              animate={
                isDeleting
                  ? { opacity: 0, left: "100%" }
                  : shouldShiftUp
                  ? { top: \`\${top - height - GAP}px\` }
                  : { top: \`\${top}px\`, left: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex gap-2 absolute"
            >
              <div
                style={{ height: \`\${height}px\` }}
                className="w-full items-center grid grid-cols-4 border-[0.6px] box-border border-gray-300 rounded-md px-3 py-1 transition-all duration-500"
              >
                <h1>{item.name}</h1>
                <p>{item.age}</p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="col-start-5 hover:bg-gray-100 transition-all duration-300 text-white hover:text-black p-1 rounded-md"
                >
                  <Trash width={16} height={16} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default List1CodeComponent`;
