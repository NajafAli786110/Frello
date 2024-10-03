import React, { useState } from "react";
import { SideBar } from "../components";
import { useCustomContext } from "../context/UserContext";

const UserTask = () => {
  const { tasks, taskDispatch } = useCustomContext();
  const [taskData, setTaskData] = useState("");

  const onSubmitTask = (e) => {
    e.preventDefault();

    taskDispatch({
      type: "ADD_TASK",
      name: taskData,
    });

    setTaskData("");
  };

  const onDeleteTask = (id) => {
    taskDispatch({
      type: "DEL_TASK",
      id: id,
    });
  };

  return (
    <div className="flex items-start">
      <SideBar />
      <div className="w-3/4 max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">User Task</h2>

        {/* Input section for adding a task */}
        <form className="flex mb-4" onSubmit={onSubmitTask}>
          <input
            type="text"
            value={taskData}
            onChange={(e) => setTaskData(e.target.value)}
            placeholder="Write your task..."
            className="flex-grow border border-gray-300 p-2 rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Add Task
          </button>
        </form>

        {/* Task List */}
        <ul className="space-y-4">
          {/* Task Card */}
          {tasks.map((task) => (
            <li
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              key={task.id}
            >
              <div>
                <p className="font-medium">{task.taskName}</p>
              </div>
              <div className="space-x-2">
                <button className="text-yellow-500 hover:text-yellow-600">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-600"
                onClick={()=>onDeleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserTask;
