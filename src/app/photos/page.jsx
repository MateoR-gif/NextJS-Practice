import Image from "next/image";

const fetchPhotos = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json)
};

export default async function PhotosPage() {
  const photos = await fetchPhotos();
  return (
    <>
      <h1>
        {/* {">"} Galería de Fotos
        {photos.map(photo => {
          <Image src={photo.url} key={photo.id} alt="juan" />;
        })} */}
      </h1>
    </>
  );
}
