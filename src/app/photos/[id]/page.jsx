
export default function Photo({ params }) {
  const { id } = params;

  return (
    <>
      <h1>{'>'} Esta es la foto # {id}</h1>
    </>
  );
}
