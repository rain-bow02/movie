
import { createRouter, createWebHistory} from 'vue-router';
import routes from './routes'


const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由器传参params,query{传id之类的}
export default router //导出当前文件 router
