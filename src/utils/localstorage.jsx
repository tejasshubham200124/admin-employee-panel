// Array for employees with tasks and taskCount
const employees = [
    {
        name: "Alice",
        id: 1,
        email: "alice@example.com",
        password: "alice123",
        tasks: [
            {
                description: "Complete the financial report",
                date: "2024-10-21",
                title:"kal aana",
                category:'dev',
                assignedTo:"Alice",
                active: true,
                new: true,
                completed: false,
                failed: false
            },
            {
                description: "Prepare presentation slides",
                date: "2024-10-21",
                active: true,
                title:"kal aana",
                category:'dev',
                assignedTo:"Alice",
                new: false,
                completed: false,
                failed: false
            },
            {
                description: "Review team feedback",
                date: "2024-10-21",
                title:"kal aana",
                category:'dev',
                assignedTo:"Alice",
                active: false,
                new: false,
                completed: true,
                failed: false
            }
        ],
        taskCount: {
            new: 1,
            failed: 0,
            completed: 1,
            active: 2
        }
    },
    {
        name: "Bob",
        id: 2,
        email: "bob@example.com",
        password: "bob123",
        tasks: [
            {
                description: "Submit project proposal",
                date: "2024-10-21",
                title:"kal aana",
                category:'dev',
                assignedTo:"Bob",
                active: true,
                new: true,
                completed: false,
                failed: false
            },
            {
                description: "Fix software bugs",
                date: "2024-10-21",
                title:"kal aana",
                category:'dev',
                assignedTo:"Bob",
                active: true,
                new: false,
                completed: true,
                failed: false
            },
            {
                description: "Update client documentation",
                date: "2024-10-21",
                active: false,
                title:"kal aana",
                category:'dev',
                assignedTo:"Bob",
                new: false,
                completed: false,
                failed: true
            }
        ],
        taskCount: {
            new: 1,
            failed: 1,
            completed: 1,
            active: 2
        }
    },
    {
        name: "Charlie",
        id: 3,
        email: "charlie@example.com",
        password: "charlie123",
        tasks: [
            {
                description: "Organize team meeting",
                date: "2024-10-21",
                title:"kal aana",
                category:'dev',
                assignedTo:"Charlie",
                active: true,
                new: true,
                completed: false,
                failed: false
            },
            {
                description: "Submit expense reports",
                date: "2024-10-21",
                title:"kal aana",
                category:'dev',
                assignedTo:"Charlie",
                active: false,
                new: false,
                completed: true,
                failed: false
            },
            {
                description: "Plan team outing",
                date: "2024-10-21",
                active: true,
                title:"kal aana",
                category:'dev',
                assignedTo:"Charlie",
                new: false,
                completed: false,
                failed: false
            }
        ],
        taskCount: {
            new: 1,
            failed: 0,
            completed: 1,
            active: 2
        }
    },
    {
        name: "Diana",
        id: 4,
        email: "diana@example.com",
        password: "diana123",
        tasks: [
            {
                description: "Conduct code review",
                title:"kal aana",
                category:'dev',
                assignedTo:"Diana",
                date: "2024-10-21",
                active: true,
                new: true,
                completed: false,
                failed: false,
                
            },
            {
                description: "Prepare project roadmap",
                date: "2024-10-21",
                title:"kal aana",
                category:'dev',
                assignedTo:"Diana",
                active: false,
                new: false,
                completed: true,
                failed: false
            },
            {
                description: "Coordinate with marketing team",
                date: "2024-10-21",
                title:"kal aana",
                category:'dev',
                assignedTo:"Diana",
                active: true,
                new: false,
                completed: false,
                failed: false
            }
        ],
        taskCount: {
            new: 1,
            failed: 0,
            completed: 1,
            active: 2
        }
    },
    {
        name: "Eve",
        id: 5,
        email: "eve@example.com",
        password: "eve123",
        tasks: [
            {
                description: "Analyze sales data",
                date: "2024-10-21",
                active: true,
                title:"kal aana",
                category:'dev',
                assignedTo:"Eve",
                new: true,
                completed: false,
                failed: false
            },
            {
                description: "Design marketing strategy",
                date: "2024-10-21",
                title:"kal aana",
                category:'dev',
                assignedTo:"Eve",
                active: false,
                new: false,
                completed: true,
                failed: false
            },
            {
                description: "Prepare monthly report",
                date: "2024-10-21",
                active: true,
                title:"kal aana",
                category:'dev',
                assignedTo:"Eve",
                new: false,
                completed: false,
                failed: false
            }
        ],
        taskCount: {
            new: 1,
            failed: 0,
            completed: 1,
            active: 2
        }
    }
];


const admin = [
    { name: "Admin", id: 100, email: "admin@me.com", password: "admin123" }
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))

}

export const getLocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem("employees"))
    // console.log(employeeData)
    const adminData = JSON.parse(localStorage.getItem("admin"))
    return { employeeData, adminData }
}

export const clearLocalStorage = () => {
    localStorage.removeItem("loggedInUser")
    window.location.reload()
}
