/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

const useRequests = (service, param) => {
  const [response, setResponse] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const callService = async value => {
      const res = await service(value)
      setResponse(res.data)
    }
    callService(param)
  }, [])

  useEffect(() => {
    if (response) setIsLoading(false)
  }, [response])

  return [response, isLoading]
}

export default useRequests
