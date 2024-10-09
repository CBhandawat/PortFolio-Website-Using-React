import React from 'react'
import styled from 'styled-components'
import Wave from 'react-wavify'
import TextTransition, { presets } from "react-text-transition";
import { Link as LinkS } from 'react-scroll'
import { small } from '../responsive';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 9rem;
${small({ gap: "2rem" })}
`
export const NavLinks = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
    color: white;

`

const MainDiv = styled.div`
flex: 1;
`

const Container = styled.div`
display: flex;
padding: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:9rem;
text-align: center;
${small({ marginTop: "5rem" })}
`

const HeaderContainer = styled.div`
color:#10B981;
font-size: 4rem;
font-weight: 700;
text-align: center;
`
const SContainer = styled.div`
font-size: 1.5rem;
font-weight: 450;
`
const TContainer = styled.div`
font-size: 2.5rem;
font-weight: 700;
text-align: center;
color:#10B981;
`

export default function Hero() {
    const [index, setIndex] = React.useState(0);
    const TEXTS = ["Python", "Flask", "NLP", "AI/ML", "Streamlit", "LangChain", "JAVA", "Spring Boot", "SQL/NoSQL", "ReactJS", "JavaScript", "HTML/CSS"];

    React.useEffect(() => {

        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            1500
        );
        return () => clearTimeout(intervalId);

    }, []);
    return (
        <div id="hero">
            <MainContainer>

                <MainDiv>
                    <Container className="text-justify" >
                        <SContainer > <p>Hi and Welcome to</p></SContainer>
                        <HeaderContainer> My PortFolio Website </HeaderContainer>
                        <SContainer ><p >I am your go-to code craftsman, turning ideas into seamless solutions with</p></SContainer>
                        <TContainer>
                            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                        </TContainer>

                    </Container>
                </MainDiv >

                <MainDiv className="d-flex flex-column justify-content-end " >
                    <div>
                        <Wave fill='#10B981'
                            paused={false}
                            options={{
                                height: 20,
                                amplitude: 20,
                                speed: 0.50,
                                points: 3
                            }}
                        />
                    </div>
                </MainDiv>
            </MainContainer>
        </div>
    )
}
