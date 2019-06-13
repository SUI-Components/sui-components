import axios from 'axios'
const urlClients = 'https://5ccbef39f47db80014010ca6.mockapi.io/clients'

const ORDERS = {
  ascend: 'asc',
  descend: 'desc'
}

export const getClientsFromServer = async ({sortBy, order, page, pageSize}) => {
  const {data} = await axios.get(urlClients, {
    params: {sortBy, order: ORDERS[order], page, limit: pageSize}
  })
  // const totalPages = Math.round(data.length / pageSize)
  return {data, pagination: {page, pageSize, totalPages: 10}}
}
