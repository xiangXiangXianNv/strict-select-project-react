### 准备日
    1.一旦在组件中使用了widthRouter将组件包装成了路由组件,就必须要入口文件中将根组件用路由器包裹起来,只有在路由器中才
    可以使用路由
    2. redux用来管理react多个组件间共享的状态,react-redux用来简化redux,提供两种语法:Provider和connect
    3. combineReducers是redux的函数,用来整合多个reducer函数
    4. connect连接ui组件时传递给ui组件props时第一个参数是用来读取指定数据的reducer函数返回的值,第二个参数是用来更新状态的
    action
    5. bug : 没有执行action中异步函数return的函数
       原因 : 在组件中直接调用了action函数,而不是从this.props中拿出action函数调用
### day01
    6.初始化显示必须判断数据是否来了
    7. style中必须使用{{}}
    8.如果{}中再次使用标签,而标签中再需要写js代码必须再次使用{}
    9.componentWillReceiveProps(最新的props对象)
### day02
    10.react中父组件可以通过this.props.children拿到子组件标签内部传递过来的标签,类似于vue中的插槽         11.react中的事件不能使用return false来阻止事件的默认行为,必须使用event.preventDefault()

### react与vue区别
### react与vue区别
    1. react中引入就确定了标签名,vue中引入之后必须注册一把来确定标签名
    2. react中显示的路由界面使用switch来确定显示某一个,vue中显示的路由界面标签 router-view
    3. react中绑定事件使用onClick,vue中绑定事件使用@click
    4. react中写类名,不能重复写className,vue中可以写静态class,也可以写动态class,静态class会保存下来
    5. react调试工具需要下载插件(composeWithDevTools)进行配置才可以使用,vue的调试工具只需要安装chrome插件就可以
    使用vue和vuex
    6. react中更改状态值是需要根据老的状态产生新的状态,vue是直接更改状态
    7. react中从this.refs中读取含有ref属性的标签,vue通过this.$refs读取含有ref属性的标签
