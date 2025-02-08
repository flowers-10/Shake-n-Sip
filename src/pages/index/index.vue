<template>
  <div class="container">
    <div class="app-ui left-ui">
      <div class="header">
        <div class="discover">{{ title }}</div>
        <div class="menu-line"></div>
      </div>
      <div class="left-menu-bar">
        <div class="tea-list">
          <div class="tea-list-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29">
              <g
                fill="#FFF"
                fill-rule="evenodd"
                stroke="#10335C"
                stroke-width="3"
              >
                <rect width="21" height="21" x="7" y="7" rx="5" />
                <rect width="21" height="21" x="1" y="1" rx="5" />
              </g>
            </svg>
          </div>
          <div class="ur-tea-list">Your tea-list</div>
        </div>
        <div class="like-recent">
          <div class="ur-tea-list recent">Recent</div>
          <div class="recent-detail"></div>
          <div class="ur-tea-list like">Like</div>
        </div>
      </div>
      <div class="album-img">
        <z-swiper
          v-model:list="loopList"
          loop
          centeredSlides
          effect="coverflow"
          :slidesPerView="1.6"
          :modules="modules"
        >
          <z-swiper-item :style="[{ widht:'80%',borderRadius: '40rpx', overflow: 'hidden'}]" v-for="(item, index) in loopList" :key="item.id">
            <div :style="[{ background: item.background,height: '30vh'}]">
              <image  :style="[{ height: '100%', width: '100%'}]" :src="item.url"></image>
            </div>
          </z-swiper-item>
        </z-swiper>
        <div class="relax">Relax</div>
      </div>
      <div class="flowers-img"></div>
      <div class="music-list">
        <div class="song">
          <div class="song-img">
            <img
              src="https://images.unsplash.com/photo-1574281183650-14db8f28c259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            />
          </div>
          <div class="song-detail">
            <div class="song-name">‌Costa</div>
            <div class="artist">McCafe</div>
          </div>
        </div>
        <div class="song">
          <div class="song-img">
            <img
              src="https://images.unsplash.com/photo-1496324839965-d6281225d8eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
            />
          </div>
          <div class="song-detail">
            <div class="song-name">Keurig Dr Pepper</div>
            <div class="artist">Soda‌</div>
          </div>
        </div>
        <div class="song">
          <div class="song-img">
            <img
              src="https://images.unsplash.com/photo-1506079619863-0bf287d459e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div class="song-detail">
            <div class="song-name">Peet's Coffee</div>
            <div class="artist">Cappuccino‌</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// #ifdef H5
import { ZSwiper, ZSwiperItem } from '@zebra-ui/swiper'
// #endif
// #ifdef MP-WEIXIN
import ZSwiper from '@zebra-ui/swiper/components/z-swiper/z-swiper.vue'
import ZSwiperItem from '@zebra-ui/swiper/components/z-swiper-item/z-swiper-item.vue'
// #endif

import { ref } from "vue";
import { EffectCoverflow } from "@zebra-ui/swiper/modules";

import data from "../../common/data/data";

const title = ref("Shake'n Sip");
const modules = ref([EffectCoverflow]);

const list = ref([...data]);
const loopList = ref([...data]);
</script>

<style>
:root {
  --font-color: #063064;
}

* {
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
}

body {
  background-color: #f4f4f4;
}

.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.app-ui {
  background-color: #fff;
  width: 100%;
  height: 100%;
  box-shadow: 2px 14px 40px -20px rgba(0, 0, 0, 0.2);
}

.left-ui {
  overflow: hidden;
}
.header {
  font-family: "Fjalla One", sans-serif;
  color: #063064;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 54rpx 54rpx 42rpx 54rpx;
  font-size: 48rpx;
  font-weight: bold;
}

.menu-line {
  border: 1px solid #063064;
  width: 50rpx;
  border-radius: 100rpx;

  &:before {
    content: "";
    position: absolute;
    top: 96rpx;
    right: 54rpx;
    border: 0.05em solid;
    width: 16rpx;
    border-radius: 100rpx;
  }

  &:after {
    content: "";
    position: absolute;
    top: 96rpx;
    right: 80rpx;
    border: 0.05em solid;
    width: 6rpx;
    border-radius: 100rpx;
  }
}

.left-menu-bar {
  position: relative;
  font-family: "Roboto", sans-serif;
  color: var(--font-color);
  left: -5px;
}

.tea-list-icon {
  width: 40rpx;
  position: absolute;
  left: 20px;
  top: -6px;
  cursor: pointer;
}

.like-recent {
  position: absolute;
  top: 440rpx;
}

.recent {
  position: absolute;
  left: 0rpx;
  top: 90rpx;
}

.recent-detail {
  width: 4px;
  height: 4px;
  background-color: var(--font-color);
  position: absolute;
  top: 95px;
  left: 15px;
  border-radius: 50%;
}

.like {
  position: absolute;
  left: 25rpx;
  top: 140rpx;
  color: #aeb8cc;

  &:hover {
    color: var(--font-color);
  }
}

.album-img {
  overflow: hidden;
  height: 30vh;
  margin: 0 0 0 100rpx;
  position: relative;
  cursor: pointer;

 
}
.ur-tea-list {
  font-size: 28rpx;
  font-weight: 500;
  transform: rotate(270deg);
  position: absolute;
  left: -20rpx;
  top: 120rpx;
  cursor: pointer;
}

.btn {
  background-color: #ffffff;
  position: absolute;
  width: 27px;
  height: 27px;
  right: 10px;
  bottom: 10px;
  border-radius: 9px;
  transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px 1px 2px rgba(255, 255, 255, 1),
    0px 2px 1px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border: none;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    z-index: 2;
  }

  &:active {
    box-shadow: 0 5px 50px rgba(0, 0, 0, 0.02);

    &:after {
      box-shadow: inset 0px 2px 3px rgb(255, 255, 255),
        inset 0px 2px 0px rgba(0, 0, 0, 0.1);
    }
  }

  &.active {
    &.tea-pause {
      .icon {
        &.pause {
          opacity: 1;
          transform: translate(-50%, -50%);
        }

        &.tea {
          opacity: 0;
        }
      }
    }
  }
}

.tea {
  width: 13px;
  position: absolute;
  top: 7px;
  left: 8px;

  svg {
    stroke-width: 5;
  }
}

.pause {
  width: 12px;
  opacity: 0;
  position: absolute;
  left: 14px;
  top: 15px;
}

.music-list {
  cursor: pointer;
  margin-left: 50px;
  margin-top: 20px;
}

.song {
  distea: flex;
  margin-bottom: 10px;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    box-shadow: -8px 10px 3px -11px rgba(0, 0, 0, 0.4);
  }
}

.song-img > img {
  background-repeat: no-repeat;
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin-right: 10px;
}

.song-name {
  font-family: "Roboto", sans-serif;
  color: var(--font-color);
  font-weight: 500;
  font-size: 10px;
}

.song-detail {
  distea: flex;
  flex-direction: column;
}

.artist {
  font-family: "Roboto", sans-serif;
  color: #d0d2e5;
  font-weight: 400;
  font-size: 9px;
  margin-top: 4px;
}
</style>
