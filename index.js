import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lzjxptrsfdpkxfmqvldt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6anhwdHJzZmRwa3hmbXF2bGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MTExODAsImV4cCI6MjAyNjI4NzE4MH0.Ck2lArIxtuaQX6lchq1z6RBaWaNQ77W1EZT4PthX7b4'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
    let { data: books, error } = await supabase
    .from('books')
    .select('*')
    for (let book of books){
      let bookList = document.getElementById('books');
      bookList.innerHTML +=  `<li>${book.title} - ${book.author} -${book.isbn}</li>`;

    }
}
getBooks();