import React from "react";
import "../Sheets/page1.css";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import PaginationBut from "../Componets/PaginationBut";

export default function Page1() {
  return (
    <div className="blog">
      <div className="article">
        <div className="page1-wrapper">
          <div className="wrapperText">
            <h1>
              <mark>Tattooed</mark>
            </h1>
            <p id="author">
              <mark>by Lina Regental</mark>
            </p>
            <div id="accountDetail" className="accountInfo">
              <div className="header">
                <h2>
                  <mark>Lina Regental</mark>
                </h2>
                <p>
                  <mark>Producer & Author</mark>
                </p>
              </div>
              <div className="profilePicture"></div>
              <p className="profileText">
                Chef, Community Volunteer, Conveyor of Messages, Electro
                Producer, Scapegoat. Is that a double rainbow? D:.
              </p>
              <button>Check me out </button>
            </div>
          </div>
        </div>
        <div className="articleText">
          <h4 className="introduction">
            Three wolf moon post-ironic bespoke lomo tattooed kinfolk. Retro
            typewriter gluten-free hashtag cold-pressed. Beard cliche echo park
            banh mi. Tattooed helvetica celiac, leggings waistcoat vegan retro
            selfies art party distillery mustache echo park.
          </h4>
          <p>
            Beard cliche echo park banh mi. Salvia tousled sustainable fap,
            poutine direct trade scenester. Vinyl gastropub put a bird on it,
            skateboard YOLO ethical flannel flexitarian kale chips. 3 wolf moon
            post-ironic bespoke lomo tattooed kinfolk. Retro typewriter
            gluten-free hashtag cold-pressed. Meh paleo aesthetic, chia mlkshk
            etsy pickled ethical. Tattooed helvetica celiac, leggings waistcoat
            vegan retro selfies art party distillery mustache echo park.
          </p>
          <h2>Kale chips</h2>
          <p>
            Occupy gluten-free umami wayfarers, post-ironic normcore semiotics
            listicle deep v health goth cold-pressed. Raw denim williamsburg
            synth normcore actually. Health goth post-ironic whatever, flannel
            mlkshk tacos thundercats seitan put a bird on it try-hard migas
            small batch. Occupy small batch intelligentsia, food truck gochujang
            viral iPhone letterpress chicharrones etsy flannel. Banjo +1
            slow-carb venmo hashtag health goth. Tumblr DIY occupy try-hard.
            Quinoa scenester disrupt brooklyn mixtape, banh mi hoodie beard
            messenger bag locavore kale chips.
          </p>
          <p>
            Pop-up echo park semiotics williamsburg, next level literally retro
            neutra. Microdosing twee lo-fi squid actually art party,
            intelligentsia sartorial try-hard tote bag irony. Cliche mlkshk
            freegan, truffaut master cleanse bushwick offal distillery
            chicharrones man bun occupy thundercats vice pork belly yr. Small
            batch mixtape helvetica +1. Godard ethical tote bag 8-bit fixie, raw
            denim pitchfork. Fap venmo four loko lo-fi chicharrones, small batch
            umami retro intelligentsia irony pug man braid flannel migas.
            Gentrify taxidermy bicycle rights sustainable, chia tattooed
            meggings chicharrones literally actually gochujang fanny pack.
          </p>
          <h2>Helvetica cray</h2>
          <p>
            Locavore YOLO asymmetrical polaroid, aesthetic bitters mumblecore
            gochujang master cleanse cray helvetica kogi. Put a bird on it
            helvetica food truck pop-up etsy, echo park forage organic readymade
            trust fund. Post-ironic try-hard echo park, selfies wolf selvage
            synth squid single-origin coffee raw denim tacos twee hella. Art
            party meggings pug shoreditch waistcoat. Post-ironic hammock quinoa,
            pickled pop-up cardigan cred put a bird on it banh mi green juice
            cliche paleo. 90's cray fingerstache, irony chia slow-carb butcher
            deep v direct trade YOLO. Helvetica cray vegan freegan four loko put
            a bird on it, gentrify etsy locavore wayfarers pickled aesthetic
            tousled.
          </p>
        </div>
        <div className="parent-container"> 
        <PaginationBut /> 
          </div>
      </div>
      <footer className="group footer">
        <div className="pull">
          <small></small>
        </div>
        <div className="push">
          <small></small>
        </div>
      </footer>
    </div>
  );
}
