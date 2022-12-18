import { useRouter } from 'next/router';
import React from 'react';

const Page = ({note}) => {


  // const router = useRouter();
  console.log('note: ',note);
  return <div>{note.title}</div>;
};

export async function getServerSideProps({ params, req, res }) {
  const resp = await fetch(`http://localhost:3000/api/notes/${params.id}`);

  if (!resp.ok) {
    res.writeHead(302, {
      Location: '/note',
    });
    res.end();
    return {
      props: {},
    };
  }

  const {note} = await resp.json();
  // console.table({'data':note});
  return {
    props: {
      note,
    },
  };
}

export default Page;
