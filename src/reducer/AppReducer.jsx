export function UserReducer(userData, action) {
    switch (action.type) {
        case 'createUser': {
            // Create new user and add to the state
            return [...userData, { name: action.userName, email: action.userEmail, pass: action.userPass }];
        }

        default: {
            throw new Error("Unknown action type: " + action.type);
        }
    }
}
