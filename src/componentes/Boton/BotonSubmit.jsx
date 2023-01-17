import styled from "styled-components";

function BotonSubmit({ 
    onClick,
    text
}) {

    const Button = styled.button`
        cursor:pointer;
        display: block;
        margin: auto;
        font-size:1.2rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight:600;
        color:white;
        background:navy;
        border:none;
        border-radius:0.5rem;
        padding: 1% 2%;
        transition: all 0.5s ease-in-out;

        &:hover{
            transition: all 0.5s ease-in-out;
            letter-spacing: 0.1em;
            border-radius: 15px;
            background: blue;
        }
`

    return (
        <Button 
            onClick={onClick}
            type="submit"
        >
            {text}
        </Button>
        
    )

}

export default BotonSubmit;