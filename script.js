
var totalTareas = 0;
var totalPendientes = 0;

document.getElementById("addBtn").onclick = function () {

    let text1 = document.getElementById("taskInput").value;
    if (text1 === "") {
        console.log("error")
    } else {

        let creado = document.createElement("li");

        creado.className = "task-item";

        var check = document.createElement("input");
        check.type = "checkbox";
        check.className = "task-checkbox";

        spa = document.createElement("span");
        spa.className = "task-text";
        spa.innerHTML = text1;

        btn = document.createElement("button");
        btn.className = "delete-btn";
        btn.innerHTML = "Eliminar";

        btn.addEventListener("click", function () {
            creado.remove();
            totalTareas--;
            document.getElementById("totalTasks").textContent = "Total: " + totalTareas;
            if (creado.className === "task-item") {
                totalPendientes--;
                document.getElementById("pendingTasks").textContent = "Pendientes: " + totalPendientes;
            }
        });

        creado.appendChild(check);
        creado.appendChild(spa);
        creado.appendChild(btn);

        document.getElementById("taskList").appendChild(creado)
        totalTareas++;
        document.getElementById("totalTasks").textContent = "Total: " + totalTareas;
        totalPendientes++;
        document.getElementById("pendingTasks").textContent = "Pendientes: " + totalPendientes;

        document.getElementById("taskInput").value = "";

        check.addEventListener("click", function () {
            if (check.checked) {
                creado.className = "task-item completed";
                totalPendientes--;
                document.getElementById("pendingTasks").textContent = "Pendientes: " + totalPendientes;
            } else {
                creado.className = "task-item";
                totalPendientes++;
                document.getElementById("pendingTasks").textContent = "Pendientes: " + totalPendientes;
            }
        });
    }
}


document.getElementById("all").onclick = function () {

    let taskcom = document.getElementById("taskList");

    let buttonRempla1 = document.getElementById("all");
    let buttonRempla2 = document.getElementById("pending");
    let buttonRempla3 = document.getElementById("completed");

    buttonRempla1.className = "filter-btn active";
    buttonRempla2.className = "filter-btn";
    buttonRempla3.className = "filter-btn";


    let tareas = taskcom.querySelectorAll("li");
    for (let i = 0; i < tareas.length; i++) {
        tareas[i].style.display = "flex";
    }

}
document.getElementById("pending").onclick = function () {

    let buttonRempla1 = document.getElementById("all");
    let buttonRempla2 = document.getElementById("pending");
    let buttonRempla3 = document.getElementById("completed");

    buttonRempla1.className = "filter-btn";
    buttonRempla2.className = "filter-btn active";
    buttonRempla3.className = "filter-btn";

    let taskcom = document.getElementById("taskList");
    let tareas = taskcom.querySelectorAll("li");
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].className === "task-item") {
            tareas[i].style.display = "flex";
        } else {
            tareas[i].style.display = "none";
        }
    }

}
document.getElementById("completed").onclick = function () {

    let buttonRempla1 = document.getElementById("all");
    let buttonRempla2 = document.getElementById("pending");
    let buttonRempla3 = document.getElementById("completed");

    buttonRempla1.className = "filter-btn";
    buttonRempla2.className = "filter-btn";
    buttonRempla3.className = "filter-btn active";

    let taskcom = document.getElementById("taskList");
    let tareas = taskcom.querySelectorAll("li");
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].className === "task-item completed") {
            tareas[i].style.display = "flex";
        } else {
            tareas[i].style.display = "none";
        }
    }
}