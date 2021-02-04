module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true, // 可以换行进行链式调用
      },
    },
  },

};

// 为了兼容可以换行的写法，要对less loader进行配置
