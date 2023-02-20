<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button v-show="pageNo > 3" @click="$emit('getPageNo', 1)" :class="{active:pageNo == 1}">1</button>
    <button v-show="pageNo > 4">···</button>
    <!-- 中间部分 -->
    <button
      v-for="page in startNumAndEndNum.end"
      :key="page.index"
      v-show="page >= startNumAndEndNum.start"
      @click="$emit('getPageNo', page)"
      :class="{active:pageNo == page}"
    >
      {{ page }}
    </button>

    <button v-show="startNumAndEndNum.end < totalPage - 1">···</button>
    <button
      v-show="startNumAndEndNum.end < totalPage"
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', totalPage)"
      :class="{active:pageNo == totalPage}"
    >
      {{ totalPage }}
    </button>
    <button :disabled = "pageNo == totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "FsPagination",
  props: ["pageNo", "pageSize", "total", "continues"], //依次为  当前页，每页的个数，总个数，连续页码
  computed: {
    //总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { pageNo, totalPage, continues } = this;
      let start = 0,
        end = 0;
      //如果总页数小于连续的页码
      if (totalPage < continues) {
        start = 1;
        end = totalPage;
      } else {
        //总页数大于连续的页码
        start = pageNo - Math.floor(continues / 2);
        end = pageNo + Math.floor(continues / 2);
        //start存在负数，即当前页面是1或者2的时候
        if (start < 1) {
          start = 1;
          end = continues;
        //end大于总页码的时候，即当前页码是总页码或者总页码的前一个时
        } else if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: rgb(68, 228, 68);
      color: #fff;
    }
  }
}
</style>