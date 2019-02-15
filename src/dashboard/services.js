import { dashboardIndices, dashboardAvaliacoes } from './mock'


export const getDashboardIndices = async () => {
    return new Promise(resolve => setTimeout(() => {
        console.log('Services: getDashboardIndices')
        resolve(dashboardIndices)
    }, 2000))
}

export const getDashboardAvaliacoes = async () => {
    return new Promise(resolve => setTimeout(() => {
        console.log('Services: getDashboardAvaliacoes')
        resolve(dashboardAvaliacoes)
    }, 2000))
}