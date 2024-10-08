import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Demo from './Components/Demo'
import Demo2 from './Components/Demo2'


function App() {
  return (
    <MantineProvider>
      <h1>Todo List</h1>
      <Demo2/>
    </MantineProvider>
  );
}

export default App
