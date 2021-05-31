import { listsPostsByCategorySlug } from '/@/api'

// 获取文章列表
export function ListsPostsByCategorySlug(slug) {
    return listsPostsByCategorySlug(slug).then((res)=>{
//        console.log(res.data.data)
        return res.data.data
    })
}