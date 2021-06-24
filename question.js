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
 *      父组件调用setState,内部所有的子组件都会走重新渲染（重新走一边生命周期），不是仅改变数据变化的组件
 *      setState会收集当前主线程内的所有setState，然后统一设置
 * 
 *  的深度解析使用索引作为 key 的负面影响
 *      https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
 * 
 * 
 * 
 *  生命周期相关
 *      生命周期图谱
 *          https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 *      具体的生命周期
 *          挂载
 *              constructor()
 *              render()
 *              componentDidMount()
 *              static getDerivedStateFromProps(); 不常用
 *          更新
 *              render()
 *              componentDidUpdate()
 *              static getDerivedStateFromProps() 不常用
 *              shouldComponentUpdata() 不常用
 *              getSnapshotBeforeUpdate() 不常用
 *          卸载 当组件从DOM中移除时调用
 *              componentWillUnmount()  
 *          错误处理 当渲染过程、生命周期、或子组件的构造函数中抛错调用
 *              static getDerivedStateFromError()
 *              componentDidCatch()
 *          其他API
 *              setState()
 *              forceUpdate()
 *          Class属性
 *              defaultProps()
 *              defaultName
 *          实例属性
 *              props
 *              state
 *      常用生命周期
 *          render()
 *              render方法是class组件唯一必须实现的方法
 *              当render被调用时，它会检查this.props和this.state的变化并返回以下类型
 *                  React元素
 *                      通常通过JSX创建 <div/> 会被渲染为DOM节点 <MyComponent>会被渲染成自定义组件
 *                      无论是div还是MyComponent都是React元素
 *                  数组或则fragment
 *                      fragment 
 *                          相当于一个空标签 类似于 document.createDocumentFragment() 创建一个空的文档碎片
 *                          应用场景
 *                              table 的 td 被做成一个组件  
 *                              如果td组件内部被 div包裹 则不能正确渲染table
 *                              可以使用 <React.fragment><td>11</td></React.fragment>
 *                  Portals
 *                      https://zh-hans.reactjs.org/docs/portals.html
 *                  字符串或数值类型
 *                      DOM中渲染成文本节点
 *                  布尔类型或null
 *                      什么都不渲染 主要用于 canRenderComponent && <Child />
 *              注意
 *                  shouldComponentUpdate返回false，则不会调用render()
 *          constructor()
 *              如果不初始化state或不进行方法绑定，则不需要为React组件实现构造函数
 *              React挂载之前会调用它的构造函数。在为React.Component子类实现构造函数时，应在其它语句之前调用super(props)。
 *              否则this.props在构造函数中可能回出现未定义的bug
 *              
 *              通常React中，构造函数仅用于处理一下两种情况
 *                  给this.state赋值对象来初始化内部state
 *                  为事件处理函数绑定实例
 *              在constructor函数中不要调用setState()方法。如果你的组件需要使用内部state，请直接在构造函数中为this.state赋值初始state
 *              
 *              
 *              注意
 *                  ？？ 要避免在构造函数中引入任何副作用或订阅。如果遇到此场景，请将对应的操作放置在componentDidMount中
 *                  避免将props的值复制给state！这是一个常见的错误
 *                      this.state = {color: props.color}
 *                      可以直接使用props.color，同时还产生了bug(更新props中的color，并不影响state)
 *                  只有在你刻意忽略prop更新的情况下使用。此时应将prop重命名为initialColor或defaultColor。必要时可以修改key 已强制重置其内部state
 *                  constructor中state依赖props处理方式
 *                      https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
 *          componentDidMount()
 *              componentDidMount()会在组件挂载后（插入DOM树中）立即调用，依赖于DOM节点的初始化应该放在这里。
 *              可以在componetDidMount()里直接调用setState()。它将会触发额外的渲染，但此渲染会发生在浏览器更新屏幕之前。可以保证即使在render两次调用的情况下，用户也看不到中间状态。
 *              此生命周期慎用setState() 性能问题
 *              适合做哪些事
 *                  网络请求或者数据    
 *                  添加订阅 如果添加了订阅记得在componentWillUnmount()里取消订阅
 *                  渲染依赖于DOM节点的大小和位置，实现modals、tooltips等情况
 *          componentDidUpdate()
 *              componentDidUpdate()会在更新后立即调用
 *              在非语句中调用setState()会导致死循环
 *              适合做哪些事
 *                  如果对更新前后的props进行了比较，也可以选择在此处进行网络请求。
 *              注意
 *                  shouldComponentUpdate()返回false，则不会调用componentDidUpdate()
 *          componentWillUnmount()
 *              componentWillUnmount()会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作
 *                  适合做哪些事
 *                      清楚timer
 *                      取消网络请求
 *                      清楚componentDidMount()中创建的订阅
 *      不常用的生命周期
 *          shouldComponentUpdate()
 *              根据shouldComponentUpdate()的返回值，判断React组件的输出是否受到当前state或props更改的影响。默认state每次发生变化组件都重新渲染。大部分情况应该遵循默认情况
 *              当props或state发生变化，shouldComponentUpdate()应该在渲染执行之前被调用。返回默认值true。
 *              此方法仅作为心更难优化的方式存在。不要企图依靠此方法来阻止渲染，有可能产生bug
 *              应该烤炉使用内置的PureCompoent组件，而不是手动编写shouldComponentUpdate()。
 *                  PureCompoent组件会对props和state进行浅层比较，并减少了跳过必要更新的可能
 *              注意
 *                  首次渲染或者forceUpdate时不会调用该方法        
 *                  如果一定要手动编写此函数，可以将this.props和nextProps以及this.state与nextState进行比较，并返回false以告知React可以跳过更新
 *                  不建议在此生命周期中进行深层比较或者使用JSON.stringify()。影响效率，且会损害性能
 *                  目前如果返回false，则不会调用UNSAFE_componentWillUpdate()，render() 和 componentDidUpdate()。后续版本，React可能会将此返回视为提示而不是严格的指令，并且返回false，仍可能重新渲染
 *          staic getDerivedStateFromProps()
 *              改方法会在调用render方法之前调用，并且在初始挂载及后续更新时被调用
 *              未完待续。。。。。。。。。。。。。。。。。。。
 *                      
 * 
 *  待观看的内容
 *      https://zh-hans.reactjs.org/docs/portals.html
 *      https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
 *      PureCompoent组件
 *              
*/