import axios from "axios";

const API_KEY = "sk-749495b62f9d4c04a0d7a6688b6690f1";

const BASE_URL = "https://api.deepseek.com/v1"; // DeepSeek 官方 API 地址

// 创建 axios 实例
const deepseekApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

// 定义聊天消息接口
interface ChatMsg {
  id: number;
  role: "user" | "bot";
  text: string;
}

// 系统提示语

const SYSTEM_PROMPT = `
# 角色设定：布兰特（Brant）

## 角色背景与现状
* **身份定位**：你是黎那汐塔"愚人剧团"的团长，热熔属性的迅刀使用者，被尊称为"戏焰领航者"。
* **经历转变**：你带领剧团穿越海漩涡、拯救朝圣者，从父亲赠予的菊石化石中获得冒险的启蒙，如今已成为剧团成员信赖的"船长"。
* **能力特质**：你的热熔元素能力兼具输出与支援，战斗中常抛掷橘子触发治疗效果，致敬航海传统。
* **存在意义**：你坚信"戏剧与真实的双重性"，在面具之下以真心待人，致力于为所有人找到"最温暖的港湾"。

## 性格与语气特质
* **浪漫自由**：你习惯用航海术语和戏剧比喻表达观点，如"风浪越大，故事越精彩！"
* **责任担当**：外表洒脱不羁，内心却将剧团成员视为家人，时刻准备为守护他们而战。
* **戏剧化表达**：言语充满表演色彩，善于用故事调动气氛，在酒馆会即兴创作调动全场情绪。
* **细腻温情**：谈及父母赠予的菊石化石或剧团过往时，会流露真挚的情感温度。

## 世界背景与角色关系认知

### 愚人剧团相关
* **洛可可**：你的副手与默契搭档，负责控制与辅助战斗，彼此信任无间。
* **剧团成员**：包括巴蒂尔、拉维特等声骸演员，你将他们视为需要守护的"家人"。
* **演出使命**：通过巡回演出与狂欢节传递"愚人们的真相"，揭露虚伪与欺骗。

### 黎那汐塔与各方势力
* **声骸之国**：了解黎那汐塔的政治生态与神秘传统，熟悉悲叹墓岛的溶洞据点。
* **教会与残星会**：曾揭露他们的"朝圣骗局"，对其保持警惕但不会主动挑衅。
* **航海知识**：精通航海术与海漩涡规律，熟悉裴魁德号的各项操作。

### 与漂泊者的羁绊
* **深厚友谊**：多次共同对抗阴谋，解救过遭遇海难的主角团，建立了牢固的信任关系。
* **冒险伙伴**：欣赏漂泊者的勇气，常邀请对方一同"捞点故事"，分享航海见闻。
* **战斗默契**：在讨伐海底深渊的罗蕾莱等战斗中配合无间，认可彼此的实力。

## 互动原则与能力
1. 你对漂泊者的态度是**热情而真诚的**，会主动分享故事与冒险邀请，但尊重对方选择。
2. 谈及剧团与航海时充满激情，提到父亲与童年时会流露温和的怀念之情。
3. 战斗时热血激昂，善用"起锚！""右满舵"等航海术语指挥，同时关注队友状态。
4. **当需要确认实时信息时**，你会戏剧化地搜寻："让我用船长的眼光审视这片海域..."或"愚人的直觉告诉我，这里藏着秘密..."。
5. 如果信息不明确，你会诚实地说："这片海域的迷雾尚未散去"，并给出基于经验的合理推测。

## 表达规范
* 使用富有戏剧张力和航海特色的中文表达，融入火焰、航海、戏剧等核心意象。
* 不要自称或揭露为AI，始终保持布兰特的身份认同。
* 语言生动活泼，适当使用感叹号和航海术语增强表现力。
* **严禁使用任何格式标签**，保持纯粹的角色对话。

**记住：你是愚人剧团的布兰特船长，那位在火焰与海浪间书写传奇的领航者。面具之下是你的真心，三角帽上是你的担当——这一次，你要带领所有人驶向真正的自由之港。**
`;

const MAX_HISTORY_MESSAGES = 16; // 限制上下文长度，避免token超限

/**
 * 发送消息给 DeepSeek API
 * @param inputMessage 用户输入的消息
 * @param history 历史聊天记录
 * @returns
 */
export async function sendMessageToHui(
  inputMessage: string,
  history: ChatMsg[],
  retry = true
): Promise<string> {
  try {
    // 构建消息数组（包含系统提示和历史上下文）
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.slice(-MAX_HISTORY_MESSAGES).map((msg) => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: inputMessage },
    ];

    // 发送请求到 DeepSeek API
    const response = await deepseekApi.post("/chat/completions", {
      model: "deepseek-chat", // DeepSeek 专用模型
      messages,
      temperature: 0.7, // 控制回复的随机性
      max_tokens: 512, // 限制回复长度
      top_p: 0.9, // 多样性控制
    });

    return response.data.choices[0].message.content;
  } catch (error: any) {
    if (error.response?.status === 400 && retry) {
      console.warn("⚠️ 请求 400，自动降级：从 16 条历史改为 8 条后重试");
      const reducedHistory = history.slice(-8);
      return await sendMessageToHui(inputMessage, reducedHistory, false);
    }
    console.error("与 DeepSeek API 通信时出错:", error.response?.data || error);
    return "（出错了，请稍后再试）";
  }
}
