 
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Cards from './Cards'
import axios from "axios";
import { useEffect, useState } from "react";

const FreeBooks = () => {
  const [book, setBook] = useState([]);
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:8080/book");
          console.log(res.data);
          setBook(res.data.filter((data)=>data.category==="Free"));
           
        } catch (error) {
          console.log(error);
        }
      };
      getBook();
    }, []);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2.5,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="max-w-screen-2xl mx-auto md:px-20 px-7 py-20 space-y-6 dark:bg-slate-900 dark:text-white">
            <div>
                <h2 className="font-semibold text-2xl pb-2">Free Offered Courses</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et totam.
                    Tempora amet atque expedita, quae corrupti totam sed pariatur corporis
                    at veniam est voluptas animi!
                </p>
            </div>

            {/* Slider wrapper */}
            <div className=''>
                <div className="slider-container ">
                    <Slider {...settings}>
                         
                            {book.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))}
                         
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default FreeBooks
