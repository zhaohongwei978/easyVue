export class watcher{
    // vm当期实例 | data 数据名称 | cb 数据发生改变之后的回调
    constructor(vm,expr,cb){
        this.vm = vm
        this.expr = expr
        this.cb = cb
        Dep.target = this //

        // 需要把 expr 的旧值给存储起来
        this.oldValue = this.vm.$data[expr]

        Dep.target = null;
    }

}

// 依赖收集（用于管理所有的订阅者 和 通知这些订阅者）
export class Dep {
    constructor () {
        this.subs = []
    }

    //添加订阅
    addSub(watcher){
        this.subs.push(watcher)
    }


}