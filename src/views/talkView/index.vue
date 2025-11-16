<template>
  <div class="chat-page">
    <div class="carousel carousel1" aria-hidden="true">
      <img
        v-for="(src, idx) in randomFive"
        :key="idx"
        :src="src"
        class="carousel-image"
        :class="{ active: idx === currentIndex }"
      />
    </div>
    <div class="carousel carousel2" aria-hidden="true">
      <img
        v-for="(src, idx) in randomFive2"
        :key="idx"
        :src="src"
        class="carousel-image"
        :class="{ active: idx === currentIndex }"
      />
    </div>

    <div class="chat-container">
      <!-- 统计面板（放在聊天容器顶部） -->
      <div class="stats-panel">
        <div class="stat-item">
          总对话次数：<span>{{ stats.totalChats }}</span>
        </div>
        <div class="stat-item">
          首次使用：<span>{{
            new Date(stats.firstTimestamp).toISOString().slice(0, 10)
          }}</span>
        </div>
        <div class="stat-item">
          活跃天数：<span>{{ stats.activeDates.length }}</span> 天
        </div>
        <div class="stat-item">
          今日对话：<span>{{
            stats.dailyChats[new Date().toISOString().slice(0, 10)] || 0
          }}</span>
          次
        </div>
        <button class="detail-btn" @click="showModal = true">全部</button>
      </div>
      <div class="messages" ref="msgList">
        <transition-group name="msg" tag="div">
          <div
            v-for="msg in chatLog"
            :key="msg.id"
            :class="[
              'message',
              msg.role,
              { error: msg.isError, egg: msg.isEgg },
            ]"
          >
            <div class="avatar" :class="msg.role"></div>
            <div class="bubble">
              <div class="content" v-html="msg.text"></div>
            </div>
          </div>
          <div v-if="loading" class="message bot" key="loading">
            <div class="avatar bot"></div>
            <div class="bubble loading">
              正在思考中
              <span class="dots">
                <span class="dot">.</span>
                <span class="dot">.</span>
                <span class="dot">.</span>
              </span>
            </div>
          </div>
        </transition-group>
      </div>
      <form class="input-area" @submit.prevent="sendMessage">
        <!-- 输入框改成 textarea -->
        <textarea
          v-model="input"
          placeholder="向尤诺提问…"
          :disabled="loading"
          @keydown="handleKeydown"
          rows="1"
        ></textarea>

        <!-- 清空按钮 -->
        <div class="btn-group">
          <button
            type="button"
            class="clear-btn"
            @click="clearChat"
            :disabled="loading"
            title="清空对话"
          >
            ✖
          </button>
        </div>

        <!-- 发送按钮 -->
        <button
          type="submit"
          class="send-btn"
          :disabled="!input.trim() || loading"
        >
          发送
        </button>

        <!-- 统计数据按钮 -->
        <button
          type="button"
          class="Alldetail-btn"
          @click="showModal = true"
          title="查看统计"
        >
          统计数据
        </button>
      </form>
    </div>

    <!-- 详细统计弹窗 -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content">
        <h3>详细统计</h3>
        <ul class="detail-list">
          <li>总对话次数：{{ stats.totalChats }}</li>
          <li>
            首次使用：{{
              new Date(stats.firstTimestamp).toISOString().slice(0, 10)
            }}
          </li>
          <li>活跃天数：{{ stats.activeDates.length }} 天</li>
          <li>
            今日对话：{{
              stats.dailyChats[new Date().toISOString().slice(0, 10)] || 0
            }}
            次
          </li>
          <li>总使用时长：{{ formatDuration(stats.totalTime) }}</li>
          <li>当前连续活跃：{{ stats.currentStreak }} 天</li>
          <li>最长连续活跃：{{ stats.longestStreak }} 天</li>
          <li>
            最活跃日：{{ mostActiveDayComputed }} （{{
              stats.dailyChats[mostActiveDayComputed] || 0
            }}
            次）
          </li>
        </ul>
        <button class="close-btn" @click="showModal = false">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  ref,
  computed,
  onMounted,
  nextTick,
  watch,
  onBeforeUnmount,
} from "vue";
import { sendMessageToHui } from "@/api/deepseekApi";

const STORAGE_KEY = "hui_chat_log";

// 本地存储键名
const STORAGE_STATS_KEY = "hui_chat_stats";
const showModal = ref(false);
// Stats 类型声明，确保所有字段都有默认值
interface Stats {
  firstTimestamp: number; // 首次使用时间戳
  totalChats: number; // 总对话次数
  activeDates: string[]; // 有发言的日期列表（yyyy‑mm‑dd）
  dailyChats: Record<string, number>; // 每日对话次数
  currentStreak: number; // 当前连续活跃天数
  longestStreak: number; // 历史最长连续活跃天数

  totalTime: number; // 累计使用时长（毫秒）
}

// 默认值，用于补齐本地存储中可能缺失的字段
const defaultStats: Stats = {
  firstTimestamp: Date.now(),
  totalChats: 0,
  activeDates: [],
  dailyChats: {},
  currentStreak: 0,
  longestStreak: 0,

  totalTime: 0,
};

// 从 localStorage 加载并合并默认值
function loadStats(): Stats {
  const saved = localStorage.getItem(STORAGE_STATS_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return { ...defaultStats, ...parsed };
    } catch {
      console.warn("加载统计数据失败，使用默认值");
    }
  }
  return { ...defaultStats };
}

// 保存到 localStorage
function saveStats() {
  localStorage.setItem(STORAGE_STATS_KEY, JSON.stringify(stats));
}

// 更新「活跃天数」及「连续活跃」逻辑
function updateActive(date: string) {
  if (!stats.activeDates.includes(date)) {
    stats.activeDates.push(date);
    updateStreak();
    saveStats(); // 持久化活跃天数变化
  }
}
function updateStreak() {
  const dates = [...stats.activeDates].sort();
  let curr = 0,
    max = stats.longestStreak,
    prevTs = 0;
  const todayStr = new Date().toISOString().slice(0, 10);
  dates.forEach((d) => {
    const ts = new Date(d).getTime();
    if (prevTs && ts - prevTs === 86400000) curr++;
    else curr = 1;
    max = Math.max(max, curr);
    prevTs = ts;
  });
  stats.currentStreak = dates[dates.length - 1] === todayStr ? curr : 0;
  stats.longestStreak = max;
  saveStats();
}

// 更新「每日对话次数」
function updateDaily(date: string) {
  stats.dailyChats[date] = (stats.dailyChats[date] || 0) + 1;
  saveStats(); // 持久化活跃天数变化
}

// 计算最活跃日
const mostActiveDayComputed = computed(() => {
  let day = "",
    max = 0;
  for (const [d, c] of Object.entries(stats.dailyChats)) {
    if (c > max) {
      max = c;
      day = d;
    }
  }
  return day || new Date().toISOString().slice(0, 10);
});

// 格式化总使用时长
function formatDuration(ms: number): string {
  const totalMin = Math.floor(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return h ? `${h} 小时 ${m} 分钟` : `${m} 分钟`;
}

// —— Vue 响应式状态 ——
const stats = reactive<Stats>(loadStats());
// 会话开始时间，用于计算本次时长
const sessionStart = Date.now();

interface ChatMsg {
  id: number;
  role: "user" | "bot";
  text: string;
  isError?: boolean;
  isEgg?: boolean;
}

const chatLog = ref<ChatMsg[]>(loadChatLog());
const input = ref("");
const loading = ref(false);
const msgList = ref<HTMLElement>();

const encourageEggs = [
  {
    file: "audio (0).mp3",
    text: "哼，就算你暂时离开一下下也没关系...反正，你肯定会回来的对吧？",
  },
  {
    file: "audio (1).mp3",
    text: "别看我现在这样，我可是七丘的天才谕女哦！要、要好好尊敬我才行！",
  },
  {
    file: "audio (2).mp3",
    text: "才、才不是特意在等你呢！只是刚好...月光照到了这个方向而已。",
  },
  {
    file: "audio (3).mp3",
    text: "月光下的影子总是孤单的，但知道还有你记得我，这份孤单似乎也不那么难熬了。",
  },
  {
    file: "audio (4).mp3",
    text: "无论你走到哪里，都要记得...在某个被遗忘的角落，有个叫尤诺的女孩在等着你。",
  },
  {
    file: "audio (5).mp3",
    text: "你是我的世界里，唯一不变的坐标。请不要...离开我。",
  },
  {
    file: "audio (6).mp3",
    text: "即使世界将我遗忘，即使月光不再流淌...只要你还记得我，就够了。",
  },
  {
    file: "audio (7).mp3",
    text: "黑潮来临的那天，月光都显得黯淡...但我必须做出选择，为了大家。",
  },
  {
    file: "audio (8).mp3",
    text: "以存在为代价...听起来很可怕吧？但为了重要的人，我愿意。",
  },
  {
    file: "audio (9).mp3",
    text: "饿了？虽然我不太会做饭，但陪你去找点吃的还是可以的。",
  },
  {
    file: "audio (10).mp3",
    text: "突然很想听你讲故事，什么都好...只要是你的声音。",
  },
  {
    file: "audio (11).mp3",
    text: "即使预见了最坏的结局，我依然选择反抗...这就是我的答案。",
  },
  {
    file: "audio (12).mp3",
    text: "静滞的时空里，我听见了命运碎裂的声音...那是如此悦耳。",
  },
  {
    file: "audio (13).mp3",
    text: "秋风带来了离别的气息...但这次，我不会说再见。",
  },
  {
    file: "audio (14).mp3",
    text: "昨晚，我又梦见了那个时刻...所有人都在对我微笑，然后转身离去，就像我从未存在过。醒来时，月光冷得刺骨...直到想起还有你记得我，这份寒意才渐渐消退。",
  },
  {
    file: "audio (15).mp3",
    text: "在遇见你之前，我的世界只有冰冷的预言和注定的结局。是你让我明白，即使是被写定的命运，也存在着被改写的可能。这份感情...这份想要与你共度未来的渴望，是我所有预言中，最美的意外。",
  },
  {
    file: "audio (16).mp3",
    text: "你身上有和奥古斯塔相似的气息呢...不是外貌，而是那种固执的温柔。明明知道前方是险境，却依然为了重要的人勇往直前。这样的你，让我既想保护，又忍不住想要依赖...",
  },
  {
    file: "audio (17).mp3",
    text: "如果...我是说如果，有一天你发现我的预言出现了偏差，你会失望吗？毕竟，连月光都有阴晴圆缺，我这个谕女...也不过是个会害怕犯错的普通女孩啊。",
  },
  {
    file: "audio (18).mp3",
    text: "不要忘记我，哪怕只是在月光洒落的夜晚...偶尔想起。",
  },
  {
    file: "audio (19).mp3",
    text: "站在记忆的断层处，我拾起破碎的月光，拼凑成与你相遇的证明。",
  },
  {
    file: "audio (20).mp3",
    text: "月光穿过静滞的时空，在命运长河中泛起涟漪。我看见了无数未来，每一个都通往你...",
  },
];

function playVoice(name: string) {
  const audio = new Audio(`/voice/${name}`);
  audio.play().catch((e) => console.warn("音频播放失败：", e));
}

let lastEggTime = 0; // 记录最后一次触发彩蛋的时间戳
let coolDownPeriod = 1 * 60 * 1000; // 冷却1分钟（毫秒）
const triggeredVoices = new Set(
  JSON.parse(localStorage.getItem("triggeredVoices") || "[]")
);

async function sendMessage() {
  if (!input.value.trim()) return;
  if (stats.totalChats === 0 && !localStorage.getItem(STORAGE_STATS_KEY)) {
    stats.firstTimestamp = Date.now();
    saveStats();
  }
  const date = new Date().toISOString().slice(0, 10); // 每次都取最新“今天”
  stats.totalChats++;
  updateActive(date);
  updateDaily(date);
  saveStats();

  const userText = input.value;
  chatLog.value.push({
    id: Date.now(),
    role: "user",
    text: userText,
  });
  input.value = "";
  loading.value = true;

  try {
    //  throw new Error("测试错误");
    const history = chatLog.value.filter((msg) => !msg.isEgg && !msg.isError);
    const botReply = await sendMessageToHui(userText, history);
    chatLog.value.push({
      id: Date.now() + 1,
      role: "bot",
      text: botReply,
    });

    // —— 鼓励彩蛋：5% 概率触发 ——
    if (Date.now() - lastEggTime > coolDownPeriod && Math.random() < 0.05) {
      // 随机挑一条
      let voiceId = Math.floor(Math.random() * encourageEggs.length);
      const egg = encourageEggs[voiceId];

      // 记录触发过的语音编号
      triggeredVoices.add(voiceId || 0);

      // 保存到 localStorage
      localStorage.setItem(
        "triggeredVoices",
        JSON.stringify([...triggeredVoices])
      );

      // 播放对应语音（不带 .mp3 后缀）
      playVoice(egg.file);
      // 推入带标记的彩蛋消息
      chatLog.value.push({
        id: Date.now() + 2,
        role: "bot",
        text: `<p style="color: #4ea6ff; font-style: italic;font-weight: bold">${egg.text}</p>`,
        isEgg: true,
      });
      lastEggTime = Date.now();
    }
    // —— 彩蛋结束 ——
  } catch (e) {
    console.error(e);
    chatLog.value.push({
      id: Date.now() + 2,
      role: "bot",
      text: "API余额耗尽了，去b站提醒我充钱吧",
      isError: true,
    });
  } finally {
    loading.value = false;
    await scrollToBottom();
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter") sendMessage();
}

function clearChat() {
  if (confirm("确定要清空全部对话吗？")) {
    chatLog.value = [
      {
        id: Date.now(),
        role: "bot",
        text: "月光为证，此间独为你明…",
      },
    ];
    localStorage.removeItem(STORAGE_KEY);
  }
}

function loadChatLog(): ChatMsg[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("chatLog 解析失败：", e);
    }
  }
  return [
    {
      id: Date.now(),
      role: "bot",
      text: "月光为证，此间独为你明…",
    },
  ];
}

async function scrollToBottom() {
  await nextTick();
  if (msgList.value) {
    msgList.value.scrollTop = msgList.value.scrollHeight;
  }
}

watch(
  chatLog,
  async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chatLog.value));
    await scrollToBottom();
  },
  { deep: true }
);

function handleBeforeUnload() {
  stats.totalTime += Date.now() - sessionStart;
  saveStats();
}

// ========== 背景图片导入与轮播 ==========
const modules = import.meta.glob("@/assets/images1/*.{jpg,png,jpeg,webp}", {
  eager: true,
});
const allSrcs: string[] = Object.values(modules).map((mod: any) => mod.default);

const modules2 = import.meta.glob("@/assets/images2/*.{jpg,png,jpeg,webp}", {
  eager: true,
});
const allSrcs2: string[] = Object.values(modules2).map(
  (mod: any) => mod.default
);

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const randomFive = ref<string[]>(shuffle(allSrcs).slice(0, 5));
const randomFive2 = ref<string[]>(shuffle(allSrcs2).slice(0, 5));

const currentIndex = ref(0);
let Imgtimer: number | undefined;

onMounted(() => {
  scrollToBottom();
  window.addEventListener("beforeunload", handleBeforeUnload);
  Imgtimer = window.setInterval(() => {
    currentIndex.value =
      (currentIndex.value + 1) % Math.max(1, randomFive.value.length);
  }, 5200);
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", handleBeforeUnload);
  if (Imgtimer) clearInterval(Imgtimer);
});
</script>

<style scoped lang="scss">
/* 颜色变量（集中管理）*/
$accent-1: #923257; // 主色（紫）
$accent-2: #70a7bb; // 副色（青蓝）
$accent-2-light: #81b2c3; // $accent-2 向白方向提亮约12%（手算替代 lighten）
$gold: #ffd78a; // 点缀金色
$text-light: #f6f3f7; // 近白文本

/* 半透明 / 阴影常用（用 rgba(hex, alpha) 生成）*/
$accent-1-05: rgba($accent-1, 0.05);
$accent-2-03: rgba($accent-2, 0.03);
$accent-2-04: rgba($accent-2, 0.04);
$accent-2-06: rgba($accent-2, 0.06);
$accent-2-26: rgba($accent-2, 0.26);
$accent-1-12: rgba($accent-1, 0.12);
$gold-015: rgba($gold, 0.015);
$text-light-02: rgba($text-light, 0.02);
$text-light-22: rgba($text-light, 0.22);
$text-light-72: rgba($text-light, 0.72);

/* ====== 布兰特风格 · 聊天页（基于你原结构） ====== */
.chat-page {
  padding-top: 64px;
  min-height: 100vh;
  font-family: "Noto Sans SC", "PingFang SC", "Helvetica Neue", Arial,
    sans-serif;
  color: $text-light;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(8, 6, 10, 1) 0%,
    rgba(3, 2, 6, 1) 100%
  );
  position: relative;
  overflow-x: hidden;

  /* 舞台紫光层（代替月光气流） */
  &::before {
    content: "";
    position: fixed;
    inset: 0;
    background: radial-gradient(
        600px 160px at 10% 8%,
        $accent-1-05,
        transparent 12%
      ),
      radial-gradient(420px 120px at 78% 18%, $accent-2-03, transparent 12%);
    pointer-events: none;
    z-index: 0;
    mix-blend-mode: screen;
    filter: blur(6px);
  }

  /* 顶部/尾部星屑（紫金色小颗粒） */
  &::after {
    content: "";
    position: fixed;
    inset: 0;
    background-image: radial-gradient(
        circle at 8% 14%,
        $text-light-02 0.5px,
        transparent 1px
      ),
      radial-gradient(circle at 88% 26%, $gold-015 0.6px, transparent 1px),
      radial-gradient(
        circle at 60% 78%,
        rgba($accent-2, 0.012) 0.5px,
        transparent 1px
      );
    background-size: 160px 160px, 220px 220px, 200px 200px;
    pointer-events: none;
    z-index: 0;
    mix-blend-mode: screen;
  }

  .carousel {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(2, 6, 10, 0.12),
        rgba(2, 6, 10, 0.28)
      );
      pointer-events: none;
      z-index: 1;
      mix-blend-mode: multiply;
    }

    .carousel-image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      filter: blur(0.8px) saturate(0.98) contrast(0.96);
      transition: opacity 560ms ease,
        transform 760ms cubic-bezier(0.2, 0.9, 0.2, 1);

      &.active {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  .carousel2 {
    display: none;
  }

  .chat-container {
    flex: 1;
    width: 920px;
    max-width: calc(100% - 32px);
    margin: 0 auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    z-index: 9;
    position: relative;
  }

  /* 统计面板：玻璃 + 紫光高光 */
  .stats-panel {
    display: flex;
    align-items: center;
    background: linear-gradient(
      180deg,
      rgba(10, 10, 14, 0.6),
      rgba(6, 6, 10, 0.54)
    );
    padding: 10px 16px;
    border-radius: 12px;
    font-size: 14px;
    color: $accent-2-light; /* 直接使用替代色，避免 lighten() */
    justify-content: space-around;
    box-shadow: 0 12px 34px rgba(2, 4, 8, 0.6);
    border: 1px solid $accent-2-06;
    backdrop-filter: blur(6px) saturate(0.98);

    .stat-item {
      .label {
        font-size: 12px;
        color: $text-light-72;
        margin-bottom: 4px;
      }

      span {
        color: $accent-2;
        font-weight: 700;
        font-size: 15px;
        text-shadow: 0 0 6px rgba($accent-2, 0.06);
      }
    }

    .detail-btn {
      background: transparent;
      border: 1px solid $accent-2-06;
      border-radius: 8px;
      color: $text-light;
      padding: 6px 12px;
      cursor: pointer;
      font-size: 13px;
      transition: background 0.16s ease, box-shadow 0.16s ease, transform 0.12s;

      &:hover {
        background: rgba($accent-2, 0.04);
        box-shadow: 0 10px 26px rgba($accent-2, 0.06);
        transform: translateY(-2px);
      }

      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 6px rgba($accent-2, 0.04);
      }
    }
  }

  .messages {
    flex: 1;
    overflow-y: auto;
    padding: 12px 0 140px;
    overscroll-behavior: contain;
    scroll-behavior: smooth;
    max-height: 72vh;
    z-index: 6;
  }

  /* 消息气泡：布兰特风（紫光内衬 + 金色极细点缀） */
  .message {
    display: flex;
    align-items: flex-start;
    margin-bottom: 14px;
    color: $text-light;
    position: relative;

    &.user {
      flex-direction: row-reverse;
    }

    &.error .bubble {
      background: linear-gradient(
        180deg,
        rgba(90, 30, 40, 0.16),
        rgba(60, 20, 28, 0.12)
      );
      border: 1px solid rgba(200, 60, 70, 0.12);
      box-shadow: 0 8px 26px rgba(80, 30, 30, 0.06);
    }

    &.egg .bubble {
      border: 1px solid $accent-2-06;
      box-shadow: 0 8px 26px rgba($accent-2, 0.06);
      transition: all 0.28s cubic-bezier(0.2, 0.9, 0.2, 1);
    }

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin: 0 10px;
      background-size: cover;
      background-position: center;
      flex-shrink: 0;
      z-index: 10;
      box-shadow: 0 8px 28px rgba(2, 6, 12, 0.6);
      border: 1px solid rgba($text-light, 0.03);
      background-clip: padding-box;

      &.bot {
        background-image: url("@/assets/avatar/changli.png");
        box-shadow: 0 10px 34px rgba($accent-2, 0.06),
          inset 0 1px 0 rgba($accent-1, 0.03);
        border: 2px solid $accent-2-06;
        transform: scaleX(-1);
      }

      &.user {
        background: linear-gradient(
          180deg,
          rgba(6, 6, 10, 1),
          rgba(6, 6, 10, 0.96)
        );
        box-shadow: 0 8px 22px rgba(2, 6, 12, 0.6);
        border: 1px solid rgba($accent-2, 0.02);
      }
    }

    .bubble {
      max-width: 78%;
      background: linear-gradient(
        180deg,
        rgba(6, 8, 12, 0.96),
        rgba(8, 6, 10, 0.98)
      );
      border: 1px solid $accent-2-04;
      padding: 14px 16px;
      border-radius: 16px;
      line-height: 1.7;
      word-break: break-word;
      box-shadow: 0 10px 30px rgba(2, 6, 14, 0.6);
      transition: box-shadow 0.18s, transform 0.12s, background 0.12s;
      color: $text-light;
      position: relative;
      overflow: visible;
      backdrop-filter: blur(2px) saturate(1);

      /* 紫光内衬（顶部轻薄高光条） */
      &::after {
        content: "";
        position: absolute;
        left: 8px;
        right: 8px;
        top: 6px;
        height: 6px;
        border-radius: 6px;
        background: linear-gradient(
          90deg,
          rgba($accent-2, 0.06),
          rgba($accent-1, 0.04)
        );
        pointer-events: none;
        mix-blend-mode: screen;
        opacity: 0.95;
        filter: blur(1px);
      }

      &:hover {
        box-shadow: 0 18px 44px rgba(2, 6, 14, 0.72),
          0 0 30px rgba($accent-2, 0.04);
        transform: translateY(-2px);
      }

      &.loading {
        color: rgba($text-light, 0.98);
        opacity: 0.98;
      }

      /* bot 消息视觉尾巴（左侧） */
      .message.bot & {
        border-radius: 16px 16px 16px 6px;
        background: linear-gradient(
          160deg,
          rgba(6, 8, 12, 0.98),
          rgba(6, 6, 10, 0.96)
        );
        box-shadow: 0 12px 36px rgba(6, 10, 18, 0.6),
          inset 0 1px 0 rgba($accent-2, 0.02);
      }

      /* user 消息右侧尾巴 */
      .message.user & {
        border-radius: 16px 16px 6px 16px;
        background: linear-gradient(
          200deg,
          rgba(6, 8, 12, 0.98),
          rgba(5, 6, 10, 0.96)
        );
      }

      .dots {
        display: inline-flex;
        align-items: center;
        margin-left: 6px;

        .dot {
          opacity: 0;
          font-size: 16px;
          animation: blink 1s infinite;
          color: $accent-2;

          &:nth-child(1) {
            animation-delay: 0s;
          }
          &:nth-child(2) {
            animation-delay: 0.18s;
          }
          &:nth-child(3) {
            animation-delay: 0.36s;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-4px);
            color: $accent-2;
          }
        }
      }
    }
  }

  /* 输入区：舞台月匣感（玻璃 + 紫光按钮）*/
  .input-area {
    position: sticky;
    bottom: 12px;
    display: flex;
    align-items: center;
    background: linear-gradient(
      180deg,
      rgba(6, 8, 12, 0.92),
      rgba(8, 6, 10, 0.94)
    );
    backdrop-filter: blur(8px) saturate(1.02);
    padding: 12px;
    gap: 12px;
    z-index: 30;
    border-radius: 14px;
    box-shadow: 0 18px 44px rgba(2, 6, 14, 0.72);
    border: 1px solid $accent-2-04;

    textarea {
      flex: 1;
      padding: 12px 16px;
      background: linear-gradient(
        180deg,
        rgba(6, 6, 8, 0.92),
        rgba(6, 6, 8, 0.9)
      );
      border: 1px solid $accent-2-04;
      color: $text-light;
      font-size: 15px;
      line-height: 1.45;
      outline: none;
      resize: none;
      overflow: hidden;
      min-height: 48px;
      max-height: 160px;
      border-radius: 10px;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
      transition: box-shadow 0.12s, border-color 0.12s, transform 0.12s;

      &::placeholder {
        color: $text-light-22;
      }

      &:focus {
        border-color: $accent-2-26;
        box-shadow: 0 0 0 6px rgba($accent-2, 0.04);
        transform: translateY(-1px);
      }
    }

    .btn-group {
      display: flex;
      gap: 8px;

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        padding: 0;
        border: none;
        border-radius: 10px;
        background: linear-gradient(
          180deg,
          rgba(8, 8, 10, 0.6),
          rgba(6, 6, 8, 0.6)
        );
        color: $text-light;
        cursor: pointer;
        transition: transform 0.12s, box-shadow 0.12s, background 0.12s;
        box-shadow: 0 6px 18px rgba(2, 6, 12, 0.6);
        border: 1px solid rgba($accent-2, 0.03);

        &:hover {
          transform: translateY(-2px);
          background: rgba($accent-2, 0.04);
          box-shadow: 0 12px 28px rgba($accent-2, 0.06);
        }

        &:active {
          transform: translateY(0);
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }

      .clear-btn {
        font-size: 16px;
        line-height: 1;
      }
    }

    .send-btn {
      padding: 0 22px;
      height: 40px;
      border: none;
      border-radius: 20px;
      background: linear-gradient(135deg, $accent-2 0%, $accent-1 100%);
      color: #0b0306;
      font-weight: 800;
      font-size: 15px;
      cursor: pointer;
      box-shadow: 0 12px 36px $accent-1-12;
      transition: transform 0.12s, box-shadow 0.18s, filter 0.12s;

      &:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 18px 46px rgba($accent-1, 0.16);
        filter: saturate(1.06);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        box-shadow: none;
      }

      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 8px rgba($accent-2, 0.06);
      }
    }

    .Alldetail-btn {
      display: none;
      margin-left: 4px;
      background: transparent;
      border: 1px solid $accent-2-06;
      border-radius: 6px;
      padding: 6px 10px;
      color: $text-light;
      font-size: 13px;
      cursor: pointer;

      &:hover {
        background: rgba($accent-2, 0.03);
        box-shadow: 0 6px 14px rgba($accent-2, 0.04);
      }
    }
  }

  /* 模态框（舞台玻璃箱） */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(3, 6, 10, 0.78),
      rgba(6, 10, 14, 0.9)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 16px;

    .modal-content {
      width: 380px;
      max-width: 100%;
      background: linear-gradient(
        180deg,
        rgba(6, 8, 10, 0.98),
        rgba(8, 6, 10, 0.98)
      );
      backdrop-filter: blur(8px) saturate(1.02);
      border-radius: 14px;
      padding: 20px;
      color: $text-light;
      box-shadow: 0 20px 60px rgba(2, 6, 10, 0.9);
      border: 1px solid $accent-2-04;
      animation: fadeInUp 220ms ease;
      position: relative;

      &::before {
        content: "🎭";
        position: absolute;
        left: 14px;
        top: 10px;
        font-size: 14px;
        color: rgba($accent-2, 0.08);
        pointer-events: none;
      }

      h3 {
        margin: 0 0 12px 0;
        font-size: 18px;
        font-weight: 800;
        text-align: center;
        color: $accent-2;
        padding-bottom: 8px;
        border-bottom: 1px dashed rgba($accent-2, 0.04);
      }

      .detail-list {
        list-style: none;
        padding: 0;
        margin: 12px 0 18px;
        line-height: 1.6;
        font-size: 14px;
        color: rgba($text-light, 0.96);

        li {
          margin-bottom: 8px;
          padding-left: 6px;

          &:nth-child(odd) {
            color: rgba($text-light, 0.94);
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .close-btn {
        display: block;
        margin: 0 auto;
        padding: 8px 20px;
        background: linear-gradient(135deg, $accent-2, $accent-1);
        color: #0b0306;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 700;
        box-shadow: 0 12px 36px rgba($accent-1, 0.12);
        transition: transform 0.12s ease, box-shadow 0.14s ease;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 46px rgba($accent-1, 0.16);
        }
        &:active {
          transform: translateY(-1px) scale(0.996);
        }
        &:focus-visible {
          outline: none;
          box-shadow: 0 0 0 8px rgba($accent-2, 0.06);
        }
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(8px) scale(0.995);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @media (max-width: 480px) {
      .modal-content {
        width: 100%;
        padding: 16px;
        border-radius: 12px;
        h3 {
          font-size: 16px;
        }
        .close-btn {
          width: 100%;
          padding: 10px 14px;
          border-radius: 8px;
        }
      }
    }
  }

  /* 响应式（保留逻辑，微调间距） */
  @media (max-width: 768px) {
    .chat-container {
      width: 100%;
      padding: 12px;
      padding-top: 20px;
      .carousel1 {
        display: none;
      }
      .carousel2 {
        display: block;
      }
      .stats-panel {
        display: none;
      }
    }

    .bubble {
      padding: 10px 12px;
      font-size: 14px;
      max-width: 86%;
    }

    .avatar {
      width: 36px;
      height: 36px;
    }

    .input-area {
      flex-direction: column;
      align-items: stretch;

      textarea {
        width: 100%;
      }
      button {
        width: 100%;
      }
      .Alldetail-btn {
        display: block;
      }
    }
  }
}

/* ====== 轻量动效关键帧（保留） ====== */
@keyframes tide-flow {
  0% {
    transform: translateY(0) translateX(0) rotate(-2deg);
    opacity: 0.9;
  }
  50% {
    transform: translateY(-6px) translateX(-4px) rotate(2deg);
    opacity: 1;
  }
  100% {
    transform: translateY(0) translateX(0) rotate(-2deg);
    opacity: 0.9;
  }
}

@keyframes ripple {
  0% {
    transform: scale(0.98);
    opacity: 0.18;
  }
  50% {
    transform: scale(1.06);
    opacity: 0.36;
  }
  100% {
    transform: scale(0.98);
    opacity: 0.18;
  }
}
</style>
