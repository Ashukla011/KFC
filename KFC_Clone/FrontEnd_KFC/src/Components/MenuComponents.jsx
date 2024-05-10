import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/MenuComponents.css";
import { PeriPeri } from "./PeriPeri";
import { MasterComponents } from "../Copments2/MasterComponents";
import { ChickenRolls } from "./ChickenRolls";
import { ChieckenBucket } from "./ChieckenBucket";
import { BiryaniBuckets } from "./BiryaniBuckets";
import { BoxMeals } from "./BoxMeals";
import { Burgers } from "./Burgers";
import { Snacks } from "./Snacks";
import { Beverages } from "./Beverages";
import ScrollSpy from "react-scrollspy-navigation";
export const MenuComponents = () => {
  return (
    <>
      <div className="orderHeading">
        <h1>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h1>
      </div>
      <div className="Menubox">
        <ScrollSpy activeClass="navActive" behavior="smooth">
          <nav className="AllLinks">
            <img
              className="img"
              src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
              alt=""
            />

            <h1 className="kfcmenu">KFC MENU</h1>
         
            <ul style={{listStyle:"none"}}>
                <li>
                <Link
              to="PERI_PERI_MATCH_SPECIALS"
              smooth={true}
              duration={500}
              className="periperi"
            >
              <a href="#PERI_PERI_MATCH_SPECIALS">PERI PERI MATCH SPECIALS</a>
            </Link>
                </li>
                <li>
                <Link
              to="CHICKEN_ROLLS"
              smooth={true}
              duration={500}
              className="chickenrolls"
            >
              <a href="#CHICKEN_ROLLS">CHICKEN ROLLS</a>
            </Link>
                </li>
                <li>
                <Link
              to="CHICKEN_BUCKETS"
              smooth={true}
              duration={500}
              className="chickenbuckets"
            >
              <a href="#CHICKEN_BUCKETS">CHICKEN BUCKETS</a>
            </Link>
                </li>
                <li>
                <Link
              to="BIRYANI_BUCKETS"
              smooth={true}
              duration={500}
              className="biryanibuckets"
            >
              <a href="#BIRYANI_BUCKETS">BIRYANI BUCKETS</a>
            </Link>
                </li>
                <li>
                <Link
              to="BOX_MEALS"
              smooth={true}
              duration={500}
              className="boxmeals"
            >
              <a href="#BOX_MEALS">BOX MEALS</a>
            </Link>
                </li>
                <li>
                <Link to="BURGERS" smooth={true} duration={500} className="burgers">
              <a href="#BURGERS">BURGERS</a>
            </Link>
                </li>
                <li>
                <Link to="SNACKS" smooth={true} duration={500} className="snacks">
              <a href="#SNACKS">SNACKS</a>
            </Link>
                </li>
                <li>
                <Link
              to="BEVERAGES"
              smooth={true}
              duration={500}
              className="beverages"
            >
              <a href="#BEVERAGES">BEVERAGES</a>
            </Link>
                </li>
            </ul>           
           
         
           
          </nav>
        </ScrollSpy>

        <div className="Meals">
          <section>
          
            <PeriPeri />
          </section>
          <br />
          <br />
          <br />
          <section>
           
            <ChickenRolls />
          </section>

          <br />
          <br />
          <br />
          <section >
            <ChieckenBucket />
          </section>
          <br />
          <br />
          <br />
          <section >
            <BiryaniBuckets />
          </section>
          <br />
          <br />
          <br />
          <section >
            <BoxMeals />
          </section>
          <br />
          <br />
          <br />
          <section >
            <Burgers />
          </section>
          <br />
          <br />
          <br />
          <section >
            <Snacks />
          </section>
          <br />
          <br />
          <br />
          <section >
            <Beverages />{" "}
          </section>
        </div>
      </div>
    </>
  );
};
