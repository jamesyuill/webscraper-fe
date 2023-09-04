import ImageCard from './ImageCard';

export default function ImageList({ responseImages }) {
  return (
    <article className="image-article">
      <ul>
        {responseImages.map((item) => {
          return <ImageCard item={item} key={item} />;
        })}
      </ul>
    </article>
  );
}
