import { Button, Group, TextInput } from '@mantine/core';
import { useState } from 'react';
import './Demo2.css'; // Importa el archivo CSS

function Demo2() {
  const [Tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]); // almacena la listas de tareas

  // Actualiza el estado de Tarea
  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  // Agrega la tarea actual a la lista de tareas si no está vacía y luego limpia el input
  const AgregarTarea = () => {
    if (Tarea.trim() !== '') {
      setTareas([...tareas, { text: Tarea, completed: false }]);
      setTarea('');
    }
  };

  // Marca una tarea como completada
  const toggleComplete = (index) => {
    const newTareas = [...tareas];
    newTareas[index].completed = !newTareas[index].completed;
    setTareas(newTareas);
  };

  // Elimina una tarea de la lista
  const eliminarTarea = (index) => {
    const newTareas = tareas.filter((_, i) => i !== index);
    setTareas(newTareas);
  };
  

  return (
    <div className="container">
      <Group>
        <label>Agrega una Tarea</label>
      </Group>
      <TextInput
        type='text'
        placeholder='Ej: Hacer la cama'
        value={Tarea}
        onChange={handleChange}
      />
      <Button type='submit' onClick={AgregarTarea}>Agregar</Button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <input
              type='checkbox'
              checked={tarea.completed}
              onChange={() => toggleComplete(index)}
            />
            <span className={tarea.completed ? 'completed' : ''}>
              {tarea.text}
            </span>
            <Button onClick={() => eliminarTarea(index)}>Eliminar</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Demo2;
