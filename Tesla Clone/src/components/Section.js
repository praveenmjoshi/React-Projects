import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
    const { title, description, backgroundImg, leftBtnText, rightBtnText } = props
    return (
        <Wrap bgImage={backgroundImg}>

            <Fade bottom>

                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>
                        { rightBtnText && 
                            <RightButton>
                                { rightBtnText }
                            </RightButton>
                        }
                        
                    </ButtonGroup>
                </Fade>
                <DownArray src="/images/down-arrow.svg" />

            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    z-index: 1;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column
    }
`

const LeftButton = styled.div`
    background-color: rgba(24, 27, 33);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: rgba(24, 27, 33);
`;

const DownArray = styled.img`
    magin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``