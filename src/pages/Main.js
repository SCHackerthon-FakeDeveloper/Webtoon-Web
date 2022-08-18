import React from "react";

import CartView from "../components/CartView";
import CardView from "../components/CardView";

import "../styles/Main.css";

import toonJson from "../test/toon.json";
import stationJson from "../test/station.json";
import cartJson from "../test/cart.json";

function Main(props) {
  return (
    <section className="Main">
      <div className="md:container md:mx-auto">
        <h1 className="text-4xl p-5">매일 새로운 웹툰을 발견해 보세요.</h1>
        <hr />
        <CartView data={cartJson}>인기 차트</CartView>
        <CardView data={toonJson}>이달의 신작</CardView>
        <CardView data={toonJson}>나만을 위한 추천</CardView>
        <CardView data={stationJson}>스테이션</CardView>
      </div>
    </section>
  );
}

export default Main;
