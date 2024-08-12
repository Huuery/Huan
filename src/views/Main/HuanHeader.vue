<script setup>
import { ref } from 'vue'
import SpotText from "../../static/Header.json"
import { useMoonStore } from '@/stores/useMoonStore';
const activeIndex = ref('1')
const moonStore = useMoonStore()
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const DataText = ref(SpotText)
</script>
<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect"
    :background-color="moonStore.isMoon ? '#181a20' : '#fff'" :text-color="moonStore.isMoon ? '#fff' : '#181a20'"
    active-text-color="#f0b90b">
    <el-menu-item index="1" style="margin: 0 10px;">
      <el-icon :size="100" style="color:skyblue">
        <ElementPlus />
      </el-icon>
      Huance
    </el-menu-item>
    <el-menu-item index="2">一键买币</el-menu-item>
    <el-menu-item index="3">行情</el-menu-item>
    <el-sub-menu index="4">
      <template #title>交易</template>
      <div class="item-left">
        <el-menu-item disabled class="item">
          <span>基础版</span>
        </el-menu-item>
        <template v-for="text in DataText.Spot.slice(0, 4)" :key="text.index">
          <el-menu-item :index="text.index" class="enlarged-item">
            <el-icon :size="28" style="color:#619cff">
              <component :is="text.ICO" />
            </el-icon>
            <ul>
              <li>{{ text.spot }}</li>
              <li>{{ text.messgae }}</li>
            </ul>
          </el-menu-item>
        </template>
      </div>
      <div class="item-right">
        <el-menu-item disabled class="item">
          <span>专业版</span>
        </el-menu-item>
        <template v-for="text in DataText.Spot.slice(4, 7)" :key="text.index">
          <el-menu-item :index="text.index" class="enlarged-item">
            <el-icon :size="28" style="color:#619cff">
              <component :is="text.ICO" />
            </el-icon>
            <ul>
              <li>{{ text.spot }}</li>
              <li>{{ text.messgae }}</li>
            </ul>
          </el-menu-item>
        </template>
      </div>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>合约</template>
      <div>
        <template v-for="text in DataText.Spot.slice(7, 10)" :key="text.index">
          <el-menu-item :index="text.index" class="enlarged-item">
            <el-icon :size="28" style="color:#619cff">
              <component :is="text.ICO" />
            </el-icon>
            <ul>
              <li>{{ text.spot }}</li>
              <li>{{ text.messgae }}</li>
            </ul>
          </el-menu-item>
        </template>
      </div>
    </el-sub-menu>
    <el-menu-item index="6">理财</el-menu-item>
    <el-sub-menu index="7">
      <template #title>广场</template>
      <div>
        <template v-for="text in DataText.Spot.slice(10, 14)" :key="text.index">
          <el-menu-item :index="text.index" class="enlarged-item">
            <el-icon :size="28" style="color:#619cff">
              <component :is="text.ICO" />
            </el-icon>
            <ul>
              <li>{{ text.spot }}</li>
              <li>{{ text.messgae }}</li>
            </ul>
          </el-menu-item>
        </template>
      </div>
    </el-sub-menu>
    <el-sub-menu index="8">
      <template #title>更多</template>
      <div class="item-left">
        <template v-for="text in DataText.Spot.slice(14, 21)" :key="text.index">
          <el-menu-item :index="text.index" class="enlarged-item">
            <el-icon :size="28" style="color:#619cff">
              <component :is="text.ICO" />
            </el-icon>
            <ul>
              <li>{{ text.spot }}</li>
              <li>{{ text.messgae }}</li>
            </ul>
          </el-menu-item>
        </template>
      </div>
      <div class="item-right">
        <template v-for="text in DataText.Spot.slice(21, 27)" :key="text.index">
          <el-menu-item :index="text.index" class="enlarged-item">
            <el-icon :size="28" style="color:#619cff">
              <component :is="text.ICO" />
            </el-icon>
            <ul>
              <li>{{ text.spot }}</li>
              <li>{{ text.messgae }}</li>
            </ul>
          </el-menu-item>
        </template>
      </div>
    </el-sub-menu>
    <div class="flex-grow" />
    <el-menu-item index="9">
      <el-icon>
        <Search />
      </el-icon>
    </el-menu-item>
    <el-link href="Login" :underline="false">
      <el-menu-item index="10">
        <el-button color="#2b3139" class="small" style="padding:0 12px; border-radius: 8px;">
          登录
        </el-button>
      </el-menu-item>
    </el-link>
    <el-link href="Register" :underline="false">
      <el-menu-item index="11">
        <el-button color="#fcd535" class="small" style="padding:0 12px; border-radius: 8px;">
          注册
        </el-button>
      </el-menu-item>
    </el-link>
  </el-menu>
</template>
<style scoped>
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}

.item {
  cursor: default;
}

.item-left {
  float: left;
}

.item-right {
  float: right;
}

.el-menu-item.enlarged-item ul {
  height: 30px;
  line-height: 15px;
}

.el-menu-item.enlarged-item {
  border-radius: 10px;
}

.flex-grow {
  flex-grow: 1;
}

.el-menu-item.enlarged-item ul li {
  margin: 2px 0;
}

.el-menu-item.enlarged-item ul li:last-child {
  font-size: 12px;
  margin-bottom: 5px;
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-sub-menu__title {
  height: 50px;
  line-height: 50px;
}

ul {
  padding-left: 5px;
}

.el-menu.el-menu--horizontal.el-menu-demo {
  padding: 0;
}

li {
  --el-menu-base-level-padding: 13px;
  min-width: 78px;
}

.small {
  --el-menu-base-level-padding: 10px;
}
</style>