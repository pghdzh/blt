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
              <span class="avatar-badge">共鸣能力：静滞、回环与更迭</span>
            </div>
          </button>
        </div>
        <div class="right-col" ref="metaCard">
          <div class="hero-panel">
            <h1 class="name">尤诺 <span class="jp">（七丘谕女）</span></h1>
            <p class="subtitle">
              如果月亮不愿再照亮未来的黑暗，那就由我来指引命运该去往何处。
            </p>
            <p class="lead">
              她被命运以怎样的名义青睐，就被命运以怎样的方式裹挟。
              但她从未被打败，也不肯罢休。
              所以，看吧……看忤逆的谕女，因何不再回望，看万千因果之间，她如何以自己为唯一的解。
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
          <li>当尤诺处于月相流转·弦月状态时，攻击命中目标可获得特殊能量。</li>
          <li>
            当尤诺处于月相流转·新月状态时，施放月弓·普攻、共鸣技能·越限的弦引和月弓·闪避反击时可消耗特殊能量。
          </li>
          <li>协奏能量充满时，可以施放重击·至臻的完满。</li>

          <li style="font-weight: bold">输出流程：</li>
          <li>（变奏入场）-E-R-跳-E-E-AAA-Z-Q</li>
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
              尤诺的样本波形基本处可控区间，未见超频风险，但其波形存在多次长短不一的断档，且随断档呈持续减弱的趋势，疑似处在长期的耗损中，原因未知，但该谕女拒绝更深一步的检查，深入交流意愿较低。
              <br />
              该谕女对自身情况的了解远比和我说的多得多，如果波形持续减弱至完全超出可控区间，甚至清零……会发生什么？
              <br />
              她完全不害怕么？难道她已经掌握了有效的干预方案
            </p>
          </div>
        </div>
      </section>

      <!-- 新增三大主题区域 -->
      <section id="food" class="card special-section">
        <div class="card-head">
          <h2>破碎的再生</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/item1.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>
              一截断裂的单枝，一段从旧处新长出来的部分，看着很像你曾在混沌中显化的月石金枝。但尤诺的弓早已做成，所谓的完满已不再有意义，或许，在被命运尽情挫败、磨砺却仍无法催折后，它终于不必被当作牺牲的代价，而是回归一截枝的本来——肆意地、自在地、不被定义地生长。
            </p>
            <p>
              与之相应的是，这一次你和尤诺可以用更符合世间常态的方式见证它的长成，在已经越过终局的空白未来之中。
            </p>
            <p>再生的新枝，本就很适合作为期待的开始。</p>
          </div>
        </div>
      </section>
      <section id="shattered-crystal" class="card special-section">
        <div class="card-head">
          <h2>轻掷的悬念</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/item2.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>若干个不够对称、不够规则的异形骰子，为尤诺所有。</p>
            <p>
              七丘人习惯在与输赢有关的较量中追求乐趣，大至角斗，小至游戏。尤诺亦是如此，只是比起能一眼看到头的常规，她更喜欢突如其来的意外和惊喜。
            </p>
            <p>
              在十二面骰的基础上，她随机增加着限制和增益，直至衍生出越来越多的奇异骰子，和它们对应的小小游戏。因占比不同的单面、出现次数不同的符号，骰子指向的概率的确并不均等，但同一套规则、同一枚骰子，变数于使用双方都是一样，博弈的公正性便不会受到影响……说到底，这不过是漫长较量中得到的额外意趣，她以悬念、以可预见之外的概率，对抗某种确定性。
            </p>
          </div>
        </div>
      </section>

      <section id="cyclic-clock" class="card special-section">
        <div class="card-head">
          <h2>若以瞬间计量</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/item3.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>
              一台能即刻获取成像的留影装置，和若干张依稀可见尤诺身影的相纸。
            </p>
            <p>
              在注意到这种由莫塔里带来七丘的装置后，尤诺很快对其爱不释手，并找到了最契合自己的用途。她开始将自己人生中的不同时刻定格，并浓缩在这些相纸之中，开心的、沮丧的、与他人有关的……她以此应对因使用锚定能力而带来的，他人对自己记忆认知的模糊，也以此来应对最终时刻自己的彻底消失。
            </p>
            <p>
              纵使在已将她忘记的人眼中，这些相纸难免模糊不清，但……被拍下过的终究是不同的，那些美丽的瞬间真实地发生过，构成存在本身。
            </p>
          </div>
        </div>
      </section>

      <section id="collective-album" class="card special-section">
        <div class="card-head">
          <h2>甜渍橄榄</h2>
        </div>
        <div class="content two-col">
          <div class="img-area">
            <img src="./img/food.png" loading="lazy" decoding="async" />
          </div>
          <div class="text-block">
            <p>
              并非谁要伸手去摘，是低衔的枝桠再无法承受那份饱满，让成熟的果实落入她的掌中。无需更多的料理，最原初的自然本味只要在蜜酿里轻轻滚上一滚，便够满足她挑剔的味蕾。于是，青涩的气息流过她的指尖，而清新的甘甜停在她的齿间。
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
            <h2 id="stories-title" class="card-title">尤诺纪事</h2>
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
    title: " 圆与缺，皆替金枝镀色",
    desc: `尤诺处于月相流转状态时，攻击提升40%。
尤诺处于满月领域中时，自身每秒额外回复1点共鸣能量。
共鸣技能·越限的弦引和重击·至臻的完满免疫打断。`,
  },
  {
    title: "昼或夜，且以它为永恒",
    desc: `队伍中的角色的苍白死光的祝颂叠加至10层时，其额外获得40%全伤害加深。`,
  },
  {
    title: "我痛饮他者的遗忘",
    desc: `尤诺处于月相流转状态时，月弓·普攻、共鸣技能·越限的弦引、月弓·闪避反击造成的伤害加深65%。
施放月弓·普攻或月弓·闪避反击后一定时间内，施放共鸣技能·越限的弦引将不会重置月弓·普攻的连段。`,
  },
  {
    title: "任雨季栖息于眼眸",
    desc: `施放重击·至臻的完满时，队伍中的角色获得一个基于尤诺攻击160%的护盾，持续时间30秒，切换至其他角色不会继承该护盾。`,
  },
  {
    title: "万千次虚掷的注视",
    desc: `共鸣解放伤害加成提升20%。`,
  },
  {
    title: "我所在，即为不变的独一",
    desc: `重击·至臻的完满伤害倍率增加1600%。
尤诺施放重击·至臻的完满时，会再次进入月相流转·新月状态，获得100点【灵性】并重置共鸣技能·越限的弦引的全部冷却。`,
  },
]);

const reducedMotion =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const items = [
  {
    id: "1",
    title: "于初见时，她闭上了眼",
    content: `
尤诺如被从水中打捞般醒来。

身体因吸入的空气一点点充盈，脚下踩着的石阶冰凉且坚硬，她因这越来越多的具备的实感，由衷感到诧异。

消失，最基础的含义是什么都不会再有，过去的，现在的，还有尚未也从未到来的……全部都归于寂寥，所以已拥抱必要的代价的、已消失的她，不应像被浸泡了揉碎了的杂质一般，存在在这里。

不，应该说，她甚至并不真的知道，这里究竟是哪里。

周遭一切看着与寻常无异，却充满沉重而迟缓的拖拽感，仿佛下一秒就会彻底静置也说不定，唯有脚下的石阶延续着，潮湿、残破，却顽固。

于是她踩下去，像踩着一块块冷却的骨骼，向更深处走去。

 

走，是尤诺小时候最常做的事情。

她踩着砖石走过，踩着湿苔走过，踩着铺满花瓣的道路走过，甚至还踩着流淌的清泉走过，没什么目的，也不用怀揣什么意义。

她本就是停不下来的性子，没去过的地方，没做过的事情，都叫她感到快活，她都想尝试。

而西比尔，大概是全天下最知道如何教养自由却不倨傲的孩子的母亲，她从不用贵族的体面和规矩拘着尤诺，叫她肆无忌惮，叫她尝试所有她想要的一切。

能走的路从不止一条，但不管尤诺怎么走，母亲都会在尽头处等她。

 

那一天，最开始一如往常。

尤诺又一次雀跃地跑过石阶，跑向尽头处等待自己的母亲。

母亲弯腰搂住她，掌心覆在她的后脑，声音带着点热度，“我们尤诺，今天也做得很棒。”

那是当然的了，尤诺有些得意地眨了眨眼，那位叫莉莉贝的婆婆说，自己会是整个七丘从前往后最为天才的谕女呢，不过……多奇怪的形容，为什么只能是谕女，不能是天才的其他什么？那时的尤诺，对预言还抱有最纯粹、最不假思索的好奇，她还太小，小到不知道被命运偏爱本身就是种代价。

但显然，命运不准备再等下去了。

尤诺的笑瞬间僵硬在脸上，她看见瞳孔里倒映着的母亲如同被拉扯散的碎块和线条，她的血肉如融化般脱落，她被黑色一点点啃噬，但流淌出来的不是血，而是更浓稠的黑。黑色在咫尺的距离里翻滚，几乎下一秒就要钻进尤诺的双眼。

她不可抑制地后退，然后闭上了眼。

太黑了。太刺骨了。太近了。

尤诺小小的身子颤抖着抓紧母亲的衣袖，鼓起勇气再次睁开，但一切如常。命运的潮汐毫无征兆地朝她打来，又瞬间从她面前流过，只是将她打湿，就再不见踪迹。后来她也曾不止一次和母亲聊起自己没能看完的，可母亲只是笑着理了理她的额发，“已经够了，这样就好。”

直到后来，母亲在支援中被黑潮吞噬，彻底沉入黑色的无边浓稠，那些宽慰的话语，也像沉进尤诺的血液里一样，再也没浮起来。

尤诺一次又一次地回想那看似寻常的一天，灰白的钙化物是从哪里开始覆盖母亲的身躯？黑色污浊是从哪里开始流出？那会不会就是症结所在？要是知道了，是不是我就能救下她？如果我……没有闭上眼，会怎样？

 

小尤诺又一次站在石阶上，朝尽头处回望，她睁大了眼，像是要把没看完的那幕景象硬生生刻进瞳孔。

可即使不在真实发生的过往之中，她还是什么都没看见。

“再给我一次机会。”

她的声音轻得像要融进泛滥的潮湿里，像是说给自己，又像是不知说给谁听的恳求。

“再给我一次机会……让我看清它。”

可命运从不回头，只有脚下那条石阶，像一块块冷却的骨骼，把从另一端不断靠近的身影，层层叠叠拉得很长。

 

那是从混沌中硬生生走来的尤诺，一点点沿着石阶走过母亲总是停着的尽头，走回自己小小的身影旁。

拖拽感越来越强，几乎要等同于静置，尤诺想，大概很快一切又会重新归于寂寥，但是没关系，那之前的时间，大概足够一次回应。

就像她被从水中打捞起一般，停息残喘这片刻，她也决定去打捞起些什么。

尤诺蹲下来，看见幼时的自己眼里闪着泪光，睫毛扑闪，像是随时会闭上。

她抬手，指尖在那双小小的眼皮上轻轻点了点。

“那就，别闭上。”

“无论有多黑、多刺骨、多近，都别闭上。”

忽而喧嚣，风不知自何处而起，穿过最高的穹顶，掠过低矮的林间，偏偏此刻，刚好停在叠落的石阶，刚好够擦拭尤诺的眼角。`,
  },
  {
    id: "2",
    title: "我给你，一个望月之人的悲哀",
    content: `
再一次地，尤诺如被从水中打捞般醒来。

 

在第一次遇见幼年的自己，并做出回应后，尤诺反复不断地经历了更多类似的事情。

时而她看见自己的过去，时而她看见过去的自己，而更多时候，她被迫承受着回忆，就作为她自己，让已发生的过去再发生一遍，直到一切再度等同于静置，直到她又被寂寥吞没，直到下一次醒来到来。

她逐渐习惯这种循环往复，并把它当作一种常态，但她莫名觉得有些可笑——已经不再被任何人记得的不再有意义的过往，偏堆积在当事者身上，要她一遍遍地经历、记得，这算什么？命运的捉弄，还是对选择消失的自己的惩罚？

但她是注定得不出答案的，因她既已醒来，就说明又一段过去已经追上了她。

 

那一天，雨又重又湿，但不妨碍四方殿里挤满了看客，他们等待着预言中的天才正式加入，成为谕女的一员。

也是在那一天，尤诺听到了此生最多的关于谕女的传言，崇敬的、憧憬的，还有人言之凿凿，谕女死前能看见一切的终极，能从最深沉的荒诞和绝望中找到完满。是了，与未来、命运和不可知站得最近的一群人，看见的总是正确的一群人，无论是哪一种形容，都足够让人艳羡，但要尤诺来说，那些传言大约一半是谎话，剩下一半，则是自欺欺人。因就在那一天的前夜，她早早准备在休憩的庭院，却和其他谕女一起目睹了一场谕女的死亡。

白鸽落在百年的月桂树下，翅膀扑愣的声音，掩不住夜里逐渐虚弱的叹息，那叹息的主人不甘地叮嘱着她：“你，你和我们不一样……生来就看得见一切的你，替我们去看看吧。”

尤诺很小声地应了一句好，这的确是她能做到的事，但听到这句好的人，注定来不及见证她的履行了。

看，在未来、命运和不可知面前，谕女们并不比他人强大多少，她们也渴望着答案，她们甚至不一定能看见自己的死亡。

 

预言既是锁链，也是钥匙，她想把钥匙握在自己手里，但最好是能把锁链也斩断，所以她决定成为谕女，但不预备屈服于任何他人的期待与想象。

那一天，她没有穿谕女们一贯的礼袍，而是保持了旧时的服饰，以纱缎和黄金做装点，以命运的对视者的姿态走到众人面前，捧起自己的烛台。

人群窃窃私语，有古板的元老不满着议论，“她怎能，怎能如此不够谦卑？”

尤诺听见了，于是她第一次也最后一次作答，“看得见的人，不必非得跪着去看。”

她在对方的沉默里抬起双眼，灰蓝的虹膜反射着四方殿穹顶落下的光，像把细长的刀子，迫不及待着要把什么一寸寸剖开。

 

那一天之后，她开始了漫长的没有止境的打捞，她试图从混沌的滩涂，捕获名为确定性的湿痕。

尤诺看见了更多让人心惊的、破碎的、无法规避的未来碎片，并将它们转述。向尤诺讨要预言的人，将其当作某种信条，某种可以依仗的希望，可她知道，那不过命运从缝隙中漏过来的些许视野。

她看得越多，就越明白这这些视野是把刀。

握住刀的人，如果不亲手切开什么，就只能被刀割开自己。

 

尤诺再没有闭过眼了。

可她开始隐隐觉得，自己也会被什么割开——

也许是记忆，也许是被呼喊的名字，也许就是她注视这个世界时，那一点点流失的自己。

但那时的尤诺没怕。

她站在七丘的风里，睫毛上挂着刚落下的雨珠。

莉莉贝婆婆说她生来就该看见一切，她确实看见了。

现在她也想看看，自己能不能从这把刀里，活着走到更远。 `,
  },

  {
    id: "3",
    title: "我试图，用困惑、危险、失败来打动你",
    content: `
在涨潮期真正爆发之前，尤诺更先一步地预见了那惨痛的未来。

那些与潮涌融为一体的造物，散发着夜色般浓重的黑，角斗士们拼了命与之对抗，但统统没用，每当他们的矛和枪快要贯穿它们的身体、插入它们的心脏，它们就溃散着逃回黑潮里，融合、再生，然后留下嘲笑似的黏液在他们脚边缓缓流开。

看，这世上，总有些东西，不会被看见就屈服。

 

那一夜，她睡得极浅。

梦里，浸在黑潮里的不是那些造物，而是被拖拽着的她。黑潮淹过口鼻，她一寸又一寸地向下沉去，她从不知道黑潮之下竟然如此之深，待她的脚好不容易触底，余光却瞥见，站在自己对面的，是另一个更为冷冽的自己。

“你真的以为，能看见就是救赎？”

对面的尤诺笑了笑，眸子深处埋着无数破碎的七丘，燃烧过、覆没过、重建又倒塌过。

“你能看见所有人，除了你自己。”

尤诺想反驳，却发现自己发不出声音。

 

黑潮依旧在狩原翻涌，角斗士们一次次奔赴在最前沿，但收效甚微。

越来越多人来到四方殿内，等她和其他谕女给出更多更有用的启示，由果推因，又以因制果，他们期待着用这种方式接近更完满的结局。但她却觉得什么都说不出来，她能看见那团黑潮里埋着她母亲消失前的影子，也能看见未来倒塌的建筑、溃散的人群，还有自己一次次射出的箭矢，如何被黑色的浪潮打翻、吞噬。

其实一切从未变过，她能看见，但命运只允许她看见。

 

又一夜，尤诺再次坐在占卜台前。

水波荡开，她似乎听见了谁的呢喃，“你是能看见一切的天才，可若只是旁观，你又算什么？”一时间，那些被预言了的过去都在她脑海里重生，刻满启示的石壁阻隔着，写满箴言的卷轴敞开着，如丝如线般的流迹缠绕着，她却抬起头，看向它们汇聚处那倒映着的、那总是给她指引的月亮——这或许是最接近那幽深得不可名状的能被称为命运的东西。

这种时候，它从来不给她答案。

好在这一次，她也不真的需要。

“既然看见改变不了，那就让我把它扎碎吧。”

她说着，举起手斩断所有，将一切汇聚着只为她所用的力量，狠狠扎了下去，脸上是肆意的、张扬的、不再顾忌的笑容。

 

那箭扎入的时候，并没有什么了不得的声响，但偏偏它就此钉在了七丘与命运之间，钉住了黑潮最狡猾的动向。

所有人第一次看见怪物再没能无声退走，而是被蓝白色的死光一寸寸撕裂。

 

可代价呢？

小范围击退黑潮造物的战役后，狩原的营地里，人们把酒杯高举，交谈声混杂着火焰劈啪作响的声音，像是一场自发的庆贺。尤诺站在人群边缘，没有去靠近火光最亮的地方。她走过人群时，有人看见了她。

“——那是谁？”

“你傻呀，那是谕女啦……叫什么来着？尤诺？”

“谕女尤诺，那不是传闻中那个天才嘛……”

“奇怪，这么出名的人，我怎么好像没什么印象？”

有年轻的角斗士犹豫着上前来，礼貌地向她举杯，嘴里斟酌着说：“你……之前似乎和我们一起……总之，来，一起庆贺吧。”

尤诺挑了挑眉，没说话，只是抬手把自己的杯子与那人轻轻碰了碰。

 

灯火之外，尤诺一个人来到湖边，她把下巴搁在膝头，笑声埋在臂弯里。

尤诺回头望了望自己站过的路。她看见随她而来的影子，有的模糊了，有的直接碎掉了。她听见身后的人呼喊，却没喊出她的名字。她看见那双曾与她对望的眼睛，在疑惑和陌生中缓缓移开了。明明不久前她给出预言时，人们是那样笃定地喊她“尤诺”，明明在自己射出那些箭矢前，他们还曾并肩作战，此刻那些一起经历过发生过的种种，却变得模糊。

 

她坐在湖边，指尖拨着水面，泛起一圈圈碎影。

她看见水里的自己，轮廓清楚，却总像隔了一层雾。

她把指尖伸进水里，指腹刚刚触到倒影，那倒影就抖动了一下，像是活物一样要逃。

“别跑啊，”尤诺对着水笑，“连你都没认全我吗？”

水面晃了晃，恍若倒影里的自己忽然开口，像是在问：“想被记住吗？”

尤诺没说话，只是伸手拨了拨水，像是想把那张脸再看清一点，偏偏指腹划过去，水面碎成一片，影子也跟着碎开。

“……不重要啊。”

沉默良久，她低声嘟囔着，抬头瞪了一眼头顶的月亮，那月亮高悬，像一块被啃去一角的银币，也不圆满。

尤诺朝它笑了笑，如向某个纠缠已久的宿敌致意，“……就算只剩你认得我，也够了。”`,
  },

  {
    id: "4",
    title: "一千次月亮的坠落",
    content: `
有时候，在这场不知道要重复多少次的静置、吞没、寂寥、再醒来的循环往复中，尤诺也会遭遇一些不能被称作过去的情境。

 

那夜无星，月亮靠得比任何时候都近，近得仿佛要落进坐在檐顶的她掌心。

她不记得自己是怎么睡着的，或者说，她不确定自己是真的睡着了，还是被月光送入一重不曾设想的、温柔的虚妄，作为自己扎向它和对它出言不逊的报复。

 

那里没有黑潮，也没有末日。

一片陌生又熟悉的田野，有孩子在晨曦里奔跑，有烟火在黄昏里升起。她看见一个和自己年岁相仿的少女，在挂满果实的树间横躺，眼神懒散，小腿微垂，自在得像一尾浮在阳光里的鱼。

她甚至可以想象到那个少女的笑，就像水面荡开的波纹，自然而然地从心口晕开。

 

“你看，”月亮在她耳边说话了，声音像刚化开的蜂蜜，“这也是一种活法。”

尤诺没有动，只是静静看着那个她对着远处的伙伴招呼了一下，灵巧地从树上翻下来，然后回身轻快地抖了抖裙摆。

“那是你，”有声音轻声说，“这就是虚妄的好处，只要你想，在这里你甚至可以去看不曾见过的雪与海。”

她回头，看见那轮月亮悬在身后，它不再是夜空的装饰，更像一个缓缓睁开的俯瞰着自己的空眼瞳。

“你本也没什么好再牵挂的了。”它的声音平缓，像是一位长者，也像自己童年曾透过焰光看见的某种预示，“我说，反正不在真实之中，安于享乐又如何？何必对自己如此苛刻？”

 

于是，一切开始倒转。

最后的终止，第千次的、第百次的终止……第十次……第一次。

若是逆着越过所有界限，回到原点，若是一切从未开始，中间的计数就只是可被篡改的数字。

 

那个她欢快地跑着，脚边是一只打翻的果篮，里面是从刚刚那枝头摘了一半的果子。阳光晒热了她的手臂，招呼着的伙伴也从远处走近，“今天去不去海边？”，对方的语气像是约定俗成的稀松日常。

 

“你有没有想过，你之所以会走到今天，其实是因为你从一开始就被预言所束缚，你没有选择，但如果你有呢？”

“你知道这不是真的，对吧？”尤诺仰头看着那轮不该出现在白昼的月亮。

“你知道自己再也回不去了的，对吧？”月亮没有正面回答，只是柔柔地舒展着它的光，带有某种微不可察的蛊惑。

“你已有的过往已经被悉数葬送，你会一直留在这里。”它顿了顿，“即便是这样，哪怕是在虚妄，也要保持清醒？也不肯越过自己，进入另一种可能性吗？真是令人讨厌的固执。”

 

尤诺没有立刻回答。

她低头看向自己的手掌，那里不再握着弓，而是握着一束尚未绽开的野花。

她沉默了一会儿，突然不置可否地笑了笑，“你也是。彼此彼此。”

 

她又看向那个自己，现在她离开了那片田野，离开了伙伴，停留在某个热络街头的店铺橱窗前，笑得明媚。

 

“你孤独吗？”月亮问她。

她摇头但没完全否认，“好吧，可能是会有点……寂寞。”

“你不想对谁诉说这种寂寞吗？”

“那也太过孱弱。”

“那否定它呢？”

“那就是另一种孱弱。”

“所以……？”

尤诺轻声道：“所以就拥抱它。在无数个只有自己知道的夜晚咀嚼它。”

 

尤诺走进店铺，看见那个自己正站在镜前整理头发。

她抬手，帮她把几缕头发轻轻别在耳后，像母亲在她小时候常做的一样，想了想，又把那束花塞到对方的怀里。

“你很好。”尤诺低声说，“但从很久很久以前，我就当不了你啦。”

 

她转身走出店铺，也走出月亮造就的虚妄。

月光拉长她的影子，试图模拟出一个拽回的动作，但她走得很慢，却绝不停留。

身后，那轮月亮试图做出最后的挽留，“你知道吗，有时候，我真怜悯你。你实在太倔强了，倔强到不肯退一步。”

 

那就尽管怜悯好了，她不在乎。

人生不过一场较量，不论博弈的对方是谁，她想赢，想每次都赢。

她既已经走到了此刻，就不会再容许任何对自我的屈服。 `,
  },

  {
    id: "5",
    title: "于尽头处，回环却更迭",
    content: `
不知第多少次，尤诺如被从水中打捞般醒来。

她开始对着空虚的、沉闷的、苦涩的循环感到厌烦，开始对所有自己的过往感到麻木，但她不能停下，因她终于明白自己身处何处——介乎于存在和消失之间的混沌。

因现实里，她的名字早已彻底剥落，她锚定过多少黑潮的造物，就将被剥去多少属于“尤诺”的碎片，她既为自己选择了这样的结局，就不能再有余地。

 

于是她继续。

她沉溺在往复中，在无数个轮转的碎片中切换着身份，浑浑噩噩，直到她朝那个人伸出了手，指尖的温热一点点传到她身上——

空白之人，这是这片混沌第一次有除她和她映射之外的存在。

他看见了她，他找到了在黑潮与月光之间挣扎的自己。

“……尤诺。”

 

一切都在他叫出自己名字的瞬间，不同了。

还记得自己的例外，让本该被忘却的自己，也成了例外。

混沌，竟因此有尽头可言了。

“现在，我们要去哪里？”空白之人跟在她身旁，声音轻得像一颗石子落进水面。

尤诺低低笑了：“……去结束一件事，或者，重新开始。”

 

他们分开而行，又重新汇聚在那片作为一切开端的战场之上。

在那里，横亘着一朵裂开的月亮，那是她献祭自己时留下的印痕，是过往无法被吞噬殆尽的证据，也是冥冥中因果为她留下的一道缝隙。

“如果你走进去，就会回到那一刻。你会和他一起，会带着所有人都忘记的自己，重新被锚定，可你曾锚定过的所有东西，包括你想要的锚定的已经锚定过的东西——包括命运，也同样将需要重新锚定，你明白这意味着什么吗？”

恍惚之间，尤诺听到了另一个自己的声音，似是告诫，又像是劝说。但她直视抬起脸，朝月亮直直地看回去。

“……我知道啊。”

她仿佛说得很随意，眉眼间还是那个骄傲的弧度。

“以前，我总想看更多，预言更多，以为自己越看得多，就越能改变点什么。结果呢？看到的越多，被困住的也越多。”

 

空白之人没有打断她的话，只是静静看着她。

尤诺抬手，将所有已有的流迹化成又一只月矢。

矢尾流淌着蓝色银光，像是一点破晓的先声。

“……这次换个顺序吧。我先锚定我自己。”她把弦慢慢拉满，眼神里没有怨，也没有悲，“然后——锚定所有想逃的东西。再然后，去看新的东西。”

 

她弯弓，月矢在残壁前亮得像一块在盈满的月石。风从她身后灌过，把她的发丝吹得散乱，却没吹乱她的呼吸。

空白之人看见，尤诺的身影映在残壁上，竟像月亮自己在圆满自己。

 

这一矢射出时，依旧没什么了不得的声响。

月亮的裂口里涌出光，如同潮水逆流，把她淹没又托起，那些被剥落的名字、被命运吃掉的影子，全都被那一矢重新钉回了她身上。

 

很久之后，当她从那片充满无限可能性的空白走出，重回庆典的时候，象征着荣耀的花雨正在倾洒。

灯火之中，举着酒杯的人看见她，眨了眨眼，忽然脱口而出：“你……真奇怪，我应该从没见过你，但……我们认识吗？”

尤诺挑了挑眉，和之前的那些次一样没说话，只是抬手把自己的杯子与那人轻轻碰了碰。

 

那晚之后，人们依旧没有想起那个把命运当靶子射穿的名字。

但属于尤诺的月相，从此不再是单调的盈亏，而是一轮又一轮的回环，在循环里继续更迭，她已有自己的注释
    `,
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
/* 尤诺风格 —— 紫蓝海感（水母/幻海） + 毒药/治愈双重高光 */
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
