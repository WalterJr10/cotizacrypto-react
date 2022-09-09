import styled from "@emotion/styled"

const Conteiner = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 30px;

`

const Imagen = styled.img`
    display: block;
    width: 150px;
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;

    }
`
const Precio = styled.p`
        font-size: 25px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado

    return (
        <Conteiner>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt='Imagen criptomoneda'
            />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima Actualización: <span>{LASTUPDATE}</span></Texto>
            </div>

        </Conteiner>
    )
    }

export default Resultado