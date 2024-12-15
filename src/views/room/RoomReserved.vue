<template>
  <main class="bg-primary-10">
    <div class="container">
      <div class="row">
        <div class="p-5 d-flex gap-3 align-item-center">
          <button
            type="button"
            class="p-0 border-0 text-primary"
            @click="$router.push(`/roomdetail/${form.roomId}`)"
          >
            <img class="rounded img-fluid" src="../../assets/svg/back.svg" alt="Room Image" />
          </button>
          <button
            type="button"
            class="p-0 border-0"
            @click="$router.push(`/roomdetail/${form.roomId}`)"
          >
            確認訂房資訊
          </button>
        </div>
      </div>

      <div class="container">
        <div class="row mb-10">
          <div class="col-md-7">
            <h3>訂房資訊</h3>

            <div class="d-flex justify-content-between">
              <div>
                <p class="sub-title sub-title-primary mb-2">選擇房型</p>
                <p v-if="!isEdit.roomType"> {{ roomInfo.name }}</p>
                <select v-else class="form-select" v-model="form.roomId" aria-label="select">
                  <option selected>請選擇</option>
                  <option v-for="room in roomList" :key="room._id" :value="room._id">{{ room.name }}</option>
                </select>
              </div>
              <button
                type="button"
                class="btn text-decoration-underline"
                @click="toggleEdit('roomType')"
              >
                {{ !isEdit.roomType ? '編輯' : '確認' }}
              </button>
            </div>

            <div class="d-flex py-5 justify-content-between">
              <div v-if="!isEdit.reservationDate">
                <p class="sub-title sub-title-primary mb-2">訂房日期</p>
                入住：{{ getDate(form.checkInDate) }}
                <br />
                退房：{{ getDate(form.checkOutDate) }}
              </div>
              <div class="w-100 d-flex flex-column" v-else>
                <!-- @vue-ignore -->
                <VDatePicker v-model.range="form.range" mode="date" :columns="columns" :expanded="true" :rows="rows"
                  :masks="{ title: 'YYYY 年 MM 月' }" timezone="UTC" />
                <div class="mt-5 align-self-end">
                  <button type="button" class="btn btn-white p-2 me-2" @click="toggleEdit('reservationDate')">
                    取消
                  </button>
                  <button type="button" class="btn btn-white p-2 me-2" @click="cleanDate">
                    清除日期
                  </button>
                  <button type="button" class="btn btn-primary p-2" @click="updateDate">
                    確定日期
                  </button>
                </div>
              </div>
              <button
                v-if="!isEdit.reservationDate"
                type="button"
                class="btn text-decoration-underline"
                @click="toggleEdit('reservationDate')"
              >
                編輯
              </button>
            </div>

            <div class="d-flex justify-content-between">
              <span>
                <p class="sub-title sub-title-primary mb-2">房客人數</p>
                <input v-if="isEdit.peopleNum" type="text" v-number class="form-control" v-model.number="form.peopleNum">
                <span v-else>{{ form.peopleNum }} 人</span>
              </span>
              <button
                type="button"
                class="btn text-decoration-underline"
                @click="toggleEdit('peopleNum')"
              >
                {{ !isEdit.peopleNum ? '編輯' : '確認' }}
              </button>
            </div>

            <br />
            <hr />

            <div class="py-1 d-flex justify-content-between">
              <h3>訂房人資訊</h3>

              <button
                type="button"
                class="p-0 border-0 text-primary text-decoration-underline"
                @click="setUserData"
              >
                套用會員資料
              </button>
            </div>
            <form class="py-5">
              <label class="" for="name"><span class="text-danger me-2">*</span>姓名</label>
              <input
                v-model="form.userInfo.name"
                id="name"
                type="text"
                class="form-control"
                placeholder="請輸入姓名"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <div class="py-3" />

              <label for="name"><span class="text-danger me-2">*</span>手機號碼</label>
              <input
                v-model="form.userInfo.phone"
                id="name"
                v-tel
                type="text"
                class="form-control"
                placeholder="請輸入手機號碼"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <div class="py-3" />

              <label for="name"><span class="text-danger me-2">*</span>電子信箱</label>
              <input
                v-model="form.userInfo.email"
                id="name"
                type="text"
                class="form-control"
                placeholder="請輸入電子信箱"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <div class="py-3" />

              <label for="name"><span class="text-danger me-2">*</span>地址</label>
              <div class="d-flex justify-content-between">
                <select id="address" class="form-select p-3 rounded-3" v-model="cityIndex">
                  <option
                    v-for="(city, index) in CityCountyData"
                    :key="city.CityName"
                    :value="index"
                  >
                    {{ city.CityName }}
                  </option>
                </select>
                <select class="form-select p-3 rounded-3" v-model="form.userInfo.address.zipcode">
                  <option v-for="area in CityCountyData[cityIndex].AreaList" :key="area.ZipCode" :value="Number(area.ZipCode)">
                    {{ area.AreaName }}
                  </option>
                </select>
              </div>
              <div class="py-3" />

              <input
                v-model="form.userInfo.address.detail"
                id="name"
                type="text"
                class="form-control"
                placeholder="請輸入詳細地址"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </form>
            <br />
            <hr />
            <div class="py-3" />

            <h4>房間資訊</h4>
            <div class="py-2" />

            <p class="sub-title sub-title-primary">房型基本資訊</p>

            <div class="d-flex justify-content-center gap-5">
              <span class="rounded bg-white border border-1 w-25 text-center p-3">
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/RoomSize.svg"
                  alt="Room Image"
                />
                <div>{{ roomInfo.areaInfo }}</div>
              </span>

              <span class="rounded bg-white border border-1 w-25 text-center p-3">
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/RoomBed.svg"
                  alt="Room Image"
                />
                <div>{{ roomInfo.bedInfo }}</div>
              </span>

              <span class="rounded bg-white border border-1 w-25 text-center p-3">
                <img
                  class="rounded img-fluid"
                  src="../../assets//svg/RoomPeople.svg"
                  alt="Room Image"
                />
                <div>1-{{ roomInfo.maxPeople }} 人</div>
              </span>
            </div>
            <div class="py-3" />

            <template v-if="roomInfo.layoutInfo">
              <p class="sub-title sub-title-primary">房間格局</p>

              <div class="bg-white rounded p-4 text-center">
                 <!-- @vue-skip -->
                <RoomService :service="roomInfo.layoutInfo" />
              </div>
              <div class="py-3" />
            </template>

            <template v-if="roomInfo.facilityInfo">
              <p class="sub-title sub-title-primary">房內設備</p>
              <div class="bg-white rounded p-4 text-center">
                 <!-- @vue-skip -->
                <RoomService :service="roomInfo.facilityInfo" />
              </div>
              <div class="py-3" />
            </template>

            <template v-if="roomInfo.amenityInfo">
              <p class="sub-title sub-title-primary">備品提供</p>
              <div class="bg-white rounded p-4 text-center">
                <!-- @vue-skip -->
                <RoomService :service="roomInfo.amenityInfo" />
              </div>
            </template>
          </div>
          <div class="p-5 col-md-5 rounded bg-white h-25 text-black">
            <div class="">
              <img class="rounded img-fluid" :src="roomInfo.imageUrl" />
            </div>
            <div class="py-3">
              <h3 class="fw-bold">價格詳情</h3>
            </div>
            <div class="py-1 d-flex justify-content-between">
              <span> NT$ {{ roomInfo.price }} X {{ routeParams.days }} 晚 </span>
              <span> NT$ {{ roomInfo.price * Number(routeParams.days) }} </span>
            </div>

            <div class="py-2 d-flex justify-content-between">
              <span> 住宿折扣 </span>
              <span> -NT$ 0 </span>
            </div>
            <div class="py-2 fw-bold d-flex justify-content-between">
              <span> 總價 </span>
              <span> NT$ {{ roomInfo.price * Number(routeParams.days) }} </span>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary w-100" :class="{disabled: disabledBtn}" @click="createOrder">確認訂房</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add this after your main template -->
    <!-- <div
      class="modal fade"
      id="confirmationModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="confirmationModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmationModalLabel">Confirming Reservation</h5>
          </div>
          <div class="modal-body">
          </div>
        </div>
      </div>
    </div> -->
  </main>
</template>

<style scoped>
/* Assuming the following classes for your lists */
.flex-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: blue;
}

.flex-item {
  flex-basis: calc(15% - 10px); /* 20% width with 10px spacing */
  margin-bottom: 10px; /* Adjust spacing as needed */
}
</style>

<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { roomTypeStore } from '../../stores/room'
import orderStore from '../../stores/orders'
// @ts-ignore
import CityCountyData from '../../assets/json/cityCountyData.json'
import RoomService from '../../components/Common/RoomService.vue'
import Swal from 'sweetalert2'
import mixin from '../../mixin/globalMix'
import { checkMail } from '../../mixin/validate'

export default {
  mixins: [mixin],
  data() {
    return {
      editPeoPle: false,
      isEdit: {
        roomType: false,
        peopleNum: false,
        reservationDate: false
      },
      cityIndex: 0,
      form: {
        roomId: '',
        range: {
          start: new Date(),
          end: new Date(),
        },
        checkInDate: 0,
        checkOutDate: 0,
        peopleNum: 0,
        userInfo: {
          address: {
            zipcode: 0,
            detail: ''
          },
          name: '',
          phone: '',
          email: ''
        }
      },
      CityCountyData
    }
  },
  components: {
    RoomService
  },
  watch: {
    'form.roomId': function(newVal) {
      const selectedRoom = this.roomList.find(room => room._id === newVal);
      if (selectedRoom) {
        this.roomInfo.name = selectedRoom.name;
      }
    }
  },
  computed: {
    ...mapState(roomTypeStore, ['roomInfo', 'roomList']),
    disabledBtn() {
      const {address, name, phone, email} = this.form.userInfo
      return !this.form.peopleNum || !address.detail || !name || !phone || !email
    },
    routeParams() {
      return this.$route.params
    },
    // TODO: 改成取 userStore
    user () {
      return JSON.parse(localStorage.getItem('user') as string)
    }
  },
  mounted() {
    const { id, days, people, startdate } = this.routeParams
    this.form.roomId = id as string
    this.form.checkInDate = Number(startdate)
    this.form.checkOutDate = Number(startdate) + Number(days) * 24 * 60 * 60 * 1000
    this.form.peopleNum = Number(people)
    this.getRoomInfo(id as string)
    this.form.userInfo.address.zipcode = Number(this.CityCountyData[this.cityIndex].AreaList[0].ZipCode)
    this.getRoomList()
  },
  methods: {
    ...mapActions(roomTypeStore, ['getRoomInfo', 'getRoomList']),
    ...mapActions(orderStore, ['postOrder']),
    setUserData() {
      const { address, name, phone, email } = JSON.parse(JSON.stringify(this.user))
      this.form.userInfo.address = address
      this.form.userInfo.name = name
      this.form.userInfo.phone = phone
      this.form.userInfo.email = email
      this.setCity(address.zipcode)
    },
    setCity(zipcode: number) {
      this.CityCountyData.forEach((city: any, index: number) => {
        city.AreaList.forEach((area: any) => {
          if(Number(area.ZipCode) === Number((zipcode))) {
            this.cityIndex = index
          }
        })
      })
    },
    createOrder() {
      if(!checkMail(this.form.userInfo.email)) return

      const options: any = { year: "numeric", month: "2-digit", day: "2-digit" };
      const {name, phone, email, address} = this.form.userInfo
      if(!name || !phone || !email || !address.zipcode || !address.detail) {
        Swal.fire({
          icon: 'error',
          title: '有資訊未填寫'
        })
        return
      }
      this.postOrder({
        ...this.form,
        checkInDate: new Date(this.form.checkInDate).toLocaleDateString('zh-TW', options),
        checkOutDate: new Date(this.form.checkOutDate).toLocaleDateString('zh-TW', options)
      })
      .then(() => {
        this.$router.push('/BookingResult')
      })
    },
    toggleEdit(field: string): void {
      this.isEdit[field as keyof typeof this.isEdit] = !this.isEdit[field as keyof typeof this.isEdit]
    },
    updateDate() {
      this.form.checkInDate = Number(this.form.range.start)
      this.form.checkOutDate = Number(this.form.range.end)
      this.toggleEdit('reservationDate')
    },
    cleanDate() {
      this.form.range = {
        start: new Date(),
        end: new Date(),
      }
    }
  },
}
</script>
