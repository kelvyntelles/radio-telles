import { Container } from "./styles";

interface Props {
    imagem: string;
    titulo: string;
}

export function CardFuncionario({ imagem, titulo }: Props) {
    return (
        <Container>
            <img src={imagem} alt="nome do funcionario" />
            <span>
                {titulo}
            </span>
        </Container>
    )
}