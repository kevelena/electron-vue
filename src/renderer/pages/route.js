/**
 * vue 路由
 */

export default [
    {
        path: '/',
        name: '/',
        component: () => import(/* webpackChunkName: "" */ './App'),
        redirect:'/index',
        children:[
            {
                path:'/index',
                name:'index',
                component: () => import(/* webpackChunkName:"" */ './main/index')
            },
            {
                path:'/to',
                name:'to',
                component: () => import(/* webpackChunkName:"" */ './main/to')
            }
        ]
    },
];
