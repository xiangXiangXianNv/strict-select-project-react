import axios from "axios";
import qs from 'qs';

const instance = axios.create({});
const CancelToken = axios.CancelToken;
let cancel;

function cancelRequest() {
  // 第一次执行videoService.cancelRequest()时还未发送getVideoList请求，会报错，添加如下判断
  if (typeof cancel === 'function') {
    // 取消请求;
    cancel();
    // 取消的函数对象已无用, 让它成为垃圾对象
    cancel = null
  }
}

export default function ajax(url, data = {}, method = "GET") {
  const {onlyOne} = data;
  const options = {};
  if (onlyOne) {
    delete data.onlyOne;

    // 取消之前的请求
    cancelRequest();
    options.cancelToken = new CancelToken(function executor(c) {
      // 保存当前请求对应的取消函数
      cancel = c
    })
  }
  return new Promise((resolve, reject) => {
    let promise;

    if (method == "GET") {
      options.params = data;
      promise = instance.get(url, options);
    } else {
      promise = instance.post(url, qs.stringify(data), options)
    }
    promise.then((response) => {
      /*if(onlyOne) {
        cancel = null
      }*/
      resolve(response.data)
    }).catch(err => {
      if (axios.isCancel(err)) {
      } else {
        // 处理请求异常
        reject(err)
      }
    })
  })
}