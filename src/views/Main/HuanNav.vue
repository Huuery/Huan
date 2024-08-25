<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from "vue";
import { useMoonStore } from "@/stores/useMoonStore";
import HotNav from "./Nav/HotNav.vue";
import Imger from "@/static/MainImage.json";
import {
  TwoDimensionalCodeOne as iconTwoDimensionalCodeOne,
  Apple as iconApple,
  Google as iconGoogle,
  Windows as iconWindows,
  Ring as iconRing,
  PeopleDownload as iconPeopleDownload,
} from "@icon-park/vue-next";
const MainImger = Imger;
const isEnt = ref("ent");
const moonStore = useMoonStore();
const number = ref(215070121);
const activeDiv = ref(MainImger.imgAndString[1].Version);
const imgSrc = ref(MainImger.imgAndString[1].Imgsrc);

const upDateNumber = computed(() => {
  const rendomAdd = Math.floor(Math.random() * 10) + 1;
  return number.value + rendomAdd;
});
let intervalId;
const start = () => {
  const isCommte = Math.floor(Math.random() * 3000) + 1;
  intervalId = setInterval(() => {
    number.value = upDateNumber.value;
  }, isCommte);
};
const activeDivInput = (div, imgsrc) => {
  activeDiv.value = div;
  imgSrc.value = imgsrc;
};
const currentImages = computed(() =>
  moonStore.isMoon ? MainImger.imgAndString : MainImger.imgAndStringLight
);
const updateIsEnt = () => {
  isEnt.value = moonStore.isMoon ? "ent" : "notent";
  const currentVersion = activeDiv.value;
  const activeItem = currentImages.value.find(
    (item) => item.Version === currentVersion
  );
  if (activeItem) {
    imgSrc.value = activeItem.Imgsrc;
  }
};
const isFill = moonStore.isMoon ? "#ffffff" : "#f0b90b";
watch(
  () => moonStore.isMoon,
  () => {
    updateIsEnt();
  }
);
onMounted(() => {
  start();
  moonStore.isMoon == false ? (isEnt.value = "notent") : (isEnt.value = "ent");
});

onBeforeMount(() => {
  clearInterval(intervalId);
});
</script>


<template>
  <div :class="{ moon: moonStore.isMoon }">
    <div>
      <div class="NavHeader">
        <div class="NavHeader-left">
          <h1 style="color: #fcd535">
            {{ number.toLocaleString() }}
          </h1>
          <h1>用户的</h1>
          <h1>共同选择</h1>
          <div class="Full">
            <div class="Full-input">
              <input type="text" placeholder="邮箱/手机号码" />
            </div>
            <el-link type="primary" :underline="false" href="#">
              <el-button type="warning">立即注册</el-button>
            </el-link>
          </div>
          <div class="icon">
            <div class="icon-left">
              <p class="size">或通过以下方式注册</p>
              <div>
                <iconGoogle theme="filled" :size="30" :fill="isFill" />
              </div>
              <div>
                <iconApple theme="filled" :size="30" :fill="isFill" />
              </div>
            </div>
            <div class="QRcode">
              <p class="size">下载 App</p>
              <div>
                <iconTwoDimensionalCodeOne :size="30" :fill="isFill" />
              </div>
            </div>
          </div>
        </div>
        <div class="NavHeader-right">
          <HotNav />
        </div>
      </div>
      <div class="show" :class="{ moon: moonStore.isMoon }">
        <div class="show-left">
          <div class="show-main">
            <div class="imges">
              <img :src="imgSrc" alt="" />
            </div>
            <div class="tag">
              <div
                v-for="(item, index) in currentImages"
                :key="index"
                :class="{ [isEnt]: activeDiv == item.Version }"
              >
                <input
                  type="button"
                  :value="item.str"
                  @click="activeDivInput(item.Version, item.Imgsrc)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="show-right">
          <h1>随时随地，开启交易</h1>
          <div class="show-qc">
            <div class="qc-div">
              <div class="qc-div-color">
                <img src="/public/img/qc.svg" alt="" />
                <el-icon :color="'#f0b90b'" :size="32"><ElementPlus /></el-icon>
              </div>
            </div>
            <div class="qc-text">
              <div>扫码下载App</div>
              <div>IOS和安装版</div>
            </div>
          </div>
          <div class="show-os">
            <div class="os">
              <div>
                <iconApple :size="48" theme="filled" />
                <h4>Macos</h4>
              </div>
              <div>
                <iconWindows :size="48" theme="filled" />
                <h4>Windows</h4>
              </div>
              <div>
                <iconRing :size="48" theme="filled" />
                <h4>Linux</h4>
              </div>
            </div>
            <div class="more">
              <iconPeopleDownload
                :fill="moonStore.isMoon ? '#ccc' : '#666'"
                :size="22"
                class="el-link--info el-link"
              />
              <el-link
                :underline="false"
                :type="moonStore.isMoon ? 'info' : 'default'"
              >
                <span>更多下载选择</span>
              </el-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.NavHeader {
  padding-top: 48px;
  justify-content: center;
  align-items: normal;
  min-height: 600px;

  .NavHeader-left {
    position: relative;

    .icon {
      position: absolute;
      bottom: 50px;
    }
  }

  &-left {
    width: 600px;

    h1 {
      font-size: 72px;

      &:first-of-type {
        color: #fcd535;
      }
    }

    .Full {
      margin-top: 35px;
      height: 58px;
      display: flex;
      align-items: center;

      &-input {
        width: 282px;
        margin-right: 16px;
        border: 1px solid #292e36;
        border-radius: 8px;
      }
    }

    .el-button {
      width: 130px;
      color: #181a20;
      height: 100%;
      border-radius: 8px;
    }

    .size {
      font-size: 14px;
      color: #757575;
    }

    .icon {
      display: flex;
      align-items: center;

      &-left,
      .QRcode {
        align-items: center;

        div {
          width: 48px;
          height: 48px;
          border: 1px solid #292e36;
          border-radius: 8px;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          float: left;
        }
      }
    }

    .QRcode {
      margin-left: 70px;
    }
  }

  &-right {
    // 右侧的样式
    width: 520px;
    min-height: 680px;
    --el-menu-active-color: #fcd535;
  }
}

.show {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;

  .show-left {
    .show-main {
      display: flex;
      flex-direction: column;
      align-items: center;

      .imges {
        img {
          height: 480px;
        }
      }

      .tag {
        height: 60px;
        display: flex;
        justify-content: center;
        border-bottom: 2px ridge #ccc;
        margin: 8px 0;
        box-sizing: border-box;

        div {
          input {
            color: #757575;
            margin: 0 !important;
            cursor: pointer;
          }
        }
        .ent,
        .notent {
          height: 60px;
          box-sizing: border-box;
          border-bottom: 2px solid #fcd535;
          box-sizing: border-box;
          input {
            color: #fff;
          }
        }
        .notent {
          input {
            color: #000;
          }
        }
      }
    }
  }

  .show-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: 40px;
    }
    .show-qc {
      display: flex;
      padding-top: 68px;
      .qc-div {
        width: 176px;
        height: 176px;
        padding: 20px;
        border: 1px solid #292e36;
        border-radius: 24px;
        .qc-div-color {
          position: relative;
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background-color: #fff;
          img {
            width: 90%;
          }
          .el-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 10px;
          }
        }
      }
      .qc-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        > div {
          padding: 10px;
          padding-left: 30px;
          font-size: 20px;
          font-weight: bold;
        }
        > div:first-child {
          font-size: 16px;
          color: #828587;
        }
      }
    }
    .show-os {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 158px;
      .os {
        display: flex;
        justify-content: space-between;
        padding-top: 28px;
        width: 62%;
        div {
          display: flex;
          flex-direction: column;
          h4 {
            margin: 8px 0;
          }
        }
      }
      .more {
        display: flex;
        .el-link {
          font-size: 16px;
        }
        .el-link--default:hover {
          color: #71757e;
        }
      }
    }
  }

  .show-left,
  .show-right {
    width: 680px;
  }
}
</style>
