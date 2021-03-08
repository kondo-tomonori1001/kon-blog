type Post = {
  id:string
  title:string
  date:string
}

const key = {
  headers: {'X-API-KEY': process.env.API_KEY},
};

// microCMS fetch
const cmsFetch = async (dir:string) => {
  const data = await fetch('https://code-forest.microcms.io/api/v1/' + dir, key)
    .then(res => res.json())
    .catch(() => console.log('API error'));
  return data.contents;
}

// トップページ表示
export const getPostsData = () => {
  return cmsFetch('blog');
}

// ブログ記事のデータ取得
export const getPostData = async (id:string) => {
  const data = await fetch(`https://code-forest.microcms.io/api/v1/blog/${id}/`, key)
    .then(res => res.json())
    .catch(() => console.log('API error'));
  return data;
}

// ルーティング用パスの設定
export const getAllPostIds = async () => {
  const posts = await cmsFetch('blog');
  return posts.map(fileName => {
    
    return {
      params:{
        id:fileName.id,
      }
    }
  })
}
