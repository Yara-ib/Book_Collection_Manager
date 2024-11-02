// CRUD System for Books

let bookCollection = [];
// Add the book then list all >>
const addBook = () => {
  document.getElementById('add_book').addEventListener('click', () => {
    const bookTitle = document.getElementById('book_title').value;
    const authorName = document.getElementById('author_name').value;
    const publicationYear = document.getElementById('publication_year').value;
    const genre = document.getElementById('genre').value;
    if (
      !document.getElementById('book_title').value ||
      !document.getElementById('author_name').value ||
      !document.getElementById('publication_year').value ||
      !document.getElementById('genre').value
    ) {
      console.log('please fill all the fields');
    } else {
      bookCollection.push({
        bookTitle,
        authorName,
        publicationYear,
        genre,
      });
    }
    // Reset Again after save
    document.getElementById('book_title').value = '';
    document.getElementById('author_name').value = '';
    document.getElementById('publication_year').value = '';
    document.getElementById('genre').value = '';
    listBooks();
  });
};

// List all >>
const listBooks = () => {
  const element = document.getElementById('list');
  element.innerHTML = '';
  for (const [idx, book] of bookCollection.entries()) {
    const point = document.createElement('li');
    let text = `${book.bookTitle} by ${book.authorName} (${book.publicationYear}, ${book.genre})`;
    point.textContent = text;
    element.appendChild(point);

    // Update Button Per Each Book
    const updateBook = document.createElement('button');
    updateBook.textContent = 'Edit';
    let editing = false;

    updateBook.addEventListener('click', () => {
      if (!editing) {
        // Getting the old data
        document.getElementById('book_title').value = book.bookTitle;
        document.getElementById('author_name').value = book.authorName;
        document.getElementById('publication_year').value =
          book.publicationYear;
        document.getElementById('genre').value = book.genre;

        // Replacing Edit button with Save
        updateBook.textContent = 'Save';
        editing = true;
      } else {
        // Adding the new values
        book.bookTitle = document.getElementById('book_title').value;
        book.authorName = document.getElementById('author_name').value;
        book.publicationYear =
          document.getElementById('publication_year').value;
        book.genre = document.getElementById('genre').value;

        // Reset Again after save
        document.getElementById('book_title').value = '';
        document.getElementById('author_name').value = '';
        document.getElementById('publication_year').value = '';
        document.getElementById('genre').value = '';
        listBooks();
      }
    });

    // Delete Button Per Each Book
    const deleteBook = document.createElement('button');
    deleteBook.textContent = 'Delete';
    deleteBook.addEventListener('click', () => {
      bookCollection = bookCollection.filter((book, index) => index !== idx);
      listBooks();
    });
    element.appendChild(updateBook);
    element.appendChild(deleteBook);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  listBooks();
  addBook();
});
