export const getSchoolnetInfo = () =>
  new Promise(resolve => {
    resolve({
      name: 'Escola Elite',
      description: 'Curso/Escola Elite',
      photo:
                'https://static.wirtualnemedia.pl/media/top/SzkoladlaElity-655.jpg'
    })
  })

export const getMenuItems = () =>
  new Promise(resolve => {
    resolve(items)
  })

const items = [
  {
    name: 'Dashboard',
    icon: 'dashboard.svg',
    path: '/'
  },
  {
    name: 'Agenda',
    icon: 'undefined.svg',
    path: '/agenda'
  },
  {
    name: 'Filiais',
    icon: 'branchs.svg',
    path: '/branchs'
  },
  {
    name: 'Professores',
    icon: 'teachers.svg',
    path: '/teachers'
  },
  {
    name: 'Variáveis da prova',
    icon: 'variables.svg',
    path: '/assessment-variables'
  },
  {
    name: 'Matérias disponiveis',
    icon: 'undefined.svg',
    path: '/subjects'
  },
  {
    name: 'Segmentos',
    icon: 'undefined.svg',
    path: '/segments'
  },
  {
    name: 'Ajuda',
    icon: 'undefined.svg',
    path: '/help'
  }
]
