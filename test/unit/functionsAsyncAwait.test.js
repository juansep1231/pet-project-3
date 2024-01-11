const {
  getFilteredsStargazers,
  getTopFive,
  sortDataByDate,
  getSumOfReposStars,
  getReposMoreThanFiveStars,
  getLastUpdatedRepos,
} = require("../../scripts/functionsAsyncAwait.js");

const { data } = require("../fixtures/data.js");

describe("getFilteredsStargazers", () => {
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
      {
        name: "repo9",
        stargazers_count: 6,
        updated_at: "2028-11-18T12:00:00Z",
      },
      {
        name: "repo10",
        stargazers_count: 8,
        updated_at: "2029-11-18T12:00:00Z",
      },
    ]);
  });

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
      {
        name: "repo9",
        stars: 6,
      },
      {
        name: "repo10",
        stars: 8,
      },
    ]);
  });
});

describe("getLastUpdatedRepos", () => {
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
  });

  test("returns an array with repos sorted in descending order based on the date", () => {
    expect(sortDataByDate(data)).toEqual([
      {
        name: "repo10",
        stargazers_count: 8,
        updated_at: "2029-11-18T12:00:00Z",
      },
      {
        name: "repo9",
        stargazers_count: 6,
        updated_at: "2028-11-18T12:00:00Z",
      },
      {
        name: "repo8",
        stargazers_count: 5,
        updated_at: "2027-11-18T12:00:00Z",
      },
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

  test("returns an array with the name and the date of the latest updated repos", () => {
    expect(getLastUpdatedRepos(data)).toEqual([
      {
        name: "repo10",
        updated_date: "2029-11-18T12:00:00Z",
      },
      {
        name: "repo9",
        updated_date: "2028-11-18T12:00:00Z",
      },
      {
        name: "repo8",
        updated_date: "2027-11-18T12:00:00Z",
      },
      {
        name: "repo7",
        updated_date: "2026-11-18T12:00:00Z",
      },
      {
        name: "repo6",
        updated_date: "2025-11-18T12:00:00Z",
      },
    ]);
  });
});

describe("getSumOfReposStars", () => {
  test("returns the sum of all the repos stars", () => {
    expect(getSumOfReposStars(data)).toEqual(61);
  });
});
