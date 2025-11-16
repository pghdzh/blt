<template>
  <header class="app-header">
    <h1 class="title">尤诺电子设定集</h1>
    <!-- 在线人数展示 -->
    <div class="online-count" v-if="onlineCount !== null">
      当前在线：<span class="count">{{ onlineCount }}人</span>
    </div>
    <!-- 移动端汉堡按钮 -->
    <button
      class="hamburger"
      @click="toggleMobileNav"
      aria-label="Toggle navigation"
    >
      <span :class="{ open: mobileNavOpen }"></span>
      <span :class="{ open: mobileNavOpen }"></span>
      <span :class="{ open: mobileNavOpen }"></span>
    </button>

    <!-- 普通导航 & 移动端下拉导航 -->
    <nav :class="['nav-links', { 'mobile-open': mobileNavOpen }]">
      <RouterLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="nav-item"
        active-class="active-link"
        @click="mobileNavOpen = false"
      >
        {{ item.name }}
      </RouterLink>

      <a
        href="http://36.150.237.25/#/redirector"
        target="_blank"
        rel="noopener"
        class="nav-item"
        active-class="active-link"
        @click="mobileNavOpen = false"
      >
        霜落映界
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { io } from "socket.io-client";

const navItems = [
  { name: "月谕初临", path: "/" }, // 首页 - 寓意与尤诺的初次相遇
  { name: "命途窥览", path: "/timeLine" }, // 年谱 - 暗示她能窥见命运轨迹
  { name: "独忆残响", path: "/message" }, // 留言板 - 指向她“被遗忘”的悲剧与记忆
  { name: "月相流转", path: "/gallery" }, // 图集 - 呼应她与月亮的关联及形态变化
  { name: "忆骸拾遗", path: "/resources" }, // 资料库 - 贴合“收集残存记忆”的意象
  { name: "谕示之镜", path: "/talk" }, // AI对话页面 - 体现她“谕女”的身份与预言能力
  { name: "空灵回响", path: "/voice" }, // 语音彩蛋页面 - 强调她存在消失后留下的“回响”
  { name: "月光契文", path: "/music" }, // 歌曲库 - 结合月光主题与律动感
];

const mobileNavOpen = ref(false);
function toggleMobileNav() {
  mobileNavOpen.value = !mobileNavOpen.value;
}

const siteId = "feibi";

const onlineCount = ref<number | null>(null);

// 连接时带上 query.siteId
const socket: any = io("http://36.150.237.25:3000", {
  query: { siteId },
});

onMounted(() => {
  socket.on("onlineCount", (count: number) => {
    onlineCount.value = count;
  });
});

onBeforeUnmount(() => {
  socket.disconnect();
});
</script>

<style scoped lang="scss">
/* 布兰特 — 紫蓝版：舞台紫蓝 / 假面 / 星屑光 + 金色点缀 */
.app-header {
  --deep-bg: rgba(10, 6, 20, 0.96); /* 深夜舞台 */
  --spotlight: rgba(106, 76, 255, 0.06); /* 紫光薄光 */
  --accent: #923257; /* 主光：皇家紫蓝 */
  --accent-2: #70A7BB; /* 次级：淡蔚蓝 / 紫罗兰偏冷 */
  --glow: #bfa8ff; /* 柔和高光 */
  --gold-accent: #ffd78a; /* 金色点缀 */
  --muted-text: #f6f4ff; /* 近白带紫 */
  --smoke-sheen: rgba(60, 30, 70, 0.04); /* 舞台烟雾薄层 */
  --confetti: rgba(170, 140, 255, 0.06); /* 庆典星屑光 */

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background: radial-gradient(
      420px 90px at 12% 10%,
      rgba(150, 110, 255, 0.02),
      transparent 12%
    ),
    linear-gradient(180deg, rgba(8, 4, 14, 0.98), rgba(6, 3, 12, 0.995));
  backdrop-filter: blur(6px) saturate(1);
  box-shadow: 0 10px 36px rgba(4, 2, 8, 0.72), 0 0 18px var(--spotlight) inset;
  border-bottom: 1px solid rgba(150, 120, 255, 0.04);
  animation: fadeInDown 0.5s ease-out both;
  overflow: visible;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(180deg, var(--smoke-sheen), transparent 28%);
    mix-blend-mode: overlay;
  }

  /* 右侧紫光与星屑 */
  &::before {
    content: "";
    position: absolute;
    right: 6%;
    top: 6%;
    width: 240px;
    height: 84px;
    pointer-events: none;
    background: radial-gradient(
        42px 12px at 18% 22%,
        rgba(165, 130, 255, 0.14),
        transparent 36%
      ),
      radial-gradient(
        12px 6px at 70% 60%,
        rgba(255, 220, 150, 0.04),
        transparent 42%
      ),
      radial-gradient(
        80px 28px at 50% 40%,
        rgba(120, 90, 255, 0.06),
        transparent 46%
      );
    filter: blur(6px);
    transform: translateY(0) rotate(-6deg);
    animation: star-drift 8.5s ease-in-out infinite;
    mix-blend-mode: screen;
  }

  .title {
    position: relative;
    font-family: "Cinzel", serif;
    font-style: normal;
    font-size: 26px;
    font-weight: 800;
    color: var(--muted-text);
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.6px;
    text-shadow: 0 6px 22px rgba(6, 3, 18, 0.6);
    transition: transform 0.28s ease, text-shadow 0.28s ease;
    animation: float-slow 9.6s ease-in-out infinite;

    &::before {
      content: "";
      position: absolute;
      left: -6%;
      top: -22%;
      width: 120%;
      height: 140%;
      background: radial-gradient(
        circle at 50% 18%,
        rgba(190, 150, 255, 0.06),
        transparent 20%
      );
      transform: translateY(0);
      animation: flare 5.8s linear infinite;
      pointer-events: none;
      mix-blend-mode: screen;
    }

    &::after {
      content: "🎭";
      position: absolute;
      left: -36px;
      top: -6px;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: var(--gold-accent);
      text-shadow: 0 2px 10px rgba(255, 200, 120, 0.14);
      transform: rotate(-10deg);
      opacity: 0.98;
      pointer-events: none;
    }

    &:hover {
      transform: translateY(-2px) scale(1.04);
      text-shadow: 0 12px 36px rgba(120, 80, 255, 0.12);
    }
  }

  .online-count {
    position: relative;
    margin-left: 16px;
    padding: 6px 14px;
    font-family: "Cinzel", serif;
    font-size: 1rem;
    color: var(--muted-text);
    background: linear-gradient(
      135deg,
      rgba(12, 8, 14, 0.28),
      rgba(8, 6, 12, 0.18)
    );
    border: 1px solid rgba(160, 130, 255, 0.05);
    border-radius: 24px;
    backdrop-filter: blur(6px);
    box-shadow: 0 6px 18px rgba(4, 2, 8, 0.5), 0 0 10px var(--spotlight) inset;
    overflow: hidden;
    cursor: default;
    transition: transform 0.22s ease, box-shadow 0.22s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px rgba(6, 3, 12, 0.6),
        0 0 34px rgba(160, 130, 255, 0.08);
    }

    .count {
      display: inline-block;
      margin-left: 18px;
      font-weight: 800;
      color: var(--accent-2);
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 8px rgba(160, 120, 255, 0.06);
    }
  }

  .nav-links {
    display: flex;
    gap: 22px;
    align-items: center;

    .nav-item {
      position: relative;
      color: var(--muted-text);
      font-weight: 600;
      text-decoration: none;
      transition: color 0.22s ease, transform 0.16s ease;
      padding: 6px 4px;
      border-radius: 6px;
      overflow: visible;
      font-family: "STKaiti", "KaiTi", "Noto Serif SC", serif;
      font-style: italic;

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -8px;
        width: 0;
        height: 6px;
        border-radius: 6px;
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0),
          rgba(110, 76, 255, 0.92),
          rgba(157, 184, 255, 0.9),
          rgba(0, 0, 0, 0)
        );
        transform: translateX(-50%);
        opacity: 0.95;
        filter: blur(0.8px) contrast(1.03);
        transition: width 0.36s cubic-bezier(0.2, 0.9, 0.2, 1), left 0.36s,
          opacity 0.24s;
        background-size: 200% 100%;
        animation: wave-purple 5.8s linear infinite;
      }

      &::before {
        content: "";
        position: absolute;
        right: 14%;
        top: -6px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: radial-gradient(circle, var(--glow), transparent 60%);
        opacity: 0;
        transform: translateY(-6px) scale(0.86);
        transition: opacity 0.26s, transform 0.36s;
        box-shadow: 0 6px 14px rgba(150, 120, 255, 0.08);
      }

      &:hover {
        color: var(--accent-2);
        transform: translateY(-1.8px);
        text-shadow: 0 0 8px rgba(140, 110, 255, 0.04);
      }

      &:hover::after {
        width: 72%;
        left: 50%;
        opacity: 1;
      }

      &:hover::before {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .active-link {
      color: var(--accent);
      font-weight: 700;

      &::before {
        content: "🎭";
        position: absolute;
        right: -14px;
        top: 50%;
        transform: translateY(-50%) rotate(-8deg);
        font-size: 12px;
        color: var(--gold-accent);
        text-shadow: 0 2px 10px rgba(255, 200, 120, 0.12);
        animation: mask-glow 3.6s ease-in-out infinite;
        opacity: 0.98;
      }

      &::after {
        width: 92%;
        opacity: 1;
        box-shadow: 0 6px 22px rgba(140, 110, 255, 0.06);
      }
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 28px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    span {
      display: block;
      width: 100%;
      height: 3px;
      background: rgba(246, 240, 255, 0.92);
      border-radius: 2px;
      transition: transform 0.28s ease, opacity 0.28s ease, background 0.28s;
      box-shadow: 0 2px 6px rgba(8, 6, 12, 0.18), 0 0 8px var(--spotlight);
    }

    span.open:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
    }

    span.open:nth-child(2) {
      opacity: 0;
    }

    span.open:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
    }
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    .title {
      display: none;
    }
    .hamburger {
      display: flex;
    }

    .nav-links {
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      flex-direction: column;
      background: linear-gradient(
        180deg,
        rgba(8, 6, 12, 0.98),
        rgba(6, 4, 10, 0.995)
      );
      backdrop-filter: blur(12px);
      gap: 0;
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.34s ease;
      border-top: 1px solid rgba(170, 140, 255, 0.03);

      &.mobile-open {
        max-height: 520px;
      }

      .nav-item {
        padding: 14px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
      }
    }
  }
}

/* 动效关键帧（紫光/星屑节奏） */
@keyframes wave-purple {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes float-slow {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes star-drift {
  0% {
    transform: translateY(0) rotate(-6deg) translateX(0);
    opacity: 0.85;
    filter: blur(6px) saturate(1);
  }
  50% {
    transform: translateY(-8px) rotate(2deg) translateX(-6px);
    opacity: 1;
    filter: blur(4px) saturate(1.04);
  }
  100% {
    transform: translateY(0) rotate(-6deg) translateX(0);
    opacity: 0.85;
  }
}

@keyframes flare {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-6px) rotate(0.4deg);
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.6;
  }
}

@keyframes mask-glow {
  0% {
    transform: translateY(-6%) rotate(-6deg);
    opacity: 0.8;
    filter: drop-shadow(0 2px 8px rgba(160, 120, 255, 0.06));
  }
  50% {
    transform: translateY(6%) rotate(2deg);
    opacity: 1;
    filter: drop-shadow(0 4px 18px rgba(200, 170, 255, 0.12));
  }
  100% {
    transform: translateY(-6%) rotate(-6deg);
    opacity: 0.8;
  }
}
</style>
