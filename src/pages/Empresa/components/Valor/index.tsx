import { Container } from "./styles";

interface Props {
    numero: string;
    titulo: string;
}

export function Valor({ numero, titulo }: Props) {
    return (
        <Container>
            <div>
                {numero}
            </div>
            <span>
                {titulo}
            </span>
        </Container>
    )
}
