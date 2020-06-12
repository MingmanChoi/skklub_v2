import Head from 'next/head';
import Container from 'react-bootstrap/Container'
import TopContainer from '../components/topContainer'
import CardGallery from "../components/cardGallery"
import dynamic from 'next/dynamic';
import styled from 'styled-components'

const NavbarWithNoSSR = dynamic(
  () => import('../components/navbar'),
  { ssr: false }
)

const Main = styled.main`
width: 100%;
`

export default function Suwon() {

  return (
    <div className="globalContainer">
      <Head>
        <title>SKKLUB - 율전</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <NavbarWithNoSSR></NavbarWithNoSSR>
        <TopContainer></TopContainer>
        <CardGallery></CardGallery>
      </Main>
    </div>
  )
}
