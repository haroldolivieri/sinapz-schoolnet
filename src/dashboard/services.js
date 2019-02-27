import { dashboardIndexes, dashboardAssesments } from './mock'

export const getDashboardIndexes = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(dashboardIndexes)
    }, 2000))
}

export const getDashboardAssesments = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(dashboardAssesments)
    }, 2000))
}
