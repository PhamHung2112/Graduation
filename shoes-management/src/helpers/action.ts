import { toast } from 'react-toastify';
import { LocalKey, LocalStorage } from 'ts-localstorage';

export const FcLocalStrogate = (data: any, size = 0, amount = 1) => {
  const key = new LocalKey('cart', '');
  const dataLC: any = LocalStorage.getItem(key);
  const a = JSON.parse(dataLC) || [];
  let check = 0;
  if (dataLC?.length > 0) {
    for (var i = 0; i < a.length; i++) {
      if (a[i].id === data.id && a[i]?.size == size) {
        a[i].count = a[i].count + amount;
        check = 1;
        LocalStorage.setItem(key, JSON.stringify(a));
        toast.success('Thêm sản phẩm vào giỏ hàng thành công');
        return;
      }
    }
    if (check === 0) {
      const dataPush = { ...data, count: amount, size: size };
      a.push(dataPush);
      LocalStorage.setItem(key, JSON.stringify(a));
      toast.success('Thêm sản phẩm vào giỏ hàng thành công');
    }
  } else {
    const dataPush = { ...data, count: 1, size };
    a.push(dataPush);
    LocalStorage.setItem(key, JSON.stringify(a));
    toast.success('Thêm sản phẩm vào giỏ hàng thành công');
  }
};

export const updateTim = (data: any) => {
  const key = new LocalKey('array', '');
  const dataLC: any = LocalStorage.getItem(key);
  const tim = JSON.parse(dataLC) || [];
  if (tim.length > 0) {
    let checktim = tim.find((item: any) => item.id === data.id);
    if (checktim) {
      const arrNew = tim.filter((item: any) => item.id !== data.id);
      LocalStorage.setItem(key, JSON.stringify(arrNew));
      toast.success('Xóa sản phẩm yêu thích thành công');
    } else {
      tim.push(data);
      toast.success('Thêm sản phẩm yêu thích thành công');
      LocalStorage.setItem(key, JSON.stringify(tim));
    }
  } else {
    tim.push(data);
    toast.success('Thêm sản phẩm yêu thích thành công');
    LocalStorage.setItem(key, JSON.stringify(tim));
  }
};
