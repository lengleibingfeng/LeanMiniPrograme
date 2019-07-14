Page({
  data:{
    name:"coderwhy",
    age:18,
    students:[
      {id:110,name:'kdg',age:18},
      {id:111,name:'gsgs',age:19},
      {id:112,name:'assg',age:22},
      {id:113,name:'hjh',age:21}
    ],
    counter:0
  },
  handleBtnClick(){
    // 1.错误做法：界面不会刷新
    // this.data.counter+=1
    // console.log(this.data.counter)

    // 2.this.setData()函数
    this.setData({
      counter: this.data.counter +1
    })
  },
  handleSubtraction() {
    // 1.错误做法：界面不会刷新
    // this.data.counter+=1
    // console.log(this.data.counter)

    // 2.this.setData()函数
    this.setData({
      counter: this.data.counter -1
    })
  }
})