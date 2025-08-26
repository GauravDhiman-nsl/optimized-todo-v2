import styled from "styled-components";

export const ItemWrapper = styled.li<{ $completed: boolean }>`
  background: #2a2d37;
  color: #e2e2e2;
  padding: 1rem 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;
  text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
  opacity: ${(props) => (props.$completed ? 0.6 : 1)};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  background: none;
  border: 1px solid #50525b;
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #50525b;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #50525b;
  background: #2a2d37;
  color: white;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background-color: #ff9f0a;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #ffb13e;
  }
`;

export const FallbackWrapper = styled.div`
  background-color: #440c0c;
  color: #ffcccc;
  border: 1px solid #ff5c5c;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
`;

export const FallbackTitle = styled.h3`
  margin-top: 0;
`;

export const ErrorMessage =styled.small`
color: red;
`;