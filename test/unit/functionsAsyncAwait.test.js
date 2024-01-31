const {
  getFilteredsStargazers,
  getTopFive,
  sortDataByDate,
  getSumOfReposStars,
  getReposMoreThanFiveStars,
  getLastUpdatedRepos,
} = require("../../scripts/functionsAsyncAwait.js");

const { data: completeData } = require("../fixtures/completeData.js");
const { data2 } = require("../fixtures/incompleteData.js");

beforeEach(() => {
  data = [...completeData];
});

describe("getReposMoreThanFiveStars", () => {
  describe("When an array is valid", () => {
    test("returns an array with repos with more than 5 stars", () => {
      expect(getFilteredsStargazers(data)).toEqual([
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2020-11-18T12:00:00Z",
        },
        {
          name: "repo5",
          stargazers_count: 9,
          updated_at: "2024-11-18T12:00:00Z",
        },
        {
          name: "repo6",
          stargazers_count: 10,
          updated_at: "2025-11-18T12:00:00Z",
        },
      ]);
    }),
      test("returns an array with the name and the stars of repos with more than 5 stars", () => {
        expect(getReposMoreThanFiveStars(data)).toEqual([
          {
            name: "repo1",
            stars: 10,
          },
          {
            name: "repo5",
            stars: 9,
          },
          {
            name: "repo6",
            stars: 10,
          },
        ]);
      });
  }),
    //TEST FOR EMPTY, UNDEFINED AND NULL ARRAYS

    describe("When an array is empty", () => {
      test("returns an empty array", () => {
        expect(getReposMoreThanFiveStars([])).toEqual([]);
      });
    });

  describe("When an array is undefined", () => {
    test("returns an empty array", () => {
      expect(getReposMoreThanFiveStars(undefined)).toEqual([]);
    });
  });

  describe("When an array is null", () => {
    test("returns an empty array", () => {
      expect(getReposMoreThanFiveStars(null)).toEqual([]);
    });
  });
});

describe("getLastUpdatedRepos", () => {
  describe("When an array is valid", () => {
    test("returns an array with data sorted by date", () => {
      expect(sortDataByDate(data)).toEqual([
        {
          name: "repo7",
          stargazers_count: 4,
          updated_at: "2026-11-18T12:00:00Z",
        },
        {
          name: "repo6",
          stargazers_count: 10,
          updated_at: "2025-11-18T12:00:00Z",
        },
        {
          name: "repo5",
          stargazers_count: 9,
          updated_at: "2024-11-18T12:00:00Z",
        },
        {
          name: "repo4",
          stargazers_count: 3,
          updated_at: "2023-11-18T12:00:00Z",
        },
        {
          name: "repo3",
          stargazers_count: 1,
          updated_at: "2022-11-18T12:00:00Z",
        },
        {
          name: "repo2",
          stargazers_count: 5,
          updated_at: "2021-11-18T12:00:00Z",
        },
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2020-11-18T12:00:00Z",
        },
      ]);
    }),
      test("returns an array with the name and the date of the latest updated repos", () => {
        expect(getLastUpdatedRepos(data)).toEqual([
          {
            name: "repo7",
            updated_date: "2026-11-18T12:00:00Z",
          },
          {
            name: "repo6",
            updated_date: "2025-11-18T12:00:00Z",
          },
          {
            name: "repo5",
            updated_date: "2024-11-18T12:00:00Z",
          },
          {
            name: "repo4",
            updated_date: "2023-11-18T12:00:00Z",
          },
          {
            name: "repo3",
            updated_date: "2022-11-18T12:00:00Z",
          },
        ]);
      }),
      test("returns an array with the top five repos", () => {
        expect(getTopFive(data)).toEqual([
          {
            name: "repo1",
            stargazers_count: 10,
            updated_at: "2020-11-18T12:00:00Z",
          },
          {
            name: "repo2",
            stargazers_count: 5,
            updated_at: "2021-11-18T12:00:00Z",
          },
          {
            name: "repo3",
            stargazers_count: 1,
            updated_at: "2022-11-18T12:00:00Z",
          },
          {
            name: "repo4",
            stargazers_count: 3,
            updated_at: "2023-11-18T12:00:00Z",
          },
          {
            name: "repo5",
            stargazers_count: 9,
            updated_at: "2024-11-18T12:00:00Z",
          },
        ]);
      }),
      test("returns an array with data sorted by date", () => {
        expect(sortDataByDate(data)).toEqual([
          {
            name: "repo7",
            stargazers_count: 4,
            updated_at: "2026-11-18T12:00:00Z",
          },
          {
            name: "repo6",
            stargazers_count: 10,
            updated_at: "2025-11-18T12:00:00Z",
          },
          {
            name: "repo5",
            stargazers_count: 9,
            updated_at: "2024-11-18T12:00:00Z",
          },
          {
            name: "repo4",
            stargazers_count: 3,
            updated_at: "2023-11-18T12:00:00Z",
          },
          {
            name: "repo3",
            stargazers_count: 1,
            updated_at: "2022-11-18T12:00:00Z",
          },
          {
            name: "repo2",
            stargazers_count: 5,
            updated_at: "2021-11-18T12:00:00Z",
          },
          {
            name: "repo1",
            stargazers_count: 10,
            updated_at: "2020-11-18T12:00:00Z",
          },
        ]);
      });
  }),
    describe("When an array is filled with just 3 items", () => {
      test("returns the complete array", () => {
        expect(getTopFive(data2)).toEqual([
          {
            name: "repo1",
            stargazers_count: 10,
            updated_at: "2020-11-18T12:00:00Z",
          },
          {
            name: "repo2",
            stargazers_count: 5,
            updated_at: "2021-11-18T12:00:00Z",
          },
          {
            name: "repo3",
            stargazers_count: 1,
            updated_at: "2022-11-18T12:00:00Z",
          },
        ]);
      });
    }),
    //TEST FOR EMPTY, UNDEFINED AND NULL ARRAYS

    describe("When an array is empty", () => {
      test("returns an empty array", () => {
        expect(getLastUpdatedRepos([])).toEqual([]);
      });
    }),
    describe("When an array is undefined", () => {
      test("returns an empty array", () => {
        expect(getLastUpdatedRepos(undefined)).toEqual([]);
      });
    }),
    describe("When an array is null", () => {
      test("returns an empty array", () => {
        expect(getLastUpdatedRepos(null)).toEqual([]);
      });
    });
});

describe("getSumOfReposStars", () => {
  describe("When an array is valid", () => {
    test("returns the sum of all the repos stars", () => {
      expect(getSumOfReposStars(data)).toEqual(42);
    });
  });

  describe("When an array is empty", () => {
    test("returns an empty array", () => {
      expect(getSumOfReposStars([])).toEqual([]);
    });
  });

  describe("When an array is undefined", () => {
    test("returns an empty array", () => {
      expect(getSumOfReposStars(undefined)).toEqual([]);
    });
  });

  describe("When an array is null", () => {
    test("returns an empty array", () => {
      expect(getSumOfReposStars(null)).toEqual([]);
    });
  });
});
