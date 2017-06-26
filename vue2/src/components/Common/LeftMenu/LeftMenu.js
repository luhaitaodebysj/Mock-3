export default {
  name: 'left-menu',
  data() {
    return {
      data: [{
        label: '项目列表',
        children: [{
          label: '项目1',
          children: [{
            label: '页面列表1',
            children: [{
              id:1,
              label: '接口1',
            },{
              id:2,
              label: '接口2'
            },{
              id:3,
              label: '接口3'
            }, {
              id:4,
              label: '接口4'
            }
            ]
          }, {
            label: '页面列表2',
            children:[{
              id:5,
              label:'333'
            }]
          }, {
            label: '页面列表3'
          }, {
            label: '页面列表4'
          }]
        }, {
          label: '项目2',
          children: [{
            label: '页面列表1',
            children:[{
              label:'接口3'
            }]
          }, {
            label: '页面列表2'
          }, {
            label: '页面列表3'
          }, {
            label: '页面列表4'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick: function (obj) {
      console.log(obj.id);
      this.$router.push('/demo/mock');
    }
  }
}
