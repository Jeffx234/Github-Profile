import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media (max-width: 790px) {
    width: 100%;
    margin: auto;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    transition: filter 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`
