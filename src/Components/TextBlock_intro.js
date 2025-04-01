import "./TextBlock.css";

const TextBlock = () => {
  return (
    <div class="blockquote_intro-container">
      <h1 className="blockquote-h1">Motto </h1>

      <blockquote>
        <p>&ldquo;While there's life, there's hope.&hellip;&rdquo;</p>
        <footer>Marcus Tullius Cicero</footer>
      </blockquote>
    </div>
  );
};
export default TextBlock;
