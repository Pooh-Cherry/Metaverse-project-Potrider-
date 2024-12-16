import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import {
  LogoIcon,
  FullLogoIcon,
  MenuIcon,
  SearchIcon,
} from "../../../assets/icons";

const Header = () => {
  const [showSearchDropdown, setShowSearchDropdown] = useState<boolean>(false);
  const searchWrapperRef = useRef(null);
  const [popularSearchTagList, setPopularSearchTagList] = useState<
    PopularSearchTag[]
  >([]);

  // Effect to handle clicks outside the search bar to close the dropdown
  useEffect(() => {
    const handleClickOutside = () => {
      // Check if searchWrapperRef has a current value and contains the target
      if (searchWrapperRef.current) {
        setShowSearchDropdown(false);
      }
    };

    // Bind the event listener if the dropdown is open
    if (showSearchDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup by removing the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchDropdown]);

  useEffect(() => {
    const fetchdPopularSearchTagList: PopularSearchTag[] = [
      {
        id: 1,
        image_url:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/thumb_eebaf33e-7bff-42ff-969e-471f1cc98958.jpg",
        title: "ordinary",
        href: "/tail",
      },
      {
        id: 2,
        image_url:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/thumb_eebaf33e-7bff-42ff-969e-471f1cc98958.jpg",
        title: "ordinary",
        href: "/tail",
      },
      {
        id: 3,
        image_url:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/thumb_eebaf33e-7bff-42ff-969e-471f1cc98958.jpg",
        title: "ordinary",
        href: "/tail",
      },
      {
        id: 4,
        image_url:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/thumb_eebaf33e-7bff-42ff-969e-471f1cc98958.jpg",
        title: "ordinary",
        href: "/tail",
      },
      {
        id: 5,
        image_url:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/thumb_eebaf33e-7bff-42ff-969e-471f1cc98958.jpg",
        title: "ordinary",
        href: "/tail",
      },
      {
        id: 6,
        image_url:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/thumb_eebaf33e-7bff-42ff-969e-471f1cc98958.jpg",
        title: "ordinary",
        href: "/tail",
      },
      {
        id: 7,
        image_url:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/thumb_eebaf33e-7bff-42ff-969e-471f1cc98958.jpg",
        title: "ordinary",
        href: "/tail",
      },
      {
        id: 8,
        image_url:
          "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/thumb_eebaf33e-7bff-42ff-969e-471f1cc98958.jpg",
        title: "ordinary",
        href: "/tail",
      },
    ];
    setPopularSearchTagList(fetchdPopularSearchTagList);
  }, []);

  return (
    <div className="w-full flex items-center sticky top-0 z-20 bg-[#F7F5F0] px-10 py-3">
      <div className="flex items-center cursor-pointer flex-1">
        <div className="flex items-center">
          <MenuIcon />
        </div>
        <div className="hidden md:flex md:items-center md:pr-6">
          <a className="" href="/">
            <FullLogoIcon width={150} height={24} />
          </a>
        </div>
        <div className="flex items-center pr-6 md:hidden">
          <a className="" href="/">
            <LogoIcon width={34} height={24} />
          </a>
        </div>
        <div className="flex-1 px-8 relative" ref={searchWrapperRef}>
          <div className="relative h-14">
            <div className="hidden md:flex md:absolute md:top-[53%] md:left-[12px] md:transform md:-translate-y-1/2">
              <SearchIcon />
            </div>
            <div className="flex h-full z-100">
              {showSearchDropdown && (
                <div
                  className="fixed top-[80px] inset-x-0 bg-[#3435383D]"
                  style={{ inset: "80px 0 0" }}
                  onClick={() => setShowSearchDropdown(false)}
                ></div>
              )}
              <input
                ref={searchWrapperRef}
                className={clsx(
                  "hidden md:flex md:items-center",
                  "md:border md:rounded-lg",
                  "w-full pl-10",
                  "md:bg-[#F6F7F8] md:focus:border-2 md:focus:border-[#343538]",
                  "md:shadow-[0_8px_8px_#0000000D]",
                )}
                placeholder="Search products and stories"
                onClick={() => setShowSearchDropdown(!showSearchDropdown)}
              />
            </div>
            <div className="relative">
              {showSearchDropdown && (
                <div className="w-full mqx-h-[60vh] rounded-lg mt-2 bg-white z-20">
                  <div className="flex flex-col p-4">
                    <div className="text-lg font-semibold">
                      Popular searches
                    </div>
                    <div className="grid grid-cols-2 gap-3 w-full flex-wrap overflow-hidden">
                      {popularSearchTagList.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="relative flex w-full items-center bg-[#F6F7F8] rounded-lg hover:bg-[#E8E9EB] p-2 m-0"
                        >
                          <div className="bg-white mr-3">
                            <div className="relative w-12 h-12">
                              <img
                                src={item.image_url}
                                className="max-w-full max-h-full rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="flex text-[#343538] min-w-0">
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs md:text-sm">
                              {item.title}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className={clsx(
            "text-[#343538] bg-transparent py-2 px-4",
            "text-center text-xs font-semibold",
            "cursor-pointer rounded-[20px]",
            "md:text-sm",
          )}
        >
          <span className="whitespace-nowrap overflow-hidden text-ellipsis block">
            Log in
          </span>
        </button>
        <button
          className={clsx(
            "text-white bg-[#108910] py-2 px-4",
            "text-center text-xs font-semibold",
            "cursor-pointer rounded-[20px] border-none",
            "md:text-sm",
          )}
        >
          <span className="whitespace-nowrap overflow-hidden text-ellipsis block">
            Sign up
          </span>
        </button>
      </div>
    </div>
  );
};

type PopularSearchTag = {
  id: number;
  image_url: string;
  title: string;
  href: string;
};

export default Header;
