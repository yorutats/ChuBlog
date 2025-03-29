import React from "react";
import { Outlet } from "react-router-dom";
import "../../../Sheets/page2.css";
import PaginationBut from "../../../Componets/PaginationBut";

export default function Page2() {
  return (
    <div className="portfolio">
      <div className="article">
        <div className="page2-wrapper">
          <div className="wrapperText">
            <h1>
              <mark>INTRODUCTION TO ART</mark>
            </h1>
            <p id="author">
              <mark>
                Introduction To Art by Muffet Jones is licensed under a Creative
              </mark>
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
                These images and objects have accompanied human beings
                throughout time. The forms, mediums, and techniques with which
                we have pictured our world has changed along with human beings,
                but their impulse to picture that world has not.
              </p>
              <button>Check me out </button>
            </div>
          </div>
        </div>
        <div className="articleText">
          <h4 className="introduction">
            These images and objects have accompanied human beings throughout
            time. The forms, mediums, and techniques with which we have pictured
            our world has changed along with human beings, but their impulse to
            picture that world has not.
          </h4>
          <p>
            Human beings seem to be hard-wired to create. From sites of the
            earliest human – and even proto-human – occupation come objects that
            seem to be attempts to illustrate the world.
          </p>
          <h2>Introduction to Art</h2>
          <p>
            So how do we define “fine” art, then? Art is a highly diverse range
            of human activities which create visual, auditory, or performed
            artifacts— artworks—that express the author’s imaginative or
            technical skill, and are intended to be appreciated for their beauty
            or emotional power.
          </p>
          <p>
            The oldest documented forms of art are visual arts, although
            archeologists suggest early humans also made music. Over time
            techniques – media – has included painting, sculpture, printmaking
            and, beginning in the 19th century, photography. Architecture is
            often included as one of the visual arts; however, like the
            decorative arts, it involves the creation of objects in which the
            practical considerations of use are essential in a way that they
            usually are not in another visual art like a painting. Art may be
            characterized in terms of mimesis (its “realistic” representation of
            reality), expression, communication of emotion, or other qualities.
            Though the definition of what constitutes art is disputed and has
            changed over time, general descriptions center on the idea of
            imaginative or technical skill stemming from human agency and
            creation. When it comes to visually identifying a work of art, there
            is no single set of values or aesthetic traits. A Baroque painting
            will not necessarily share much with a contemporary performance
            piece, but they are both considered art.
          </p>
          <h2>What is Art?</h2>
          <p>
            Despite the seemingly indefinable nature of art, there have always
            existed certain formal guidelines for its aesthetic judgment and
            analysis. Formalism is a concept in art theory in which an artwork’s
            artistic value is determined solely by its form, or how it is made.
            Formalism evaluates works on a purely visual level, considering
            medium and compositional elements as opposed to any reference to
            realism, context, or content. In this class you will learn to “read”
            an artwork according to its formal qualities – a “formal analysis”.
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
      <Outlet />
    </div>
  );
}
