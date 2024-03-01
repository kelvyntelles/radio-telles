import { AreaContato, AreaEmail, AreaLogoAndNomeContato, Container } from "./styles";
import { EnvelopeSimple, WhatsappLogo } from 'phosphor-react'

interface Props {
    imagem: string;
    nome: string;
    email: string;
    numeroCelular: string;
}

export function CardContato({ imagem, nome, email, numeroCelular }: Props) {
    return (
        <Container>
            <AreaLogoAndNomeContato>
                <img src={imagem} alt="imagem do funcionario da empresa" />
                <span>{nome}</span>
            </AreaLogoAndNomeContato>
            <AreaContato>
                <AreaEmail>
                    <EnvelopeSimple size={32} />
                    <span>{email}</span>
                </AreaEmail>
                <a href={`https://whatsa.me/55${numeroCelular}`} target="_blank">
                    <WhatsappLogo size={32} />
                    Iniciar Conversa
                </a>
            </AreaContato>
        </Container>
    )
} 
