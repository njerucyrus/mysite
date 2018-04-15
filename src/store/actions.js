import api from './config'
const actions = {

  fetchSkills({commit}) {
    api.get('/api/skills/')
      .then(response => {
        console.log(response)
        commit('setSkills', response.data)

      })
      .catch(error => {
        console.log(error)
      })
  },
  fetchProjects({commit}) {
    api.get('/api/projects/')
      .then(response => {
        console.log(response)
        commit('setProjects', response.data)

      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default actions
