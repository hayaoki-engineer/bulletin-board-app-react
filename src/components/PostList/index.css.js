import styled from "styled-components";

// PostList のスタイル定義
export const Container = styled.div`
  max-width: 32rem;
  margin: 1.5rem auto;
  padding: 1.5rem;
  background-color: #f7fafc;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 1.875rem; /* Tailwind の text-3xl */
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const BackLink = styled.div`
  display: block;
  margin-bottom: 1.5rem;
  color: #3182ce;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostContainer = styled.div`
  margin-bottom: 2rem;
`;

export const PostItem = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PostText = styled.p`
  color: #2d3748;
`;

export const EmptyMessage = styled.p`
  color: #a0aec0;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h3`
  font-size: 1.25rem; /* Tailwind の text-xl */
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  focus:outline: none;
  focus:ring: 2px;
  focus:ring: #3182ce;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: #4299e1;
  color: #ffffff;
  border-radius: 0.375rem;
  &:hover {
    background-color: #2b6cb0;
  }
  focus:outline: none;
  focus:ring: 2px;
  focus:ring: #3182ce;
`;
