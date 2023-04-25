import Link from "next/link";
import LikeButton from "./LikeButton";
import styles from "./ListOfPosts.module.css";

const fetchPosts = () => {
  console.log("Haciendo fetching...");
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 1,
    },
  }).then((res) => res.json());
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();
  return (
    <>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <Link href='/posts/[id]' as = {`/posts/${post.id}`}>
            <h2 className={styles.h2}>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
          <LikeButton />
        </article>
      ))}
    </>
  );
}
