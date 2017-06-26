/**
 * Created by sailengsi on 2017/4/30.
 */
import {
	Home,
	Content,
	Modules
} from '../../components/';

module.exports = [{
	path: '/demo',
	name: '真实交互',
	icon: 'inbox',
	component: Home,
	// redirect: '/demo/user',
	children: [{
		path: 'user',
		name: '项目管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/user/list',
		children: [{
			path: 'list',
			name: '项目列表',
			icon: 'reorder',
			component: Modules.Demo.User.List,
		}
		]
	},{
	  path:'mock',
    name:'mock数据处理',
    component: Modules.Demo.Mock,
  }
	// , {
	// 	path: 'order',
	// 	name: '订单管理',
	// 	icon: 'inbox',
	// 	component: Content,
	// 	redirect: '/demo/order/list',
	// 	children: [{
	// 		path: 'list',
	// 		name: '订单列表',
	// 		icon: 'reorder',
	// 		component: Modules.Demo.Order.List
	// 	}, {
	// 		path: 'edit',
	// 		name: '编辑订单',
	// 		icon: 'edit',
	// 		component: Modules.Demo.Order.Edit
	// 	}]
	// }, {
	// 	path: 'orderstatis',
	// 	name: '订单统计',
	// 	icon: 'inbox',
	// 	component: Content,
	// 	redirect: '/demo/orderstatis/bar',
	// 	children: [{
	// 		path: 'bar',
	// 		name: '柱状图',
	// 		icon: 'reorder',
	// 		component: Modules.Demo.OrderStatis.Bar
	// 	}, {
	// 		path: 'pie',
	// 		name: '饼状图',
	// 		icon: 'edit',
	// 		component: Modules.Demo.OrderStatis.Pie
	// 	}]
	// }
	]
}];
