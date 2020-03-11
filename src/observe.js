import { Dep } from './watcher'
import { Compile } from './compile'
export class Observe{
    constructor(data){
        this.data = data
        this.oberveDeal(data)
    }
    //主要方法 遍历data所有值 给他们添加上getter 和 setter
    oberveDeal(data){
        if(typeof data !=='object') return data;
        Object.keys(data).forEach(key => {
            this.defineReactive(data,key,data[key])
        });
    }

    //数据劫持
    defineReactive(obj,key,value){
        
        this.oberveDeal(value) //递归，遍历多层
        
        let dep = new Dep()
        Object.defineProperty(obj,key,{
            enumerable: true,
            configurable: true,
            get(){
                Dep.target &&  dep.addSub(Dep.target) //如果target存在添加订阅
                return value
            },
            set(newValue){
                if(value === newValue) return;
                if(typeof newValue == 'Object') this.oberveDeal(newValue);//防止对象中有对象
                value = newValue
                //发布通知 让所有订阅者更新
            }
        })
    }
}