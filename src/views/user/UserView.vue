<template>
  <main class="bg-neutral-bg">
    <div class="row g-5 g-lg-7">
        <div class="col-12 col-lg-5">
          <section class="bg-white p-5 p-lg-7 rounded-6">
            <EditPwd v-if="user._id" />
          </section>
        </div>
        <div class="col-12 col-lg-7">
          <section class="bg-white p-5 p-lg-7 rounded-6">
            <UserInfo v-if="user._id" />
          </section>
        </div>
      </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted  } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
// @ts-ignore
import EditPwd from '../../components/UserCenter/EditPwd.vue'
// @ts-ignore
import UserInfo from '../../components/UserCenter/UserInfo.vue'
import fetchAPI from '../../mixin/fetchAPI'
import type { userInfo } from '../../interface/user'

const userStore = useUserStore()
const { setUserInfo } = userStore
const { user } = storeToRefs(userStore)

onMounted(async () => {
  const userRes = await fetchAPI('/api/v1/user')
  setUserInfo(userRes.result)
})
</script>
