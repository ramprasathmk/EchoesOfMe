import React from 'react'
import { ImChrome, ImGithub } from 'react-icons/im'
import styled from 'styled-components'
import {Row, Col} from 'react-bootstrap'
import { FaAtom } from 'react-icons/fa'
import { SiVisualstudioappcenter } from 'react-icons/si'

const StyledToolStack = styled.div`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: none;
    }

    h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    justify-content: center;
    justify-items: center;
    }
    
    p {
        --imp-text-color: #c77 !important;// #c770f0 !important;
        -webkit-text-fill-color: var(--imp-text-color) !important;
        font-size: 1.3rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    ts-container {
        
    }
`

function Tools() {
  return (
    <StyledToolStack>
        <h1>
            Tools
        </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cum laboriosam placeat iusto? Esse laboriosam quae, eaque tempore reprehenderit tenetur asperiores non sed aspernatur labore, explicabo odio ea, temporibus ipsa?
        </p>
        <div className="ts-container">
            <Row>
                <Col> <FaAtom/> </Col>
                <Col> <ImChrome/> </Col>
            </Row>
            <Row>
                <Col> <SiVisualstudioappcenter/> </Col>
                <Col> <ImGithub/> </Col>
            </Row>
        </div>
    </StyledToolStack>
  )
}

export default Tools