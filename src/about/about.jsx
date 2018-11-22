import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div>
        <PageHeader name={'Sobre'} small={'nós'}/>

        <div className='row text-center '>
            <div className='col-md-4'>
                <h2>Nossa História</h2>
                <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                    de tipos e os embaralhou para fazer um livro de modelos de tipos
                </p>
            </div>

            <div className='col-md-4'>
                <h2>Sobre Nós</h2>
                <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                    de tipos e os embaralhou para fazer um livro de modelos de tipos
                </p>
            </div>

            <div className='col-md-4'>
                <h2>Carreira</h2>
                <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                    de tipos e os embaralhou para fazer um livro de modelos de tipos
                </p>
            </div>

        </div>


    </div>
)
