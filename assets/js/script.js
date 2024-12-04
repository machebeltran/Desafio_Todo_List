// Arreglo de tareas inicial
let tareas = [
    { id: 1, descripcion: "Comprar leche", completado: false },
    { id: 2, descripcion: "Lavar el coche", completado: false },
    { id: 3, descripcion: "Estudiar programación", completado: false },
  ];
  
  // Elementos del DOM
  const inputTarea = document.getElementById("nueva-tarea");
  const btnAgregar = document.querySelector(".boton-agregar");
  const listaTareas = document.getElementById("task-list");
  const totalTareas = document.getElementById("total-tareas");
  const tareasRealizadas = document.getElementById("completed-tasks");
  
  // Función para renderizar la lista de tareas
  function renderizarTareas() {
    listaTareas.innerHTML = ""; // Limpiar la lista
    tareas.forEach((tarea, index) => {
      const fila = document.createElement("tr");
  
      fila.innerHTML = `
        <td>${tarea.id}</td>
        <td>${tarea.descripcion}</td>
        <td>
          <input type="checkbox" class="checkbox-tarea" data-index="${index}" ${
        tarea.completado ? "checked" : ""
      }>
        </td>
        <td>
          <button class="btn-eliminar" data-index="${index}">×</button>
        </td>
      `;
  
      listaTareas.appendChild(fila);
    });
    actualizarEstado();
  }
  
  // Función para actualizar las estadísticas
  function actualizarEstado() {
    totalTareas.textContent = tareas.length;
    tareasRealizadas.textContent = tareas.filter(tarea => tarea.completado).length;
  }
  
  // Función para agregar una tarea
  function agregarTarea() {
    const descripcion = inputTarea.value.trim();
    if (descripcion === "") {
      alert("Por favor, escribe una tarea.");
      return;
    }
    const nuevaTarea = {
      id: tareas.length + 1,
      descripcion: descripcion,
      completado: false,
    };
    tareas.push(nuevaTarea);
    inputTarea.value = "";
    renderizarTareas();
  }
  
  // Función para cambiar el estado de una tarea
  function cambiarEstadoTarea(index) {
    tareas[index].completado = !tareas[index].completado;
    renderizarTareas();
  }
  
  // Función para eliminar una tarea
  function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
  }
  
  // Event Listeners
  btnAgregar.addEventListener("click", agregarTarea);
  
  listaTareas.addEventListener("click", (e) => {
    if (e.target.classList.contains("checkbox-tarea")) {
      const index = e.target.dataset.index;
      cambiarEstadoTarea(index);
    }
    if (e.target.classList.contains("btn-eliminar")) {
      const index = e.target.dataset.index;
      eliminarTarea(index);
    }
  });
  
  // Inicializar la lista con las tareas iniciales
  renderizarTareas();
  