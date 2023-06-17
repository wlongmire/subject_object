import { useState, useEffect } from 'react'
import './App.css'
import styled from 'styled-components'

import titleImg from './assets/videos/title.mp4'

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
  const [isMuted, setMute] = useState(true)
  const [active, setActive] = useState({
    "subject":null,
    "object":null
  })
  const [videoElement, setVideoElement] = useState(null)
  const types = ["i", "you", "we"]

  const stages = {
    "i":{
      "i":{
        styles:{
          bColor:"#EAE3D4", 
          tColor:"#0000000",
          poemBcolor:"red",
          poemTcolor:"white",
        },
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
        styles:{
          bColor:"#9F1F15", 
          tColor:"white",
          poemBcolor:"#ffffff",
          poemTcolor:"#000000",
        },
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
        styles:{
          bColor:"black", 
          tColor:"white",
          poemBcolor:"#C4B892",
          poemTcolor:"#000000",
        },
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
        styles:{
          bColor:"#fffff", 
          tColor:"#0000000",
          poemBcolor:"#7E7157",
          poemTcolor:"white",
        },
        video: you_i,
        poem: [
          "You am the monster",
          "the moment",
          "I say you are. Shot",
          "inside your open mouth",
          "as soon as the dark",
          "in its head",
          "showed its teeth.",
          "Wait outside forever",
          "yell your pride in",
          "the middle of the street, tired",
          "in love and begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
      "you":{
        styles:{
          bColor:"#fffff", 
          tColor:"#0000000",
          poemBcolor:"#ffffff",
          poemTcolor:"#000000",
        },
        video: you_you,
        poem: [
          "You am a monster",
          "the moment",
          "you say you are. Shooting",
          "yourself inside your open mouth",
          "as the dark",
          "in your head",
          "showed its teeth.",
          "You keep waiting forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
      "we":{
        styles:{
          bColor:"#CCB697", 
          tColor:"#0000000",
          poemBcolor:"black",
          poemTcolor:"white",
        },
        video: you_we,
        poem: [
          "You are the monster",
          "the moment",
          "we say you are. Shot",
          "inside my open mouth",
          "when the dark",
          "in our heads",
          "showed its teeth.",
          "You will wait outside forever",
          "yelling proud in",
          "the middle of the street, tired",
          "in love, and begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
    },
    "we":{
      "i":{
        styles:{
          bColor:"#dfa7a7", 
          tColor:"white",
          poemBcolor:"black",
          poemTcolor:"white",
        },
        video: we_i,
        poem: [
          "We are the monster",
          "the moment",
          "I say it. Shot",
          "in our open mouthes",
          "as soon as the dark",
          "in our heads",
          "showed its teeth.",
          "We must all wait for me forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love and begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
      "you":{
        styles:{
          bColor:"#82A3D3", 
          tColor:"#0000000",
          poemBcolor:"#ffffff",
          poemTcolor:"#000000",
        },
        video: we_you,
        poem: [
          "We are the monster",
          "the moment",
          "you say we am. Shot",
          "inside our open mouthes",
          "as soon as the dark",
          "in your head",
          "showed its teeth.",
          "We will wait for you forever",
          "yelling proud in",
          "the middle of the street, so tired",
          "and in love, begging",
          "for one mistake unremarkable and",
          "human at last.",
        ]
      },
      "we":{
        styles:{
          bColor:"#fffff", 
          tColor:"#0000000",
          poemBcolor:"black",
          poemTcolor:"white",
        },
        video: we_we,
        poem: [
          "We are the monsters.",
          "We are the moment.",
          "We shot ourselves in the dark.",
          "We will wait",
          "forever",
          "begging for",
          "love,",
          "remarkably human",
          "mistakes, so tired,",
          "the middle of the street.",
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

  function isActive() {
    return (active.object  !== null && active.subject !== null )
  }

  useEffect(()=> {
    if (isActive()){
      videoElement?.play()
    }
    
  }, [active])

  const currentPoem = (isActive()) ? stages[types[active.subject]][types[active.object]].poem : [
    "Subject, Object, Subject",
    "Object, Subject, Object",
    "Subject, Object, Subject",
    "Object, Subject, Object",
    "Subject, Object, Subject",
    "Object, Subject, Object",
    "Subject, Object, Subject",
    "Object, Subject, Object",
    "Subject, Object, Subject",
    "Object, Subject, Object",
    "Subject, Object, Subject",
    "Object, Subject, Object",
    "Subject, Object, Subject",
    "Object, Subject, Object",
    "Subject, Object, Subject",
    "Object, Subject, Object",
    "Subject, Object, Subject",
    "Object, Subject, Object",
    "Subject, Object, Subject",
    "Object, Subject, Object",
    "Subject, Object, Subject",
  ]

  const currentStage = (isActive()) ? stages[types[active.subject]][types[active.object]] : null
  const currentVideo = (currentStage) ? currentStage.video : titleImg

  const toggleMute = () => {
    setMute(!isMuted);
  }

  return (
    <Container 
      bColor={currentStage?.styles.bColor || "#ffffff"}
      tColor={currentStage?.styles.tColor || "#000000"}
    >
      <Header>
        {/* <span><a href="https://www.instagram.com/mixlitphilly/">_mixlit</a></span>
        <span>video by <a href="https://www.pexels.com/@cottonbro">cottonbro studio</a></span> */}
      </Header>

      <SubObjContainer>
        <Title poemTcolor={currentStage?.styles.poemTcolor || "#000000"}>
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

          <DisplayContainer
            poemBcolor={currentStage?.styles.poemBcolor || "#ffffff"}
            poemTcolor={currentStage?.styles.poemTcolor || "#000000"}
          >
            <Video src={currentVideo} muted={isMuted} ref={setVideoElement} loop/>
            <PoemDisplay>
              {
                currentPoem.map((line,idx) => <p key={idx}>{line}</p>)
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
      </SubObjContainer>

      <Footer>
        <span><a href="https://www.instagram.com/mixlitphilly/">_mixlit</a> 2023</span>
        <div>
          <button onClick={toggleMute} className="btn btn-outline-primary mx-1">{(isMuted ? "hear" :"mute")}</button>
          <button onClick={()=>{
            setActive({
              "subject":null,
              "object":null
            })
          }} className="btn btn-outline-primary mx-1">reset</button>
        </div>
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
  background: ${props => props.bColor ? props.bColor : "white"};
  color: ${props => props.tColor ? props.tColor : "black"};
  height: 100vh;
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
    border-bottom: 3px ${props => props.poemTcolor ? props.poemTcolor : "black"} dotted;
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
    padding: 1em 5em;
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
  background: ${props => props.poemBcolor ? props.poemBcolor : "white"};
  color: ${props => props.poemTcolor ? props.poemTcolor : "black"};
`

const PoemDisplay = styled.div`
  font-family: 'EB Garamond', serif;
  font-size: 1.2em;
  padding: 0 1em;
  display:flex;
  flex-direction:column;
  justify-content: center;
  
  p {
    margin:0;
  }
`


const Button = styled.div`
  font-family: 'EB Garamond', serif;
  width: 9em;
  font-size: 1.6em;
  display:flex;
  margin-bottom:5px;
  justify-content: center;
  align-items:center;
  border: 2px solid black;

  &.bottom{
    margin-bottom:0;
  }
`