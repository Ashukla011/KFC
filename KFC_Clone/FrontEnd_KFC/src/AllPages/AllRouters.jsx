import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Deals } from "./Deals";
import { RestaurentMune } from "./RestaurentMune";
import { NotFound } from "./NotFound";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { OrderSuccess } from "./OrderSuccess";
import { Cart } from "./Cart";
import { Adress } from "./Adress";
import { Payment } from "./Payment";
import { ForgetPassword } from "./ForgetPassword";
import { ResetPassword } from "./ResetPassword";

export const AllRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/RestaurentMune" element={<RestaurentMune />} />
      <Route path="/Deals" element={<Deals />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Adress" element={<Adress />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
