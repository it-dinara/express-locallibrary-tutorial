const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
});

// Показать подробную страницу для данного автора.
exports.author_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Author detail: " + req.params.id);
};

// Показать форму создания автора по запросу GET.
exports.author_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Создать автора по запросу POST.
exports.author_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Показать форму удаления автора по запросу GET.
exports.author_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Удалить автора по запросу POST.
exports.author_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Показать форму обновления автора по запросу GET.
exports.author_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Обновить автора по запросу POST.
exports.author_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update POST");
};
