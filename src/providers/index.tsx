export const handleResponse = (response: any) => {
  const { data } = response
  if (response.status !== 'OK' && response.status !== 200 && response.status !== 201 && response.status !== 204) {
    const error = data && data
    return Promise.reject(error)
  }
  return data
}
