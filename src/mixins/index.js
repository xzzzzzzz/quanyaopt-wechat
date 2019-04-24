const api = (url, method, data) => {
  var data = new Promise((resolve, reject) => {
    wx.request({
        data:data,
        method:method,
        url: url,
        success: function (res) {
            if (res.data.code == '2000') {
                resolve(res.data)
                return res.data
            } else {
                reject(res.data)
            }
            return res.data
        },
        fail:function (err) {
            reject(err)
            return err
        }
    })
  })  
  return data
}

export default api
  