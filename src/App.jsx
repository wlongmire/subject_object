import './App.css'
import styled from 'styled-components'

function App() {

  return (
    <Container>
      <Header>
        <span>video by <a href="https://www.pexels.com/@cottonbro">cottonbro studio</a></span>
        <span><a href="https://www.instagram.com/mixlitphilly/">_mixlit</a></span>
      </Header>

      <SubObjContainer>
        <Title><span>Subject</span><span>(ives)</span><span>Object</span></Title>

        <Interface>
          <div className="d-flex flex-column px-1">
            <Button className="flex-fill rounded-1 btn btn-outline-dark">I</Button>
            <Button className="flex-fill rounded-1 btn btn-outline-dark">You</Button>
            <Button className="bottom flex-fill rounded-1 btn btn-outline-dark">We</Button>
          </div>

          <Video src="https://www.youtube.com/embed/NpEaa2P7qZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>

          <div className="d-flex flex-column px-1">
            <Button className="flex-fill rounded-1 btn btn-outline-dark">I</Button>
            <Button className="flex-fill rounded-1 btn btn-outline-dark">You</Button>
            <Button className="bottom flex-fill rounded-0 btn btn-outline-dark">We</Button>
          </div>
        </Interface>
        
        <Ticker>I am the monster / the moment / you say I am. Shoot / me in my open mouth / as soon as the dark in your head shows its </Ticker>
        
        <div>scroll bar</div>

      </SubObjContainer>

      <Footer>
        <span><a href="https://www.instagram.com/mixlitphilly/">_mixlit</a></span>
        <span>video by <a href="https://www.pexels.com/@cottonbro">cottonbro studio</a></span>
      </Footer>
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */
  min-width: 860px;
`
const SubObjContainer = styled.div`
  width: 90vw;
  height:75vh;
  background-color: grey;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  display:flex;
  justify-content: space-between;
  width: 100%;
`
const Interface = styled.div`
  flex-grow: 1;
  width:100%;
  display:flex;
  justify-content: space-between;
  flex-direction: row;
`

const Footer = styled.div`
    background-color:black;
    color: white;
    display:flex;
    justify-content: space-between;        
    padding: 1em;
    position: absolute;
    bottom: 0;
    width: 100vw;
`

export const Header = styled.div`
    background-color:black;
    color: white;
    display:flex;
    justify-content: space-between;        
    padding: 1em;
    position: absolute;
    top: 0;
    width: 100vw;
`

const Ticker = styled.div`
  text-align: left;
`

const Video = styled.iframe`
  flex-grow:1;
`

const Button = styled.div`
  width: 14em;
  display:flex;
  margin-bottom:5px;
  justify-content: center;
  align-items:center;

  &.bottom{
    margin-bottom:0;
  }
`