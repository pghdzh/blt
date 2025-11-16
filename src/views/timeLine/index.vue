<template>
  <div class="megumi-page" aria-live="polite">
    <main class="container" ref="mainContainer">
      <!-- HERO 区域 -->
      <header class="hero" role="banner">
        <div class="left-col">
          <button class="avatar-card">
            <picture class="avatar-wrap">
              <img
                src="@/assets/images1/slty (5).webp"
                class="avatar"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div class="avatar-meta">
              <span class="avatar-badge">共鸣能力：戏焰领航</span>
            </div>
          </button>
        </div>
        <div class="right-col" ref="metaCard">
          <div class="hero-panel">
            <h1 class="name">
              布兰特 <span class="jp">（黎那汐塔愚人剧团的剧团长）</span>
            </h1>
            <p class="subtitle">于喝彩声中掌舵，在烈焰尽头守护</p>
            <p class="lead">
              为人浪漫洒脱，多变生动。是剧团的主心骨和领袖。
              舞台之上，他为故事更换面具，为戏剧调整表情。但在舞台之下，他待人只凭一颗真心。
            </p>
          </div>
        </div>
      </header>

      <!-- 内容卡片区 -->
      <section id="personality" class="card personality">
        <div class="card-head">
          <h2>核心机制</h2>
        </div>
        <ul class="traits">
          <li>
            【喝彩】：血条上方上限100点的特殊能量条。当达到25、50、75、100点后，会回复角色血量。当【喝彩】充满后，E会被替换为【火焰归亡曲】。
          </li>
          <li>【喝彩】获取方式：常态攻击，变奏技能，共鸣技能命中。</li>
          <li>
            【火焰归亡曲】：布兰特主要的协奏能量获取来源，因为不会锁定敌人，最好等敌人不动时施放。
          </li>
          <li>
            【空中攻击】：布兰特一共有四段空中A。第1、2段可以选择短按或者长按。
          </li>

          <li style="font-weight: bold">输出流程：</li>
          <li>入场-R-AAAA-EE-【火焰归亡曲】（强化E）</li>
          <li>入场-R-ZZAA-【火焰归亡曲】（强化E）</li>
          <li>
            技能缩写：普攻 = A，重击 = Z，共鸣技能 = E，共鸣解放 = R，声骸 = Q
          </li>
        </ul>
      </section>

      <section id="resonance-status" class="card overview">
        <div class="card-head">
          <h2>共鸣状况</h2>
        </div>
        <div class="two-col">
          <div class="text-block">
            <p>
              布兰特的受试样本波形检测图呈椭圆形波动，时域表示稳定，未见任何异常波动倾向。检测结果判断为正常阶段。当前超频临界值高，稳定性高，无超频风险。无过往超频史。批复意见：稳定，同意剧团演出申请。演出中出现一切意外状况，由愚人剧团负责。
            </p>
          </div>
        </div>
      </section>

      <!-- 新增三大主题区域 -->
      <section id="food" class="card special-section">
        <div class="card-head">
          <h2>最初的宝藏</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/item1.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>
              一枚被细心保存的菊石化石。小小的布兰特站在桌上，向父亲骄傲宣布：自己在父亲的书海里找到了一件宝物！父亲摘下眼镜仔细观察，发现那是被放置在书架底部的菊石化石。于是，父亲给他讲述了一个关于挖掘过去、寻找真相的故事。
            </p>
            <p>那就是他冒险的起源，是他见证的最初的宝藏。</p>
          </div>
        </div>
      </section>
      <section id="shattered-crystal" class="card special-section">
        <div class="card-head">
          <h2>戏梦人生</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/item2.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>堆叠的舞台面具造像，适用于不同的剧目和场合。</p>
            <p>
              他是剧目的主角、舞台的焦点，他为故事更换面具、为观众带来欢笑。而在舞台之下，他不需要遮掩真心。
            </p>
            <p>此时，他只是布兰特</p>
          </div>
        </div>
      </section>

      <section id="cyclic-clock" class="card special-section">
        <div class="card-head">
          <h2>船长的证明</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/item3.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>一顶三角帽，上面绣有愚人剧团的标志。</p>
            <p>
              布兰特始终记得他在愚人船上看到的第一场演出。船长不惧惊涛骇浪，带着所有船员穿过冥河峡湾，最终将一顶三角帽戴在这位对冒险充满期待的孩子头上，打趣一样地叫他：布兰特船长。
            </p>
            <p>
              他也记得属于自己的第一场演出。他站在船帆高处，告诉所有人拉帆转舵，带领大家平安从吞噬一切的海漩涡中归来。那一刻，船员将这顶三角帽庄重地戴在他头上。船员们高喊着他的名字：船长，布兰特船长！
            </p>
          </div>
        </div>
      </section>

      <section id="collective-album" class="card special-section">
        <div class="card-head">
          <h2>纯真烈度</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/food.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>
              布兰特亲自酿造的剧团烈度，口感清甜，回味无穷。
              他认真对待自己酿造的每一瓶酒，像他全身心投入的每一场演出。
              他把自己的名字庄重写在瓶身上，为每一个拿到酒的人献上祝福。
              生命应当欢歌、活着就要自由。
            </p>
          </div>
        </div>
      </section>

      <section
        id="timeline"
        class="card timeline"
        aria-labelledby="timeline-heading"
      >
        <div class="card-head">
          <h2 id="timeline-heading">共鸣链详解</h2>
        </div>
        <div class="tl-wrap" role="list">
          <div class="vl" aria-hidden="true"></div>
          <ol class="tl-list">
            <li
              v-for="(ev, i) in timeline"
              :key="i"
              class="tl-item"
              role="listitem"
              tabindex="0"
              :aria-label="``"
            >
              <div class="tl-card">
                <h3 class="tl-title">第 {{ i + 1 }} 链 · {{ ev.title }}</h3>
                <p class="tl-desc">{{ ev.desc }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section class="ll-stories" ref="storyRef">
        <div class="card" role="region" aria-labelledby="stories-title">
          <header class="card-head">
            <h2 id="stories-title" class="card-title">布兰特纪事</h2>
          </header>

          <main class="card-body">
            <transition name="fade-slide" mode="out-in">
              <article
                :key="items[current].id"
                :id="`panel-${items[current].id}`"
                class="story"
                role="tabpanel"
                :aria-labelledby="`tab-${items[current].id}`"
              >
                <h3 class="story-head">{{ items[current].title }}</h3>
                <div
                  class="story-content"
                  v-html="items[current].content"
                ></div>
              </article>
            </transition>
          </main>

          <footer class="card-foot">
            <button class="nav-btn" @click="prev" aria-label="上一则故事">
              ‹
            </button>
            <div class="pager">{{ current + 1 }} / {{ items.length }}</div>
            <button class="nav-btn" @click="next" aria-label="下一则故事">
              ›
            </button>
          </footer>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const timeline = ref([
  {
    title: "跟随洋流和信风",
    desc: `火焰归亡曲施放期间会短暂停滞周围的目标，若在此期间切换至其他角色则提前结束停滞效果。
施放变奏技能为我！后或每次空中攻击空翻时，布兰特造成伤害提升20%，持续5秒，可叠加3层。`,
  },
  {
    title: "掠夺欢声与笑颜",
    desc: `施放空中攻击和火焰归亡曲时暴击提升30%。
布兰特延奏技能航向确定！获得额外效果，20秒内：
下一位登场角色或附近队伍中激活布兰特延奏技能的角色施放共鸣技能命中目标时，布兰特将攻击目标，会产生一次爆炸，造成布兰特攻击440%的热熔伤害，此次伤害为普攻伤害。爆炸每秒可触发1次，最多可触发2次爆炸。
·切换至其他角色会保留该额外效果。`,
  },
  {
    title: "无惧惊涛骇浪",
    desc: `火焰归亡曲伤害倍率提升42%。`,
  },
  {
    title: "纵情放声歌唱",
    desc: `火焰归亡曲获得的护盾量提升20%，布兰特施放火焰归亡曲时，会回复附近队伍所有角色的生命值（每1%的共鸣效率回复6.60点生命值）。`,
  },
  {
    title: "演员说：生活皆舞台",
    desc: `造成普攻伤害时，普攻伤害加成提升15%，持续10秒。`,
  },
  {
    title: "船长答：狂欢即世界！",
    desc: `空中攻击的倍率提升30%。
施放火焰归亡曲后，会在原地产生一次再燃，造成等同于火焰归亡曲30%的热熔伤害，此次伤害为普攻伤害。`,
  },
]);

const reducedMotion =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const items = [
  {
    id: "1",
    title: "午后的酒馆即兴",
    content: `突如其来的雷声打乱了酒保摇酒的节奏，随即而来的骤雨也浇灭了客人们最后一点心情。现在，这座被暴雨包裹的酒馆里并无任何有趣的故事。酒保缓慢地摇酒，冰块碰撞起来连声音都没有；客人呵欠连天，连酒水都变得乏味。

“这可不像个酒馆啊，朋友们！”一位青年推开大门，腥咸的雨水溅入酒馆，潮湿的空气冲入客人们的鼻腔。他小跑到吧台，接过旁边客人的空酒杯。

 

“嘿，你做什……”

“嘘……”青年打断客人的疑问，在酒保的钱杯里丢入几个贝币，“满上一杯！朋友，好不容易来酒馆一次，不得聊些有意思的事情吗？”

“有趣的事情？你在开玩笑吧！你看看外面天气，今天这雨怕是停不下来。再看看这菜单，毫无新意，还涨价了！”

“当然啦，我从雨里来的。你看，我的头发还在向下淌水！但就算雨里也有新故事啊，朋友。就像你手中的通缉令。”他轻巧地拿过客人手里的纸张。

“这都是我们上上个话题了，说的什么归亡者，戴着这奇怪的面具，他做了什么来着……”

“他和船员一起穿越满是塞壬的迷雾，从海洋最深处的漩涡中打捞起满船的歌声。还有，他和朋友们一起去救下那些被巨浪打翻的朝圣船，从海盗口中抢下一笔笔物资！”

“这……好像不对？你在这讲故事呢！”

“哈哈哈，那当然啦。来吧，朋友，我们再喝一杯！然后，我来和大家讲讲这关于归亡者的故事！”他和客人碰杯，将客人的帽子戴在酒保的头上，又帮酒保把准备已久的玫瑰送到姑娘手中。在这座被暴雨包裹的酒馆里，戴帽子的酒保成了船上的舵手，光头的客人在大海上向残象开炮，收获玫瑰花的姑娘跳起一支即兴的舞蹈

青年讲述一个又一个关于大海的故事，每一个人都参与其中。

但又有几个人推门而入，打断了这次即兴演出。

 

“这可真像个酒馆啊，布兰特！”为首的人拿出通缉令，向手下下达命令，“抓住他！这回赏金翻倍！”

“那还是存到下次吧！”青年已经鞠躬谢幕。他将手中燃起紫色火焰的面具抛出，在来人躲闪之时，他已经消失在了原地。

而视线之内，只有无数彩带气球，以及一张张来自大海的礼物。

人们将礼物捡起，却发现那居然是愚人剧团的演出戏票。`,
  },
  {
    id: "2",
    title: "黄昏，愚人欢唱",
    content: `
一天的彩排结束时，火红的云彩正烧到大海的尽头。

船长招呼着几个船员在海滩上搭起晚饭用的桌子和烤架。巴蒂尔钓上好几条大鱼，拉维特猎来好几只野兔。洛可可大副带着佩洛去城里用「布兰特船长」的赏金换回满满一筐肉。

船长则笑着把珍藏已久的蜜露果酒拿出来分给大家，他说：“就快到狂欢节了，排演了那么久，今天可以庆祝一下，每天都可以庆祝一下！”

就要狂欢节了。

所有人都期待这个日子，他们要在狂欢节的舞台上把属于愚人的故事讲给观众们听！为此，他们辛苦彩排了很久，拉维特在编曲时像要把灵魂都写进戏里，蒂娜在一个高音上磨了半宿……每一个人都为了狂欢节竭尽全力，因为他们相信自己的船长，相信他说的话——“我们将在狂欢节上向所有人询问：生命何以欢歌？我们也

告诉所有人属于我们的答案。我们更要让大家知道，我们不是一群疯子，只是一群愚人。”

是的，只是一群愚人。那么对船长来说，愚人是什么？

吃饭的时候，剧团新来的孩子们在船长身边围了一圈，他们都挤在一起询问：船长，愚人是什么？

船长笑而不言，从兜里变出好些颗糖果放在孩子们手里。他看向自己的船员们，巴蒂尔正在和拉维特争论着什么，海默和巴德他们正在猜拳，蒂娜正教着洛可可如何在演唱时稳住气息。孩子们围在他身边，见他不说话，就把糖果都塞到他嘴里。

“好了，好了！小卡提，我在想怎么回答你呢！”船长被糖果甜到牙齿，连忙在今晚要蛀牙前投降，“那我要给出自己的答案了，你们可要乖乖听好！”

“在这里，每个追求自由的都是愚人！你是，我是，大家都是！”

“就这样？听起来一点都不特别……”小卡提撇嘴，“那我们要在狂欢节证明什么呢？”

“我们不用证明什么。”布兰特站起来，将船长帽稳稳戴好，“我们只要向大家歌唱，只要向大家展现自己！”

“而现在，来吧愚人们，我们先饱餐一顿！” `,
  },

  {
    id: "3",
    title: "营火前的思考",
    content: `
深夜，布兰特坐在营火前整理着演出要用到的东西。

首先是表演要用到的面具。他将每一张面具擦拭干净，偶尔还会抽出一张戴上，即兴表演一段。布兰特演过很多角色，有无往直前的英雄主角，也有滑稽幽默的小丑。舞台上，他会是一掷千金的富家公子，也会是奸诈的佞臣，虔诚的教士……想到这里，他自嘲一笑。对他来说，那可算不上是什么愉快的体验。

他痛恨佞臣，也讨厌教士。但在舞台上，他就是戏中的角色，他忠实地把自己藏在面具之后，去出演那一张张面具的人生。此时，他尊重舞台，尊重戏里的每一个角色。因为他知道，舞台就是他的大海。

 

擦拭过面具之后， 他开始熨烫自己的戏服。

站在舞台之上，戏服一定要妥帖得体。这不仅仅是为了角色，更是为了观众。要为观众带来笑容，首要的前提就是尊重。于是，他将戏服熨烫平整，不放过一个衣角。因为他知道，掌声就是他的大海。

 

最后，他开始整理戏里要用到的舞台道具。

英雄的佩剑，小丑的手鼓，富家公子的家族勋章，佞臣的权杖，教士的经文，还有……一个木质盒子。

这个盒子是父母留给他的东西。盒子上刻着的燕鸥提醒着他始终记得被自己埋藏的名字。打开盒子后，菊石上的涡纹也提醒他要记住那场最初的冒险。而在被送上朝圣船后的每个昼夜，在眼见那些疫病、伤痛、别离的时候，这枚菊石陪伴着他，提醒他要去记住那些他亲眼见证的一切。

它提醒着他去观察舞台之下的生活。

它提醒着他去注视戏剧背后的真心。

它提醒着他去凝视面具背后的自己。

于是，他将这枚最重要的舞台道具好好收起。

因为他知道，只有尊重自己的时候，他所站的地方才是「大海」（舞台）。`,
  },

  {
    id: "4",
    title: "穿过海中风暴",
    content: `惊雷在他耳边炸开，暴雨将所有的声音都隔绝在外。

这是他们遇到过的最猛烈的风暴。风浪要将他们推上高空又狠狠摔下，巨兽在他们身后重重咆哮。大海要在这个晚上向他们展示自然的全部伟力，要让他们知道：在大海上，他们的生命不值一提。

他睁开眼，看着眼前不羁的大海。

 

“放弃吧，愚人！”「风」（恐惧）在他的耳边呼啸，“看看你们这艘破船！你如何带着大家离开！”

“结束了，愚人！”「海」（舞台）在他的心底嘲笑，“瞧瞧你身后！那头巨兽已经张开大口准备给你们送上结局！”

“下令吧，船长！”「剧团」（家）在他的身边安慰，“下令吧，我们跟随你的航向！”

“拉足马力！我们要以最快的速度前进！来吧，朋友们！”他的声音全无任何迷茫，眼前已不在乎任何风暴，“让我们驯服这片大海！”火焰从桅杆上燃起，向下迅速延伸，包裹住剧团的旗帜，包裹住愚人们的航船。在大海的咆哮中，这孤独的火焰迎着风浪进发。而在这浪火中，他荡起钩锁，飞跃向前，以笑声回应巨浪，像一只燕鸥一头扎入风暴深处。

“而这头巨兽，就交给我吧！”

………………

…………

……

风安静下来。

这艘小船只身在大海上航行，船身摇摇晃晃，船员们都站在甲板。在船长的带领下，他们穿过风暴，回到既定的航线。而此时，所有人在默念着一个名字：

“他会没事的。”“船长……”“他会回来的。”“真的吗？”“我相信他。”“布兰特……”

“布兰特！！船长！是船长！！！”

人群欢呼，如同幕布在终场时再度拉开。

在燃起的朝阳前，他们见到了一个奇迹——他们的船长布兰特站在巨兽的头顶，他骑着这头鳍龙归来。

“朋友们，来见见我们的新朋友拉里奥！现在，我们有新的船了！”

之后，他们会在这只鳍龙的身上建立属于他们的舞台。再之后，他们会知道，这只鳍龙是罕见的梦境鳍龙。他们会一起在黎那汐塔各处进行巡演，让所有人听到他们的故事。

而现在，布兰特站在鳍龙身上向他们所有人致意：“多么完美的开场，朋友们！现在，尽情欢呼吧！”

“BRAVO！BRAVO！”`,
  },

  {
    id: "5",
    title: "狂欢结束之后",
    content: `彻夜的狂欢终于结束。拉古那广场上，纷飞的彩带碎屑还闪着微光。过路人们谈论着昨夜的演出，对他们来说，那只是一场戏剧的落幕。而对于舞台上的演员来说，这场落幕之后，是崭新的开始。

他们终于可以大方走在拉古那的街道，终于可以回到过去被遗忘的家中。在舞台落幕的时候，他们为自己欢呼，因为这一刻，他们才终于能够踩在陆地上。

而到了陆地上，愚人们应该做什么？那个晚上，船长和很多人谈了心。有些人离开剧团，回到自己的家中。船长给他们送上祝福和拥抱，希望他们以后的生活幸福美满。有些人想跟随剧团继续冒险，想要去新的天地看看，船长也都应下。还有些人迷茫无措，不知如何开展新的生活，船长就给所有人放了假。

“毕竟狂欢之后，就需要时间去收拾地上的彩带碎屑。”船长是这样说的。

 

也有人好奇船长的想法。船长大方地和他分享自己在拉古那的一日：

狂欢节后的某天，他向大副请了个假。那天他没戴面具，没穿戏服，甚至没戴自己的船长帽。他首先去玛格烈特买了个披萨，又去广场上和鸽子打了个赌。之后，他甚至拐到水星天大教堂，指着岁主像说：“嘿！大家都没见过你呢！”

最后，他回到自己原来的家看看。

“但最后我也没进去。毕竟离开那么久，那座房子早就被变卖，已经不是我家了。我本想去告个别，到那才发现，连告别都不需要。但是，我听到了一阵钢琴声。”

“那是我都不熟悉的钢琴曲。在那座房子里，有新的家庭开始了新的生活。而我，也早已走上自己的道路。我想起小时候父亲教我弹琴的时候和我说，你一定要找到自己喜欢的曲子。”

“船长还会弹钢琴？”

“很可惜，还没等我学会，修会就送了我一张朝圣船船票。但没关系，现在，我开始和大家一起学绞弦琴了！”

 

“对我来说，这里才是家。大家唱的歌讲的故事，就是我找到的最好的曲子。所以，我不需要回到过去。因为对我来说，收拾完地上的彩带碎屑后，就要去迎接下一场狂欢了！”

“朋友们，要和我一起，去新的地方看看吗？”

船长发出邀请，因他早已确立新的航向。`,
  },
];
const current = ref(0);

function select(index) {
  current.value = index;
  // 将焦点移回当前 tab（便于无障碍与键盘导航）
  const id = `tab-${items[index].id}`;
  const el = document.getElementById(id);
  if (el) el.focus();
}
const storyRef = ref<HTMLElement | null>(null);

function prev() {
  current.value = (current.value - 1 + items.length) % items.length;
  select(current.value);
  storyRef.value.scrollIntoView({ behavior: "smooth", block: "start" });
}

function next() {
  current.value = (current.value + 1) % items.length;
  select(current.value);
  storyRef.value.scrollIntoView({ behavior: "smooth", block: "start" });
}

onMounted(() => {
  if (!reducedMotion) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".avatar-card", {
      duration: 0.8,
      y: 18,
      opacity: 0,
      scale: 0.99,
    }).from(
      ".right-col > .hero-panel .name",
      { duration: 0.9, x: 24, opacity: 0 },
      "-=0.45"
    );

    gsap.utils.toArray(".tl-item").forEach((it: any, idx: number) => {
      gsap.from(it.querySelector(".tl-card"), {
        scrollTrigger: {
          trigger: it,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 22,
        duration: 0.7,
        delay: idx * 0.06,
      });
    });

    gsap.to(".avatar-card", {
      scale: 1.007,
      duration: 2.8,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  } else {
    document.documentElement.classList.add("reduced-motion");
  }
});
</script>

<style scoped lang="scss">
/* 布兰特风格 —— 紫蓝海感（水母/幻海） + 毒药/治愈双重高光 */
$bg-deep: #050714; // 深海夜色底
$deep-2: #071028; // 次深底用于渐变
$accent-1: #923257; // 暗紫主光（冷雅）
$accent-2: #70a7bb; // 冷海蓝高光（湿光感）

$text-main: #eae9ee;
$card-bg: rgba(6, 8, 12, 0.46);
$card-border: rgba(184, 107, 224, 0.06);
$soft-shadow: rgba(0, 0, 0, 0.6);
$inner-glow: rgba(184, 107, 224, 0.03);

.megumi-page {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(180deg, $bg-deep 0%, $deep-2 72%);
  font-family: "Noto Sans SC", system-ui, -apple-system, "Segoe UI", Roboto,
    Arial;
  color: $text-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: clamp(20px, 4vw, 80px);
  box-sizing: border-box;
  padding-top: 60px;

  &.reduced-motion * {
    transition: none !important;
    animation: none !important;
  }

  .container {
    position: relative;
    z-index: 10;
    max-width: 1100px;
    margin: 0 auto;
    padding: clamp(12px, 2vw, 40px);
  }
}

/* ========== HERO 区域（整体暗化 + 血玫点光） ========== */
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 28px;
  align-items: start;
  padding: 12px;
  margin-bottom: 12px;

  /* 乐谱画布 —— 在 hero 背后增加五线谱移动感 */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-image: repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.02) 0px,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px,
      transparent 16px
    );
    opacity: 0.06;
    mix-blend-mode: overlay;
    transform: translateY(-4%);
    animation: staff-drift 16s linear infinite;
  }

  .left-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 6;
  }

  .avatar-card {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.01),
      rgba(184, 107, 224, 0.01)
    );
    border-radius: 16px;
    padding: 12px;
    display: grid;
    justify-items: center;
    gap: 8px;
    border: 1px solid $card-border;
    box-shadow: 0 14px 44px $soft-shadow, inset 0 1px 0 $inner-glow;
    cursor: pointer;
    transition: transform 0.28s ease, box-shadow 0.28s ease;
    width: 100%;
  }

  .avatar-wrap {
    width: 100%;
    display: block;
  }

  .avatar {
    width: 100%;
    height: auto;
    border-radius: 12px;
    display: block;
    box-shadow: 0 12px 34px rgba(0, 0, 0, 0.5), 0 0 18px rgba($accent-1, 0.03);
    transition: transform 0.5s ease, filter 0.5s ease;
    background-color: rgba(0, 0, 0, 0.04);
    filter: saturate(0.8) contrast(0.95) brightness(0.92);
  }

  .avatar-card:hover .avatar {
    transform: translateY(-4px) scale(1.02);
    filter: saturate(0.7) contrast(0.9) brightness(0.9);
  }

  .avatar-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .avatar-badge {
    font-size: 0.9rem;
    color: $text-main;
    background: rgba(0, 0, 0, 0.18);
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid rgba($accent-2, 0.05);
    font-weight: 600;
  }

  .right-col {
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 6;
  }

  .hero-panel {
    position: relative;
    z-index: 6;
    padding: 20px;
    border-radius: 14px;
    background: $card-bg;
    backdrop-filter: blur(8px) saturate(0.9);
    border: 1px solid $card-border;
    box-shadow: 0 12px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 $inner-glow;
  }

  .name {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    margin: 0;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1;
    display: inline-block;
    /* 标题改为 暗紫 → 血玫 渐变 */
    background: linear-gradient(90deg, $accent-1 0%, $accent-2 70%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    -webkit-text-stroke: 0.2px rgba(0, 0, 0, 0.22);
    text-shadow: 0 10px 36px rgba(0, 0, 0, 0.65);
    position: relative;
  }

  .jp {
    font-size: 0.95rem;
    color: $accent-1;
    margin-left: 8px;
    font-weight: 400;
  }

  .subtitle {
    margin: 6px 0 0;
    font-size: 1.1rem;
    color: $accent-1;
    font-weight: 600;
    line-height: 1.4;
  }

  .lead {
    margin: 10px 0 0;
    color: $text-main;
    opacity: 0.96;
    line-height: 1.7;
    max-width: 72ch;
  }
}

/* ========== 通用卡片（更暗、更锐利的边与血色提示） ========== */
.card {
  margin-top: 24px;
  background: rgba(6, 6, 8, 0.5);
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  color: $text-main;
  border: 1px solid $card-border;
  transition: transform 0.28s ease, box-shadow 0.28s ease;

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 30px 90px rgba(0, 0, 0, 0.7);
  }

  h2 {
    margin: 0 0 12px 0;
    font-size: 1.3rem;
    color: $accent-2;
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
}

/* personality 列表样式（暗紫细线） */
.personality .traits li {
  padding: 12px 0;
  border-bottom: 1px dashed rgba($accent-1, 0.06);
  font-size: 1rem;
  color: rgba($text-main, 0.92);
}

/* overview 双栏布局（保持） */
.overview .two-col {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.overview .text-block {
  flex: 1 1 40%;
  min-width: 240px;
  line-height: 1.6;
  color: rgba($text-main, 0.96);
}

/* special-section：加入音符漂浮和暗紫边框 */
.special-section {
  position: relative;
  overflow: hidden;

  .content {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-top: 16px;
  }

  .img-area {
    flex: 0 0 200px;

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 14px 44px rgba(0, 0, 0, 0.6), 0 0 12px rgba($accent-1, 0.02);
      border: 1px solid rgba($accent-1, 0.03);
    }
  }

  .text-block {
    flex: 1;
    line-height: 1.6;
    color: rgba($text-main, 0.95);
  }
}

/* ll-stories — 暗底 + 微血色分割线 */
.ll-stories {
  .card {
    width: min(1200px, 100%);
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6),
      inset 0 1px 0 rgba($accent-1, 0.02);
    color: $text-main;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      180deg,
      rgba(8, 10, 12, 0.12),
      rgba(8, 6, 10, 0.06)
    );
  }

  .card-head {
    padding: 14px 16px;
    border-bottom: 1px solid rgba($accent-2, 0.03);
    display: flex;
    flex-direction: column;
    gap: 12px;

    .card-title {
      font-size: 24px;
      font-weight: 700;
      color: $accent-1;
      letter-spacing: 0.6px;
    }
  }

  .card-body {
    padding: 18px 16px;
    min-height: 160px;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(8, 8, 10, 0.02));
  }

  .story {
    color: rgba($text-main, 0.96);

    .story-head {
      font-size: 18px;
      color: $accent-2;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .story-content {
      line-height: 1.7;
      color: rgba($text-main, 0.92);
      white-space: pre-wrap;
    }
  }

  .card-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 14px;
    border-top: 1px solid rgba($accent-1, 0.02);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.04)
    );

    .nav-btn {
      background: transparent;
      border: 1px solid rgba($accent-1, 0.06);
      color: $accent-2;
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
      transition: background 180ms ease;
      &:hover {
        background: rgba($accent-2, 0.04);
      }
    }

    .pager {
      color: rgba($text-main, 0.72);
      font-size: 13px;
      font-weight: 600;
    }
  }

  /* 切换动画保留，但更暗 */
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 320ms cubic-bezier(0.2, 0.9, 0.2, 1);
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(6px);
  }

  .fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-6px);
  }
}

/* timeline（暗紫竖线 + 微光） */
.timeline {
  position: relative;

  .tl-wrap {
    position: relative;
    padding: 24px 12px 12px 96px;
  }

  .vl {
    position: absolute;
    left: 80px;
    top: 32px;
    bottom: 20px;
    width: 4px;
    border-radius: 6px;
    background: linear-gradient(
      180deg,
      rgba($accent-2, 0.12),
      rgba($accent-1, 0.1)
    );
    box-shadow: 0 6px 18px rgba($accent-1, 0.06),
      inset 0 0 10px rgba($accent-1, 0.02);
    opacity: 0.95;
  }

  .tl-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .tl-item {
    position: relative;
    display: flex;
    gap: 18px;
    align-items: flex-start;
    margin: 20px 0;
    transition: transform 0.28s ease, box-shadow 0.28s ease;
  }

  .tl-card {
    background: rgba(8, 6, 10, 0.36);
    border-radius: 12px;
    padding: 16px 20px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.55);
    width: calc(100% - 130px);
    border-left: 4px solid transparent;
    transition: transform 0.28s ease, box-shadow 0.28s ease,
      border-color 0.28s ease;
    position: relative;
    z-index: 2;
  }

  .tl-item:hover .tl-card,
  .tl-item:focus-within .tl-card {
    transform: translateY(-8px);
    box-shadow: 0 24px 72px rgba(0, 0, 0, 0.6);
    border-left-color: rgba($accent-2, 0.18);
  }

  .tl-title {
    margin: 0 0 6px 0;
    font-size: 1.1rem;
    color: $accent-1;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .tl-desc {
    margin: 0;
    color: rgba($text-main, 0.92);
    white-space: pre-wrap;
  }
}

/* 浮动音符（可在模板中渲染若干 .floating-note） */
.floating-note {
  position: absolute;
  font-size: 14px;
  color: $accent-2;
  opacity: 0.95;
  transform-origin: center;
  animation: note-float 4.6s ease-in-out infinite;
  filter: drop-shadow(0 6px 18px rgba($accent-2, 0.06));
}

/* 动画关键帧 */
@keyframes staff-drift {
  0% {
    transform: translateY(-4%);
    opacity: 0.9;
  }
  50% {
    transform: translateY(6%);
    opacity: 0.95;
  }
  100% {
    transform: translateY(-4%);
    opacity: 0.9;
  }
}

@keyframes note-float {
  0% {
    transform: translateY(0) rotate(-6deg) scale(0.95);
    opacity: 0.85;
  }
  50% {
    transform: translateY(-12px) rotate(3deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(-6deg) scale(0.95);
    opacity: 0.85;
  }
}

/* 响应式：小屏适配（保留原逻辑，仅小幅调整文字色调与阴影） */
@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 8px;
  }

  .avatar-card {
    width: 140px;
    padding: 8px;
  }

  .hero-panel {
    padding: 14px;
  }

  .name {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .lead {
    font-size: 0.95rem;
  }

  .card {
    padding: 18px;
    border-radius: 12px;
  }

  .overview .two-col {
    flex-direction: column;
  }

  .special-section .content {
    flex-direction: column;
  }

  .ll-stories {
    .card {
      border-radius: 10px;
    }

    .card-head {
      padding: 12px 12px;
    }

    .card-body {
      padding: 14px 12px;
      min-height: 180px;
    }

    .card-foot {
      padding: 8px 12px;
    }
  }

  .timeline {
    overflow: visible;
  }

  .timeline .tl-wrap {
    padding-left: 14px !important;
    padding-right: 14px;
    min-height: 0;
  }

  .timeline .vl {
    display: none !important;
  }

  .timeline .tl-list {
    overflow: visible;
  }

  .timeline .tl-item {
    display: block !important;
    margin: 14px 0 !important;
    width: 100%;
  }

  .timeline .tl-card {
    width: 100% !important;
    padding: 14px !important;
    border-left: 0 !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
    transform: none !important;
  }
}
</style>
