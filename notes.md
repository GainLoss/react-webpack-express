1.data包含：state props两个
2.生命周期：尽量都知道
3.react里面用的算法是：diff
4.虚拟DOM
5.在html循环的时候需要用到key 保持唯一性 原因是为了让如果添加一个新的dom的时候让react知道这是新增而不是删除了旧的元素
    还有稳定性就是尽量不要用下标 多次渲染不要变化 只有数组的时候才需要加key(三目运算符不需要)
6.react一切都是组件
7.react声明式编程：你不用去调取api，而是你写的函数api调你的 比如render 我们画render 然后react调取我们画的render
    声明式的就是我们画成什么样子的 然后怎么画就是react的事情了
8.样式 html js写在一个文件jsx中 我自己的感觉是react中本身就是一个组件了  代码会很少 所以放在一起是没事情的
9.jsx需要babel转义
10.render只是返回一些指令
11.jsx中{}里面就是javascript表达式 不要使用数组的push reverse等函数(这是修改数组，会有比较大的后果)
12.react中state和props
    data有两种state和props
    props是外部传的数据
    state是内部
    state可以作为props的
    改变自己的转态setState
    不能修改props
    深度拷贝要自己做
13.高阶组件：返回一个全新的组件 一个功能在多个组件需要到 接受的参数是期中必须有一个组件类 HOC
14.组件之间的通讯：
    父子：props、callback(promise)
    兄弟：通过父组件、
    组件和另一个组件：全局变量、redux
15.组件就是：无状态组件
16.react实现动画：css3、更新state驱动
17.react不支持ie8