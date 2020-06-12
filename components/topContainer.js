import Typed from "react-typed";
import { useRouter } from "next/router";
import CountUp from "react-countup";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

function TopContainer() {
  let clubNum = 120;
  let univLocation;
  let color;

  const router = useRouter();

  switch (router.pathname) {
    case "/seoul":
      univLocation = "명륜";
      color = "green";
      break;
    case "/suwon":
      univLocation = "율전";
      color = "#4d5dff";
      break;
    default:
      univLocation = "undefined";
  }

  const GlobalContainer = styled.div`
    width: 100%;
    background-color: #F8F7F8;
    padding: 110px 0 20px 5rem;
  `;

  const Title = styled.h1`
    margin: 0;
    font-weight: 500;
  `;

  const TitleContainer = styled.div``;

  const UnivName = styled.span`
    color: ${color};
    padding: 0;
  `;

  const ClubNum = styled.span`
    color: ${color};
  `;

  const DescContainer = styled.div`
    margin-top: 50px;
  `;

  return (
    <div>
      <GlobalContainer>
        <TitleContainer>
          <Title>
            <UnivName>
              <Typed strings={[`성대 ${univLocation}`]} typeSpeed={60} />
            </UnivName>
            <br />
            모든 동아리를
            <br />한 눈에!
          </Title>
        </TitleContainer>
        <DescContainer>
          <p>
            현재{" "}
            <ClubNum>
              <CountUp end={clubNum} />
            </ClubNum>
            개의 동아리들이 등록되어 있습니다.
          </p>
        </DescContainer>
      </GlobalContainer>
    </div>
  );
}

export default TopContainer;
