import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import './App.css'
import styled from 'styled-components'

import i_i from './assets/videos/i-i.mp4'
import i_you from './assets/videos/i-you.mp4'
import i_we from './assets/videos/i-we.mp4'

import you_i from './assets/videos/you-i.mp4'
import you_you from './assets/videos/you-you.mp4'
import you_we from './assets/videos/you-we.mp4'

import we_i from './assets/videos/we-i.mp4'
import we_you from './assets/videos/we-you.mp4'
import we_we from './assets/videos/we-we.mp4'

function App() {
  const [active, setActive] = useState({
    "subject":null,
    "object":null
  })
  const [videoElement, setVideoElement] = useState(null)
  const types = ["i", "you", "we"]
  const poem = [
    "I am the monster",
    "the moment",
    "I say I am. Shot",
    "inside my open mouth",
    "as soon as the dark",
    "in my head",
    "showed its teeth.",
    "I wait for myself forever",
    "yelling proud in",
    "the middle of the street, so tired",
    "and in love, begging",
    "for one mistake unremarkable and",
    "human at last.",
  ]

  const stages = {
    "i":{
      "i":{
        video: i_i,
        poem: [
          "I am the monster",
          "the moment",
          "I say I am. Shot",
          "inside my open mouth",
          "as soon as the dark",
          "in my head",
          "showed its teeth.",
          "I wait for myself forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
      "you":{
        video: i_you,
        poem: [
          "I am the monster",
          "the moment",
          "you say I am. Shoot",
          "me in my open mouth",
          "as soon as the dark",
          "in my head",
          "showed its teeth.",
          "I wait for myself forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
      "we":{
        video: i_we,
        poem: [
          "I am the monster",
          "the moment",
          "we say I am. Shot",
          "inside my open mouth",
          "as soon as the dark",
          "in our heads",
          "showed its teeth.",
          "I wait for us forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
    },
    "you":{
      "i":{
        video: you_i,
        poem: [
          "I am the monster",
          "the moment",
          "I say I am. Shot",
          "inside my open mouth",
          "as soon as the dark",
          "in my head",
          "showed its teeth.",
          "I wait for myself forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
      "you":{
        video: you_you,
        poem: [
          "I am the monster",
          "the moment",
          "I say I am. Shot",
          "inside my open mouth",
          "as soon as the dark",
          "in my head",
          "showed its teeth.",
          "I wait for myself forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
      "we":{
        video: you_we,
        poem: [
          "I am the monster",
          "the moment",
          "I say I am. Shot",
          "inside my open mouth",
          "as soon as the dark",
          "in my head",
          "showed its teeth.",
          "I wait for myself forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
    },
    "we":{
      "i":{
        video: we_i,
        poem: [
          "I am the monster",
          "the moment",
          "I say I am. Shot",
          "inside my open mouth",
          "as soon as the dark",
          "in my head",
          "showed its teeth.",
          "I wait for myself forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
      "you":{
        video: we_you,
        poem: [
          "I am the monster",
          "the moment",
          "I say I am. Shot",
          "inside my open mouth",
          "as soon as the dark",
          "in my head",
          "showed its teeth.",
          "I wait for myself forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
      "we":{
        video: we_we,
        poem: [
          "I am the monster",
          "the moment",
          "I say I am. Shot",
          "inside my open mouth",
          "as soon as the dark",
          "in my head",
          "showed its teeth.",
          "I wait for myself forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
    }
  }

  const changeStage = (e) => {
    const {type, value} = e.target.dataset;

    setActive({
      ...active,
      [type]: (parseInt(value) === active[type])?null:parseInt(value)
    })
  }

  useEffect(()=> {
    if (active.object  !== null && active.object !== null ){
      videoElement.play()
      
    }  else {
      console.log("nope")
    }
    
  }, [active])
  
  const currentPoem = (active.object  !== null && active.object !== null ) ? stages[types[active.subject]][types[active.object]].poem : [
    "Subject, Object, Subject, Object......",
    "Object",
    "Subject, Object, Subject, Object......",
    "Object",
    "Subject, Object, Subject, Object......",
    "Object",
    "Subject, Object, Subject, Object......",
    "Object",
    "Subject, Object, Subject, Object......",
    "Object",
    "Subject, Object, Subject, Object......",
    "Object",
    "Subject, Object, Subject, Object......",
  ]
  const currentVideo = (active.object !== null && active.object !== null ) ? stages[types[active.subject]][types[active.object]].video : ""

  return (
    <Container>
      <Header>
        {/* <span><a href="https://www.instagram.com/mixlitphilly/">_mixlit</a></span>
        <span>video by <a href="https://www.pexels.com/@cottonbro">cottonbro studio</a></span> */}
      </Header>

      <SubObjContainer>
        <Title>
          <span className="heading">Subject</span>
          <span className="line"></span>
          <span className="center">(ives)</span>
          <span className="line"></span>
          <span className="heading">Object</span>
        </Title>

        <Interface>
          <div className="d-flex flex-column px-1">
            {
              types.map((type,idx) => {
                const c = "flex-fill rounded-1 btn btn-outline-dark" + ((idx===active.subject)?" active":"") + ((idx===type.length)?" bottom":"")
                return <Button key={`subject-${idx}`} data-type="subject" data-value={idx} onClick={changeStage} className={c} >{type}</Button>
              })
            }
          </div>

          <DisplayContainer>
            <Video src={currentVideo} ref={setVideoElement} muted autoplay/>
            <PoemDisplay>
              {
                currentPoem.map(line => <p>{line}</p>)
              }
            </PoemDisplay>
          </DisplayContainer>
          
            
          <div className="d-flex flex-column px-1">
          {
              types.map((type,idx) => {
                const c = "flex-fill rounded-1 btn btn-outline-dark" + ((idx===active.object)?" active":"") + ((idx===type.length)?" bottom":"")
                return <Button key={`object-${idx}`} data-type="object" data-value={idx} onClick={changeStage}  className={c} >{type}</Button>
              })
            }
          </div>
        </Interface>
        
        {/* <div>scroll bar</div> */}

      </SubObjContainer>

      <Footer>
        {/* <span><a href="https://www.instagram.com/mixlitphilly/">_mixlit</a></span>
        <span>video by <a href="https://www.pexels.com/@cottonbro">cottonbro studio</a></span> */}
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
  font-family: 'Montserrat', sans-serif;
`
const SubObjContainer = styled.div`
  width: 90vw;
  height:80vh;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  display:flex;
  font-weight: 400;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  padding: 0 0 1em 0;
  & .heading{
    text-transform: uppercase;
    font-size: 2.5em;
    font-weight: 600;
  }

  & .center{
    font-size: 1.5em;
    font-weight: 600;
  }

  & .line {
    flex-grow:1;
    height: 1px;
    border-bottom: 3px black dotted;
  }

`
const Interface = styled.div`
  flex-grow: 1;
  width:100%;
  display:flex;
  justify-content: space-between;
  flex-direction: row;
`
const Ticker = styled.div`
  padding: 1em 0 0 0;
  font-size: 1em;
  overflow: scroll;
  white-space: nowrap;
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

const Header = styled.div`
    background-color:black;
    color: white;
    display:flex;
    justify-content: space-between;        
    padding: 1em;
    position: absolute;
    top: 0;
    width: 100vw;
`

const Video = styled.video`
  width: 590px;
`

const DisplayContainer = styled.div`
  display: flex;
`

const PoemDisplay = styled.div`
  padding: 0 1em;
  display:flex;
  flex-direction:column;
  justify-content: center;

  p {
    margin:0;
  }
`


const Button = styled.div`
  width: 14em;
  display:flex;
  margin-bottom:5px;
  justify-content: center;
  align-items:center;
  border: 2px solid black;

  &.bottom{
    margin-bottom:0;
  }
`