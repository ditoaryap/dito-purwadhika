import styled from 'styled-components'

// const StyledH1 = styled.h1`
//     color: red;
//     font-size: 32px
//     `;

function Home ({name, email, StyledH1}) {
    return (
        <div>
            <StyledH1>Hello ini home</StyledH1>
            <h2 style={{ backgroundColor: 'red'}}> {name} {email}</h2>
            <h2>{email}</h2>
        </div>
    )
}

export default Home