import prisma from 'lib/prisma'
import { getVideo } from 'lib/data.js'

export default function SingleVideo({ video }) {
  if (!video) return <p className='text-center p-5'>Video does not exist 😞</p>

  return (
    <>
      
    </>
  )
}

export async function getServerSideProps(context) {
  let video = await getVideo(context.params.id, prisma)
	video = JSON.parse(JSON.stringify(video))

  return {
    props: {
      video,
    },
  }
}