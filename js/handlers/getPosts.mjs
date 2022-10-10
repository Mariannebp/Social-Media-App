import { renderPosts } from "../templates/posts.mjs";
import { renderPostFeedSearched } from "../templates/posts.mjs";
import { renderPostFeedFiltered } from "../templates/posts.mjs";
import { renderPostsUser } from "../templates/posts.mjs";
import { renderPostSingle } from "../templates/posts.mjs";

import * as post from "../api/posts/index.mjs";

export async function getPostsFeed() {
  const posts = await post.getPosts();
  const container = document.querySelector("#postsFeed");
  renderPosts(posts, container)
}

export async function getPostsFeedSearched() {
  const posts = await post.getPosts();
  const container = document.querySelector("#postsFeed");
  renderPostFeedSearched(posts, container)
}

export async function getPostFeedFiltered() {
  const posts = await post.getPostsMany();
  const container = document.querySelector("#postsFeed");
  renderPostFeedFiltered(posts, container)
}

export async function getPostFeedUser() {
  const posts = await post.getPostsMany();
  const container = document.querySelector("#usersPosts");
  renderPostsUser(posts, container)
}

export async function getPostSingle() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const postSingle = await post.getPost(id);
  const container = document.querySelector("#singlePost");
  renderPostSingle(postSingle, container)
}

