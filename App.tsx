/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ModalName from './ModalName';
import RenderItem from './RenderItem';
import styles from './Styles';

export interface Task {
  title: string;
  done: boolean;
  date: Date;
}

function App(): React.JSX.Element {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTasks = () => {
    const tmp: Task[] = [...tasks];
    const newTask = {
      title: text,
      done: false,
      date: new Date(),
    };
    tmp.push(newTask);
    setTasks(tmp);
    setText('');
  };

  const markDone = (task: Task) => {
    const tmp: Task[] = [...tasks];
    const index = tmp.findIndex(e => e.title === task.title);
    const todo = tmp[index];
    todo.done = !todo.done;
    setTasks(tmp);
  };

  const deleteFunction = (task: Task) => {
    const tmp: Task[] = [...tasks];
    const index = tmp.findIndex(e => e.title === task.title);
    tmp.splice(index, 1);
    setTasks(tmp);
  };

  return (

    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Mis Tareas Pendientes</Text>

        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(t: string) => setText(t)}
            value={text}
            placeholder="Agregar una nueva tarea"
            style={styles.textInput}
          />
          <TouchableOpacity onPress={addTasks} style={styles.addButton}>
            <Text style={styles.whiteText}>Agregar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scrollContainer} />


        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
        />

      </View>
      <ModalName />

    </View>


  );
}

export default App;
