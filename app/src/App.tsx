import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const CircleCILogo = styled.img`
  height: 60px;
`;

function App() {
  return (
    <Container>
      <a href="https://circleci.com">
        <CircleCILogo
          data-testid="circleci-logo"
          src="/circleci-logo.svg"
          alt="CircleCI Logo"
        />
      </a>
      <p>
        If you are seeing this, your EKS cluster deployed by CircleCI is working.
      </p>
    </Container>
  );
}

export default App;
