
import { $host } from "."


export const getBasket= async(info)=>{
  
        const {data} = await $host.post('basket/getOne',info)
        return data
  
  
}

export const addItemToBasket= async(info)=>{
    const {data} = await $host.post('basket/add',info)
    return data
}
export const removeItemFromBasket= async(info)=>{
    const {data} = await $host.post('basket/remove',info)
    return data
}

export const changeAmount= async(info)=>{
    const {data} = await $host.post('basket/change',info)
    return data
}

export const addOrder= async(info)=>{
    const {data} = await $host.post('order/add',info)
    return data
}

 
export const removeAll= async(info)=>{
    const {data} = await $host.post('basket/removeAll',info)
    return data
}
export const getOrder= async(info)=>{
    const {data} = await $host.post('order/getAll',info)
    return data
}