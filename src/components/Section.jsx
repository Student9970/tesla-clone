import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>

            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>

            <Buttons>

                <Fade bottom>
                    <ButtonGroup>

                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>

                        {
                            props.rightBtnText &&

                            // If there is rightBtnText present then only show the right button

                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>
                        }

                    </ButtonGroup>
                </Fade>

                <DownArrow src="/images/down-arrow.svg" alt="down arrow" />
            </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    position: inherit;
    z-index: -10;
    width: 100vw;
    height: 100vh;
    background: url('./images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("./images/${props.bgImage}")`};
    scroll-snap-align: center;
`

const ItemText = styled.div`
      padding-top: 15vh;
      text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: 0.65;
    color: #000;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`
