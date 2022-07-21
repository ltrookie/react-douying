// 配置请求对象
import axios from 'axios'
// 本地调试 dev 开发阶段
export const baseUrl = "https://www.fastmock.site/mock";
// product 阶段
// https://www.fastmock.site/mock/3f112f6cb2f621fc9c2dd6a14be19f38/beers/
// 设计模式
const axiosInstance = axios.create({
    baseURL: baseUrl
})


axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误~~')
    }
)

export { axiosInstance }