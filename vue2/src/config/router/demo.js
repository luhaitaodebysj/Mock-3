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
	children: [{
	  path:'mock',
    name:'mock数据处理',
    component: Modules.Demo.Mock,
  }]
}];
