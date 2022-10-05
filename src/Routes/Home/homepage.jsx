import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  const contents = [
    {
      id: 1,
      title: "Hats",
      url: "https://media.glamourmagazine.co.uk/photos/62a06c0b90822da26007e53e/16:9/w_2580,c_limit/SUN%20HATS%20080622%20MAIN.jpg",
    },
    {
      id: 2,
      title: "Jackets",
      url: "https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Moto-Black-020122-1_800x533_crop_right.jpg?v=1643761804",
    },
    {
      id: 3,
      title: "Sneakers",
      url: "https://martinvalen.com/14100/men-s-stitch-zipper-sneakers-shoes-white.jpg",
    },
    {
      id: 4,
      title: "Womens",
      url: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/I/173344_1613659351.jpg",
    },
    {
      id: 5,
      title: "Mens",
      url: "https://img0.junaroad.com/uiproducts/17777107/zoom_0-1622893938.jpg",
    },
  ];
  return (
    <div>
      <Outlet />
      <Directory contents={contents} />
    </div>
  );
};

export default Homepage;
