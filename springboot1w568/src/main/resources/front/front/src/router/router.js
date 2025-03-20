import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import yanglaoyuanxinxiList from '../pages/yanglaoyuanxinxi/list'
import yanglaoyuanxinxiDetail from '../pages/yanglaoyuanxinxi/detail'
import yanglaoyuanxinxiAdd from '../pages/yanglaoyuanxinxi/add'
import laorenxinxiList from '../pages/laorenxinxi/list'
import laorenxinxiDetail from '../pages/laorenxinxi/detail'
import laorenxinxiAdd from '../pages/laorenxinxi/add'
import ruzhuxinxiList from '../pages/ruzhuxinxi/list'
import ruzhuxinxiDetail from '../pages/ruzhuxinxi/detail'
import ruzhuxinxiAdd from '../pages/ruzhuxinxi/add'
import huodongxinxiList from '../pages/huodongxinxi/list'
import huodongxinxiDetail from '../pages/huodongxinxi/detail'
import huodongxinxiAdd from '../pages/huodongxinxi/add'
import jiankangxinxiList from '../pages/jiankangxinxi/list'
import jiankangxinxiDetail from '../pages/jiankangxinxi/detail'
import jiankangxinxiAdd from '../pages/jiankangxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'yanglaoyuanxinxi',
					component: yanglaoyuanxinxiList
				},
				{
					path: 'yanglaoyuanxinxiDetail',
					component: yanglaoyuanxinxiDetail
				},
				{
					path: 'yanglaoyuanxinxiAdd',
					component: yanglaoyuanxinxiAdd
				},
				{
					path: 'laorenxinxi',
					component: laorenxinxiList
				},
				{
					path: 'laorenxinxiDetail',
					component: laorenxinxiDetail
				},
				{
					path: 'laorenxinxiAdd',
					component: laorenxinxiAdd
				},
				{
					path: 'ruzhuxinxi',
					component: ruzhuxinxiList
				},
				{
					path: 'ruzhuxinxiDetail',
					component: ruzhuxinxiDetail
				},
				{
					path: 'ruzhuxinxiAdd',
					component: ruzhuxinxiAdd
				},
				{
					path: 'huodongxinxi',
					component: huodongxinxiList
				},
				{
					path: 'huodongxinxiDetail',
					component: huodongxinxiDetail
				},
				{
					path: 'huodongxinxiAdd',
					component: huodongxinxiAdd
				},
				{
					path: 'jiankangxinxi',
					component: jiankangxinxiList
				},
				{
					path: 'jiankangxinxiDetail',
					component: jiankangxinxiDetail
				},
				{
					path: 'jiankangxinxiAdd',
					component: jiankangxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
