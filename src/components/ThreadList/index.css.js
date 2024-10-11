import styled from "styled-components";

export const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem; /* Tailwind の text-2xl 相当 */
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ThreadCard = styled.div`
  display: block;
  padding: 1.5rem;
  max-width: 20rem;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f7fafc;
  }
`;

export const ThreadTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
`;
