import { useState, useEffect } from "react";
import Slider from "react-slick";
import clsx from "clsx";

const LandingPage = () => {
  const [storesList, setStoresList] = useState<storesList[]>([]);
  const [selectedStoreType, setSelectedStoreType] = useState<number>(1);
  const [storeType, setStoreType] = useState<string[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [showCommonQuesion1, setShowCommonQuestion1] = useState<boolean>(false);
  const [showCommonQuesion2, setShowCommonQuestion2] = useState<boolean>(false);
  const [showCommonQuesion3, setShowCommonQuestion3] = useState<boolean>(false);
  const [showCommonQuesion4, setShowCommonQuestion4] = useState<boolean>(false);
  const [showCommonQuesion5, setShowCommonQuestion5] = useState<boolean>(false);
  const [showCommonQuesion6, setShowCommonQuestion6] = useState<boolean>(false);

  useEffect(() => {
    const fetchedStoresList: storesList[] = [
      {
        id: 1,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/1694/be016e9a-3e23-4d66-835e-9470d7f46107.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/1694/be016e9a-3e23-4d66-835e-9470d7f46107.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/1694/be016e9a-3e23-4d66-835e-9470d7f46107.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/1694/be016e9a-3e23-4d66-835e-9470d7f46107.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/1694/be016e9a-3e23-4d66-835e-9470d7f46107.png 4x",
        title: "Maxi",
        delivery_time: "2:20pm",
        href: "",
        discount_amount: 15,
        in_store_prices: true,
        features: ["Low prices"],
        new: true,
      },
      {
        id: 2,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/2138/19b444c0-481d-41cf-b017-4d1666e81006.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/2138/19b444c0-481d-41cf-b017-4d1666e81006.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/2138/19b444c0-481d-41cf-b017-4d1666e81006.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/2138/19b444c0-481d-41cf-b017-4d1666e81006.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/2138/19b444c0-481d-41cf-b017-4d1666e81006.png 4x",
        title: "Metro",
        delivery_time: "2:15pm",
        href: "",
        discount_amount: 0,
        in_store_prices: true,
        features: ["Lots of deals"],
        new: false,
      },
      {
        id: 3,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/354/fc4be33a-bff9-4076-9d57-4b5e08377771.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/354/fc4be33a-bff9-4076-9d57-4b5e08377771.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/354/fc4be33a-bff9-4076-9d57-4b5e08377771.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/354/fc4be33a-bff9-4076-9d57-4b5e08377771.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/354/fc4be33a-bff9-4076-9d57-4b5e08377771.png 4x",
        title: "Costco",
        delivery_time: "2:40pm",
        href: "",
        discount_amount: 0,
        in_store_prices: false,
        features: ["Loyalty savings", "Bulk pricing"],
        new: false,
      },
      {
        id: 4,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/462/2eba6946-8810-481e-bd3c-6852d5121d51.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/462/2eba6946-8810-481e-bd3c-6852d5121d51.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/462/2eba6946-8810-481e-bd3c-6852d5121d51.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/462/2eba6946-8810-481e-bd3c-6852d5121d51.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/462/2eba6946-8810-481e-bd3c-6852d5121d51.png 4x",
        title: "Walmart",
        delivery_time: "2:20pm",
        href: "",
        discount_amount: 15,
        in_store_prices: false,
        features: ["Low prices"],
        new: false,
      },
      {
        id: 5,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/2438/56cba67e-3937-4228-9a57-572fb1e1a1d2.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/2438/56cba67e-3937-4228-9a57-572fb1e1a1d2.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/2438/56cba67e-3937-4228-9a57-572fb1e1a1d2.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/2438/56cba67e-3937-4228-9a57-572fb1e1a1d2.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/2438/56cba67e-3937-4228-9a57-572fb1e1a1d2.png 4x",
        title: "Super C",
        delivery_time: "2:15pm",
        href: "",
        discount_amount: 0,
        in_store_prices: true,
        features: ["Low prices", "Lots of deals"],
        new: false,
      },
      {
        id: 6,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/2323/ba755be3-5f2b-4ac9-887e-dc2a60637ec8.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/2323/ba755be3-5f2b-4ac9-887e-dc2a60637ec8.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/2323/ba755be3-5f2b-4ac9-887e-dc2a60637ec8.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/2323/ba755be3-5f2b-4ac9-887e-dc2a60637ec8.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/2323/ba755be3-5f2b-4ac9-887e-dc2a60637ec8.png 4x",
        title: "Adonis",
        delivery_time: "2:15pm",
        href: "",
        discount_amount: 0,
        in_store_prices: true,
        features: ["Lots of deals"],
        new: false,
      },
      {
        id: 7,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/350/3f5bc418-bcc5-4340-9d5b-6927f2ffd2a5.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/350/3f5bc418-bcc5-4340-9d5b-6927f2ffd2a5.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/350/3f5bc418-bcc5-4340-9d5b-6927f2ffd2a5.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/350/3f5bc418-bcc5-4340-9d5b-6927f2ffd2a5.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/350/3f5bc418-bcc5-4340-9d5b-6927f2ffd2a5.png 4x",
        title: "T&T Supermarket",
        delivery_time: "2:35pm",
        href: "",
        discount_amount: 0,
        in_store_prices: false,
        features: [],
        new: false,
      },
      {
        id: 8,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/1696/2b4d3b56-7036-4ff7-918b-7693df5c7b0d.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/1696/2b4d3b56-7036-4ff7-918b-7693df5c7b0d.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/1696/2b4d3b56-7036-4ff7-918b-7693df5c7b0d.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/1696/2b4d3b56-7036-4ff7-918b-7693df5c7b0d.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/1696/2b4d3b56-7036-4ff7-918b-7693df5c7b0d.png 4x",
        title: "Pharmaprix",
        delivery_time: "2:05pm",
        href: "",
        discount_amount: 0,
        in_store_prices: true,
        features: [],
        new: false,
      },
      {
        id: 9,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/1603/7d6204e2-859f-499d-8236-e15aaf252007.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/1603/7d6204e2-859f-499d-8236-e15aaf252007.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/1603/7d6204e2-859f-499d-8236-e15aaf252007.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/1603/7d6204e2-859f-499d-8236-e15aaf252007.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/1603/7d6204e2-859f-499d-8236-e15aaf252007.png 4x",
        title: "Dollarama",
        delivery_time: "2:15pm",
        href: "",
        discount_amount: 0,
        in_store_prices: true,
        features: [],
        new: false,
      },
      {
        id: 10,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/1900/56e990ac-4092-4bce-927f-aacc34928723.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/1900/56e990ac-4092-4bce-927f-aacc34928723.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/1900/56e990ac-4092-4bce-927f-aacc34928723.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/1900/56e990ac-4092-4bce-927f-aacc34928723.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/1900/56e990ac-4092-4bce-927f-aacc34928723.png 4x",
        title: "Giant Tiger",
        delivery_time: "2:35pm",
        href: "",
        discount_amount: 10,
        in_store_prices: true,
        features: ["Low prices", "Lots of deals"],
        new: false,
      },
      {
        id: 11,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/1555/4219ddd3-bb4c-4300-8930-bff75d3b3fff.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/1555/4219ddd3-bb4c-4300-8930-bff75d3b3fff.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/1555/4219ddd3-bb4c-4300-8930-bff75d3b3fff.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/1555/4219ddd3-bb4c-4300-8930-bff75d3b3fff.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/1555/4219ddd3-bb4c-4300-8930-bff75d3b3fff.png 4x",
        title: "Sephora Canada",
        delivery_time: "2:25pm",
        href: "",
        discount_amount: 0,
        in_store_prices: true,
        features: [],
        new: false,
      },
      {
        id: 12,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/1928/9afc1db8-0780-4246-91c5-8f4d4de1fc33.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/1928/9afc1db8-0780-4246-91c5-8f4d4de1fc33.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/1928/9afc1db8-0780-4246-91c5-8f4d4de1fc33.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/1928/9afc1db8-0780-4246-91c5-8f4d4de1fc33.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/1928/9afc1db8-0780-4246-91c5-8f4d4de1fc33.png 4x",
        title: "Michaels Canada",
        delivery_time: "",
        href: "",
        discount_amount: 5,
        in_store_prices: false,
        features: [],
        new: false,
      },
      {
        id: 13,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/1769/2810a5b5-cd48-4622-95d0-7c2b3882be21.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/1769/2810a5b5-cd48-4622-95d0-7c2b3882be21.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/1769/2810a5b5-cd48-4622-95d0-7c2b3882be21.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/1769/2810a5b5-cd48-4622-95d0-7c2b3882be21.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/1769/2810a5b5-cd48-4622-95d0-7c2b3882be21.png 4x",
        title: "Les Aliments M&M",
        delivery_time: "2:30pm",
        href: "",
        discount_amount: 10,
        in_store_prices: false,
        features: [],
        new: false,
      },
      {
        id: 14,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/1786/6a948794-265a-4971-bf3f-b7323ba755ae.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/1786/6a948794-265a-4971-bf3f-b7323ba755ae.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/1786/6a948794-265a-4971-bf3f-b7323ba755ae.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/1786/6a948794-265a-4971-bf3f-b7323ba755ae.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/1786/6a948794-265a-4971-bf3f-b7323ba755ae.png 4x",
        title: "Bureau",
        delivery_time: "2:15pm",
        href: "",
        discount_amount: 0,
        in_store_prices: false,
        features: ["Lots of deals"],
        new: false,
      },
      {
        id: 15,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/2386/f96a425a-8f3a-4a30-9347-9c41411aa8c3.jpeg, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/2386/f96a425a-8f3a-4a30-9347-9c41411aa8c3.jpeg 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/2386/f96a425a-8f3a-4a30-9347-9c41411aa8c3.jpeg 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/2386/f96a425a-8f3a-4a30-9347-9c41411aa8c3.jpeg 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/2386/f96a425a-8f3a-4a30-9347-9c41411aa8c3.jpeg 4x",
        title: "Linen Chest",
        delivery_time: "2:35pm",
        href: "",
        discount_amount: 0,
        in_store_prices: false,
        features: ["Lots of deals"],
        new: false,
      },
      {
        id: 15,
        image_urlset:
          "https://www.instacart.com/image-server/54x54/www.instacart.com/assets/domains/warehouse/logo/2605/ef1b659e-494e-4613-b2c9-7745707daa70.png, https://www.instacart.com/image-server/81x81/www.instacart.com/assets/domains/warehouse/logo/2605/ef1b659e-494e-4613-b2c9-7745707daa70.png 1.5x, https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/2605/ef1b659e-494e-4613-b2c9-7745707daa70.png 2x, https://www.instacart.com/image-server/162x162/www.instacart.com/assets/domains/warehouse/logo/2605/ef1b659e-494e-4613-b2c9-7745707daa70.png 3x, https://www.instacart.com/image-server/216x216/www.instacart.com/assets/domains/warehouse/logo/2605/ef1b659e-494e-4613-b2c9-7745707daa70.png 4x",
        title: "Kiehl's Canada",
        delivery_time: "2:25pm",
        href: "",
        discount_amount: 0,
        in_store_prices: false,
        features: [],
        new: false,
      },
    ];

    setStoresList(fetchedStoresList);

    const fetchedStoreType = [
      "All",
      "EBT",
      "Fastest",
      "Offers",
      "Low prices",
      "Grocery",
      "Pickup",
      "In-store prices",
      "Convenience",
      "Wholesale",
    ];

    setStoreType(fetchedStoreType);
  }, []);

  const NextArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#EAEEF3",
          borderRadius: "20px",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#EAEEF3",
          borderRadius: "20px",
        }}
        onClick={onClick}
      />
    );
  };

  const storesSettings = {
    infinite: true,
    swipeToSlide: true,
    centerMode: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const storesTypeSettings = {
    infinite: true,
    swipeToSlide: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrow: false,
  };

  return (
    <div className="z-10">
      <div className="flex bg-[#003D29] px-4">
        <div className="flex w-full my-6 mx-auto max-w-[1152px]">
          <div className="flex flex-1 flex-column items-center">
            <div className="max-w-96">
              <h1 className="text-[24px] leading-7 font-semibold text-white md:text-[28px] md:leading-8">
                Order groceries for delivery or pickup today
              </h1>
              <button className="bg-[#108910] rounded-[27px] text-white px-4 mt-6 w-full">
                <span className="text-[18px] leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
                  Sign up for 3 free deliveries
                </span>
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <img
              src="https://www.instacart.com/assets/homepage/affordability-hero-3a7ab0e389e5f4f278b4715eec95775f1d7d969323d22277199898ce605c6f56.png"
              className="w-160"
            />
          </div>
        </div>
      </div>
      <div className="px-4 pt-4">
        <div className="flex flex-col max-w-[1152px] my-4 mx-auto">
          <div className="flex flex-col">
            <div className="w-full items-center mb-4">
              <h2 className="text-2xl font-bold text-black">
                Stores to help you save
              </h2>
            </div>
            <div className="w-full">
              <div className="w-full px-4">
                <Slider {...storesSettings}>
                  {storesList.map((store, index) => (
                    <div key={index} className="relative">
                      <div className="flex-shrink-0 h-full py-7 px-2">
                        <a className="text-[#242529] h-full" href={store.href}>
                          <div className="grid">
                            <span className="flex justify-center h-full relative">
                              <div>
                                <div className="flex justify-center items-center w-[62p] h-[48px] border rounded-lg md:w-[96px] md:h-[72px]">
                                  <img
                                    className="relative object-contain	w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
                                    srcSet={store.image_urlset}
                                  />
                                </div>
                              </div>
                              {store.discount_amount !== 0 && (
                                <div className="grid bg-center h-14 w-14 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                                  <svg
                                    className="absolute"
                                    width="56"
                                    height="56"
                                    viewBox="0 0 66 66"
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="brandMaxLight"
                                    fill="#FFDC23"
                                    aria-hidden="true"
                                  >
                                    <path d="m25.36 58.016-6.14 4.569-.6-7.687-7.18 2.634 1.566-7.561-7.628.498 3.602-6.803-7.438-1.695 5.355-5.49-6.678-3.762 6.678-3.762-5.359-5.49 7.442-1.695-3.602-6.803 7.628.498-1.567-7.562 7.184 2.634.596-7.686 6.14 4.569L28.092.219l4.628 6.152L37.344.219l2.731 7.203 6.14-4.57.6 7.687L54 7.905l-1.567 7.562 7.625-.498-3.602 6.803 7.442 1.694-5.359 5.491 6.681 3.762-6.68 3.761 5.358 5.491-7.442 1.695 3.602 6.803-7.625-.498 1.564 7.561-7.18-2.634-.6 7.687-6.14-4.57-2.732 7.204-4.625-6.152-4.628 6.152z"></path>
                                  </svg>
                                  <div className="relative h-full flex flex-col text-center items-center justify-center transform -rotate-12">
                                    <span className="text-lg leading-none font-bold">
                                      {`$${store.discount_amount}`}
                                    </span>
                                    <span className="text-[10px] leading-none font-bold">
                                      OFF
                                    </span>
                                  </div>
                                </div>
                              )}
                            </span>
                          </div>
                          <div className="flex pt-2 text-center justify-center items-center text-xs font-semibold md:text-sm">
                            {store.title}
                          </div>
                          {store.in_store_prices ? (
                            <div className="flex justify-center bg-[#FFDC23] font-medium text-xs leading-5 mx-[-6px] md:text-sm">
                              In-store prices
                            </div>
                          ) : (
                            <div className="flex justify-center font-normal text-xs md:text-sm">{`By ${store.delivery_time}`}</div>
                          )}
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="text-right text-[#56595E] font-[10px] leading-4 md:text-xs">
              Offeres subject to terms and eligiblity
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-4 my-4 mx-auto">
        <div className="my-8 mx-auto max-w-[1152px] w-full relative">
          <h2 className="text-black text-[18px] leading-6 font-bold md:text-[24px] md:leading-7">
            {`${selectedStoreType === 1 ? "All stores" : storeType[selectedStoreType - 1]} in `}
            <span className="text-[#108910] cursor-pointer">
              Greater Montreal Area, QC
            </span>
          </h2>
          <div className="pt-3">
            <div className="w-full px-2">
              <Slider {...storesTypeSettings}>
                {storeType.map((store, index) => (
                  <div key={index} className="relative px-3 cursor-pointer">
                    <div
                      className={clsx(
                        "flex-shrink-0 bg-[#E8E9EB] rounded-[18px] px-[16px] py-1 text-black font-semibold hover:bg-black hover:text-white text-sm",
                        "md:text-base",
                        {
                          "bg-black text-white":
                            selectedStoreType === index + 1,
                        },
                      )}
                      onClick={() => setSelectedStoreType(index + 1)}
                    >
                      {store}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="w-full pt-5">
            <div className="w-full max-w-[1280px] gap-[24px] grid grid-cols-2 xl:grid-cols-3">
              {(selectedStoreType === 4
                ? storesList.filter((store) => store.discount_amount !== 0)
                : selectedStoreType === 5
                  ? storesList.filter((store) =>
                      store.features.includes("Low prices"),
                    )
                  : selectedStoreType === 8
                    ? storesList.filter((store) => store.in_store_prices)
                    : selectedStoreType === 10
                      ? storesList.filter(
                          (store) =>
                            store.features.includes("Loyalty savings") &&
                            store.features.includes("Bulk pricing"),
                        )
                      : storesList
              ).map((store, index) => (
                <div
                  key={index}
                  className={`h-full ${index > 11 && !showAll ? "hidden" : ""}`}
                >
                  <div className="flex h-full items-center border border-[#0000033] rounded-lg">
                    <a className="h-full w-full flex items-center p-3 gap-2">
                      <div className="flex justify-center items-center w-[62p] h-[48px] border rounded-lg md:w-[96px] md:h-[72px]">
                        <img
                          className="relative object-contain	w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
                          srcSet={store.image_urlset}
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex gap-1">
                          <div className="text-black text-[14px] leading-5 md:text-[18px] md:leading-6">
                            {store.title}
                          </div>
                          {store.new && (
                            <div className="bg-black text-white">New</div>
                          )}
                        </div>
                        <div className="flex items-center">
                          <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            fill="#108910"
                            xmlns="http://www.w3.org/2000/svg"
                            color="brandPrimaryRegular"
                            aria-hidden="true"
                          >
                            <path d="M12.79 10.33 14.74 2h-1.27L5.54 12.63v1.05h5.67L9.26 22h1.27l7.93-10.62v-1.05z"></path>
                          </svg>
                          <span className="text-[#108910] text-[12px] leading-5 md:text-[14px] md:leading-6">
                            {`Delivery by ${store.delivery_time}`}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {store.discount_amount !== 0 && (
                            <div className="bg-[#FFDC23] text-[#343538]">{`$${store.discount_amount} off`}</div>
                          )}
                          {store.in_store_prices && (
                            <div className="bg-[#FFDC23] text-[#343538]">
                              In-store prices
                            </div>
                          )}
                          {store.features.map((feature, index) => (
                            <div
                              key={index}
                              className="bg-[#F6F7F8] text-[#242529] font-light"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={clsx(
                "bg-transparent pt-5",
                "flex justify-center",
                "cursor-pointer",
                "text-[#108910] text-[12px] leading-5 font-semibold",
                "md:text-[14px] md:leading-6",
                "hover:underline hover:border-none",
              )}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show less" : "Show all"}
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "h-[100px] max-w-[1152px] w-full m-auto",
          "bg-[#B1E5D5] rounded-lg shadow-[0_8px_8px_#0000000D]",
          "flex justify-between items-center",
        )}
      >
        <img
          className="hidden md:flex md:h-full"
          src="https://www.instacart.com/assets/homepage/QR_code_left-d5860cb8e299f89f4a14b7f556d11052dc21f59d54fdd69e2b2154538fc31946.png"
        />
        <div className="flex flex-1 min-w-0 flex-col pl-[30px] md:pl-0 md:items-center">
          <div className="flex flex-col">
            <h2 className="text-black text-[18px] leading-6 font-bold md:text-[24px] md:leading-7">
              Get the full Instacart experience
            </h2>
            <div className="text-black text-[12px] leading-5 md:text-[14px] md:leading-6">
              Scan the QR code with your camera. First delivery is free.
            </div>
          </div>
        </div>
        <img
          className="h-full rounded-lg"
          src="data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAACAAElEQVR4Xuzda9Bu913X/xTSJm3OSXNOWpLhDAOjziA4RWScUXHAAzqjozIj4gMdHYQZTqIyiA98UGR8oiMzPkCEJtmn0NQeKVBKaZUWaalA2z+VWm3T5nxOdg5d/72unWt3533vlk8+Wd/f9V3X/Xnpe1qg/f5+17rWtWf9ct/3vs+bIiIiIiIiBjmP/4uIiIiIiIgqOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYBERERERMQwOYAs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"
          alt="QR code"
        ></img>
      </div>
      <div className="bg-white my-0 mx-auto max-w-[1152px]">
        <div className="py-[100px] px-4 flex flex-col gap-8">
          <div className="flex justify-center">
            <h2 className="text-black text-[18px] leading-6 font-bold md:text-[24px] md:leading-7">
              Grocery delivery you can count on
            </h2>
          </div>
          <div className="flex overflow-x-auto gap-6">
            <div className="flex flex-col relative rounded-xl min-w-[343px] max-w-[343px]">
              <div className="flex justify-center">
                <img
                  className="rounded-tl-xl rounded-tr-xl"
                  srcSet="https://www.instacart.com/image-server/343x257/www.instacart.com/assets/homepage/choose-what-you-want-efca561a8f08c2a5ce5ed77df6c10bf54d4439ca8434f12e9d9641bf91dd2b43.jpg, https://www.instacart.com/image-server/515x386/www.instacart.com/assets/homepage/choose-what-you-want-efca561a8f08c2a5ce5ed77df6c10bf54d4439ca8434f12e9d9641bf91dd2b43.jpg 1.5x, https://www.instacart.com/image-server/686x514/www.instacart.com/assets/homepage/choose-what-you-want-efca561a8f08c2a5ce5ed77df6c10bf54d4439ca8434f12e9d9641bf91dd2b43.jpg 2x, https://www.instacart.com/image-server/1029x771/www.instacart.com/assets/homepage/choose-what-you-want-efca561a8f08c2a5ce5ed77df6c10bf54d4439ca8434f12e9d9641bf91dd2b43.jpg 3x, https://www.instacart.com/image-server/1372x1028/www.instacart.com/assets/homepage/choose-what-you-want-efca561a8f08c2a5ce5ed77df6c10bf54d4439ca8434f12e9d9641bf91dd2b43.jpg 4x"
                />
              </div>
              <div className="px-6 py-8 rounded-bl-xl rounded-br-xl bg-[#F6F7F8] justify-start">
                <h3 className="text-[#343538] text-[14px] leading-5 font-semibold md:text-[18px] md:leading-6">
                  Choose what you want
                </h3>
                <p className="text-[#242529] text-[12px] font-normal leading-5 md:text-[14px] md:leading-6">
                  Select items from your favourite grocery stores at
                  Instacart.ca or in the app.
                </p>
              </div>
            </div>
            <div className="flex flex-col relative rounded-xl min-w-[343px] max-w-[343px]">
              <div className="flex justify-center">
                <img
                  className="rounded-tl-xl rounded-tr-xl"
                  srcSet="https://www.instacart.com/image-server/343x257/www.instacart.com/assets/homepage/see-real-time-updates-1d23ec0f423b24300c0cd6abcb4724f36b0af840fbdf106aa5f140e835cff7eb.jpg, https://www.instacart.com/image-server/515x386/www.instacart.com/assets/homepage/see-real-time-updates-1d23ec0f423b24300c0cd6abcb4724f36b0af840fbdf106aa5f140e835cff7eb.jpg 1.5x, https://www.instacart.com/image-server/686x514/www.instacart.com/assets/homepage/see-real-time-updates-1d23ec0f423b24300c0cd6abcb4724f36b0af840fbdf106aa5f140e835cff7eb.jpg 2x, https://www.instacart.com/image-server/1029x771/www.instacart.com/assets/homepage/see-real-time-updates-1d23ec0f423b24300c0cd6abcb4724f36b0af840fbdf106aa5f140e835cff7eb.jpg 3x, https://www.instacart.com/image-server/1372x1028/www.instacart.com/assets/homepage/see-real-time-updates-1d23ec0f423b24300c0cd6abcb4724f36b0af840fbdf106aa5f140e835cff7eb.jpg 4x"
                />
              </div>
              <div className="px-6 py-8 rounded-bl-xl rounded-br-xl bg-[#F6F7F8] justify-start">
                <h3 className="text-[#343538] text-[14px] leading-5 font-semibold md:text-[18px] md:leading-6">
                  See real-teim updates
                </h3>
                <p className="text-[#242529] text-[12px] font-normal leading-5 md:text-[14px] md:leading-6">
                  Personal shoppers pick items with care. Chat as they shop and
                  manage your order.
                </p>
              </div>
            </div>
            <div className="flex flex-col relative rounded-xl min-w-[343px] max-w-[343px]">
              <div className="flex justify-center">
                <img
                  className="rounded-tl-xl rounded-tr-xl"
                  srcSet="https://www.instacart.com/image-server/343x257/www.instacart.com/assets/homepage/get-your-items-same-day-c85bb8474d3f09fe7eec97688767459f93852e29bf3fa849ab410f73d6f91b3a.jpg, https://www.instacart.com/image-server/515x386/www.instacart.com/assets/homepage/get-your-items-same-day-c85bb8474d3f09fe7eec97688767459f93852e29bf3fa849ab410f73d6f91b3a.jpg 1.5x, https://www.instacart.com/image-server/686x514/www.instacart.com/assets/homepage/get-your-items-same-day-c85bb8474d3f09fe7eec97688767459f93852e29bf3fa849ab410f73d6f91b3a.jpg 2x, https://www.instacart.com/image-server/1029x771/www.instacart.com/assets/homepage/get-your-items-same-day-c85bb8474d3f09fe7eec97688767459f93852e29bf3fa849ab410f73d6f91b3a.jpg 3x, https://www.instacart.com/image-server/1372x1028/www.instacart.com/assets/homepage/get-your-items-same-day-c85bb8474d3f09fe7eec97688767459f93852e29bf3fa849ab410f73d6f91b3a.jpg 4x"
                />
              </div>
              <div className="px-6 py-8 rounded-bl-xl rounded-br-xl bg-[#F6F7F8] justify-start">
                <h3 className="text-[#343538] text-[14px] leading-5 font-semibold md:text-[18px] md:leading-6">
                  Get your items same-day
                </h3>
                <p className="text-[#242529] text-[12px] font-normal leading-5 md:text-[14px] md:leading-6">
                  Pick a convenient time for you. Enjoy Instacart’s 100% quality
                  guarantee on every order.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[32px] flex flex-col max-w-full text-center justify-center items-center bg-[white] gap-4">
          <h2 className="max-w-[500px] text-[#343538] text-[24px] leading-7 font-bold md:text-[28px] md:leading-8 md:pb-8">
            The larget online grocery marketplzce In North America
          </h2>
          <div className="flex w-full">
            <img
              className="rounded-lg"
              src="https://www.instacart.com/assets/homepage/homepage_stats-538f51946acc9e8a72b982654287ee0ad8d7a848df2cd860935bbc3c2a97e84a.jpg"
            />
          </div>
          <div className="grid gap-2 grid-rows-4 xl:grid-cols-4 xl:grid-rows-1 w-full">
            <div className="flex flex-col text-left rounded-lg bg-[#F6F7F8] p-8">
              <h2 className="text-[#343538] break-words text-[24px] leading-7 font-bold md:text-[28px] md:leading-8 md:pb-8 md:max-w-[150px]">
                1 billion products
              </h2>
              <p className="text-2xl">available to shop across the catalog</p>
            </div>
            <div className="flex flex-col text-left rounded-lg bg-[#F6F7F8] p-8">
              <h2 className="text-[#343538] break-words text-[24px] leading-7 font-bold md:text-[28px] md:leading-8 md:pb-8 md:max-w-[150px]">
                80,000 stores
              </h2>
              <p className="text-2xl">from local grocers to chain stores</p>
            </div>
            <div className="flex flex-col text-left rounded-lg bg-[#F6F7F8] p-8">
              <h2 className="text-[#343538] break-words text-[24px] leading-7 font-bold md:text-[28px] md:leading-8 md:pb-8 md:max-w-[150px]">
                14,000 cities
              </h2>
              <p className="text-2xl">served across the U.S. & Canada</p>
            </div>
            <div className="flex flex-col text-left rounded-lg bg-[#F6F7F8] p-8">
              <h2 className="text-[#343538] break-words text-[24px] leading-7 font-bold md:text-[28px] md:leading-8 md:pb-8 md:max-w-[150px]">
                Millions of orders
              </h2>
              <p className="text-2xl">delivered or picked up yearly</p>
            </div>
          </div>
        </div>
        <div className="my-0 mx-auto p-[32px] max-w-[950px] md:pb-[100px]">
          <div className="flex flex-col w-full">
            <h2 className="text-center text-[#343538] text-[24px] leading-7 font-bold md:text-[28px] md:leading-8 md:pb-8">
              Common questions
            </h2>
            <div className="flex flex-col w-full">
              <div className="flex flex-col border-[#E8E9EB] border-b py-6">
                <h3
                  className="cursor-pointer"
                  onClick={() => setShowCommonQuestion1(!showCommonQuesion1)}
                >
                  <div className="flex justify-between w-full text-[#424242] text-left text-[24px] leading-9 gap-[300px] md:text-[28px] md:leading-8">
                    <div>
                      How does Instacart delivery and curbside pickup work?
                    </div>
                    <div>{showCommonQuesion1 ? "-" : "+"}</div>
                  </div>
                </h3>
                <div
                  className={`flex flex-col gap-5 overflow-hidden pt-[10px] pr-[15%] md:pr-[20%] ${!showCommonQuesion1 && "hidden"}`}
                >
                  <p>
                    Instacart makes it easy to order from your favourite stores.
                    Shop for items from stores near you, with a selection of
                    more than 500 retailers and trusted local grocers across
                    North America. Then, Instacart will connect you with a
                    personal shopper in your area to shop and deliver your
                    order. Contactless delivery is available with our “Leave at
                    my door” option.
                  </p>

                  <p>
                    You can track your order’s progress and communicate with
                    your shopper every step of the way using the Instacart app
                    or website.
                  </p>

                  <p>
                    Instacart also offers curbside pickup at select retail
                    locations. Simply place your order and choose a pickup time,
                    and a shopper will prepare your order at the store.
                  </p>

                  <p>
                    When you get to the store, use the Instacart app to notify
                    us. Depending on the store, a shopper or store employee will
                    bring the groceries to your car, or you can pick them up at
                    the designated area.
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-[#E8E9EB] border-b py-6">
                <h3
                  className="cursor-pointer"
                  onClick={() => setShowCommonQuestion2(!showCommonQuesion2)}
                >
                  <div className="flex justify-between w-full text-[#424242] text-left text-[24px] leading-9 gap-[300px] md:text-[28px] md:leading-8">
                    <div>How much does Instacart cost?</div>
                    <div>{showCommonQuesion2 ? "-" : "+"}</div>
                  </div>
                </h3>
                <div
                  className={`flex flex-col gap-5 overflow-hidden pt-[10px] pr-[15%] md:pr-[20%] ${!showCommonQuesion2 && "hidden"}`}
                >
                  <p>
                    You don’t need a membership to order with Instacart. In
                    fact, you can even order from warehouse clubs, like Costco,
                    Sam’s Club, and BJ’s Wholesale Club, without a retailer club
                    membership.
                  </p>

                  <p>
                    To get started, create an account, select the store you want
                    to shop, and place your order. New customers may be eligible
                    for $0 delivery fees* promotions. (*Service fees apply)
                  </p>

                  <p>
                    Delivery: Fees start at $3.99 for same-day orders over $35.
                    Fees vary for one-hour deliveries, club store deliveries,
                    and deliveries under $35.
                  </p>
                  <p>
                    Pickup: There may be a “pickup fee” (equivalent to a
                    delivery fee for pickup orders) on your pick up order.
                  </p>
                  <p>
                    Service fees: Service fees vary and are subject to change
                    based on factors like location and the number and types of
                    items in your cart. Orders containing alcohol have a
                    separate service fee.
                  </p>
                  <p>
                    With an optional Instacart+ membership, you can get $0
                    delivery fees* on every order over $35. *Service fees apply.
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-[#E8E9EB] border-b py-6">
                <h3
                  className="cursor-pointer"
                  onClick={() => setShowCommonQuestion3(!showCommonQuesion3)}
                >
                  <div className="flex justify-between w-full text-[#424242] text-left text-[24px] leading-9 gap-[300px] md:text-[28px] md:leading-8">
                    <div>
                      Will I pay the same price on Instacart as I would In
                      store?
                    </div>
                    <div>{showCommonQuesion3 ? "-" : "+"}</div>
                  </div>
                </h3>
                <div
                  className={`flex flex-col gap-5 overflow-hidden pt-[10px] pr-[15%] md:pr-[20%] ${!showCommonQuesion3 && "hidden"}`}
                >
                  <p>
                    Retail partners set the prices of items on the Instacart
                    marketplace. While many retailers offer everyday store
                    prices on Instacart, some retailers may set prices on the
                    Instacart platform that are different from in-store prices.
                  </p>
                  <p>
                    You can view pricing policies for each retailer on the
                    Instacart app and website.
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-[#E8E9EB] border-b py-6">
                <h3
                  className="cursor-pointer"
                  onClick={() => setShowCommonQuestion4(!showCommonQuesion4)}
                >
                  <div className="flex justify-between w-full text-[#424242] text-left text-[24px] leading-9 gap-[300px] md:text-[28px] md:leading-8">
                    <div>
                      What happens if something is out of stock and I need to
                      give specific instructions?
                    </div>
                    <div>{showCommonQuesion4 ? "-" : "+"}</div>
                  </div>
                </h3>
                <div
                  className={`flex flex-col gap-5 overflow-hidden pt-[10px] pr-[15%] md:pr-[20%] ${!showCommonQuesion4 && "hidden"}`}
                >
                  <p>
                    Instacart makes it easy to communicate with your shopper.
                    When an item you want is out-of-stock at the store, your
                    shopper will follow your replacement preferences.
                  </p>

                  <p>
                    You can set item and delivery instructions in advance, as
                    well as chat directly with your shopper while they shop and
                    deliver your items. You can tell the shopper to:
                  </p>

                  <ul className="pl-10 list-disc">
                    <li>
                      Find Best Match: By default, your shopper will use their
                      best judgement to pick a replacement for your item.
                    </li>
                    <li>
                      Pick Specific Replacement: You can pick a specific
                      alternative for the shopper to purchase if your first
                      choice is out-of-stock.
                    </li>
                    <li>
                      Don’t Replace: For items you’d rather not replace, choose
                      “Don’t replace” to get a refund if the item is out of
                      stock.
                    </li>
                  </ul>

                  <p>
                    You can update or cancel your order as long as your shopper
                    hasn’t started shopping. If you need to make changes after
                    shopping has started, you can use the app or website to
                    approve replacements or chat with your shopper.
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-[#E8E9EB] border-b py-6">
                <h3
                  className="cursor-pointer"
                  onClick={() => setShowCommonQuestion5(!showCommonQuesion5)}
                >
                  <div className="flex justify-between w-full text-[#424242] text-left text-[24px] leading-9 gap-[300px] md:text-[28px] md:leading-8">
                    <div>What happens if there's an issue with my order?</div>
                    <div>{showCommonQuesion5 ? "-" : "+"}</div>
                  </div>
                </h3>
                <div
                  className={`flex flex-col gap-5 overflow-hidden pt-[10px] pr-[15%] md:pr-[20%] ${!showCommonQuesion5 && "hidden"}`}
                >
                  <p>
                    If something isn’t right, you’ve got options. In the
                    Instacart app or website, you can report:
                  </p>
                  <ul className="pl-10 list-disc">
                    <li>Missing items</li>
                    <li>Incorrect items</li>
                    <li>Damaged items</li>
                    <li>Poor replacements</li>
                    <li>Early/late orders</li>
                  </ul>
                  <p>
                    If an order never came, or you get someone else’s order, you
                    can reach out to Instacart Customer Experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-[#E8E9EB] border-b py-6">
                <h3
                  className="cursor-pointer"
                  onClick={() => setShowCommonQuestion6(!showCommonQuesion6)}
                >
                  <div className="flex justify-between w-full text-[#424242] text-left text-[24px] leading-9 gap-[300px] md:text-[28px] md:leading-8">
                    <div>Can I get contactless delivery with Instacart?</div>
                    <div>{showCommonQuesion6 ? "-" : "+"}</div>
                  </div>
                </h3>
                <div
                  className={`flex flex-col gap-5 overflow-hidden pt-[10px] pr-[15%] md:pr-[20%] ${!showCommonQuesion6 && "hidden"}`}
                >
                  <p>
                    The health and safety of our community is our number one
                    priority. We are excited to offer contactless delivery
                    through our Leave at My Door delivery feature.
                  </p>

                  <p>
                    Leave at My Door delivery gives you the flexibility to have
                    your groceries delivered without having to come to the door
                    or be at home. You can leave delivery instructions for your
                    shopper at checkout, and we’ll notify you when your order
                    arrives.
                  </p>
                  <p>
                    Leave at My Door is now the default setting for all
                    Instacart deliveries. If you’d prefer to not use this
                    feature, simply uncheck the box that says “Leave at my door
                    if I’m not around” at checkout.
                  </p>
                  <p>
                    Customers who order alcohol, prescriptions, or certain
                    high-value items may need to show ID upon delivery. We ask
                    shoppers to wear masks whenever they come into contact with
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type storesList = {
  id: number;
  image_urlset: string;
  title: string;
  delivery_time: string;
  href: string;
  discount_amount: number;
  in_store_prices: boolean;
  features: string[];
  new: boolean;
};

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default LandingPage;
