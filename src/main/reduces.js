import { combineReducers } from 'redux'

const rootReduces = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar Fatura do cartão',
            done: true
        },{
            id: 2,
            description: 'Reunião com equipe às 08:00 horas.',
            done: false
        },{
            id: 3,
            description: 'Consulta Médica',
            done: false
        }]
    })
})


export default rootReduces