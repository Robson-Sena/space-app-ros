import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="https://github.com/Robson-Sena">
                        <img src="/imagens/sociais/github.png" alt="Github - Robson Sena" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/robsonsena-atendimento-ao-cliente">
                        <img src="/imagens/sociais/linkedin.png" alt="Linkedin - Robson Sena" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/nosbor_sena">
                        <img src="/imagens/sociais/instagram.png" alt="Instagram - Robson Sena" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Alura.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;