import notFoundImage from './../assets/images/error.svg'
 
export default function NotFound() {
  return (
    <div className='h-[80vh] flex justify-center items-center'>
        <img src={notFoundImage} alt="not found image" />
    </div>
  )
}
