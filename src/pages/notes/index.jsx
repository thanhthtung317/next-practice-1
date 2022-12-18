import Link from 'next/link'
import React from 'react'

const Page = ({notes}) => {

  // console.log(notes);
  return (
    <div>
      <h1>notes Page</h1>
      {notes.data.map(note=>{
        return (
          <div key={note.id}>
            <br/>
            <Link href="/notes/[id]" as={`notes/${note.id}`}>
              <a>note {note.title}</a>
            </Link>
          </div>
        );
      })}
      
    </div>

  )
}

export async function getServerSideProps() {
  const resp = await fetch('http://localhost:3000/api/notes');
  const result = await resp.json();

  return {
    props: {
      notes: result,
    },
  };
}

export default Page