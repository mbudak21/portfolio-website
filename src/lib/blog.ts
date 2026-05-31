import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const localeOf = (post: Post) => post.id.split('/')[0];
export const slugOf = (post: Post) => post.id.split('/').slice(1).join('/');

export async function getPosts(lang?: string): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );

  return posts
    .filter((post) => !lang || localeOf(post) === lang)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
