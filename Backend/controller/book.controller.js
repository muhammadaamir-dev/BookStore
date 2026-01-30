import Book from "../model/book.model.js";


 export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    console.error("Get books error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch books"
    });
  }
};
