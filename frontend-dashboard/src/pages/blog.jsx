import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';
import team from '/src/components/logo/team.jpg?import';
// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>
      <div>
      <img src={"/src/components/logo/team.jpg"} alt="fireSpot" />
     
    </div>
     
    </>
  );
}
