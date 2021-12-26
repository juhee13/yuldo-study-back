const express = require("express");
const router = express.Router();

// 전체 글 보기
router.get("/", (req, res) => {
    const board_data = [
        {
            category: "유머",
            title: "테스트1",
            date: "2021-12-26",
            like: 100,
            comment_count: 5
        },
        {
            category: "이슈",
            title: "테스트2",
            date: "2021-12-26",
            like: 100,
            comment_count: 5
        },
        {
            category: "오컬트",
            title: "테스트3",
            date: "2021-12-26",
            like: 100,
            comment_count: 5
        },
        {
            category: "시사",
            title: "테스트4",
            date: "2021-12-26",
            like: 100,
            comment_count: 5
        },
    ];
    res.status(200).json(board_data);
});

// 글 하나 보기
router.get("/:id", (req, res) => {
    res.send("글하나보기");
});

// 글쓰기
router.post("/", (req, res) => {
    res.send("글쓰기");
});

// 글수정
router.put("/:id", (req, res) => {
    res.send("글수정");
});

// 글삭제
router.delete("/:id", (req, res) => {
    res.send("글삭제");
});

// 검색
router.get("/search/:search", (req, res) => {
    res.send("검색");
});

module.exports = router;