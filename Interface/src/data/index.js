module.exports = {
  brands: [
    {
      brand_name: "小米",
    },
    {
      brand_name: "华为",
    },
    {
      brand_name: "雅诗兰黛",
    },
    {
      brand_name: "迪奥",
    },
    {
      brand_name: "格力",
    },
    {
      brand_name: "联想",
    },
  ],
  categorys: [
    {
      cate_name: "手机",
      pid: 0,
    },
    {
      cate_name: "家用电器",
      pid: 0,
    },
    {
      cate_name: "电脑办公",
      pid: 0,
    },
    {
      cate_name: "化妆品",
      pid: 0,
    },
  ],
  propertyNames: [
    {
      title: "品牌",
      categoryId: 1,
    },
    {
      title: "手机系统",
      categoryId: 1,
    },
    {
      title: "电池容量",
      categoryId: 1,
    },
    {
      title: "品牌",
      categoryId: 2,
    },
    {
      title: "尺寸",
      categoryId: 2,
    },
    {
      title: "品牌",
      categoryId: 3,
    },
    {
      title: "电脑系统",
      categoryId: 3,
    },
    {
      title: "品牌",
      categoryId: 4,
    },
  ],
  propertyValues: [
    {
      title: "小米",
      propertyNameId: 1,
    },
    {
      title: "VIVO",
      propertyNameId: 1,
    },
    {
      title: "苹果",
      propertyNameId: 1,
    },
    {
      title: "华为",
      propertyNameId: 1,
    },
    {
      title: "安卓系统",
      propertyNameId: 2,
    },
    {
      title: "苹果系统",
      propertyNameId: 2,
    },

    {
      title: "1200mAh到3000mAh",
      propertyNameId: 3,
    },
    {
      title: "4200mAh到6000mAh",
      propertyNameId: 3,
    },

    {
      title: "格力",
      propertyNameId: 4,
    },
    {
      title: "美的",
      propertyNameId: 4,
    },

    {
      title: "6.75英寸-9.2英寸",
      propertyNameId: 5,
    },
    {
      title: "9.75英寸-12.2英寸",
      propertyNameId: 5,
    },

    {
      title: "联想",
      propertyNameId: 6,
    },
    {
      title: "华硕",
      propertyNameId: 6,
    },
    {
      title: "微软",
      propertyNameId: 6,
    },

    {
      title: "Mac",
      propertyNameId: 7,
    },
    {
      title: "Window",
      propertyNameId: 7,
    },

    {
      title: "雅诗兰黛",
      propertyNameId: 7,
    },
  ],
  goods: [
    {
      goods_name: "小米13 (A2634) 128GB 粉色 支持移动联通电信5G 双卡双待手机",
      brandId: 1,
      categoryId: 1,
      price: 3888,
      original: 5888,
      tags: "智能手机",
      content: "智能手机，小米之家",
      summary: "智能手机，小米之家",
    },
    {
      goods_name: "华为nova7(A2634) 128GB 粉色 支持移动联通电信5G 双卡双待手机",
      brandId: 2,
      categoryId: 1,
      price: 7888,
      original: 9888,
      tags: "智能手机",
      content: "智能手机，华为之家",
      summary: "智能手机，华为之家",
    },

    {
      goods_name: "雅诗兰黛口红119",
      brandId: 3,
      categoryId: 4,
      price: 888,
      original: 988,
      tags: "口红口红",
      content: "性感口红",
      summary: "性感口红",
    },

    {
      goods_name: "空调998系列",
      brandId: 5,
      categoryId: 2,
      price: 1888,
      original: 2988,
      tags: "空调空调",
      content: "空调空调",
      summary: "空调空调",
    },
    {
      goods_name: "电磁炉998系列",
      brandId: 5,
      categoryId: 2,
      price: 88,
      original: 99,
      tags: "电磁炉998系列",
      content: "电磁炉998系列",
      summary: "电磁炉998系列",
    },

    {
      goods_name: "联想小新15系列",
      brandId: 6,
      categoryId: 3,
      price: 4588,
      original: 5888,
      tags: "联想小新15系列",
      content: "联想小新15系列",
      summary: "联想小新15系列",
    },
  ],
  goodsPropertys: [
    {
      goodId: 1,
      propertyNameId: 1,
      propertyValueId: 1,
    },

    {
      goodId: 1,
      propertyNameId: 2,
      propertyValueId: 5,
    },

    {
      goodId: 1,
      propertyNameId: 3,
      propertyValueId: 7,
    },
    {
      goodId: 1,
      propertyNameId: 3,
      propertyValueId: 8,
    },

    {
      goodId: 2,
      propertyNameId: 1,
      propertyValueId: 4,
    },

    {
      goodId: 2,
      propertyNameId: 2,
      propertyValueId: 6, //
    },

    {
      goodId: 3,
      propertyNameId: 8,
      propertyValueId: 18,
    },

    {
      goodId: 4,
      propertyNameId: 4,
      propertyValueId: 9,
    },

    {
      goodId: 4,
      propertyNameId: 5,
      propertyValueId: 11,
    },

    {
      goodId: 5,
      propertyNameId: 4,
      propertyValueId: 9,
    },
    {
      goodId: 5,
      propertyNameId: 5,
      propertyValueId: 11,
    },

    {
      goodId: 6,
      propertyNameId: 6,
      propertyValueId: 13,
    },
  ],
  goodsImages: [
    {
      goodId: 1,
      link: "http://localhost:8000/goods/小米手机1.jpg",
    },
    {
      goodId: 2,
      link: "http://localhost:8000/goods/华为1.jpg",
    },
    {
      goodId: 3,
      link: "http://localhost:8000/goods/雅诗兰黛1.jpg",
    },
    {
      goodId: 4,
      link: "http://localhost:8000/goods/格力空调1.jpg",
    },
    {
      goodId: 5,
      link: "http://localhost:8000/goods/电磁炉1.jpg",
    },
    {
      goodId: 6,
      link: "http://localhost:8000/goods/联想小新1.jpg",
    },
  ],
  users: [
    {
      phone: "1333333333",
      password: "111111",
    },
    {
      phone: "1444444444",
      password: "22222",
    },
  ],

  carts: [
    {
      goodId: 1,
      userId: 1,
      count: 2,
    },
  ],
  orders: [
    {
      userId: 1,
      goodId: 1,
      traderNo: "xxxx-xxxx-xxxx-xxxx",
      consigneeTel: "130000000",
      consignee: "coderszt",
      deliveryAddress: "广州市",
      paymentWay: "ONLINE",
      orderComment: "订单备注",
    },
  ],
};
