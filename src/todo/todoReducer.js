
const INITIAL_STATE = {

    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar Fatura do cartão',
        done: true
    },{
        _id: 2,
        description: 'Reunião com equipe às 08:00 horas.',
        done: false
    },{
        _id: 3,
        description: 'Consulta Médica',
        done: false
    }]

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}
