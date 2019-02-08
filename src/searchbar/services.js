export const fetchSearch = input =>
    new Promise(resolve => {
        console.log(input)
        console.log(filterIt(searchResponse, input))
        resolve(filterIt(searchResponse, input))
    })

// method to mimic search made on backend
function filterIt(arr, searchKey) {

    if (searchKey.length == 0) {
        return []
    }

    return arr.filter(function(obj) {
        return Object.keys(obj).some(function(key) {
            return obj[key].toLowerCase().includes(searchKey.toLowerCase())
        })
    })
}

const searchResponse = [
    {
        id: '1',
        type: 'TEACHER', //can be TEACHER, BRANCH or STUDENT
        name: 'Osnir',
        description: 'Professor de Geografia',
        photoUrl: ''
    },
    {
        id: '1',
        type: 'BRANCH',
        name: 'Tijuca',
        description: 'Filial da Tijuca',
        photoUrl: ''
    },
    {
        id: '1',
        type: 'STUDENT',
        name: 'Enzo',
        description: 'Aluno do primeiro ano - ensino fundamental',
        photoUrl: ''
    },
    {
        id: '2',
        type: 'BRANCH',
        name: 'Jacarépaguá',
        description: 'Filial de Jacarépaguá',
        photoUrl: ''
    },
    {
        id: '2',
        type: 'TEACHER',
        name: 'Joel',
        description: 'Professor de Matemática',
        photoUrl: ''
    },
    {
        id: '2',
        type: 'STUDENT',
        name: 'Valentina',
        description: 'Aluna do segundo ano - ensino médio',
        photoUrl: ''
    }
]
