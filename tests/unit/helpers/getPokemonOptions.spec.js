import getPokemonOptions, {getPokemons, getPokemonNames} from '@/helpers/getPokemonOptions';
describe('Test in helpers', () => {
  it('Debe retornar un arreglo con 4 pokemons con nombres y id desordenado', async() => {
    const respTest = [
      { 
        name: expect.any(String),
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String),
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String),
        id: expect.any(Number) 
      },
      { 
        name: expect.any(String),
        id: expect.any(Number) 
      },
    ]
    const res = await getPokemonOptions()
    expect(res.length).toBe(4)
    console.log('res :>> ', res);
    expect(res).toEqual(respTest)
  })
  it('Debe de retornar un arreglo de numeros', () => {
    const res = getPokemons()
    console.log('getPokemons() :>> ', res);
    expect(res.length).toBe(650)
    expect(res[0]).toBe(1)
    expect(res[649]).toBe(650)
    expect(res).toEqual(expect.any(Array))
  })
  it('Debe retornar un arreglo con los primeros 4', async() => {
    const idArr = [1,2,3,4]
    const respTest = [
      { name: 'bulbasaur',
        id: 1 
      },
      { name: 'ivysaur',
        id: 2 
      },
      { name: 'venusaur',
        id: 3 
      },
      { name: 'charmander',
        id: 4 
      },
    ]
    const res = await getPokemonNames(idArr)
    console.log('res :>> ', res);
    expect(res).toEqual(respTest)
    expect(res.length).toBe(4)
  })
});
