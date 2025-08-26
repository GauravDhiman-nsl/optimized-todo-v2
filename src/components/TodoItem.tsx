'use client';

import React from 'react';
import type { Todo } from '@/lib/types';
import { ActionButton, ActionsWrapper, ItemWrapper } from './style';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}


const TodoItemComponent = React.memo(({ todo, onToggle, onDelete }: TodoItemProps) => {
  console.log(`... Rendering TodoItem: "${todo.text}"`);
  if (todo.text.toLowerCase() === 'crash') {
    throw new Error('This todo is intentionally bug.');
  }

  return (
    <ItemWrapper $completed={todo.completed}>
      <span>{todo.text}</span>
      <ActionsWrapper>
        <ActionButton onClick={() => onToggle(todo.id)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </ActionButton>
        <ActionButton onClick={() => onDelete(todo.id)}>Delete</ActionButton>
      </ActionsWrapper>
    </ItemWrapper>
  );
});
TodoItemComponent.displayName = 'TodoItem';

export const TodoItem = TodoItemComponent;
