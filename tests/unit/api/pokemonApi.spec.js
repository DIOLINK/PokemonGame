import pokemonApi from '@/api/pokemonApi'

describe('Test in pokemonApi', () => {
  it('Debe de tener axios configurada la ruta correcta a la API', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    expect(pokemonApi.defaults.baseURL).toBe(url)
   })
})
