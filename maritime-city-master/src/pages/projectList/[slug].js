// pages/projects/[slug].js

import { useRouter } from 'next/router';


const SingleProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [open, setOpen] = useState(true)
  return (
    <main className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold">Project: {slug?.replace(/-/g, ' ')}</h1>
        <p className="mt-4 text-gray-700">This is the detail page for <strong>{slug}</strong>.</p>
      </div>
    </main>
  );
};

export default SingleProjectPage;
