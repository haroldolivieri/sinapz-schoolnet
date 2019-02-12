import { dashboardIndices, dashboardAvaliacoes } from './mock'


export const getDashboardIndices = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(dashboardIndices)
    }, 2000))
}

export const getDashboardAvaliacoes = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(dashboardAvaliacoes)
    }, 2000))
}