import postDao from "../model/postDao";

export default {
  get_posts() {
    return postDao.get_posts();
  },

  add_post(title, content) {
    return postDao.add_post(title, content);
  },

  edit_content(post_id, content) {
    return postDao.edit_content(post_id, content);
  },

  delete_post(post_id) {
    return postDao.delete_post(post_id);
  },
};

/*
router.get("/all", postController.get_posts); //게시글 전체 조회
router.post("/add", postController.add_post); //게시글 추가
router.put("/update", postController.edit_content); //게시글 내용 수정
router.delete("/:post_id", postController.delete_post); //게시글 삭제
*/
