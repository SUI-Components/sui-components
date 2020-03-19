import axios from 'axios'
const urlClients = 'https://5ccbef39f47db80014010ca6.mockapi.io/clients'

const ORDERS = {
  ascend: 'asc',
  descend: 'desc'
}

export const getClientsFromServer = async ({sortBy, order}) => {
  const {data} = await axios.get(urlClients, {
    params: {sortBy, order: ORDERS[order]}
  })
  return data
}
