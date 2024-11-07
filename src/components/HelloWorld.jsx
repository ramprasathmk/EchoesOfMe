import React from 'react'
import styled from 'styled-components'

const HeadingH1 = styled.div`
    text-align: center;
    justify-content: center;
    justify-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;
`

function HelloWorld() {
  return (
    <>
        <div>
            <br />
            <HeadingH1>
                Hello World
            </HeadingH1>
        </div>
    </>
  )
}

export default HelloWorld