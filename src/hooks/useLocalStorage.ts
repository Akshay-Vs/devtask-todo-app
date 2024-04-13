import { useState, useEffect } from 'react';
import { todoType } from '../types/todo.type';
import { todos } from '../data/mock.todos';

export const useLocalStorage = () => {
  const [data, setData] = useState<todoType[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem('todos');
    if (localData) {
      setData(JSON.parse(localData));
      return
    }
    setData(todos);
  }, []);

  const saveData = (data: todoType[]) => {
    setData(data);
    localStorage.setItem('todos', JSON.stringify(data));
  };

  const deleteField = (id: string) => {
    const newData = data.filter((todo) => todo.id !== id);
    saveData(newData);
  };

  const updateField = (updatedData: todoType) => {
    const id = updatedData.id;
    const newData = data.map((todo) => (todo.id === id ? updatedData : todo));
    saveData(newData);
    console.log(updatedData);
  };

  const addField = (newField: todoType) => {
    const newData = [...data, newField];
    saveData(newData);
  }

  return {
    data,
    saveData,
    deleteField,
    updateField,
    addField
  };

}

