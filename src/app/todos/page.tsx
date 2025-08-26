'use client';

import React, { useState, useCallback } from 'react';
import { TodoItem } from '@/components/TodoItem';
import { TodoForm } from '@/components/TodoForm';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import type { Todo } from '@/lib/types';
import { AppWrapper, List } from './style';

let nextId = 5;
const initialTodos: Todo[] = [
  { id: 1, text: 'Learn React.memo', completed: true },
  { id: 2, text: 'Master useCallback', completed: false },
  { id: 3, text: 'Implement Error Boundaries', completed: false },
  { id: 4, text: 'crash', completed: false },
];

export default function TodosPage() {
  const [todos, setTodos] = useState(initialTodos);
  const handleAddTodo = useCallback((text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: nextId++, text, completed: false },
    ]);
  }, []);

  const handleToggleTodo = useCallback((id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []); 

  const handleDeleteTodo = useCallback((id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  const handleResetError = useCallback(() => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.text.toLowerCase() !== 'crash'));
  }, []);

  console.log('--- Parent TodosPage component rendered ---');

  return (
    <AppWrapper>
      <h1>Optimized Todo List</h1>
      <p style={{ color: '#8a8d93', textAlign: 'left', marginTop: '1rem', marginBottom: '2rem' }}>
        {'Add a todo with the text "crash" to test the error boundary.'}
      </p>
      
      <TodoForm onAdd={handleAddTodo} />
      <ErrorBoundary onResetState={handleResetError}>
        <List>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
        </List>
      </ErrorBoundary>

    </AppWrapper>
  );
}
