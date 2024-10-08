import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

function Demo() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },
  });

  const [tarea, setTarea] = useState('hola');

  const AgregarTarea = (e) => {
    console.log('pepe');
  };

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        label="Agrega una Tarea"
        placeholder="Ej: Hacer la tarea"
        {...form.getInputProps('email')}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit" onClick={AgregarTarea}>Agregar</Button>
      </Group>
    </form>
  );
}

export default Demo;
