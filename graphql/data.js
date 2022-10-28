const typeList = [
  {
    src: 'http://inews.gtimg.com/newsapp_bt/0/8883647424/0/0',
    label: '宠物猫',
    page: ''
  },
  {
    src:
        'http://pic.51yuansu.com/pic3/cover/02/09/54/599eb922d3416_610.jpg',
    label: '宠物狗',
    page: ''
  },
  {
    src:
        'http://pic.51yuansu.com/pic3/cover/03/69/43/5bea077aac2bf_610.jpg',
    label: '爬行类',
    page: ''
  },
  {
    src:
        'http://pic.51yuansu.com/pic3/cover/03/93/70/5c73b479c977e_610.jpg',
    label: '鸟类',
    page: ''
  },
  {
    src:
        'http://pic.51yuansu.com/pic3/cover/02/16/95/59aecfe9b8c6d_610.jpg',
    label: '啮齿动物',
    page: ''
  },
  {
    src:
        'http://pic.51yuansu.com/pic3/cover/02/17/99/59af0a3571a80_610.jpg',
    label: '昆虫',
    page: ''
  },
  {
    src:
        'http://pic.51yuansu.com/pic3/cover/03/20/49/5b64fb560a8a7_610.jpg',
    label: '观赏鱼',
    page: ''
  },
  {
    src:
        'http://pic.51yuansu.com/pic3/cover/03/98/40/5e853c1a22c86_610.jpg',
    label: '植物',
    page: ''
  }
]
const stores = {
  '0001': {
    id: '0001',
    name: '圣宠宠物',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.hpdog.com%2Fuploads%2Fallimg%2F150706%2F3-150F6204033.jpg&refer=http%3A%2F%2Fwww.hpdog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636793575&t=a2ba5e092c834cf57850ce4bcd80e234',
  },
  '0002': {
    id: '0002',
    name: '奥其乐',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jvrong.com%2F5ccd13370c2bbae315d154276bb936ed.jpg&refer=http%3A%2F%2Fpic.jvrong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636793575&t=6062d48b65201318807474efd45dba5b',
  },
  '0003': {
    id: '0003',
    name: 'CC宠物店',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.pccoo.cn%2Fyp%2F20131025%2F201310251206360692.jpg&refer=http%3A%2F%2Fp1.pccoo.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636793575&t=860f267887f3986afcc0a7a5e4153e88',
  },
  '0004': {
    id: '0004',
    name: '英泰猫舍',
    avatar: 'https://img0.baidu.com/it/u=2105138492,3240808579&fm=26&fmt=auto',
  },
  '0005': {
    id: '0005',
    name: '淘喵喵cafe',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FcMEy-eHj4AeHKfLGLypQxIjo0BfBTWdtYVd8EkukWshWniVC1RDTZfxMS7SFPEJDjoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg&refer=http%3A%2F%2Fqcloud.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636794236&t=bf41cdf13deadb3ce579c3ab467711f4',
  },
  '0006': {
    id: '0006',
    name: '圣宠宠物',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.hpdog.com%2Fuploads%2Fallimg%2F150706%2F3-150F6204033.jpg&refer=http%3A%2F%2Fwww.hpdog.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636793575&t=a2ba5e092c834cf57850ce4bcd80e234',
  },
}
const recommendGoods = [
  {title: '布偶猫幼猫纯种赛级', goodImg: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/12559359/O1CN01PRsswn2J0TQ03tyxx_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp', price: '6800', count: '已销19', storeName: stores['0001'].name, storeImg: stores['0001'].avatar},
  {title: '纯种拉布拉多幼犬 导盲犬 小七寻回犬', goodImg: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/671700111/O1CN01zJeesQ1CgsfozO13B_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp', price: '800', count: '已销22', storeName: stores['0002'].name, storeImg: stores['0002'].avatar},
  {title: '纯种英短蓝白美短银渐层布偶金吉拉蓝猫', goodImg: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/671700111/O1CN01zJeesQ1CgsfozO13B_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp', price: '300', count: '已销5', storeName: stores['0003'].name, storeImg: stores['0003'].avatar},
  {title: '正规猫舍专业指导', goodImg: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/671700111/O1CN01zJeesQ1CgsfozO13B_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp', price: '320', count: '5人表示喜欢', storeName: stores['0004'].name, storeImg: stores['0004'].avatar},
  {title: '澳洲蜜袋鼬幼崽蜜袋鼯小飞鼠幼崽宝宝蜜袋鼠萌宠网红小蜜', goodImg: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/671700111/O1CN01zJeesQ1CgsfozO13B_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp', price: '450', count: '同类销量第5', storeName: stores['0005'].name, storeImg: stores['0005'].avatar},
]



module.exports = {typeList}