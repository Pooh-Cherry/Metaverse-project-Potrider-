import { useState } from "react";
import clsx from "clsx";
import {
  DropdownArrowIcon,
  LogoIcon,
  MetaIcon,
  XIcon,
  InstagramIcon,
  PinterestIcon,
} from "../../../assets/icons";

const Footer = () => {
  const [showTopDepartments, setShowTopDepartments] = useState<boolean>(false);
  const [showMoreDepartments, setShowMoreDepartments] =
    useState<boolean>(false);
  const [showInstacartPrograms, setShowInstacartPrograms] =
    useState<boolean>(false);
  const [showGetToKnowUs, setShowGetToKnowUs] = useState<boolean>(false);
  const [showMakeMoneyWithUs, setShowMakeMoneyWithUs] =
    useState<boolean>(false);
  const [showTopCities, setShowTopCities] = useState<boolean>(false);
  const [showMoreCities, setShowMoreCities] = useState<boolean>(false);
  const [showShopperHelp, setShowShopperHelp] = useState<boolean>(false);
  const [enableHighContrastColor, setEnableHighContrastColor] =
    useState<boolean>(false);

  return (
    <div className="bg-white">
      <div className="flex flex-col text-[#343538] py-0 px-[5%] max-w-[1224px] m-auto text-left">
        <div className="w-full flex flex-col justify-between border-[#E8E9EB] border-t md:flex-row">
          <div className="flex flex-col max-w-[320px] w-full">
            <div className="flex items-center justify-center p-3 md:flex md:justify-normal">
              <LogoIcon width={33} height={33} />
              <h2 className="py-2 px-3 text-[14px] leading-5 font-bold md:text-[18px] md:leading-6">
                Get deliveries with Instacart
              </h2>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-2">
                <img src="https://www.instacart.com/assets/footer/iOS-9e2130394aab134afa35db75591ebc77b932b77950bae0c2f5407dc0ca0553bd.svg" />
                <a
                  href="/"
                  className="text-[#343538] px-3 text-[12px] leading-4 font-semibold md:text-[14px] md:leading-5"
                >
                  iOS
                </a>
              </div>
              <div className="flex gap-2">
                <img src="https://www.instacart.com/assets/footer/iOS-9e2130394aab134afa35db75591ebc77b932b77950bae0c2f5407dc0ca0553bd.svg" />
                <a
                  href="/"
                  className="text-[#343538] px-3 text-[12px] leading-4 font-bold md:text-[14px] md:leading-5"
                >
                  Android
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:max-x-[715px] min-w-0">
            <div className="flex w-full flex-col gap-4 lg:grid-cols-4 lg:grid">
              <div className="pb-5 border-b border-[#E8E9EB] lg:border-none">
                <h2
                  className={clsx(
                    "flex justify-between",
                    "py-5",
                    "cursor-pointer lg:cursor-auto",
                    "text-[14px] font-bold leading-5 md:text-[18px] md:leading-6",
                  )}
                  onClick={() => setShowTopDepartments(!showTopDepartments)}
                >
                  <div>Top departments</div>
                  <div className="flex lg:hidden">
                    <DropdownArrowIcon rotate={!showTopDepartments ? 0 : 180} />
                  </div>
                </h2>
                <div
                  className={`${showTopDepartments ? "flex" : "hidden"} lg:flex`}
                >
                  <ul className="list-none">
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/317-fresh-produce"
                      >
                        Fresh Produce
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1326-dairy"
                      >
                        Dairy Products
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1807-meat"
                      >
                        Meat
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/831-meat-alternatives"
                      >
                        Meat Alternatives
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1974-seafood"
                      >
                        Seafood
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/844-pantry"
                      >
                        Pantry Food
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1300-baked-goods"
                      >
                        Baked Goods
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories"
                      >
                        View all departments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pb-5 border-b border-[#E8E9EB] lg:border-none">
                <h2
                  className={clsx(
                    "flex justify-between",
                    "py-5",
                    "cursor-pointer lg:cursor-auto",
                    "text-[14px] font-bold leading-5 md:text-[18px] md:leading-6",
                  )}
                  onClick={() => setShowMoreDepartments(!showMoreDepartments)}
                >
                  <div>More departments</div>
                  <div className="flex lg:hidden">
                    <DropdownArrowIcon rotate={!showTopDepartments ? 0 : 180} />
                  </div>
                </h2>
                <div
                  className={`${showMoreDepartments ? "flex" : "hidden"} lg:flex`}
                >
                  <ul className="list-none">
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/317-fresh-produce"
                      >
                        Alcohol
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1326-dairy"
                      >
                        Frozen Food
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1807-meat"
                      >
                        Beverages
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/831-meat-alternatives"
                      >
                        Organic Grocery
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1974-seafood"
                      >
                        Household Essentials
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/844-pantry"
                      >
                        Office Supplies
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1300-baked-goods"
                      >
                        Beauty Products
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pb-5 border-b border-[#E8E9EB] lg:border-none">
                <h2
                  className={clsx(
                    "flex justify-between",
                    "py-5",
                    "cursor-pointer lg:cursor-auto",
                    "text-[14px] font-bold leading-5 md:text-[18px] md:leading-6",
                  )}
                  onClick={() =>
                    setShowInstacartPrograms(!showInstacartPrograms)
                  }
                >
                  <div>Instacart programs</div>
                  <div className="flex lg:hidden">
                    <DropdownArrowIcon
                      rotate={!showInstacartPrograms ? 0 : 180}
                    />
                  </div>
                </h2>
                <div
                  className={`${showInstacartPrograms ? "flex" : "hidden"} lg:flex`}
                >
                  <ul className="list-none">
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/317-fresh-produce"
                      >
                        Instarcart+
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1326-dairy"
                      >
                        Instarcart Business
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1807-meat"
                      >
                        Fresh Funds
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/831-meat-alternatives"
                      >
                        Promos & Coupons
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1974-seafood"
                      >
                        Gift Cards
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/844-pantry"
                      >
                        Grocery Budget Calculator
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1300-baked-goods"
                      >
                        Instacart Ads
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories"
                      >
                        Instacart Connect
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pb-5 border-b border-[#E8E9EB] lg:border-none">
                <h2
                  className={clsx(
                    "flex justify-between",
                    "py-5",
                    "cursor-pointer lg:cursor-auto",
                    "text-[14px] font-bold leading-5 md:text-[18px] md:leading-6",
                  )}
                  onClick={() => setShowGetToKnowUs(!showGetToKnowUs)}
                >
                  <div>Get to know us</div>
                  <div className="flex lg:hidden">
                    <DropdownArrowIcon rotate={!showGetToKnowUs ? 0 : 180} />
                  </div>
                </h2>
                <div
                  className={`${showGetToKnowUs ? "flex" : "hidden"} lg:flex`}
                >
                  <ul className="list-none">
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/317-fresh-produce"
                      >
                        Press
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1326-dairy"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1807-meat"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/831-meat-alternatives"
                      >
                        Ideas & Guides
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1974-seafood"
                      >
                        Help
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/844-pantry"
                      >
                        Shop By Location
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between border-[#E8E9EB] border-t md:flex-row">
          <div className="flex flex-col max-w-[320px] w-full">
            <div className="flex items-center justify-center p-3 md:flex md:justify-normal">
              <LogoIcon width={33} height={33} />
              <h2 className="py-2 px-3 text-[14px] leading-5 font-bold md:text-[18px] md:leading-6">
                Become a shopper
              </h2>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-2">
                <img src="https://www.instacart.com/assets/footer/iOS-9e2130394aab134afa35db75591ebc77b932b77950bae0c2f5407dc0ca0553bd.svg" />
                <a
                  href="/"
                  className="text-[#343538] px-3 text-[12px] leading-4 font-semibold md:text-[14px] md:leading-5"
                >
                  iOS
                </a>
              </div>
              <div className="flex gap-2">
                <img src="https://www.instacart.com/assets/footer/iOS-9e2130394aab134afa35db75591ebc77b932b77950bae0c2f5407dc0ca0553bd.svg" />
                <a
                  href="/"
                  className="text-[#343538] px-3 text-[12px] leading-4 font-bold md:text-[14px] md:leading-5"
                >
                  Android
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:max-w-[715px]">
            <div className="flex w-full flex-col gap-6 lg:grid-cols-4 lg:grid">
              <div className="pb-5 border-b border-[#E8E9EB] lg:border-none">
                <h2
                  className={clsx(
                    "flex justify-between",
                    "py-5",
                    "cursor-pointer lg:cursor-auto",
                    "text-[14px] font-bold leading-5 md:text-[18px] md:leading-6",
                  )}
                  onClick={() => setShowMakeMoneyWithUs(!showMakeMoneyWithUs)}
                >
                  <div>Make money with us</div>
                  <div className="flex lg:hidden">
                    <DropdownArrowIcon
                      rotate={!showMakeMoneyWithUs ? 0 : 180}
                    />
                  </div>
                </h2>
                <div
                  className={`${showMakeMoneyWithUs ? "flex" : "hidden"} lg:flex`}
                >
                  <ul className="list-none">
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/317-fresh-produce"
                      >
                        Shopper Opportunieies
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1326-dairy"
                      >
                        Become a Shopper
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1807-meat"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pb-5 border-b border-[#E8E9EB] lg:border-none">
                <h2
                  className={clsx(
                    "flex justify-between",
                    "py-5",
                    "cursor-pointer lg:cursor-auto",
                    "text-[14px] font-bold leading-5 md:text-[18px] md:leading-6",
                  )}
                  onClick={() => setShowTopCities(!showTopCities)}
                >
                  <div>Top cities</div>
                  <div className="flex lg:hidden">
                    <DropdownArrowIcon rotate={!showTopCities ? 0 : 180} />
                  </div>
                </h2>
                <div className={`${showTopCities ? "flex" : "hidden"} lg:flex`}>
                  <ul className="list-none">
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/317-fresh-produce"
                      >
                        Montreal
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1326-dairy"
                      >
                        Toronto
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1807-meat"
                      >
                        Vancouver
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/831-meat-alternatives"
                      >
                        Calgary
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1974-seafood"
                      >
                        Edmonton
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/844-pantry"
                      >
                        Ottawa
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pb-5 border-b border-[#E8E9EB] lg:border-none">
                <h2
                  className={clsx(
                    "flex justify-between",
                    "py-5",
                    "cursor-pointer lg:cursor-auto",
                    "text-[14px] font-bold leading-5 md:text-[18px] md:leading-6",
                  )}
                  onClick={() => setShowMoreCities(!showMoreCities)}
                >
                  <div>More cities</div>
                  <div className="flex lg:hidden">
                    <DropdownArrowIcon rotate={!showMoreCities ? 0 : 180} />
                  </div>
                </h2>
                <div
                  className={`${showMoreCities ? "flex" : "hidden"} lg:flex`}
                >
                  <ul className="list-none">
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/317-fresh-produce"
                      >
                        Winnipeg
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1326-dairy"
                      >
                        Brampton
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1807-meat"
                      >
                        London
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/831-meat-alternatives"
                      >
                        Promos & Coupons
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1974-seafood"
                      >
                        Mississauga
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/844-pantry"
                      >
                        Sakatoon
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1300-baked-goods"
                      >
                        Instacart Ads
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories"
                      >
                        View all Job Locations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pb-5 border-b border-[#E8E9EB] lg:border-none">
                <h2
                  className={clsx(
                    "flex justify-between",
                    "py-5",
                    "cursor-pointer lg:cursor-auto",
                    "text-[14px] font-bold leading-5 md:text-[18px] md:leading-6",
                  )}
                  onClick={() => setShowShopperHelp(!showShopperHelp)}
                >
                  <div>Shopper help</div>
                  <div className="flex lg:hidden">
                    <DropdownArrowIcon rotate={!showShopperHelp ? 0 : 180} />
                  </div>
                </h2>
                <div
                  className={`${showShopperHelp ? "flex" : "hidden"} lg:flex`}
                >
                  <ul className="list-none">
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/317-fresh-produce"
                      >
                        Help
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1326-dairy"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#343538] hover:text-black hover:underline text-[14px] leading-5 font-normal md:text-[12px] md:leading-4"
                        href="https://www.instacart.ca/categories/316-food/1807-meat"
                      >
                        Safety
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between py-8 border-[#E8E9EB] border-t md:flex-row">
          <div className="flex items-center">
            <h2 className="py-2 px-2 text-[12px] leading-4 font-bold md:text-[14px] md:leading-5">
              Accessibility
            </h2>
          </div>
          <div className="flex flex-fit items-center justify-between gap-4 text-left md:justify-normal">
            <span className="text-[#343538] px-2 text-[12px] font-normal leading-5 md:text-[14px] md:leading-6">
              Enable high contrast colors
            </span>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={enableHighContrastColor}
                  onChange={() =>
                    setEnableHighContrastColor(!enableHighContrastColor)
                  }
                />
                <div
                  className={`relative w-16 h-8 ${enableHighContrastColor ? "bg-0066FF" : "bg-[#67676C]"} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-[#67676C] peer-checked:bg-blue-600`}
                >
                  <span
                    className={`absolute ${enableHighContrastColor ? "invisible" : "visible"} right-[7px] top-1/2 transform -translate-y-1/2 text-sm font-medium text-white`}
                  >
                    OFF
                  </span>
                  <span
                    className={`absolute ${enableHighContrastColor ? "visible" : "invisible"} left-[5px] start-0.5 top-1/2 transform -translate-y-1/2 text-sm font-medium text-white`}
                  >
                    ON
                  </span>
                  <div
                    className={`absolute top-[2px] start-[2px] bg-white border-gray-300 border rounded-full h-7 w-7 transition-all dark:border-gray-600 ${enableHighContrastColor ? "translate-x-full" : ""}`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between py-8 border-[#E8E9EB] border-t">
          <div className="flex flex-col md:flex-row md:justify-between pb-4 gap-4">
            <div>
              <h2 className="text-[#343538] text-[14px] leading-5 font-semibold md:text-[18px] md:leading-6">
                Legal
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:w-3/5">
              <div className="flex gap-3">
                <span className="text-[#343538] text-[12px] leading-4 font-semibold md:text-[14px] md:leading-5">
                  Terms of Use
                </span>
                <span className="text-[#343538] text-[12px] leading-4 font-semibold md:text-[14px] md:leading-5">
                  Privacy Policy
                </span>
              </div>
              <div className="flex gap-4">
                <div>
                  <a href="https://facebook.com/Instacart" aria-label="meta">
                    <MetaIcon />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/instacart" aria-label="x">
                    <XIcon />
                  </a>
                </div>
                <div>
                  <a
                    href="https://instagram.com/instacart"
                    aria-label="instagram"
                  >
                    <InstagramIcon />
                  </a>
                </div>
                <div>
                  <a
                    href="https://pinterest.com/instacart"
                    aria-label="pinterest"
                  >
                    <PinterestIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="text-[#72767E] font-normal text-[12px] leading-5 md:text-[14px] md:leading-6">
              Apple and the Apple logo are trademarks of Apple Inc., registered
              in the U.S. and other countries. App Store is a service mark of
              Apple Inc. Android, Google Play and the Google Play logo are
              trademarks of Google LLC. Terms for Free Delivery (First Order):
              Offer valid on first order made through Instacart with a minimum
              basket size as set forth in the offer promotion. Offer expires on
              the date indicated in the user’s account settings or displayed in
              the offer promotion.
              <a
                className="text-[#108910] font-normal text-[12px] leading-5 hover:underline hover:text-[#108910] md:text-[14px] md:leading-6"
                href="/help/section/360007996832/360040705992"
              >
                View more details here.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
