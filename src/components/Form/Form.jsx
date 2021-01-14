import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

export function Form({ onClick }) {
  const [imputValue, setImputValue] = useState('');

  const onClickHandler = useCallback(() => {
    onClick(imputValue);
    setImputValue('');
  }, [onClick, imputValue]);

  const onChange = useCallback((evt) => setImputValue(evt.target.value), [setImputValue]);

  return (
    <StyledForm>
      <Input value={imputValue} onChange={onChange} placeholder="Add your task here..." />
      <Button onClick={onClickHandler}>
        +
      </Button>
    </StyledForm>
  );
}

const Input = styled.input`
  padding: 0 5px;
  font-size: 1.2rem;
  margin-top: 5px;
  color: #8e979c;
  border: none;
  outline: none;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0 10px 0 5px;
  border-bottom: 1px solid #8e979c;
`;

const Button = styled.form`
  font-size: 32px;
  color: #8e979c;
  font-weight: 600;
  cursor: pointer;
`;
