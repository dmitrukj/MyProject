export function fetchMostRatedRepositories(filters = {}) {
  const {
    date = "2018-09-30",
    sortBy = "stars",
    order = "desc",
    page = 1,
    perPage = 10,
  } = filters;
  const dateFilter = `created:">${date}"`;

  const base = new URL("https://api.github.com/search/repositories");
  const searchParams = new URLSearchParams({
    q: dateFilter,
    sort: sortBy,
    order: order,
    page: page,
    per_page: perPage,
  });
  const url = `${base}?${searchParams}`;

  return fetch(url).then((res) => res.json());
}
