
const ImgGrid = ({imgArr}) => {
  return (
    <div className="w-full h-full flex items-center justify-center  px-20 py-20 gap-3 flex-wrap mt-5"> {
        imgArr.map((singleImg) => {
            return (
                <img className=" w-96 h-auto shadow-lg" key={singleImg.id} src={singleImg.urls.regular} alt="grid img" />
            )
        })
    }
    </div>
  )
}

export default ImgGrid