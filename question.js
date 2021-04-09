/**
 *  1、npm npx 区别
 *  2、import module.export es6模块化 
 *  3、extends 和 es5继承 super
 * 
 * 
 * react安装流程
 *      node版本
 *          node/14.0.0
 *      
 *  react相关
 *      基础问题
 *          1、setState React会自动更新其子组件
 *          2、数组的key
 *              key 只是在兄弟节点之间必须唯一
 *              key的设置应该在数组的上下文中 而不是当前组件中
 *      进阶问题
 *          1、jsx createElement
 *              https://zh-hans.reactjs.org/docs/react-api.html#createelement
 *          2、组件的this指向问题
 *              jsx不会绑定this 这块要看下为什么
 *              应该是类似于这样 func = this.func
 *          3、setState时候 React会自动更新其子组件
 *              1、不要直接修改state 应该使用setState重新渲染组件
 *              2、state的更新可能是异步的 
 *                  React可能回把多个setState()调用合并成一个调用
 *              3、setState使用函数可以立即重新渲染 并且使用上一次state
 *                  this.setState((state, props) => ({current: state.current}))
 *              4、setState会被合并更新
 *                  this.state = {a:1, b: 2}
 *                  this.setState({a: 2}) 
 *                  this.setState({b: 1}) 
 *                  这两次setState会被合并成一次setState，并且setState({a: 2})时不会修改b的值
 *              5、数据是向下流动的
 *          4、组件的 state 提升到父组件
 *          5、子组件调用父组件方法
 *              this.props.onCLick() 这个是怎么实现的
 *          6、jsx相关问题
 *              https://zh-hans.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized
 *  
 *  
 * 
 *  扩展程序安装有问题
 *      https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en 
 *  
 * 
 * 
 *  改变state值的两种方式
 *      1、直接修改原始值
 *          如果原始值被修改，父组件setState或者当前组件其他位置setState时候会对当前组件进行更新 视图更新不可控
 *      2、更新一份新的值替换旧数据
 *          可以确定视图何时更新
 *      不可变性是指 不直接修改数据 而是使用新数据替换旧数据的好处
 *          简化复杂的功能
 *          跟踪数据的变化
 *              如果修改原始数据 对比两次的不同 则需要遍历整个对象树
 *              如果跟踪数据的指针改变就容易多了
 *          确定React中何时重新渲染
 *              不可变性最重要的优势在于他可以创建pure components，我们可以轻松的确定不可变数据时候发生了改变，从而确定何时对组件进行渲染
 *      
 * 
 *  的深度解析使用索引作为 key 的负面影响
 *      https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
*/