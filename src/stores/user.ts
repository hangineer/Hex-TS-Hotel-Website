import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { userInfo } from '../interface/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<userInfo>({} as userInfo)
  const setUserInfo = (userInfo: userInfo) => {
    user.value = userInfo
    localStorage.setItem('user', JSON.stringify(userInfo))
  }
  const clearUserInfo = () => {
    user.value = {} as userInfo
    localStorage.removeItem('user')
  }
  const getUserInfo = (): userInfo => {
    const userData = localStorage.getItem('user')
    if (userData) {
      user.value = JSON.parse(userData)
    }
    return user.value
  }

  return {
    user,
    getUserInfo,
    setUserInfo,
    clearUserInfo,
  }
})