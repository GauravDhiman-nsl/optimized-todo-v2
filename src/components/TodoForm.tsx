'use client';
import React, { useState } from 'react';
import {FormWrapper, Input, SubmitButton} from './style'

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <SubmitButton type="submit">Add Todo</SubmitButton>
    </FormWrapper>
  );
};
