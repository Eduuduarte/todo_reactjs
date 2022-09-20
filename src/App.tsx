import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem'
import {AddArea} from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'comprar o pão na padaria', done: false},
    {id: 2, name: 'comprar um bolo na padaria', done: true}
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleChangeStatus = (id: number, checked: boolean) => {
    let newList = [...list];
    const changeDone = newList.findIndex(item => item.id === id);
    newList[changeDone].done = checked;
    setList(newList);
    console.log(changeDone, newList);
  }
  
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adicionar nova tarefa */}
        
        <AddArea onEnter={handleAddTask}/>

        {/* Lista de tarefas */}

        {list.map((item, index) => (
          <ListItem key={index} item={item} changeDone={handleChangeStatus}/>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;