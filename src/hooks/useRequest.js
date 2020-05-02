/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

const useRequests = (service, param) => {
  const [response, setResponse] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [newParams, setNewParams] = useState()

  useEffect(() => {
    const callService = async value => {
      const res = await service(value)
      setResponse(res.data)
    }
    setIsLoading(true)
    callService(param)
  }, [newParams])

  useEffect(() => {
    if (response) {
      setIsLoading(false)
    }
  }, [response])

  return [response, isLoading, setNewParams]
}

export default useRequests
