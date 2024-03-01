import { ArrowRight } from "phosphor-react";
import { Container } from "./styles";

interface Props {
    titulo: string;
}

export function Subtitulo({ titulo }: Props) {
    return (
        <Container>
            <ArrowRight size={20} />
            <span>{titulo}</span>
        </Container>
    )
}
