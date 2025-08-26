import styled from "styled-components";
export const AppWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 2rem;
  border-radius: 16px;
  background-color: #1c1c1c;
  color: #e2e2e2;
  font-family: sans-serif;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const UnrelatedStateChanger = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #50525b;
  text-align: center;

  p {
    font-size: 0.9rem;
    color: #8a8d93;
  }
`;
