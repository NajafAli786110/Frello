export function UserReducer(userData, action) {
  switch (action.type) {
    case "createUser": {
      // Create new user and add to the state
      return [
        ...userData,
        {
          id: Math.random(),
          name: action.userName,
          email: action.userEmail,
          pass: action.userPass,
        },
      ];
    }

    default: {
      throw new Error("Unknown action type: " + action.type);
    }
  }
}

export function projectReducer(projects, action) {
  switch (action.type) {
    case "SET_PROJECTS":
      return action.payload;
    case "ADD_PROJECT": {
      return [
        ...projects,
        {
          id: Math.random(),
          projectTitle: action.projectName,
          projectTask: action.description,
          projectDeadline: action.endDate,
          projectStatus: action.status,
        },
      ];
    }
    case "EDIT_PROJECT": {
      return projects.map((prj) => {
        if (prj.id === action.payload.id) {
          return {
            ...prj,
            projectTitle: action.payload.projectName,
            projectTask: action.payload.description,
            projectDeadline: action.payload.endDate,
            projectStatus: action.payload.status,
          };
        }
        return prj; // Return the unchanged project
      });
    }
    case "DEL_PROJECT": {
      return projects.filter((prj) => prj.id != action.id);
    }

    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}

export function taskReducer(tasks, action) {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;
    case "ADD_TASK": {
      return [...tasks, { id: Math.random(), taskName: action.name }];
    }
    case "EDIT_TASK": {
      return tasks.map((task) => {
        if (task.id == action.id) {
          return {
            ...task,
            taskName: action.name,
          };
        }
        return task;
      });
    }
    case "DEL_TASK": {
      return tasks.filter((task) => task.id != action.id);
    }

    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}
