import axios from 'axios'
const requestOptions = {
  headers: { 'X-API-Key': 'u7PYcEh6IDQc68dzkjJf3mxS9sCWYQsiPPhGyzmd' },
  redirect: 'follow'
}

const congressService = async ({ chamber, congress }) => {
  const url = `https://api.propublica.org/congress/v1/${congress}/${chamber}/members.json`
  return await axios.get(url, requestOptions)
}

const getCongressPersonById = async id => {
  const url = `https://api.propublica.org/congress/v1/members/${id}.json`
  return await axios.get(url, requestOptions)
}

export { congressService, getCongressPersonById }
