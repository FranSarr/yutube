import Image from 'next/image'

export default function Video({ video }) {
  return (
    <div className=''>
      <div className='px-5 pb-5'>
        {video.thumbnail && (
          <Image
            className='mb-2 cursor-pointer'
            src={video.thumbnail}
            width='800'
            height='450'
          />
        )}
        <p className='text-lg font-bold text-white'>{video.title}</p>
      </div>
    </div>
  )
}