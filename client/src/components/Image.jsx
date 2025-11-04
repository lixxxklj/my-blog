import { IKImage } from 'imagekitio-react';

const Image = ({ src, className, w, h, alt}) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"                            // 懒加载，浏览器进入视口才下载，节省首屏带宽和请求
      lqip={{ active: true, quality: 20 }}      // 低质量图片占位（先加载一张质量20、极度模糊、体积<2KB的小图占位，图片下载完毕再平滑替换）
      alt={alt}
      width={w}                                 // 实时裁剪参数
      height={h}
      transformation={[                         // 让 ImageKit 在 CDN 边缘实时生成指定尺寸缩略图，无需后端存储多套尺寸，前端即写即得
        {                                       // 修改原始图像大小，假设需要显示的图片是1200像素，但我们网页上实际要呈现最大的图像为800像素，所以可以通过这种方式将图片设为800像素，节省图片内存
          width: w,
          height: h
        }
      ]}
    />
  )
}
export default Image