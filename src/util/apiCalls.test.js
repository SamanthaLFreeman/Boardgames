import { getPopularGames, getAllCategories, searchGames, randomGame } from './apiCalls';

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

describe('getAllCategories', () => {
  let mockCategories;

  beforeEach(() => {
    mockCategories = [{
      id: "hBqZ3Ar4RJ",
      name: "Abstract"
    }]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCategories)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    getAllCategories();

    expect(window.fetch).toHaveBeenCalledWith('https://www.boardgameatlas.com/api/game/categories?client_id=igbjxf77TF')
  });

  it('should return the array of all categories with ids', () => {
    expect(getAllCategories()).resolves.toEqual(mockCategories);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(getAllCategories()).rejects.toEqual(Error('Error fetching categories'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(getAllCategories()).rejects.toEqual(Error('fetch failed'))
  });
});

describe('searchGames', () => {
  let mockGames;
  let mockSearch;

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
      categories: [{ id: "1234" }],
      rules_url: "rules link"
    }]
    mockSearch = "Catan"

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockGames)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    searchGames(mockSearch);

    expect(window.fetch).toHaveBeenCalledWith('https://www.boardgameatlas.com/api/search?name=Catan&client_id=igbjxf77TF')
  });

  it('should return the array of searched games', () => {
    expect(searchGames(mockSearch)).resolves.toEqual(mockGames);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(searchGames()).rejects.toEqual(Error('Error fetching games'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(searchGames(mockSearch)).rejects.toEqual(Error('fetch failed'))
  });
});

describe('randomGame', () => {
  let mockGame;

  beforeEach(() => {
    mockGame = {
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
      categories: [{ id: "1234" }],
      rules_url: "rules link"
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockGame)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    randomGame(mockGame);

    expect(window.fetch).toHaveBeenCalledWith('https://www.boardgameatlas.com/api/search?random=true&client_id=igbjxf77TF')
  });

  it('should return the array of searched games', () => {
    expect(randomGame()).resolves.toEqual(mockGame);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(randomGame()).rejects.toEqual(Error('Error fetching game'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(randomGame()).rejects.toEqual(Error('fetch failed'))
  });
});