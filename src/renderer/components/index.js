/*
* 自动加载myComponents文件夹内组件 为 my-文件名
* */

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.vue$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules
}, {});

export default (Vue) => {
    if(Object.keys(modules).length > 0){
        for (let item in modules){
            Vue.component('my-'+item,modules[item]);
        }
    }
}
