import { useCallback } from 'react'
import {googleSingInService} from '../services/googleAuth'

export default () => useCallback(async () => {
  try {
    const googleAuth = await googleSingInService()
    return googleAuth
  } catch (error) {
    console.warn(error)
  }
},[])