import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Deals } from "./Deals";
import { RestaurentMune } from "./RestaurentMune";
import { NotFound } from "./NotFound";
import { Payment } from "./Payment";
import { PhoneLogin } from "./PhoneLogin";
import { Cart } from "./Cart";
import { OrderSummery } from "./OrderSummery";
import { Adress } from "./Adress";
import { Otp } from "./Otp";

export const AllRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/RestaurentMune" element={<RestaurentMune />} />
      <Route path="/Deals" element={<Deals />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/PhoneLogin" element={<PhoneLogin />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/OrderSummery" element={<OrderSummery />} />
      <Route path="/Adress" element={<Adress />} />
      <Route path="/Otp" element={<Otp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
