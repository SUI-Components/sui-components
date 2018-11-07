export const processPage = ({page, totalPages}) => {
  if (page < 1) return 1
  if (page > totalPages) return totalPages
  return page
}

const highRange = ({page: _page, processedPage, totalPages, showPages}) => {
  const page = processedPage || processPage({page: _page, totalPages})
  const high = page + (showPages - (page % showPages))
  if (page % showPages) return high < totalPages ? high : totalPages
  return page
}

const lowRange = ({page: _page, processedPage, totalPages, showPages}) => {
  const page = processedPage || processPage({page: _page, totalPages})
  if (page % showPages)
    return page + (showPages - (page % showPages)) - showPages
  return page - showPages
}

export const prevPage = ({
  page: _page,
  processedPage,
  compressed,
  totalPages,
  showPages
}) => {
  const page = processedPage || processPage({page: _page, totalPages})
  const _range = range({page, showPages, totalPages})
  if (compressed) return page !== 1 ? page - 1 : null
  else return page - showPages > 0 ? [..._range].shift() - 1 : null
}

export const nextPage = ({
  page: _page,
  processedPage,
  compressed,
  totalPages,
  showPages
}) => {
  const page = processedPage || processPage({page: _page, totalPages})
  const _range = range({page, showPages, totalPages})
  const _highRange = highRange({page, showPages, totalPages})
  if (compressed) return page !== totalPages ? page + 1 : null
  else return _highRange < totalPages ? [..._range].pop() + 1 : null
}

export const range = ({page: _page, processedPage, totalPages, showPages}) => {
  const page = processedPage || processPage({page: _page, totalPages})
  const _lowRange = lowRange({page, showPages})
  const _highRange = highRange({page, totalPages, showPages})
  const rangeNumItems =
    _highRange === totalPages ? totalPages - _lowRange : showPages
  return [...Array.from(new Array(rangeNumItems), (_, i) => _lowRange + i + 1)]
}
