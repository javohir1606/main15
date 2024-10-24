import React from "react";
import { BannerCard } from "../components/BannerCard/banner-Card";
import { AboutBrands, CardData, ProductData } from "../Data/data";
import { ProducCard } from "../components/ProducCard/produc-Card";
import { NewCard } from "../components/newCard/new-Card";
import { MenuCard } from "../components/menuCard/menu-Card";
import { About } from "../components/About/about";
export const Home = () => {
  return (
    <>
      <BannerCard />
      
      <div className="container">
        <div>
          <h2>Kategoriyalar</h2>
          <div className="flex justify-center">
            {ProductData.map((item) => (
              <ProducCard key={item.id} img={item.img} title={item.title} />
            ))}
          </div>
        </div>

        <div>
          <h2>Eng ko’p sotilgan</h2>
          <div className="grid grid-cols-5 p-2">
            {CardData.map((item) => (
              <NewCard
                key={item.id}
                img={item.img}
                prec={item.prec}
                title={item.title}
                ordered={item.ordered}
              />
            ))}
          </div>
        </div>

        <div>
          <MenuCard/>
        </div>

        <div>
          <h2>Eng ko’p sotilgan</h2>
          <div className="grid grid-cols-5 p-2">
            {CardData.map((item) => (
              <NewCard
                key={item.id}
                img={item.img}
                prec={item.prec}
                title={item.title}
                ordered={item.ordered}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-5">
          {AboutBrands.map((item)=> (
            <About key={item.id} img={item.img}/>
          ))}
        </div>

        <MenuCard/>

        <div className="grid grid-cols-6 gap-5">
          {AboutBrands.slice(0, 12).map((item)=> (
            <About key={item.id} img={item.img}/>
          ))}
        </div>
      </div>
    </>
  );
};
