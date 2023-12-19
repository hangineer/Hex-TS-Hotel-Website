const { VITE_API_PATH } = import.meta.env
interface requestFormat {
  method:string,
  headers: {
    'Content-Type': string,
    'Authorization': string
  },
  body?: any
}

export default function () {
  async function _fetch(url: string, method:string = 'GET', body = {}) {
    const data: requestFormat = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }
    if(method !== 'GET') {
      data.body = JSON.stringify(body)
    }
    const res = await fetch(`${VITE_API_PATH}${url}`, data)
    return res.json()
  }
  return {
    _fetch
  }
}