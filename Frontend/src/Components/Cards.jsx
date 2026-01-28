import image1 from '../assets/BooksPic.png'

const Cards = ({ item }) => {
  return (
    <div className="dark:bg-slate-900 dark:text-white dark:border-slate-50 card bg-base-100 w-full sm:w-72 md:w-80 lg:w-96 p-2  border border-gray-100 hover:scale-95 hover:shadow-xl duration-200  transition-all dark:transition-all dark:duration-500">
      <figure className="rounded-xl overflow-hidden">
        <img
          src={image1}
          alt="Book Cover"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p className="py-3">{item.title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline rounded-full p-3 hover:bg-pink-500 duration-200 hover:text-white">
            ${item.price}
          </div>
          <div className="badge badge-outline rounded-full p-3 hover:bg-pink-500 duration-200 hover:text-white">
            Buy now
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
