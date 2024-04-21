import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Text, TouchableOpacity, View } from 'react-native';
// eslint-disable-next-line prettier/prettier
import { Task } from './App';
import styles from './Styles';

interface ItemProps {
  item: Task;
  markDone: (taks: Task) => void;
  deleteFunction: (task: Task) => void;
}

function RenderItem({
  item,
  markDone,
  deleteFunction,
}: ItemProps): React.ReactElement {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => markDone(item)}>
        <Text style={item.done ? styles.textDone : styles.text}>
          {item.title}
        </Text>
        <Text style={item.done ? styles.textDone : styles.text}>
          {item.date.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {item.done && (
        <TouchableOpacity
          style={styles.RemoveButton}
          onPress={() => deleteFunction(item)}>
          <Text style={styles.whiteText}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default RenderItem;
