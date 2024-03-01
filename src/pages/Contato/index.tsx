import { CardContato } from "../../components/CardContato";
import { Subtitulo } from "../../components/Subtitulo";
import { AreaAnuncieComAGente, AreaContato, Container } from "./styles";

import img_cosme from '../../assets/cosme.jpg'
import img_kelvyn from '../../assets/kelvyn.jpg'

export function Contato() {
    return (
        <Container>
            <Subtitulo titulo="DETALHES DOS CONTATOS" />
            <h1>Nossos Contatos</h1>
            <p>
                Entre em contato por telefone, e-mails e mensagens. 
                Nosso time responderá o mais breve possível. Ficamos 
                felizes em receber suas mensagens!
            </p>
            <br />
            <br />
            <AreaContato>
                <CardContato 
                    imagem={img_cosme}
                    nome="Cosme Telles"
                    email="cosmetelles@gmail.com"
                    numeroCelular="24999691395"
                />
                <CardContato 
                    imagem={img_kelvyn}
                    nome="Kelvyn Telles"
                    email="kelvyn.telles@gmail.com"
                    numeroCelular="24992281699"
                />
            </AreaContato>
            <AreaAnuncieComAGente>
                <h1>Anuncie com a gente!</h1>
            </AreaAnuncieComAGente>
        </Container>
    )
}

