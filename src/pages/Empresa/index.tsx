import redacaoJornal from '../../assets/redacao-jornal.jpg'
import { CardFuncionario } from './components/CardFuncionario'
import { Subtitulo } from '../../components/Subtitulo'
import { Valor } from './components/Valor'
import { AreaNossoTime, AreaNossosValores, AreaQuemSomos, NossoTime, NossosValores } from './styles'

import img_kelvyn from '../../assets/kelvyn.jpg'
import img_cosme from '../../assets/cosme.jpg'
import img_patrick from '../../assets/patrick.jpg'
import img_buiu from '../../assets/buiu.jpg'

export function Empresa() {
    return (
        <>
            <AreaQuemSomos>
                <img src={redacaoJornal} alt="" />
                <div>
                    <Subtitulo titulo='QUEM SOMOS NÓS' />
                    <h1>Nossa Missão: Compromisso com a Informação</h1>
                    <p>
                        Bem-vindo à Rádio Telles, onde acreditamos que informar é mais do 
                        que um dever, é uma paixão e um compromisso que impulsiona cada 
                        aspecto do que fazemos. Nosso compromisso com a informação vai além 
                        das manchetes e das notícias em destaque, é uma promessa de excelência 
                        jornalística, integridade e responsabilidade.
                    </p>
                    <p>
                        Aqui, na Rádio Telles, buscamos constantemente trazer informações 
                        precisas, imparciais e relevantes para nossos leitores, seja 
                        através do nosso jornal impresso, nosso site de notícias online 
                        ou nossa página no Instagram. Acreditamos no poder da informação 
                        para educar, capacitar e inspirar mudanças positivas em nossa 
                        comunidade e além.
                    </p>
                    <p>
                        Seja bem-vindo à Rádio Telles, onde a informação é mais do que um 
                        dever. É nossa paixão e nossa missão.
                    </p>
                </div>
            </AreaQuemSomos>
            <AreaNossosValores>
                <Subtitulo titulo='PILARES FUNDAMENTAIS' />
                <h1>Nossos Valores</h1>
                <br />
                <br />
                <NossosValores>
                    <Valor numero='01' titulo='Integridade' />
                    <Valor numero='02' titulo='Respeito' />
                    <Valor numero='03' titulo='Transaparência' />
                    <Valor numero='04' titulo='Inovação' />
                    <Valor numero='05' titulo='Responsabilidade' />
                    <Valor numero='06' titulo='Paixão pela Informação' />
                </NossosValores>
            </AreaNossosValores>

            <AreaNossoTime>
                <Subtitulo titulo='RESPONSÁVEIS POR ESSA MISSÃO' />
                <h1>Nosso Time</h1>
                <br />
                <br />
                <NossoTime>
                    <CardFuncionario imagem={img_cosme} titulo='Cosme Telles' />
                    <CardFuncionario imagem={img_kelvyn} titulo='Kelvyn Telles' />
                    <CardFuncionario imagem={img_patrick} titulo='Patrick Telles' />
                    <CardFuncionario imagem={img_buiu} titulo='Wesley Telles' />
                </NossoTime>
            </AreaNossoTime>
        </>
    )
}

