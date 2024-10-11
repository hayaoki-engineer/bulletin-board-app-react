import styled from "styled-components";

export const Container = styled.div`
  max-width: 32rem;
  margin: 1.5rem auto;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
`;

export const Input = styled.input`
  margin-top: 0.25rem;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #4299e1;
  color: #ffffff;
  border-radius: 0.375rem;
  &:hover {
    background-color: #2b6cb0;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
  }
`;
