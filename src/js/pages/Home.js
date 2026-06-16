
let plans = [];
let editid = null;
let activePlan = null;

let taskInput, addBtn, taskList, titleInput, titleContainer;

export default {
    render,
    init,
    css: "src/css/style.css"
}

function init() {

    taskInput = document.getElementById("taskInput");
    addBtn = document.getElementById("addBtn");
    taskList = document.getElementById("taskList");
    titleInput = document.getElementById("titleInput");
    titleContainer = document.querySelector(".title-container")


    addBtn.addEventListener("click", () => {
        //console.log("clicked");
        const taskText = taskInput.value.trim();
        const titleText = titleInput.value.trim();

        if (!taskText || !titleText) {
            alert("Inputs can't be empty!");
            return;
        }
        //console.log(taskText);
        if (editid) {
            const plan = getActivePlan();

            const task = plan.tasks.find(
                task => task.id === editid
            );

            if (task) {
                task.content = taskText;
            }

            editid = null;

            addBtn.textContent = "Add Task";
            addBtn.style.backgroundColor = "";
            addBtn.style.color = "#333";

            renderTask();

            return;
        } else {

            if (findPlan(titleText)) {

                const task = {
                    id: Date.now(),
                    content: taskText,
                    completed: false
                }

                const plan = plans.find(plan => plan.title === titleText);
                plan.tasks.push(task);
                activePlan = plan.title;
            } else {

                const plan = {
                    title: titleText,
                    tasks: [{
                        id: Date.now(),
                        content: taskText,
                        completed: false
                    }]
                };

                plans.push(plan);

                activePlan = plan.title;
            }

        }


        //console.log(task);
        taskInput.value = "";
        titleInput.value = "";
        renderTitle();
        renderTask();
    });

    function getActivePlan() {
        return plans.find(plan => plan.title === activePlan);
    }

    function findPlan(title) {
        // const plan = plans.find(plan => )
        return plans.find(plan => plan.title === title);
    }

    function editTask(id) {
        const plan = getActivePlan();

        if (!plan) return;

        const task = plan.tasks.find(task => task.id === id);

        if (!task) return;

        taskInput.value = task.content;
        titleInput.value = plan.title;

        editid = id;

        addBtn.textContent = "Update";
        addBtn.style.backgroundColor = "rgb(3, 137, 27)";
        addBtn.style.color = "#f4f4f4";
    }

    function deleteTask(id) {
        const plan = getActivePlan();

        if (!plan) return;

        plan.tasks = plan.tasks.filter(task => task.id !== id);

        renderTask();
    }

    function completedTask(id) {
        const plan = getActivePlan();

        if (!plan) return;

        const task = plan.tasks.find(task => task.id === id);

        if (task) {
            task.completed = !task.completed;
        }

        renderTask();
    }

    function renderTask() {
        taskList.innerHTML = "";

        const plan = plans.find(
            plan => plan.title === activePlan
        );

        if (!plan) return;

        plan.tasks.forEach(task => {
            const li = document.createElement("li");
            li.classList = "list"

            li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">
                ${task.content}
            </span>

            <div class="buttons-container">
                <button data-id="${task.id}" class="compBtn Btn">
                    Complete
                </button>

                <button data-id="${task.id}" class="editBtn Btn">
                    Edit
                </button>

                <button data-id="${task.id}" class="deleteBtn Btn">
                    Delete
                </button>
            </div>
        `;

            taskList.appendChild(li);
        });
    }

    function renderTitle() {
        titleContainer.innerHTML = "";

        plans.forEach(plan => {
            const btn = document.createElement("button");
            btn.classList = "Titles";
            btn.textContent = `${plan.title}`

            btn.addEventListener("click", () => {
                activePlan = plan.title;
                renderTask();
            });

            titleContainer.appendChild(btn);
        });
    }

    taskList.addEventListener("click", (e) => {
        //console.log(tasks)
        const Id = Number(e.target.getAttribute("data-id"))
        console.log(Id);
        if (e.target.classList.contains("editBtn")) {
            editTask(Id);
        }
        if (e.target.classList.contains("deleteBtn")) {
            deleteTask(Id);
        }
        if (e.target.classList.contains("compBtn")) {
            completedTask(Id);
        }
    })


}

function render() {
    return ` 
    <aside class="aside-container">
        <header class="appTitle-container"><h1 class="appTitle">ToDo List</h1></header>
        <input type="text" id="titleInput" placeholder="Title" class="titleInput Inputs">
        <input type="text" id="taskInput" placeholder="Add a task" class="mainInput Inputs">
        <button id="addBtn" class="Btn">Add Task</button>

        <div class="title-container"></div>
    </aside>
    <main class="main-container">
        <ul id="taskList" class="unordersList"></ul>
       </main>`;
}