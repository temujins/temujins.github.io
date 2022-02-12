import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${({ theme }) => theme.padding()};

  .cards {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 15vh;
  }
`;
