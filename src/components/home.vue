<template>
  <div class="home_body" id="home_major_body">
    <div class="home_left">
      <div class="home_left_title" :style="{ color: getTheme.color }">
        {{ content.name }}
      </div>
      <div class="home_left_body" :style="{ color: getTheme.other.aboutArticle }">
        &nbsp;&nbsp;&nbsp;&nbsp;
        {{ content.body }}
      </div>
      <div class="home_left_bottom">
        <div class="last" @click="last()">
          <div class="solid">&lt;</div>
        </div>
        <div class="middle">{{ middle }}/{{ lastIndex }}</div>
        <div class="next" @click="next()">
          <div class="solid">&gt;</div>
        </div>
      </div>
    </div>
    <div class="hone_right">
      <div class="home_right_top">
        <div style="font-size: 1rem; flex-basis: 100%">Use time</div>
        {{ content.year }}year
      </div>
      <div class="home_right_bottom">
        <div style="font-size: 1rem; flex-basis: 100%">Ability Level</div>
        {{ content.level }}
        <div style="font-size: 1rem; flex-basis: 100%">A full score of 10</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
let data = [
  {
    name: 'Java',
    body: '时常感叹于先驱们在这个领域深耕所带来的硕果。 也被当下流行框架的精妙设计所折服，不由得产生一种感叹，我只是代码的搬运者。这门语言相当成熟，成熟到让很多人以为框架就是其开发的基础，但我喜欢追寻答案，就像艺术的美不在于它本身，而在于它的意义。',
    level: 6,
    year: 3.4
  },
  {
    name: 'JavaSript',
    body: '如果要说个第一映像，我毫不犹豫会给出‘自由’这个词去形容，爱上它也是因为它的自由。V8的星星之火以燎原之势席卷了整个前端，一时间所有的镁光灯都聚集到了这门语言上，由此衍生了大量惊艳的库类，彻底颠覆了传统前端开发，不仅如此，这把火还烧到了后端，以革命之势肆掠编程领域，我也是在这时与它结缘的，也算得上‘战友情’了，顺便提一下VUE是我的武器',
    level: 4,
    year: 2
  },
  {
    name: 'HTML+CSS',
    body: '简直是最理想的GUI啊，不得不感叹它的强大，所谓所想所见，都让人有一种是艺术家的错觉，各种界面绘制简直不要太顺手。HTML5之后是移动互联网的开端，一时间开发者们纷纷站队，我这个后端开发的也经不起它的诱惑投入了它的怀抱。',
    level: 4,
    year: 3
  },
  {
    name: 'APP',
    body: '全栈APP开发工程师，在以前的定义是要会IOS跟Android开发。 但现在不一样了，HTML5APP出现了，跨平台式开发，一份代码两种平台。 高效快捷，节省人力成本。开发框架更是多种多样，甚至都有官方的开发框架。 拖拉组件，编写交互代码即可制作出APP。 使用过它开发过几款APP，现已在各大应用商店上架。但，也正是开发过这几款APP，让我意识到了很多问题，中等大型、性能型、特定性APP还是无法离开原生编程。',
    level: 3,
    year: 2
  }
]
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      middle: 1,
      content: {
        name: 'Java',
        body: '',
        level: 6,
        year: 3.5
      },
      index: 0,
      lastIndex: data.length
    }
  },
  created: function () {
    this.content = data[this.index]
  },
  methods: {
    lyearsOld: function (oldYear) {
      let year = new Date().getFullYear()
      return year - oldYear
    },
    next: function () {
      if (this.index >= data.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
      this.middle = this.index + 1
      this.content = data[this.index]
    },
    last: function () {
      if (this.index <= 0) {
        this.index = data.length - 1
      } else {
        this.index--
      }
      this.middle = this.index + 1
      this.content = data[this.index]
    }
  },
  computed: {
    getTheme: function () {
      return this.$getTheme()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped">
.home_body {
  position: absolute;
  top: 0rem;
  bottom: 0rem;
  overflow-y: auto;
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  padding: 15px;
  z-index: 2;
}

.home_left {
  display: flex;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  flex-basis: 55%;
  width: 55%;
  height: auto;
  margin-top: 1.875rem;
}

.hone_right {
  display: flex;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  flex-basis: 45%;
  width: 45%;
  height: 100%;
  padding-left: 0.9375rem;
}

.hone_right div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.home_left div {
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.home_left_title {
  font-size: 3rem;
  height: auto;
  color: #333333;
  height: 15%;
  transition: all 0.3s ease;
}

.home_left_body {
  height: auto;
  align-items: flex-start !important;
  align-self: flex-start !important;
  align-content: flex-start !important;
  font-size: 16px;
  color: #666666;
  height: auto;
  padding: 0.625rem;
  transition: all 0.3s ease;
}

.home_left_bottom {
  height: 15%;
  flex-wrap: nowrap;
}

.last {
  cursor: pointer;
  flex-basis: 25% !important;
}

.middle {
  flex-basis: 50% !important;
}

.next {
  cursor: pointer;
  flex-basis: 25% !important;
}

.solid {
  width: 35px;
  height: 35px;
  background-color: rgba(102, 102, 102, 0.9);
  cursor: pointer;
  font-size: 18px;
  color: #ffffff;
}

.home_right_top {
  width: 70%;
  height: 30%;
  background-color: rgba(0, 0, 0, 0.9);
  color: #ffffff;
  font-size: 2rem;
  margin-left: 30%;
  margin-bottom: 1.25%;
}

.home_right_bottom {
  width: 70%;
  height: 30%;
  margin-right: 30%;
  margin-top: 1.25%;
  font-size: 2rem;
  background-color: rgba(253, 51, 89, 0.6);
}

@media all and (max-height: 26.25rem) {
  .home_left {
    margin-top: 30%;
    position: absolute;
    top: 3.125rem;
    width: 100%;
  }

  .hone_right {
    position: relative;
    top: 60%;
    width: 100%;
    min-height: 7.5rem;
  }
}

@media (max-width: 52.5rem) {
  .home_left {
    width: 100%;
    position: relative;
    flex-basis: 100% !important;
  }

  .hone_right {
    height: 16%;
    margin-top: 1rem;
    position: relative;
    flex-basis: 100% !important;
  }

  .home_right_top {
    width: 50% !important;
    height: 90% !important;
    font-size: 1.25rem !important;
    margin-left: 0% !important;
    margin-bottom: 5.25% !important;
  }

  .home_right_bottom {
    width: 50% !important;
    height: 90% !important;
    margin-right: 0% !important;
    margin-top: 5.25% !important;
    font-size: 2rem;
  }
}
</style>
