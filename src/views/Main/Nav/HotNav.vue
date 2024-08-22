<script setup>
// import btc from "@/static/btc.json";
import { userNavAndHotData } from "@/apis/userNavAndHot"
import { useMoonStore } from '@/stores/useMoonStore';
import { ref } from "vue";
import News from "@/static/New.json";

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
    activeIndex.value = key
    return activeIndex
}

const New = News;
const moonStore = useMoonStore();
const { NavAndHot } = userNavAndHotData();
const futureDate = new Date('2024-09-20T00:00:00');
const value1 = ref(futureDate);

</script>
<template>
    <div class="Tokens margin">
        <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect"
            :background-color="moonStore.isMoon ? '#1e2329' : '#f5f5f5'"
            :text-color="moonStore.isMoon ? '#f5f5f5' : '#000'">
            <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect"
                :text-color="moonStore.isMoon ? '#f5f5f5' : '#000'">
                <el-menu-item index="1" class="hot">
                    热门
                </el-menu-item>
                <el-menu-item index="2" class="new">
                    新币
                </el-menu-item>
            </el-menu>
            <el-menu-item index="3" class="activer">
                查看全部350多个代币>
            </el-menu-item>
        </el-menu>
        <!-- 确保 NavAndHot 不为空后再渲染列表 -->
        <div>
            <div class="Tokens-header" v-if="NavAndHot" :class="{ 'moon': moonStore.isMoon }">
                <div class="Tokens-hot" :class="activeIndex == '2' ? 'none' : ''">
                    <div v-for="(item, index) in NavAndHot.Tokens.slice(0, 4)" :key="index">
                        <div>
                            <span><img :src="item.img" alt=""></span>
                            <div>
                                <span>{{ item.name }}</span>
                                <span>{{ item.nameRow }}</span>
                            </div>
                        </div>
                        <div>
                            <span>${{ item.price }}</span>
                        </div>
                        <div>
                            <span>{{ item.priceChange }}%</span>
                        </div>
                    </div>
                </div>
                <div class="Tokens-new" :class="activeIndex == '1' ? 'none' : ''">
                    <div v-for="(item, index) in NavAndHot.Tokens.slice(4, 8)" :key="index">
                        <div>
                            <span><img :src="item.img" alt=""></span>
                            <div>
                                <span>{{ item.name }}</span>
                                <span>{{ item.nameRow }}</span>
                            </div>
                        </div>
                        <div>
                            <span>${{ item.price }}</span>
                        </div>
                        <div>
                            <span>{{ item.priceChange }}%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="NewTabs margin" :class="{ 'moon': moonStore.isMoon }">
                <div>
                    <div>
                        <b>新闻</b>
                        <span class="activer">查看更多 ></span>
                    </div>
                    <ul>
                        <li v-for="(item, index) in New.new" :key="index">
                            <el-link :class="{ 'moon': moonStore.isMoon }" :underline="false" href="javascript:;">
                                {{ item }}
                            </el-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="Launchpool margin" :class="{ 'moon': moonStore.isMoon }">
                <div>
                    <div class="Launchpool-header">
                        <div class="Launchpool-title" v-if="NavAndHot">
                            <b>Launchpool</b>
                            <span>
                                <img :src="NavAndHot.Tokens[2].img" alt="">
                            </span>
                            <span>
                                BNB
                            </span>
                            <span class="color">
                                进行中
                            </span>
                            <span class="activer">></span>
                        </div>
                        <div class="Launchpool-day">
                            <el-countdown format="DD &nbsp;  天 &nbsp; HH &nbsp; 时 &nbsp; mm &nbsp; 分 &nbsp; ss &nbsp; 秒"
                                :value="value1" :class="{ 'moon': moonStore.isMoon }" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.none {
    display: none !important;
}

.flex-len {
    justify-content: space-between;
}

.moon {
    background-color: #1e2329 !important;
}

img {
    width: 32px;
    height: 32px;
}

.margin {
    border-radius: 18px;
}

.activer {
    border: none !important;
    color: #757575;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}

.activer:hover {
    color: #f5f5f5;
    transition: all 0.5s ease-in-out;
}

span {
    margin-right: 8px;
    font-size: 14px;
    font-weight: bold;
}

.Tokens {
    flex-direction: column;
    position: relative;
    height: 100%;

    .el-menu {
        width: 100%;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;

        .el-menu {
            margin-left: 18px;

            >.el-menu-item {
                height: 100%;
                margin: 0 9px;
            }
        }
    }

    >div {
        width: 100%;
        display: flex;
        flex-direction: column;

        .Launchpool {
            position: absolute;
            bottom: 38px;
            margin-bottom: 0px;
            width: 100%;
        }

        >.Tokens-header {
            >div {
                >div {
                    padding: 8px;
                }
            }
        }

        >div {
            border-bottom-left-radius: 18px;
            border-bottom-right-radius: 18px;
            margin-bottom: 11px;
            background-color: #f5f5f5;

            >div {
                display: flex;
                flex-direction: column;
                padding: 18px;

                .Launchpool-header {
                    position: relative;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 0px;

                    .Launchpool-title {
                        .color {
                            color: #2ebd85;
                            background-color: #102821;
                            width: 50px;
                            height: 24px;
                            font-size: 12px;
                            text-align: center;
                            line-height: 24px;
                        }
                    }

                    >div {
                        justify-content: flex-start;
                        margin-top: 8px;

                        >b {
                            margin-right: 21px;
                        }
                    }
                }

                >ul {
                    >li {
                        margin: 18px 0;

                        >a {
                            font-size: 16px;
                        }

                        >a:hover {
                            color: #f0b90b !important;
                        }
                    }
                }

                >div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0px 18px 10px 0;

                    >div:nth-child(1) {
                        min-width: 40%;
                        justify-content: flex-start;

                        >div {
                            display: flex;
                            align-items: baseline;

                            >span:nth-child(2) {
                                font-size: 12px;
                                color: #757575;
                            }
                        }
                    }

                    >div {
                        min-width: 28%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        cursor: pointer;

                        >span:first-child {
                            display: flex;
                        }
                    }
                }
            }
        }
    }
}
</style>