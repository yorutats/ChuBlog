import React from "react";
import { Outlet } from "react-router-dom";
import "../../Sheets/page3.css";
import PaginationBut from "../../Componets/PaginationBut";

export default function Page3() {
  return (
    <div className="portfolio">
      <div className="article">
        <div className="page3-wrapper">
          <div className="wrapperText">
            <h1>
              <mark>Lorem Ipsum</mark>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button>Check me out </button>
            </div>
          </div>
        </div>
        <div className="articleText">
          <h4 className="introduction">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." "There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain..."
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2>Where does it come from?</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.{" "}
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
          <h2>Why do we use it?</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
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
