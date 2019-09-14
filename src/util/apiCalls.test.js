import { getPopularGames } from './apiCalls';

describe('getPopularGame', () => {
  let mockGames;

  beforeEach(() => {
    mockGames = [{
      id: 42,
      name: "Catan",
      year_published: 1999,
      min_players: 2,
      max_players: 6,
      min_playtime: 30,
      max_playtime: 60,
      description_preview: "Gotta get all the sheep",
      image_url: "image",
      primary_publisher: "me",
      categories: [{id: "1234"}],
      rules_url: "rules link"
    }]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockGames)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    getPopularGames();

    expect(window.fetch).toHaveBeenCalledWith('https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=igbjxf77TF')
  });

  it('should return the array of popular games', () => {
    expect(getPopularGames()).resolves.toEqual(mockGames);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(getPopularGames()).rejects.toEqual(Error('Error fetching popular games'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(getPopularGames()).rejects.toEqual(Error('fetch failed'))
  });
});