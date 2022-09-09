import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #e41515;
    color: #FFF;
    text-transform: uppercase;
    padding: 15px;
    font-size: 22px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`


const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error