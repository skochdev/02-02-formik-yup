import styled from 'styled-components/macro';

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  width: 300px;

  label {
    display: flex;
    justify-content: space-between;
  }

  label + label {
    margin-top: ${p => p.theme.space[3]}px;
  }

  input {
    display: block;
  }

  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${p => p.theme.space[5]}px;
  }
`;
