import { Radio } from "phosphor-react";
import { Button, Container, Logo } from "./styles";
import { useLocation, Link } from 'react-router-dom'

export function Header() {
    let local = useLocation();

    function handleGoRadioTelles() {
        window.location.href = 'https://radiotelles.com/'
    }

    return (
        <header>
            <Container>
                <Logo onClick={handleGoRadioTelles}>
                    <Radio size={32} />
                    <span><strong>Rádio</strong>Telles</span>
                </Logo>
                { local.pathname === '/' ?
                    <Link to="/contato">
                        <Button>Contato</Button>
                    </Link>
                    :
                    <Link to="/">
                        <Button>Empresa</Button>
                    </Link>
                }
            </Container>
        </header>
    )
}