export class ResponseBody {
  constructor ({code, msg, data = null}) {
    this.code = code
    this.msg = msg
    this.data = data
    this.time = new Date().getTime()
  }
}

// 错误响应
export function errorResponse ({code = 500}) {
  return new ResponseBody({
    code,
    msg: '错误'
  })
}

// 成功响应
export function successResponse ({code = 200,msg = '请求成功', data}) {
  return new ResponseBody({
    code,
    msg,
    data
  })
}